"use client";
import { Box, Button, Grid, Paper, Typography, Chip, useTheme, useMediaQuery, IconButton } from "@mui/material"
import { CheckCircleOutline, WarningAmber, AccessTime, AddCircleOutlineSharp } from '@mui/icons-material';
import QrCodeGenerator from "@/components/QrCodeGenerator";
import QrCodeScanner from "@/components/QrCodeScanner";
import { DragDropContext, Droppable, Draggable, type DropResult } from "react-beautiful-dnd";
import { useState } from "react";

export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
    items: Task[];
};

export type Task = {
    id: Id;
    content: string;
};

// 가상의 초기 데이터
const initialColumns: Record<Id, Column> = {
    open: { id: 'open', title: "Open", items: [{ id: "item1", content: "Task 1" }] },
    scheduled: { id: 'scheduled', title: "Scheduled", items: [{ id: "item2", content: "Task 2" }] },
    completed: { id: 'completed', title: "Completed", items: [{ id: "item3", content: "Task 3" }] },
};
const MainTasks = () => {
    const [columns, setColumns] = useState(initialColumns);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up("sm"));
    const handleScanSuccess = (decodedText: string) => {
        console.log(`QR Code decoded: ${decodedText}`);
    };
    const handleClickOpenSearch = async () => {
        const headers = new Headers({ "Content-Type": "application/json" });
        const response = await fetch("/api/opensearch/search", {
            method: "GET",
            headers,
        })
        console.info(response);
    }

    // 태스크 추가 함수
    const addTaskToColumn = (columnId: Id, newTaskContent: string) => {
        const newTask: Task = { id: `item${Math.random()}`, content: newTaskContent }; // 간단한 예시, 실제 앱에서는 더 견고한 ID 생성 메커니즘이 필요합니다.
        const updatedColumn = {
            ...columns[columnId],
            items: [...columns[columnId].items, newTask],
        };
        setColumns({
            ...columns,
            [columnId]: updatedColumn,
        });
    };

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        // 드랍 위치가 없거나, 항목이 원래 위치로 돌아간 경우 아무 작업도 수행하지 않음
        if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
            return;
        }

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        // 같은 컬럼 내에서 항목 이동
        if (start === finish) {
            const newItemIds = Array.from(start.items);
            const [reorderedItem] = newItemIds.splice(source.index, 1);
            newItemIds.splice(destination.index, 0, reorderedItem);

            const newColumn: Column = {
                ...start,
                items: newItemIds,
            };

            setColumns(prev => ({
                ...prev,
                [newColumn.id]: newColumn,
            }));
        } else {
            // 다른 컬럼으로 항목 이동
            const startItemIds = Array.from(start.items);
            const [movedItem] = startItemIds.splice(source.index, 1);
            const finishItemIds = Array.from(finish.items);
            finishItemIds.splice(destination.index, 0, movedItem);

            const newStart: Column = {
                ...start,
                items: startItemIds,
            };

            const newFinish: Column = {
                ...finish,
                items: finishItemIds,
            };

            setColumns(prev => ({
                ...prev,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }));
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: "column", p: 3, height: "100vh", overflow: "auto", alignItems: "center", justifyItems: "center" }}>
                Tasks
                <div>
                    <QrCodeGenerator />
                    <QrCodeScanner onScanSuccess={handleScanSuccess} />
                </div>
                <Button variant="outlined" onClick={handleClickOpenSearch} sx={{ mt: 4 }}>
                    버어어어어어튼
                </Button>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Box>
                        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
                            <Grid container spacing={2}>
                                {Object.entries(columns).map(([columnId, column]) => (
                                    <Grid item xs={sm ? 4 : 12} key={columnId}>
                                        <Paper elevation={3} sx={{ p: 2 }}>
                                            <Box display="flex" alignItems="center">
                                                {columnId === 'open' && <CheckCircleOutline color="success" sx={{ mr: 1 }} />}
                                                {columnId === 'scheduled' && <AccessTime color="warning" sx={{ mr: 1 }} />}
                                                {columnId === 'completed' && <WarningAmber color="action" sx={{ mr: 1 }} />}
                                                <Typography variant="subtitle1">{column.title}</Typography>
                                                <Chip label={column.items.length.toString()} size="small" sx={{ ml: 1 }} />
                                                <IconButton
                                                    onClick={() => addTaskToColumn(columnId, "New Task")}
                                                    sx={{ ml: 'auto' }}
                                                ><AddCircleOutlineSharp /></IconButton>
                                            </Box>
                                            <Droppable droppableId={columnId}>
                                                {(provided, snapshot) => (
                                                    <Box
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        sx={{ mt: 2, bgcolor: snapshot.isDraggingOver ? 'background.default' : 'background.paper' }}
                                                    >
                                                        {column.items.map((item, index) => (
                                                            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                                                {(provided, snapshot) => (
                                                                    <Box
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        sx={{ my: 2, p: 2, bgcolor: snapshot.isDragging ? '#ffffff' : '#9C9C9C', borderRadius: "10px" }}
                                                                    >
                                                                        <Typography>{item.content}</Typography>
                                                                    </Box>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </Box>
                                                )}
                                            </Droppable>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </DragDropContext>
            </Box>
        </>
    )
}

export default MainTasks;
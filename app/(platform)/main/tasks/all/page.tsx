"use client";

import { Box, Button, Grid, Paper, Typography, Chip, useTheme, useMediaQuery, IconButton, styled } from "@mui/material"
import { CheckCircleOutline, FileOpenSharp, AccessTime, AddCircleOutlineSharp, Delete } from '@mui/icons-material';
import QrCodeGenerator from "@/components/QrCodeGenerator";
import QrCodeScanner from "@/components/QrCodeScanner";
import TaskIcon from '@mui/icons-material/Task';
import { DragDropContext, Droppable, Draggable, type DropResult } from "react-beautiful-dnd";
import { useRef, useState } from "react";

export type Id = string;

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
    const [newTaskCount, setNewTaskCount] = useState(0);
    const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; url?: string }>>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const addTaskToColumn = (columnId: Id, newTaskContent: string) => {
        const taskNumber = newTaskCount + 1;
        const newTask: Task = { id: `new_item${taskNumber}`, content: `${newTaskContent} ${taskNumber}` };
        const updatedColumn = {
            ...columns[columnId],
            items: [...columns[columnId].items, newTask],
        };
        setColumns({
            ...columns,
            [columnId]: updatedColumn,
        });
        setNewTaskCount(taskNumber);
    };

    const removeTaskFromColumn = (columnId: Id, taskId: Id) => {
        const updatedItems = columns[columnId].items.filter(item => item.id !== taskId);
        const updatedColumn = {
            ...columns[columnId],
            items: updatedItems,
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
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const filesArray = Array.from(files).map(file => {
                if (file.type.startsWith("image/")) {
                    return { name: file.name, url: URL.createObjectURL(file) };
                }
                return { name: file.name };
            });
            setUploadedFiles(filesArray);
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: "column", width: '100%', height: '100%', overflow: "auto" }}>
                <Box sx={{ px: 5, my: 5, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h5" fontWeight="bold">All Tasks</Typography>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<TaskIcon />}
                        sx={{
                            bgcolor: '#004d40', 
                            '&:hover': {
                                bgcolor: "#2B5A52",
                            }
                        }}
                    >
                        Create Tasks
                        <VisuallyHiddenInput
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            accept="image/*, .pdf"
                        />
                    </Button>
                    {uploadedFiles.map((file, index) => (
                        <Box key={index} mb={5}>
                            {file.url ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={file.url} alt={file.name} style={{ width: "auto", height: "auto" }} />
                            ) : (
                                <span>{file.name}</span>
                            )}
                        </Box>
                    ))}
                </Box>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid item xs={12}> {/* QR 코드 생성기와 스캐너를 이 부분에 배치 */}
                        <Box id="qr" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <QrCodeGenerator />
                            <QrCodeScanner />
                            {/* <Button id="opensearch" variant="outlined" onClick={handleClickOpenSearch} sx={{ mt: 4 }}>
                                버어어어어어튼
                            </Button> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12}> {/* 드래그 앤 드롭 컨텍스트를 이 부분에 배치 */}
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Box sx={{ flexGrow: 1, height: "100%", overflow: 'auto' }}>
                                <Grid container spacing={2}>
                                    {Object.entries(columns).map(([columnId, column]) => (
                                        <Grid item xs={12} sm={4} key={columnId}>
                                            <Paper elevation={3} sx={{ minHeight: '100%', p: 2 }}>
                                                <Box display="flex" alignItems="center">
                                                    {columnId === 'open' && <FileOpenSharp color="action" sx={{ mr: 1 }} />}
                                                    {columnId === 'scheduled' && <AccessTime color="warning" sx={{ mr: 1 }} />}
                                                    {columnId === 'completed' && <CheckCircleOutline color="success" sx={{ mr: 1 }} />}
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
                                                            {column.items.map((item, index) => {
                                                                return (
                                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                                        {(provided, snapshot) => (
                                                                            <Box
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                sx={{
                                                                                    my: 2, p: 2,
                                                                                    bgcolor: snapshot.isDragging ? 'rgba(156, 156, 156, 0.5)' : '#9C9C9C',
                                                                                    borderRadius: "10px",
                                                                                    display: 'flex',
                                                                                    justifyContent: 'space-between',
                                                                                    alignItems: 'center',
                                                                                    '&:hover': {
                                                                                        boxShadow: 3,
                                                                                    }
                                                                                }}
                                                                            >
                                                                                <Typography>{item.content}</Typography>
                                                                                <IconButton
                                                                                    onClick={() => removeTaskFromColumn(columnId, item.id)}
                                                                                    size="small"
                                                                                    sx={{ ml: 'auto' }}
                                                                                >
                                                                                    <Delete />
                                                                                </IconButton>
                                                                            </Box>
                                                                        )}
                                                                    </Draggable>
                                                                );
                                                            })}
                                                            {provided.placeholder}
                                                        </Box>
                                                    )}
                                                </Droppable>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </DragDropContext>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MainTasks;
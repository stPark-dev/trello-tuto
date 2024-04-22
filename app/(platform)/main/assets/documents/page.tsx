"use client";

import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Dialog, Divider, FormControl, IconButton, InputLabel, Select, TextField, Typography, useTheme } from "@mui/material";
import { Add, Apartment, Close, Upload } from "@mui/icons-material";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DocumentPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  const FileUploadComponent = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input type="file" multiple hidden id="file-upload" style={{ display: "none" }} />
      <Box
        component="label"
        htmlFor="file-upload"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "100%",
          width: "100vw",
          height: 226,
          border: 1,
          borderColor: "grey.300",
          borderRadius: 2,
          cursor: "pointer",
          "&:hover": { borderColor: "grey.800" },
          padding: 1,
        }}
      >
        <Box
          sx={{
            p: 1,
            borderRadius: "50%",
            bgcolor: "grey.100",
            "&:hover": { color: "primary.main" },
            width: 48, // or 8 in MUI spacing
            height: 48, // or 8 in MUI spacing
          }}
        >
          <Upload sx={{ color: "grey.600", width: 32, height: 32 }} />
        </Box>
        <Typography>
          <Typography component="span" sx={{ color: "primary.main", fontWeight: "medium" }}>
            Click to upload
          </Typography>
          <Typography component="span"> or drag and drop </Typography>
        </Typography>
      </Box>
    </Box>
  );

  const DocumentDialog = () => {
    return (
      <>
        <Dialog
          open={open}
          maxWidth="sm"
          onClose={(event, reason) => {
            if (reason !== "backdropClick") {
              handleClickClose();
            }
          }}
          PaperProps={{
            component: "form",
            sx: { borderRadius: 1, minWidth: 450 },
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const name = formJson.name;
              const customer = formJson.customer;
              console.log(name, customer);
              handleClickClose();
            },
          }}
        >
          {" "}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" fontWeight="bold">
                  Upload documents
                </Typography>
                <Typography variant="body2">Upload one or more documents to be stored in FixForm.</Typography>
              </Box>
              <IconButton size="small" onClick={handleClickClose}>
                <Close />
              </IconButton>
            </Box>
            <Box sx={{ p: 2 }}>
              <FileUploadComponent />
            </Box>
          </Box>
        </Dialog>
      </>
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
      <Box sx={{ px: 5, my: 5, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight="bold">
          Documents
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          sx={{
            fontWeight: "bold",
          }}
          onClick={handleClickOpen}
        >
          Add document
        </Button>
      </Box>
      <Box sx={{ p: 5, overflow: "auto", width: "100%", height: "100vh", bgcolor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <DocumentDialog />
    </Box>
  );
};

export default DocumentPage;

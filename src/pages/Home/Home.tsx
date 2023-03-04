import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useGetUsers } from "../../hooks";
import { baseUrl } from "../../constants";

const columns: GridColDef[] = [
  {
    field: "",
    headerName: "Editar",
    width: 100,
    renderCell: (params) => (
      <Box display="flex" alignItems="center">
        <Typography>{params.value}</Typography>
        <Button variant="outlined" color="primary" size="small">
          Edit
        </Button>
      </Box>
    ),
  },
  { field: "name", headerName: "Nome", width: 200 },
  { field: "email", headerName: "email", width: 200 },
  { field: "access_level", headerName: "Nível de acesso", width: 200 },
  { field: "last_access", headerName: "Acedeu", width: 200 },
];

const rows = [
  {
    id: 1,
    name: "Jeremy Paule Pereira",
    email: "jeremy.teste@gmail.com",
    access_level: "Administrador",
    last_access: "2023-03-04",
  },
  {
    id: 2,
    name: "Alice Silva Almeida",
    email: "alice.teste@gmail.com",
    access_level: "Administrador",
    last_access: "2023-03-04",
  },
];

function MyTable() {
  const { data, isLoading, error } = useGetUsers(`${baseUrl}/users`);
  console.log(data);
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Box my={2} padding={"20px 0 0 20px"}>
        <Typography variant="h6">Table Title</Typography>
        <Typography variant="subtitle1">Table subtext</Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        my={2}
        padding={"20px"}
      >
        <TextField label="Search" variant="outlined" />
        <Button variant="contained" color="primary">
          Button
        </Button>
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={data || []} columns={columns} />
      </div>
    </Box>
  );
}

export default MyTable;

import React, { useState } from "react";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import EditIcon from "@mui/icons-material/Edit";
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
          <EditIcon />
        </Button>
      </Box>
    ),
  },
  { field: "name", headerName: "Nome", width: 200 },
  { field: "email", headerName: "email", width: 200 },
  { field: "access_level", headerName: "Nível de acesso", width: 200 },
  {
    field: "last_access",
    headerName: "Acedeu",
    width: 130,
    renderCell: (params: GridCellParams) =>
      new Date(params.value as string).toLocaleDateString("pt-BR"),
  },
];

function MyTable() {
  const { data, isLoading, error } = useGetUsers(`${baseUrl}/users`);
  const [searchName, setSearchName] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchName(value.toLowerCase());
  };

  const memberList =
    searchName.trim() !== ""
      ? data?.filter((member) => {
          const memberName = member.name.toLowerCase();
          return memberName.includes(searchName.toLowerCase());
        })
      : data;

  return (
    <Card style={{ borderRadius: "16px" }}>
      <Box padding={"20px 0 0 20px"}>
        <Typography variant="h6">Membros</Typography>
        <Typography variant="subtitle1">
          Veja quem tem acesso à página e as suas configurações
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        my={2}
        padding={"20px"}
      >
        <TextField
          sx={{ width: "70%" }}
          label="Procurar membro"
          onChange={(e) => handleSearchChange(e.target.value)}
          variant="outlined"
        />
        <Button variant="outlined" color="primary">
          <GroupAddIcon sx={{ marginRight: "8px" }} />
          Adicionar Membro
        </Button>
      </Box>
      <div style={{ height: "50vh", width: "100%" }}>
        {isLoading && <div>Carregando...</div>}
        {!error && (
          <DataGrid
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            rows={memberList || []}
            columns={columns}
          />
        )}
      </div>
    </Card>
  );
}

export default MyTable;

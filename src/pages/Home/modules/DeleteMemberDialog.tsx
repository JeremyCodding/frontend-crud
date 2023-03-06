import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { deleteMembers } from "../../../api";
import { User } from "../../../types";

export type AddMemberProps = {
  user: User | undefined;
  isOpen: boolean;
  closeAll: (param: boolean) => void;
  handleOpenClose: (param: boolean) => void;
};

const initialState = {
  name: "",
  email: "",
  access_level: null,
  last_access: "",
  id: "",
};

function DeleteMemberDialog(props: AddMemberProps) {
  const { isOpen, closeAll, handleOpenClose, user } = props;

  if (!user || Object.values(user).some((value) => value === undefined)) {
    handleOpenClose(false);
  }

  const [formData, setFormData] = useState<User>(user ?? initialState);

  const handleDeleteMember = () => {
    if (Object.values(formData).some((value) => value === undefined)) return;
    deleteMembers(formData.id);
    setFormData(initialState);
    closeAll(false);
    handleOpenClose(false);
  };

  const handleCloseDialog = () => {
    setFormData(initialState);
    handleOpenClose(false);
  };

  return (
    <Dialog open={isOpen} onClose={() => handleCloseDialog()}>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#c9e3fe",
              borderRadius: "50%",
              display: "flex",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "16px",
            }}
          >
            <PersonIcon color="primary" />
          </Box>
          <Typography>Excluir Membro:</Typography>
        </Box>
        <Button
          sx={{ color: "#000", "&:hover": { backgroundColor: "transparent" } }}
          onClick={handleCloseDialog}
        >
          <ClearIcon />
        </Button>
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontSize: "0.875rem" }}>
          Tem a certeza que desaja excluir este membro? Esta pessoa não terá
          mais acesso à plataforma da sua empresa.
        </DialogContentText>

        <form
          onSubmit={handleDeleteMember}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => handleCloseDialog()}
            color="primary"
          >
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="error">
            <DeleteIcon />
            Excluir
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteMemberDialog;

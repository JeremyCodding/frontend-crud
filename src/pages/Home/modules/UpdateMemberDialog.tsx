import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { ChangeEvent, useEffect, useState } from "react";
import { accessLevelsList } from "../../../constants";
import { updateMembers } from "../../../api";
import { User } from "../../../types";
import DeleteMemberDialog from "./DeleteMemberDialog";

export type AddMemberProps = {
  user: User | undefined;
  isOpen: boolean;
  handleOpenClose: (param: boolean) => void;
};

const initialState = {
  name: "",
  email: "",
  access_level: null,
  last_access: "",
  id: "",
};

const PersonIconComponent = () => {
  return (
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
  );
};

function UpdateMemberDialog(props: AddMemberProps) {
  const { isOpen, handleOpenClose, user } = props;

  if (!user || Object.values(user).some((value) => value === undefined)) {
    handleOpenClose(false);
  }

  const [formData, setFormData] = useState<User>(user ?? initialState);
  const [errors] = useState<Partial<User>>({});
  const [deleteMemberOpen, setDeleteMemberOpen] = useState(false);

  useEffect(() => {
    user && setFormData(user);
  }, [user]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateMember = () => {
    if (Object.values(formData).some((value) => value === undefined)) return;
    updateMembers(formData.id, formData);
    setFormData(initialState);
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
          <PersonIconComponent />
          <Typography>Editar nível de acesso:</Typography>
        </Box>
        <Button
          sx={{ color: "#000", "&:hover": { backgroundColor: "transparent" } }}
          onClick={handleCloseDialog}
        >
          <ClearIcon />
        </Button>
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontSize: "0.875rem" }}></DialogContentText>
        <form onSubmit={handleUpdateMember}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonIconComponent />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                margin: "16px",
              }}
            >
              <Typography style={{ fontSize: "1.25rem" }}>
                {user?.name}
              </Typography>
              <Typography>{user?.email}</Typography>
            </Box>
          </Box>
          <Box>
            <FormControl
              component="fieldset"
              margin="normal"
              error={!!errors.access_level}
            >
              <FormLabel
                component="legend"
                sx={{ fontWeight: "bold", fontSize: "1rem", color: "#000" }}
              >
                Nível de acesso:
              </FormLabel>
              <RadioGroup
                aria-label="access-level"
                name="access_level"
                value={formData.access_level}
                onChange={handleChange}
              >
                {accessLevelsList.map((level) => (
                  <Box
                    key={level.level}
                    sx={{
                      display: "flex",
                      padding: "8px",
                    }}
                  >
                    <Radio value={level.level} />
                    <Box>
                      <Typography>{level.level}</Typography>
                      <Typography style={{}}>{level.description}</Typography>
                    </Box>
                  </Box>
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setDeleteMemberOpen(true)}
              color="error"
            >
              <DeleteIcon />
              Excluir Membro
            </Button>
            <Button
              onClick={handleUpdateMember}
              type="submit"
              variant="contained"
              color="primary"
            >
              Guardar Alterações
            </Button>
          </Box>
        </form>
      </DialogContent>
      <DeleteMemberDialog
        user={user}
        closeAll={handleOpenClose}
        handleOpenClose={setDeleteMemberOpen}
        isOpen={deleteMemberOpen}
      />
    </Dialog>
  );
}

export default UpdateMemberDialog;

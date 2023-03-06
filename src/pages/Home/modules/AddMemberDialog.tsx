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
  TextField,
  Typography,
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { ChangeEvent, useState } from "react";
import { accessLevelsList } from "../../../constants";
import { addMember } from "../../../api";
import { v4 as uuidv4 } from "uuid";

export type AddMemberProps = {
  isOpen: boolean;
  handleOpenClose: (param: boolean) => void;
};

export type FormData = {
  name: string;
  email: string;
  access_level:
    | "Analista"
    | "Colaborador"
    | "Administrador"
    | "Superadministrador"
    | null;
};

const initialState = {
  name: "",
  email: "",
  access_level: null,
};

function AddMemberDialog(props: AddMemberProps) {
  const { isOpen, handleOpenClose } = props;

  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors] = useState<Partial<FormData>>({});
  //TODO: Implementar validação

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    const todayDate = new Date().toISOString().slice(0, 10);
    const payload = {
      ...formData,
      last_access: todayDate,
      id: uuidv4(),
    };
    if (payload.access_level !== null && payload.name.length >= 3) {
      addMember(payload);
      handleCloseDialog();
    }
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
          padding: "24px",
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
          <PersonAddAlt1Icon color="primary" />
        </Box>
        <Typography>Adicionar novo membro</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontSize: "0.875rem" }}>
          Adicione membros da sua equipe e dê-lhes acesso à plataforma
          empresarial da sua empresa
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
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
              justifyContent: "end",
              gap: "8px",
            }}
          >
            <Button type="submit" variant="contained" color="success">
              Enviar Convite
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleCloseDialog()}
              color="primary"
            >
              Close
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddMemberDialog;

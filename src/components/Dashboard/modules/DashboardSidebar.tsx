import { Box, Button, Divider, List, Typography } from "@mui/material";
import PagesList from "./PagesList";
import logo from "../../../assets/logo.png";

function Sidebar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          justifyContent: "center",
          p: 2,
        }}
      ></Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "background.default",
            borderRadius: 2,
            display: "flex",
            overflow: "hidden",
            p: 2,
          }}
        >
          <div
            style={{
              marginTop: "64px",
              width: "100%",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} style={{ height: "80px" }} alt={"Logo"} />
          </div>
        </Box>
      </Box>
      <Divider />
      <Box>
        <List>
          <PagesList />
        </List>
      </Box>
      <Divider />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "8px",
        }}
      >
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Precisa de ajuda?
        </Typography>
        <Typography
          style={{
            fontSize: "12px",
          }}
        >
          Envie-nos uma mensagem ou marque uma chamada.
        </Typography>
        <Button variant="contained">CONTACTO</Button>
      </Box>
    </Box>
  );
}

export default Sidebar;

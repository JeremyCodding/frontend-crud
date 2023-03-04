import { Box, Divider, List, ListItem } from "@mui/material";

//   import SidebarItems from './SidebarItems'

function Sidebar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
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
              height: "100px",
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            Colocar logo aqui
          </div>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          <ListItem>Item um</ListItem>
          <ListItem>Item dois</ListItem>
          <ListItem>Item três</ListItem>
          <ListItem>Item quatro</ListItem>
          <ListItem>Item cinco</ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;

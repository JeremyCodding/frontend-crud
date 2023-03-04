import { AppBar, Avatar, Box, Divider, Toolbar, useTheme } from "@mui/material";

function DashboardHeader() {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <AppBar elevation={0}>
      <Toolbar sx={{ minHeight: 64 }}>
        <Box
          sx={{
            display: {
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          }}
        >
          <div>NetworkMe</div>
          <Avatar
            src={""}
            sx={{
              height: 32,
              width: 32,
            }}
          />
        </Box>
      </Toolbar>
      {mode === "dark" && <Divider />}
    </AppBar>
  );
}

export default DashboardHeader;

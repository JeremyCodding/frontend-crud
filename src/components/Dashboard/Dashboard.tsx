import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import DashboardHeader from "./modules/DashboardHeader";
import DashboardSidebar from "./modules/DashboardSidebar";

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <DashboardHeader />
      <DashboardSidebar />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ccc",
          padding: "70px 50px 0px 50px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;

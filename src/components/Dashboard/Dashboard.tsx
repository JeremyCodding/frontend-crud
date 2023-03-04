import { Box } from "@mui/material";
import { ReactNode } from "react";

import DashboardHeader from "./modules/DashboardHeader";
import DashboardSidebar from "./modules/DashboardSidebar";

type Props = {
  children: ReactNode;
  title: string;
};

function Dashboard(props: Props) {
  const { children, title } = props;

  return (
    <Box
      data-qa="dashboard"
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <DashboardHeader />
      <DashboardSidebar />
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          overflow: "hidden",
          paddingTop: "64px",
          backgroundColor: "#ccc",
          p: {
            lg: "60px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            overflow: "hidden",
          }}
        >
          <Box sx={{ minHeight: "100%", py: 8, width: "100%" }}>
            <h1>{title}</h1>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;

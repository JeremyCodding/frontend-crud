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
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <DashboardHeader />
      <DashboardSidebar />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ccc",
          padding: "50px 50px 0px 50px",
        }}
      >
        <h1>{title}</h1>
        {children}
      </Box>
    </Box>
  );
}

export default Dashboard;

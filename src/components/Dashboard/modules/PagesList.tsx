import { pages } from "./pages";
import { ListItem, Typography } from "@mui/material";

function PagesList() {
  return (
    <>
      {pages.map((page) => (
        <ListItem
          sx={{
            "&:hover": {
              backgroundColor: "#7ebcfe",
            },
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
            cursor: "pointer",
          }}
        >
          {page.icon}
          <Typography sx={{ marginLeft: "16px" }}>{page.name}</Typography>
        </ListItem>
      ))}
    </>
  );
}

export default PagesList;

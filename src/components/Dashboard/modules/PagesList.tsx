import { pages } from "./pages";
import { ListItem, Typography } from "@mui/material";

function PagesList() {
  return (
    <>
      {pages.map((page) => (
        <ListItem
          key={page.id}
          sx={{
            "&:hover": {
              backgroundColor: "#1976D2",
              color: "#fff",
            },
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

import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const AppbarContant = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "99%",
          backgroundColor: "#FF8E53",
          my: 1, px: 2, py: 1,
          borderRadius: "10px"
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "0.9rem", md: "1.5rem" } }}
          fontWeight={600}
        >
          {" "}
          Rabi Managment system{" "}
        </Typography>
        <Link to="/logout">
          <Button sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" } }}>
            Log Out
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default AppbarContant;

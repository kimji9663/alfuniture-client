import React, { useState } from "react";
import { Tabs, Tab, Typography, Box, Link } from "@mui/material";

const TitleOneLine = () => {
  const [title, setTitle] = useState("SHOP ALL");
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{}}>{title}</Typography>
    </Box>
  );
};

export default TitleOneLine;

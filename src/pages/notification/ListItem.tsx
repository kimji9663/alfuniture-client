import React from "react";
import { Box, Typography } from "@mui/material"

// 데이터의 타입 정의
interface NotificationData {
  title: string;
  name: string;
  content: string;
  date: string;
}

// ListItem 컴포넌트
const ListItem: React.FC<{ item: NotificationData; isLastItem: boolean }> = ({ item, isLastItem }) => {
  return (
    <Box
      sx={{
        p: "24px 16px",
        borderTop: "1px solid #868686",
        borderBottom: isLastItem ? "1px solid #868686" : "none", // 마지막 요소에만 borderBottom 적용
      }}
    >
      <Box sx={{ backgroundColor: '#000', color: '#fff', display: "inline-flex", p: "5px 8px", fontSize: "12px", mb: 2 }}>{item.title}</Box>
      <Box sx={{ fontSize: "12px", mb: "4px", letterSpacing: "-0.25px" }}>
        {item.name.trim() !== "" ? (
          <>
          <span style={{ color: "black", fontSize: "12px", marginBottom: "4px", letterSpacing: "-0.25px" }}>{item.name + " "}</span>
          <span style={{ color: "#999999", fontSize: "12px", marginBottom: "4px", letterSpacing: "-0.25px" }}>{item.content}</span>
          </>
        ) : (
          <span style={{ color: "black", fontSize: "12px", marginBottom: "4px", letterSpacing: "-0.25px" }}>{item.content}</span>
        )}
      </Box>
      <Typography sx={{ fontSize: "12px", color: "#999999" }}>{item.date}</Typography>
    </Box>
  );
};

export default ListItem;

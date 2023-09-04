import React, { useState } from "react"
import { Box, IconButton, Divider, Button } from "@mui/material"
import { ViewTitle, AverageGrade, DetailGrade } from "./productView.styles"

const ReviewPanel = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <ViewTitle component="p">
          구매 후기
          <span>(182)</span>
        </ViewTitle>

        <Box sx={{ display: 'flex', '& > .MuiBox-root': { flex: '1 1 auto' } }}>
          <AverageGrade>
            <Box>
              <span>4.0</span>
              <span>/5</span>
            </Box>
            <Box>
              *****
            </Box>
          </AverageGrade>

          <DetailGrade sx={{ ml: 3 }}>
            <Box>
              <Box component="span">5점</Box>
              <Box component="span" className="grade_pipe">
                <span></span>
              </Box>
            </Box>
            <Box>
              <Box component="span">4점</Box>
              <Box component="span" className="grade_pipe">
                <span></span>
              </Box>
            </Box>
            <Box>
              <Box component="span">3점</Box>
              <Box component="span" className="grade_pipe">
                <span></span>
              </Box>
            </Box>
            <Box>
              <Box component="span">2점</Box>
              <Box component="span" className="grade_pipe">
                <span></span>
              </Box>
            </Box>
            <Box>
              <Box component="span">1점</Box>
              <Box component="span" className="grade_pipe">
                <span></span>
              </Box>
            </Box>
          </DetailGrade>
        </Box>

        <Divider sx={{ my: 2 }} />
        
        <ViewTitle component="p">
          포토 후기
          <span>(41)</span>
        </ViewTitle>
        <Box>
          images
        </Box>
      </Box>
    </>
  )
}

export default ReviewPanel
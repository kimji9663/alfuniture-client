import { styled } from "@mui/material/styles"
import { Box, FormControl, FormControlLabel } from "@mui/material"

export const OrderTitle = styled(Box)(() => ({
  color: "#333",
  fontSize: "1rem",
  fontWeight: "bold",
})) 

export const SearchZipcodeWrap = styled(FormControl)(() => ({
  display: "flex",
  flexDirection: "row",
  height: "56px",

  "& > .MuiBox-root, & .MuiButtonBase-root": {
    flex: "1 1 auto",
  },
  "& > .MuiBox-root": {
    marginRight: "1rem",
  },
  "& .MuiInputBase-root": {
    width: "100%",
  },
  "& .MuiInputBase-root > input": {
    fontSize: ".875rem",
  },
  "& .MuiButtonBase-root": {
    padding: 0,
    borderRadius: 0,
    fontSize: ".875rem",
  },
}))

export const AgreeCheckbox = styled(FormControlLabel)(() => ({
  "& > span": {
    color: "#333",
  },
  "& .sub": {
    color: "#999",
  }
}))
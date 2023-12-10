import { Box, ListItemButton } from "@mui/material"
import { styled } from "@mui/material/styles"
import { FlexBox } from "../../components/Box"

export const FilterContainer = styled(Box)(() => ({
  overflow: 'auto',
  whiteSpace: 'nowrap',
  padding: '0.5rem 0',
  borderTop: '1px solid #DDDDDD',
  borderBottom: '1px solid #DDDDDD',
}))

export const FilterButton = styled(ListItemButton)(({ }) => ({
  padding: "0.5rem 1rem",
  "&:hover": {
    backgroundColor: "inherit"
  },
  "& .MuiTypography-root": {
    width: "100%",
  }
}))

export const FilterTypeContainer = styled(Box)(() => ({
  display: 'inline-flex',
  padding: '0.5rem 1rem',
  columnGap: '0.5rem',
  '& .MuiButton-root': {
    borderRadius: 0,
    padding: ".375rem 1rem",
    fontSize: ".875rem",
    lineHeight: "1.1875rem"
  },
  "& .MuiButton-contained": {
    color: "#FFF",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#000"
    }
  },
  "& .MuiButton-outlined": {
    color: "#999",
    borderColor: "#DADADA",
    "&:hover": {
      // color: "#000",
      backgroundColor: "#DADADA",
      border: "1px solid #DADADA"
    }
  }
}))
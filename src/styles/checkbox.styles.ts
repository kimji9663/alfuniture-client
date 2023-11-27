import { FormControl} from "@mui/material"
import { styled, useTheme } from "@mui/material/styles"

export const RectCheckbox = styled(FormControl)(({ }) => ({
  "& input": {
    display: "none",
  },
  "& label": {
    padding: "6px 16px",
    border: "1px solid #DADADA",
    fontSize: "0.875rem",
    color: "#999999",
  },
  "& input:checked + label": {
    border: "1px solid #242223",
    backgroundColor: "#242223",
    color: "#fff",
  },
}))

export const RectCheckboxNonChecked = styled(FormControl)(({ }) => ({
  "& input": {
    display: "none",
  },
  "& label": {
    padding: "6px 16px",
    border: "1px solid #DADADA",
    fontSize: "0.875rem",
    color: "#999999",
  },
}))

export const CustomCheckbox = styled("input")(() => {
  const theme = useTheme(); 
  return {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    appearance: "none",
    background: "#DADADA",
    cursor: "pointer",
    height: "16px",
    outline: "0",
    width: "16px",

    "&:after": {
      border: `solid ${theme.palette.common.white}`,
      borderWidth: "0 1px 1px 0",
      content: "''",
      display: "block",
      height: "45%",
      left: "35%",
      position: "relative",
      top: "20%",
      transform: "rotate(45deg)",
      width: "25%",
    },

    "&:checked": {
      background: "#333",
    },

    "&:checked:after": {
      display: "block",
    },
  };
});

export const DeliveryCheckBox = styled(FormControl)(() => ({
  margin: "0 0 16px",
  "& > input": {
    display: "none",
  },
  "& > label": {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    height: "84px",
    boxSizing: "border-box",
    border: "1px solid #dadada",
  },
  "& > label svg": {
    color: "#999",
  },
  "& > label .price": {
    fontSize: "1rem",
  },
  "& > label .additional": {
    fontSize: ".875rem",
    color: "#999",
    letterSpacing: "-0.05rem",
  },
  "& > label .additional > span": {
    color: "#FF6737",
  },
  "& input:checked + label": {
    border: "1px solid #999",
    backgroundColor: "#242223",
    color: "#fafafa",
  },
  "& input:checked + label svg": {
    color: "#fff",
  }
}))

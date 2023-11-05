
import { Checkbox, CheckboxProps } from "@mui/material"
import { Check } from "@mui/icons-material"

function CheckboxIcon(props: CheckboxProps) {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<Check sx={{ color: "#000" }} />}
      icon={<Check sx={{ color: "#BDBDBD" }} />}
      inputProps={{ "id": props.id }}
      checked={props.checked}
      onChange={props.onChange}
    />
  )
}

export default CheckboxIcon
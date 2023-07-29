import React from "react"
import { Box, FormControl, Input, InputLabel, FormControlLabel, Checkbox, Typography } from "@mui/material"
import { NaviWrap, PrimaryButton } from "../../components/navigationbar.styles"
import TitleTwoLine1 from "../../components/titleTwoLine1"
import { RectCheckbox } from "./funitureSelection.styles"

const FunitureSelection = () => {
  return (
    <>
      <Box sx={{ px: 2, height: '100%', overflow: 'auto' }}>
        <TitleTwoLine1 />

        <div>
          <RectCheckbox>
            <input type="checkbox" id="check_sofa" />
            <label htmlFor="check_sofa">소파</label>
          </RectCheckbox>
          <RectCheckbox>
            <input type="checkbox" id="check_bed" />
            <label htmlFor="check_bed">침대</label>
          </RectCheckbox>
          <RectCheckbox>
            <input type="checkbox" id="check_desk" />
            <label htmlFor="check_desk">책상</label>
          </RectCheckbox>
        </div>
      </Box>
      <NaviWrap className="single">
        <PrimaryButton>다음으로</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default FunitureSelection
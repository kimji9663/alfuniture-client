import React from "react"
import { Box, Typography } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { useNavigate } from "react-router-dom"
import TitleTwoLine2 from '../../components/title/TitleTwoLine2'
import { GridBox } from "../../components/Box"
import { StyleTypes } from "../shop/Filters/filters"
import { StyleCard, StyleCardSelected } from "../../styles/card.style"
import { IconLikeOn } from "../../assets/images"

const StyleSelection = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = React.useState<any>(
    StyleTypes.reduce((obj, style) => ({ ...obj, [style.name]: false }), {})
  );

  const goToNext = () => {
    navigate("/onboarding/loading_curation")
  }

  const title = ['좋아하는 스타일을', '선택해주세요.'];
  
  const handleClickStyle = (styleName: any) => (event: React.MouseEvent) => {
    setSelected({ ...selected, [styleName]: !selected[styleName] })
  }
    
  return (
    <>
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        <TitleTwoLine2 title={title} />
        <GridBox
          gridTemplateColumns={'1fr 1fr'}
          columnGap={'20px'}
          rowGap={'17px'}
          sx={{ mb: '30px', mx: '20px' }}
        >
          {StyleTypes.map((style: any) => (
            <>
              {selected[style.name] ?
                <StyleCardSelected
                  key={`style-card-${style.name}`}
                  onClick={handleClickStyle(style.name)}
                  sx={{ backgroundImage: `url(${style.avatar})` }}
                >
                  <Box className='title'>
                  <IconLikeOn />
                  <Typography>
                    # {style.name}
                  </Typography>
                  </Box>
                </StyleCardSelected> : <StyleCard
                  key={`style-card-${style.name}`}
                  onClick={handleClickStyle(style.name)}
                  sx={{ backgroundImage: `url(${style.avatar})` }}
                >
                  <Typography>
                    # {style.name}
                  </Typography>
                </StyleCard>
              }
            </>
          ))}
        </GridBox>
      </Box>
      <NaviWrap className="single">
        <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default StyleSelection
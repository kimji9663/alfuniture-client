import { Avatar, Box, Button, SwipeableDrawer } from "@mui/material";
import { FilterTypes } from "./filters";
import { FilterMenuContainer, FilterMenuItem, ShowProductButton } from "./index.styles";
import { BoldTypography, Gray8Typography } from "../../../components/Typography";
import { MouseEvent } from "react";

interface FilterDrawerProps {
  open: boolean
  type: string
  clickShowProduct: (event: MouseEvent<HTMLElement>) => void;
}
const FilterDrawer: React.FC<FilterDrawerProps> = ({
  open,
  type,
  clickShowProduct
}): JSX.Element => {
  return <>
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onOpen={() => { }}
      onClose={() => { }}
    // sx={{ position: 'absolute' }}
    >
      <FilterMenuContainer>
        <BoldTypography>
          {type}
        </BoldTypography>
        <Box sx={{ maxHeight: 'calc(100% - 164px)', overflow: 'auto' }}>
          {type != '가격' ? FilterTypes[type]?.map((item, idx) => (
            <FilterMenuItem key={`${item}-type-${idx}`}>
              <Avatar src={item.avatar} />
              <Gray8Typography>
                {item.name}
              </Gray8Typography>
            </FilterMenuItem>
          )) : [
            <FilterMenuItem key={'min-price'} className='priceType'>
              <Gray8Typography>
                {0}원 에서
              </Gray8Typography>
            </FilterMenuItem>,
            <FilterMenuItem key={'max-price'} className='priceType'>
              <Gray8Typography>
                {0}원 까지
              </Gray8Typography>
            </FilterMenuItem>
          ]}
        </Box>
        <ShowProductButton
          variant="contained"
          onClick={clickShowProduct}
        >
          제품 보러가기
        </ShowProductButton>
      </FilterMenuContainer>
    </SwipeableDrawer>
  </>
}

export default FilterDrawer;
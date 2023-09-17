import { Avatar, Box, Button } from "@mui/material";
import { FilterTypes } from "./filters";
import { FilterMenuContainer, FilterMenuItem } from "./index.styles";
import { Gray8Typography } from "../../../components/Typography";
import { MouseEvent } from "react";

interface FilterMenuProps {
  type: string
  clickShowProduct: (event: MouseEvent<HTMLElement>) => void;
}
const FilterMenu: React.FC<FilterMenuProps> = ({
  type,
  clickShowProduct
}): JSX.Element => {
  return <>
    <FilterMenuContainer>
      <Box>
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
      <Button
        variant="contained"
        onClick={clickShowProduct}
      >
        제품 보러가기
      </Button>
    </FilterMenuContainer>
  </>
}

export default FilterMenu;
import { Avatar, Box, IconButton, SwipeableDrawer } from "@mui/material";
import { FilterOption, FilterTypes } from "./filters";
import { FilterMenuContainer, FilterMenuItem, OptionTag, OptionTagContainer, ShowProductButton } from "./index.styles";
import { BoldTypography, CFFFFs14Typography, Gray8Typography } from "../../../components/Typography";
import { MouseEvent } from "react";
import React from "react";
import { IconX } from "../../../assets/images";

interface FilterDrawerProps {
  open: boolean
  type: string
  filterOptions: typeof FilterTypes
  clickShowProduct: (options: FilterOption[]) => (event: MouseEvent<HTMLElement>) => void;
};

interface SelectedTagProps {
  options: Array<FilterOption>
  deleteOption: (option: FilterOption) => void;
};

const SelectedTag: React.FC<SelectedTagProps> = ({
  options,
  deleteOption
}): JSX.Element => {
  return <OptionTagContainer>
    {options.map((option, idx) => <OptionTag key={`selected-option-${idx}`}>
      <CFFFFs14Typography sx={{ lineHeight: '19px' }}>
        {option.name}
      </CFFFFs14Typography>
      <IconButton onClick={() => deleteOption(option)}>
        <IconX />
      </IconButton>
    </OptionTag>)}
  </OptionTagContainer>
};

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  open,
  type,
  filterOptions,
  clickShowProduct
}): JSX.Element => {
  const [selected, setSelected] = React.useState<Array<FilterOption>>([]);

  React.useEffect(() => {
    if (open) {
      setSelected(filterOptions[type] ?? [])
    } else {
      setSelected([])
    }
  }, [open])

  const handleClickOption = (item: FilterOption) => () => {
    let copy = [...selected]
    let idx = copy.indexOf(item)
    idx == -1 ? copy.push(item) : copy.splice(idx, 1)
    setSelected(copy)
  };
  const handleClickX = (item: FilterOption) => {
    let copy = [...selected]
    let idx = copy.indexOf(item)
    if (idx != -1) copy.splice(idx, 1)
    setSelected(copy)
  }

  return <>
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onOpen={() => { }}
      onClose={() => { }}
    >
      <FilterMenuContainer>
        <Box sx={{ mb: '1.5rem' }}>
          <BoldTypography>
            {type}
          </BoldTypography>
          {selected.length ? <SelectedTag
            options={selected}
            deleteOption={handleClickX}
          /> : null}
        </Box>
        <Box sx={{ maxHeight: 'calc(100% - 164px)', overflow: 'auto' }}>
          {type != '가격' ? FilterTypes[type]?.map((item, idx) => (
            <FilterMenuItem
              key={`${item}-type-${idx}`}
              selected={selected.includes(item)}
              onClick={handleClickOption(item)}
            >
              <Avatar src={item.avatar} />
              <Gray8Typography>
                {item.name}
              </Gray8Typography>
            </FilterMenuItem>
          )) : <>
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
          </>}
        </Box>
        <ShowProductButton
          variant="contained"
          onClick={clickShowProduct(selected)}
        >
          제품 보러가기
        </ShowProductButton>
      </FilterMenuContainer>
    </SwipeableDrawer>
  </>
}

export default FilterDrawer;
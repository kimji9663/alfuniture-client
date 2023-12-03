import { Avatar, Box, FormControl, FormGroup, IconButton, Input, InputAdornment, SwipeableDrawer } from "@mui/material";
import { FilterOption, FilterTypes } from "./filters";
import { FilterMenuBody, FilterMenuContainer, FilterMenuHeader, FilterMenuItem, OptionTag, OptionTagContainer, ShowProductButton } from "./index.styles";
import { BoldTypography, TitleSmallWhiteTypography, Gray8Typography } from "../../../components/Typography";
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
      <TitleSmallWhiteTypography sx={{ lineHeight: '19px' }}>
        {option.name}
      </TitleSmallWhiteTypography>
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
    idx === -1 ? copy.push(item) : copy.splice(idx, 1)
    setSelected(copy)
  };
  const handleClickX = (item: FilterOption) => {
    let copy = [...selected]
    let idx = copy.indexOf(item)
    if (idx !== -1) copy.splice(idx, 1)
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
        <FilterMenuHeader>
          <BoldTypography>
            {type}
          </BoldTypography>
          {selected.length ? <SelectedTag
            options={selected}
            deleteOption={handleClickX}
          /> : null}
        </FilterMenuHeader>
        <FilterMenuBody sx={{maxHeight: selected.length ? 'calc(70vh - 8rem)' : 'calc(70vh - 5rem)'}}>
          {type !== '가격' ? FilterTypes[type]?.map((item, idx) => (
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
          )) : <FormGroup sx={{ width: '100%' }}>
            <FilterMenuItem key={'min-price'} className='priceType'>
              <FormControl>
                <Input
                  type='number'
                  disableUnderline
                  defaultValue={0}
                  endAdornment={<InputAdornment position="end">원 에서</InputAdornment>}
                />
              </FormControl>
            </FilterMenuItem>
            <FilterMenuItem key={'max-price'} className='priceType'>
              <FormControl>
                <Input
                  type='number'
                  disableUnderline
                  defaultValue={0}
                  endAdornment={<InputAdornment position="end">원 까지</InputAdornment>}
                />
              </FormControl>
            </FilterMenuItem>
          </FormGroup>}
        </FilterMenuBody>
      </FilterMenuContainer>
      <ShowProductButton
        variant="contained"
        onClick={clickShowProduct(selected)}
      >
        제품 보러가기
      </ShowProductButton>
    </SwipeableDrawer>
  </>
}

export default FilterDrawer;
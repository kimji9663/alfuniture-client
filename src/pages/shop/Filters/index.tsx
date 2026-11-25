import { Avatar, FormControl, FormGroup, IconButton, Input, InputAdornment, SwipeableDrawer } from "@mui/material";
import { FilterOption, FilterTypes } from "./filters";
import { FilterMenuBody, FilterMenuContainer, FilterMenuHeader, FilterMenuItem, OptionTag, OptionTagContainer, ShowProductButton } from "./index.styles";
import { BoldTypography, TitleSmallWhiteTypography, Gray8Typography } from "../../../components/Typography";
import { MouseEvent } from "react";
import React from "react";
import { IconX } from "../../../assets/images";
import { PriceRange } from "../filterProducts";

interface FilterDrawerProps {
  open: boolean
  type: string
  filterOptions: typeof FilterTypes
  /** 현재 적용된 가격 범위 (가격 필터를 다시 열면 채워 둔다) */
  priceRange: PriceRange
  /** "제품 보러가기" 또는 서랍 닫기: 고른 옵션(가격이면 가격 범위)을 부모에 적용 */
  clickShowProduct: (options: FilterOption[], price?: PriceRange) => (event: MouseEvent<HTMLElement>) => void;
};

/** 가격 입력값 → 숫자 (빈 칸·0·음수는 제한 없음) */
const toPrice = (value: string): number | null => {
  const n = Number(value.replace(/[^0-9]/g, ""))
  return n > 0 ? n : null
}

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
  priceRange,
  clickShowProduct
}): JSX.Element => {
  const [selected, setSelected] = React.useState<Array<FilterOption>>([]);
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");

  React.useEffect(() => {
    if (open) {
      setSelected(filterOptions[type] ?? [])
      setMinPrice(priceRange.min ? String(priceRange.min) : "")
      setMaxPrice(priceRange.max ? String(priceRange.max) : "")
    } else {
      setSelected([])
    }
    // 서랍을 열 때만 현재 적용값으로 채운다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // 가격 필터면 가격 범위를, 아니면 고른 옵션을 넘긴다
  const apply = type === "가격"
    ? clickShowProduct([], { min: toPrice(minPrice), max: toPrice(maxPrice) })
    : clickShowProduct(selected)

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
      onClose={apply}
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
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  inputProps={{ min: 0, step: 10000, "aria-label": "최소 가격" }}
                  endAdornment={<InputAdornment position="end">원 에서</InputAdornment>}
                />
              </FormControl>
            </FilterMenuItem>
            <FilterMenuItem key={'max-price'} className='priceType'>
              <FormControl>
                <Input
                  type='number'
                  disableUnderline
                  placeholder="0"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  inputProps={{ min: 0, step: 10000, "aria-label": "최대 가격" }}
                  endAdornment={<InputAdornment position="end">원 까지</InputAdornment>}
                />
              </FormControl>
            </FilterMenuItem>
          </FormGroup>}
        </FilterMenuBody>
      </FilterMenuContainer>
      <ShowProductButton
        variant="contained"
        onClick={apply}
      >
        제품 보러가기
      </ShowProductButton>
    </SwipeableDrawer>
  </>
}

export default FilterDrawer;
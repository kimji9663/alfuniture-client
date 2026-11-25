import React, { MouseEvent, useRef, useState } from "react"
import PreviewItem from "../../components/product/Preview"
import { Box, Button, Typography } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import { GridBox } from "../../components/Box"
import LeftTitle from '../../components/title/LeftTitle'
import { FilterContainer, FilterTypeContainer } from "./productList.styles"
import FilterMenu from "./Filters"
import { FilterOption, FilterTypes } from "./Filters/filters"
import { shopProductData } from "../../data"
import { PriceRange, SelectedFilters, filterProducts, isPriceRangeActive, priceSummary } from "./filterProducts"
import { PrimaryButton } from "../../styles/buttons.styles"

const ProductList = () => {
  const title = ["가구"];
  const [filterType, setFilterType] = useState<any>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState<typeof FilterTypes>({});
  const [priceRange, setPriceRange] = useState<PriceRange>({});

  const filterRef = useRef<HTMLDivElement | null>(null);

  // 고른 필터로 목록을 거른다 (같은 분류 안은 OR, 분류끼리는 AND, 가격은 범위)
  const selected: SelectedFilters = Object.fromEntries(
    Object.entries(filterOptions).map(([type, options]) => [type, (options ?? []).map((o) => o.name)]),
  )
  const products = filterProducts(shopProductData, selected, priceRange)
  const isFiltered = Object.values(selected).some((names) => names?.length) || isPriceRangeActive(priceRange)

  const handleOpenFilter = (type: string) => () => {
    setIsFilterOpen(!isFilterOpen);
    setFilterType(type);
  };
  const handleClickShow = (options: FilterOption[], price?: PriceRange) => (event: MouseEvent<HTMLElement>) => {
    setIsFilterOpen(false)
    setFilterType(undefined)
    if (filterType === "가격") setPriceRange(price ?? {})
    else addOptions(options)
  };

  const addOptions = (options: FilterOption[]) => {
    setFilterOptions({ ...filterOptions, [filterType]: options })
  };
  const resetFilters = () => {
    setFilterOptions({})
    setPriceRange({})
  }
  const isTypeActive = (type: string) =>
    type === "가격" ? isPriceRangeActive(priceRange) : !!filterOptions[type]?.length
  const getFilterSummary = (type: string) => {
    if (type === "가격") return priceSummary(priceRange) ?? type
    const options = filterOptions[type]
    if (options?.length) {
      return options.length === 1 ? options[0].name : `${options[0].name} 외${options.length - 1}`
    }
    return type
  }

  return (
    <>
      <LeftTitle title={title} />
      <Box sx={{ height: "calc(100vh - 131px)", overflow: "auto" }}>
        <FilterContainer ref={filterRef}>
          <FilterTypeContainer>
            {Object.keys(FilterTypes).map((type, idx) => (
              <Button
                key={`filter-type-${idx}`}
                variant={(isTypeActive(type) || filterType === type) ? 'contained' : 'outlined'}
                onClick={handleOpenFilter(type)}
              >
                {getFilterSummary(type)}
              </Button>
            ))}
          </FilterTypeContainer>
        </FilterContainer>
        <FilterMenu
          open={isFilterOpen}
          filterOptions={filterOptions ?? {}}
          priceRange={priceRange}
          type={filterType}
          clickShowProduct={handleClickShow}
        />
        {isFiltered && (
          <Box sx={{ px: 2, pt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontSize: ".875rem", color: "#333" }} aria-live="polite">
              상품 {products.length}개
            </Typography>
            <Button onClick={resetFilters} sx={{ fontSize: ".875rem", color: "#707070", p: 0, minWidth: 0 }}>
              필터 초기화
            </Button>
          </Box>
        )}
        {products.length > 0 ? (
          <Box padding='1.5rem 1rem'>
            <GridBox
              sx={{
                gridTemplateColumns: '1fr 1fr'
              }}
              columnGap='0.5rem'
              rowGap='1.5rem'
            >
              {products.map((product: any, index: number) =>
                <PreviewItem
                  key={`product-${product.id}`}
                  priority={index < 4}
                  id={product.id}
                  imgsrc={product.imgsrc}
                  shopName={product.shopName}
                  modelName={product.modelName}
                  productName={product.productName}
                  price={product.price}
                  colors={product.colors}
                />
              )}
            </GridBox>
          </Box>
        ) : (
          // 조건에 맞는 상품이 없을 때
          <Box sx={{ p: 2, mt: 6, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>조건에 맞는 상품이 없습니다.</Typography>
            <Typography sx={{ fontSize: ".875rem", color: "#707070", mb: 3 }}>필터를 바꾸거나 초기화해 보세요.</Typography>
            <PrimaryButton onClick={resetFilters} sx={{ width: "100%", height: "52px" }}>필터 초기화</PrimaryButton>
          </Box>
        )}
      </Box>
      <NavigationBar />
    </>
  )
}
export default ProductList

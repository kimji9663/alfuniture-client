import React, { MouseEvent, useRef, useState } from "react"
import PreviewItem from "../../components/product/Preview"
import { Box, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import { GridBox } from "../../components/Box"
import LeftTitle from '../../components/title/LeftTitle'
import { FilterContainer, FilterTypeContainer } from "./productList.styles"
import FilterMenu from "./Filters"
import { FilterOption, FilterTypes } from "./Filters/filters"
import { shopProductData } from "../../data"

const ProductList = () => {
  const title = ["가구"];
  const [filterType, setFilterType] = useState<any>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState<typeof FilterTypes>({});

  const filterRef = useRef<HTMLDivElement | null>(null);

  const handleOpenFilter = (type: string) => () => {
    setIsFilterOpen(!isFilterOpen);
    setFilterType(type);
  };
  const handleClickShow = (options: FilterOption[]) => (event: MouseEvent<HTMLElement>) => {
    setIsFilterOpen(false)
    setFilterType(undefined)
    addOptions(options)
  };

  const addOptions = (options: FilterOption[]) => {
    setFilterOptions({ ...filterOptions, [filterType]: options })
    console.log(filterOptions)
  };
  const getFilterSummary = (type: string) => {
    const options = filterOptions[type]
    if (options?.length) {
      return options.length == 1 ? options[0].name : `${options[0].name} 외${options.length - 1}`
    }
    return type
  }

  return (
    <>
      <LeftTitle title={title} />
      <Box sx={{ height: 'calc(100vh - 131px)', overflow: 'auto' }}>
        <FilterContainer ref={filterRef}>
          <FilterTypeContainer>
            {Object.keys(FilterTypes).map((type, idx) => (
              <Button
                key={`filter-type-${idx}`}
                variant={(filterOptions[type]?.length || filterType == type) ? 'contained' : 'outlined'}
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
          type={filterType}
          clickShowProduct={handleClickShow}
        />
        <Box padding='1.5rem 1rem'>
          <GridBox
            sx={{
              gridTemplateColumns: '1fr 1fr'
            }}
            columnGap='0.5rem'
            rowGap='1.5rem'
          >
            {shopProductData.map((product: any) =>
              <PreviewItem
                key={`product-${product.id}`}
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
      </Box>
      <NavigationBar />
    </>
  )
}
export default ProductList
import React, { MouseEvent, useRef, useState } from "react"
import PreviewItem from "../../components/product/Preview"
import { Box, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import { GridBox } from "../../components/Box"
import LeftTitle from "../../components/title/LeftTitle"
import { FilterButton, FilterContainer, FilterTypeContainer } from "./productList.styles"
import { Gray9Typography } from "../../components/Typography"
import FilterMenu from "./Filters"
import { FilterTypes } from "./Filters/filters"
import { shopProductData } from "../../data"

const ProductList = () => {
  const title = ["가구"];
  const [filterType, setFilterType] = useState("원목");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const filterRef = useRef(null);
  const filterMenuOpen = Boolean(anchorEl)

  const handleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    filterMenuOpen ? setAnchorEl(null) : setAnchorEl(filterRef.current)
  }
  const handleClickShow = (event: MouseEvent<HTMLElement>) => {
    setIsFilterOpen(false)
    setAnchorEl(null)
  }

  return (
    <>
      <LeftTitle title={title} />
      <Box sx={{ height: "calc(100vh - 131px)", overflow: "auto" }}>
        <FilterContainer ref={filterRef}>
          <FilterButton
            onClick={handleOpenFilter}
          >
            <Gray9Typography>Filter +</Gray9Typography>
          </FilterButton>
          {isFilterOpen ? <FilterTypeContainer>
            {Object.keys(FilterTypes).map((type, idx) => (
              <Button
                key={`filter-type-${idx}`}
                variant={filterType == type ? "contained" : "outlined"}
                onClick={() => setFilterType(type)}
              >
                {type}
              </Button>
            ))}
          </FilterTypeContainer> : null}
        </FilterContainer>
        {isFilterOpen ?
          <FilterMenu
            type={filterType}
            clickShowProduct={handleClickShow}
          />
          :
          <Box padding="1.5rem 1rem">
            <GridBox
              sx={{
                gridTemplateColumns: "1fr 1fr"
              }}
              columnGap="0.5rem"
              rowGap="1.5rem"
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
          </Box>}
      </Box>
      <NavigationBar />
    </>
  )
}
export default ProductList
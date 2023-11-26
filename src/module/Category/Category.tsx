import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  fetchProductsByCategory,
  productByCategoryAPIStatus,
  productByCategoryProducts,
} from "../../features/products/getProductsByCategorySlice"
import Section from "../../components/Section/Section"
import { Box, Typography } from "@mui/material"
import ProductCard from "../../features/products/ProductCard"
import PageLoader from "../../components/Loader/PageLoader"

const Category = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const apiStatus = useAppSelector(productByCategoryAPIStatus)
  const products = useAppSelector(productByCategoryProducts)

  useEffect(() => {
    if (location.pathname !== undefined) {
      const pathName = location.pathname.substring(1)
      if (pathName === "mens-clothing") {
        const params = {
          category: `men's clothing`,
        }
        dispatch(fetchProductsByCategory(params))
      } else if (pathName === "womens-clothing") {
        const params = {
          category: `women's clothing`,
        }
        dispatch(fetchProductsByCategory(params))
      }
    }
  }, [location])

  if (apiStatus === "loading") {
    return <PageLoader />
  }

  return (
    <div className="category-container">
      <Section>
        <div className="mb-2">
          <Typography variant="h6" gutterBottom>
            Flash Sale
          </Typography>
        </div>
        <div>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                md: "1fr 1fr 1fr 1fr",
                sm: "1fr 1fr",
                xm: "1fr",
              },
              gap: 4,
            }}
          >
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <>no products</>
            )}
          </Box>
        </div>
      </Section>
    </div>
  )
}

export default Category

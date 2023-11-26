import { Box, Typography } from "@mui/material"
import React, { useEffect } from "react"
import Section from "../../components/Section/Section"
import CategoryCard from "../../components/CategoryCard/CategoryCard"
import ProductCard from "../../features/products/ProductCard"
import Carousel from "../../components/Carousel/Carousel"
import { SwiperSlide } from "swiper/react"
import PageLoader from "../../components/Loader/PageLoader"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  cleanFlashSales,
  fetchFlashProducts,
  flashProducts,
  flashProductsApiStatus,
} from "../../features/products/flashSaleSlice"

const Home = () => {
  const dispatch = useAppDispatch()

  const apiStatus = useAppSelector(flashProductsApiStatus)
  const products = useAppSelector(flashProducts)

  useEffect(() => {
    dispatch(fetchFlashProducts({ limit: 20 }))

    return () => {
      dispatch(cleanFlashSales())
    }
  }, [])

  if (apiStatus === "loading") {
    return <PageLoader />
  }
  return (
    <div>
      <Section>
        <div className="mb-2">
          <Typography variant="h6" gutterBottom>
            Flash Sale
          </Typography>
        </div>
        <div>
          <Carousel>
            {products.length > 0 ? (
              products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))
            ) : (
              <>no products</>
            )}
          </Carousel>
        </div>
      </Section>
      <Section>
        <div className="mb-2">
          <Typography variant="h6" gutterBottom>
            Categories
          </Typography>
        </div>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <CategoryCard
            variant="primary"
            title={`Men's Clothing`}
            path="/mens-clothing"
          />
          <CategoryCard
            variant="secondary"
            title={`Women's Clothing`}
            path="/womens-clothing"
          />
        </Box>
      </Section>
    </div>
  )
}

export default Home

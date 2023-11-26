import { Box, Typography } from "@mui/material"
import React from "react"
import Section from "../../components/Section/Section"
import CategoryCard from "../../components/CategoryCard/CategoryCard"
import ProductCard from "../../features/products/ProductCard"

const Home = () => {
  return (
    <div>
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
              gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
              gap: 7,
            }}
          >
            <ProductCard
              product={{
                name: "Mens Cotton Jacket",
                description:
                  "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...",
                price: "55.99",
                imageUrl: "",
                category: "men",
              }}
            />
            <ProductCard
              product={{
                name: "Mens Cotton Jacket",
                description:
                  "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...",
                price: "55.99",
                imageUrl: "",
                category: "men",
              }}
            />
            <ProductCard
              product={{
                name: "Mens Cotton Jacket",
                description:
                  "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...",
                price: "55.99",
                imageUrl: "",
                category: "women",
              }}
            />
            <ProductCard
              product={{
                name: "Mens Cotton Jacket",
                description:
                  "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...",
                price: "55.99",
                imageUrl: "",
                category: "women",
              }}
            />
          </Box>
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

import { Box, Typography } from "@mui/material"
import React from "react"
import Section from "../../components/Section/Section"
import CategoryCard from "../../components/CategoryCard/CategoryCard"

const Home = () => {
  return (
    <div>
      <Section>
        <div className="mb-2">
          <Typography variant="h6" gutterBottom>
            h4. Heading
          </Typography>
        </div>
        <div>Scrollable Products</div>
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

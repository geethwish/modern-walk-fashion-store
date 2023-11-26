import React, { FC } from "react"
import { ProductCardProps } from "./Products.types"
import { Paper, Typography } from "@mui/material"

import image1 from "../../assest/images/products/image1.png"
import image2 from "../../assest/images/products/image2.png"

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, category, description, imageUrl, price } = product

  const getImageUrl = (): string => {
    if (imageUrl !== null && imageUrl !== "") {
      return imageUrl
    } else if (category === "men") {
      return image2
    } else {
      return image1
    }
  }

  return (
    <Paper elevation={1} className={`product-card`}>
      <Typography
        variant="body1"
        className="title-2 font-weight-700 custom-text"
      >
        {name ?? ""}
      </Typography>
      <div className="product-image">
        <img src={getImageUrl()} alt={name} />
      </div>
      <div
        className={`product-card-footer ${
          category === "men" ? "primary" : "secondary"
        }`}
      >
        <Typography variant="h5" className="font-weight-700 font-blue">
          RS {price}
        </Typography>

        <p>{description}</p>
      </div>
    </Paper>
  )
}

export default ProductCard

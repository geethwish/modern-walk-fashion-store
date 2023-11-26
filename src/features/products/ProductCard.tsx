import { FC, memo } from "react"
import { ProductCardProps } from "./Products.types"
import { Paper, Typography } from "@mui/material"

import image1 from "../../assest/images/products/image1.png"
import image2 from "../../assest/images/products/image2.png"

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { title, category, description, image, price } = product

  const getImageUrl = (): string => {
    // this function will handle when product not include any image url
    // will assign some locally stored images as default type

    if (image !== null && image !== "") {
      return image
    } else if (category === "men's clothing") {
      return image2
    } else {
      return image1
    }
  }

  return (
    <Paper elevation={0} className={`product-card`}>
      <Typography
        variant="body1"
        className="title-2 font-weight-700 custom-text"
      >
        {title ?? ""}
      </Typography>
      <div className="product-image">
        <img src={getImageUrl()} alt={title} />
      </div>
      <div
        className={`product-card-footer ${
          category === "men's clothing" ? "primary" : "secondary"
        }`}
      >
        <Typography variant="h5" className="font-weight-700 font-blue">
          RS {price}
        </Typography>

        <p className="product-description">{description}</p>
      </div>
    </Paper>
  )
}

export default memo(ProductCard)

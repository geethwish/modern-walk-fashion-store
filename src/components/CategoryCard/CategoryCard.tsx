import { FC } from "react"
import { Link } from "react-router-dom"
import { Paper, Typography } from "@mui/material"
import { CategoryCardProps } from "./CategoryCard.types"

const CategoryCard: FC<CategoryCardProps> = ({ variant, title, path }) => {
  return (
    <Paper elevation={0} className={`category-card ${variant ?? ""}`}>
      <Typography className="title-font font-weight-700 font-white">
        {path !== undefined && path !== null && path !== "" ? (
          <Link to={path} className="link">
            {title}
          </Link>
        ) : (
          <>{title}</>
        )}
      </Typography>
    </Paper>
  )
}

export default CategoryCard

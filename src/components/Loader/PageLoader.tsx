import { CircularProgress } from "@mui/material"
import React from "react"

const PageLoader = () => {
  return (
    <div className="page-loader">
      <CircularProgress color="primary" />
    </div>
  )
}

export default PageLoader

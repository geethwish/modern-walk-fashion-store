import { ReactElement } from "react"

export interface CategoryCardProps {
  variant: "primary" | "secondary"
  title: string | ReactElement | JSX.Element
  path?: string
}

import React, { FC } from "react"

interface SectionProps {
  children: JSX.Element[] | JSX.Element
}

const Section: FC<SectionProps> = ({ children }) => {
  return <div className="section-wrapper">{children}</div>
}

export default Section

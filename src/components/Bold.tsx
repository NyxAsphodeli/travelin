import React from "react"
import { CSSProperties, ReactNode } from "react"

const Bold = ({
  children,
  style,
}: {
  children: ReactNode
  style?: CSSProperties
}) => {
  return <span style={{ fontWeight: 700, ...style }}>{children}</span>
}

export default Bold

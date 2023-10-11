import React from "react"

import { CSSProperties, ReactNode } from "react"

const PageContainer = ({
  children,
  style,
}: {
  children?: ReactNode
  style?: CSSProperties
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowX: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default PageContainer

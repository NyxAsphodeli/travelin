import React from "react"
import { CSSProperties, ReactNode } from "react"
import { colors } from "../services/config"

const Text = ({
  children,
  fontSize = 18,
  fontWeight = 400,
  lineHeight,
  color = colors.textDefault,
  width,
  textAlign = "left",
  style,
  paddingLeft = 0,
  paddingRight = 0,
  ellipsis = false,
  className,
  onClick,
}: {
  children: ReactNode
  fontSize?: number
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800
  lineHeight?: string
  color?: string
  width?: string | number
  textAlign?: "left" | "center" | "right"
  style?: CSSProperties
  paddingLeft?: number
  paddingRight?: number
  ellipsis?: boolean
  className?: string
  onClick?: () => void
}) => {
  return (
    <p
      className={className}
      onClick={(e) => {
        if (onClick) {
          e.stopPropagation()
          onClick()
        }
      }}
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        color: color,
        maxWidth: width,
        textAlign: textAlign,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        whiteSpace: ellipsis ? "nowrap" : undefined,
        overflow: ellipsis ? "hidden" : undefined,
        textOverflow: ellipsis ? "ellipsis" : undefined,
        ...style,
      }}
    >
      {children}
    </p>
  )
}

export default Text

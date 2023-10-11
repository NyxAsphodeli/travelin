import { ButtonBase } from "@mui/material"
import { CSSProperties, ReactNode, useContext } from "react"
import { MainContext } from "../controllers/main"
import { breakpoints } from "../services/config"

const CustomButton = ({
  onClick,
  primary = true,
  children,
  style,
}: {
  onClick: () => void
  primary?: boolean
  children?: ReactNode
  style?: CSSProperties
}) => {
  const { pageWidth } = useContext(MainContext)

  return (
    <ButtonBase
      onClick={onClick}
      style={{
        boxShadow: "1px 4px 20px 0px rgba(158, 165, 255, 0.60)",
        width: "fit-content",
        fontSize: pageWidth < breakpoints.mobile ? 14 : 18,
        fontWeight: 600,
        lineHeight: "36px",
        letterSpacing: "0.72px",
        backgroundColor: primary ? "#2C36D0" : "white",
        textTransform: "uppercase",
        color: primary ? "#F4F8FF" : "#2D36D0",
        padding: "16px 40px",
        borderRadius: 8,
        border: primary ? "none" : "2px solid #2D36D0",
        ...style,
      }}
    >
      {children}
    </ButtonBase>
  )
}

export default CustomButton

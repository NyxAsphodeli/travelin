import { Stack } from "@mui/material"
import Text from "./Text"
import { breakpoints } from "../services/config"
import { useContext } from "react"
import { MainContext } from "../controllers/main"

const PersonCard = ({
  invisible = false,
  image,
  name,
  title,
}: {
  invisible?: boolean
  image?: any
  name?: string
  title?: string
}) => {
  const { pageWidth } = useContext(MainContext)

  return invisible ? (
    <div
      style={{
        width: "100%",
        padding: 16,
      }}
    />
  ) : (
    <Stack
      style={{
        width: "100%",
        borderRadius: 8,
        border: "1px solid #02030C",
        padding: 16,
      }}
      alignItems="center"
    >
      <img
        src={image}
        style={{
          width: "100%",
          maxWidth: 170,
          minWidth: 124,
          height: 160,
          objectFit: "cover",
        }}
        alt={`Primo piano di ${name}`}
      />
      <Text
        fontSize={pageWidth < breakpoints.mobile ? 16 : 24}
        fontWeight={700}
        style={{ marginTop: 16 }}
        textAlign="center"
        lineHeight={pageWidth < breakpoints.mobile ? "26px" : "34px"}
      >
        {name}
      </Text>
      <Text
        fontSize={16}
        style={{ marginTop: 4 }}
        textAlign="center"
        color="#414249"
        lineHeight="26px"
      >
        {title}
      </Text>
    </Stack>
  )
}

export default PersonCard

import { Stack } from "@mui/material"
import Text from "./Text"
import { MainContext } from "../controllers/main"
import { useContext } from "react"
import { breakpoints } from "../services/config"

const AdvisorCard = ({
  image,
  name,
  title,
}: {
  image?: any
  name?: string
  title?: string
}) => {
  const { pageWidth } = useContext(MainContext)

  return (
    <Stack style={{ width: "100%" }}>
      <img
        src={image}
        style={{
          width: "100%",
          height: 220,
          borderRadius: 16,
          objectFit: "cover",
          objectPosition: "top",
        }}
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

export default AdvisorCard

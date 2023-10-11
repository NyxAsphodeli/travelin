import React from "react"
import { Stack } from "@mui/material"
import Text from "./Text"
import { useContext } from "react"
import { MainContext } from "../controllers/main"

const CarouselItem = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: any
}) => {
  const { pageWidth } = useContext(MainContext)

  return (
    <Stack
      alignItems="center"
      style={{
        width: pageWidth < 400 ? "60%" : pageWidth < 700 ? "50%" : "27%",
        maxWidth: 350,
      }}
    >
      <img src={image} style={{ width: "60%" }} alt="Icona" />
      <Text
        fontSize={24}
        fontWeight={700}
        lineHeight="34px"
        textAlign="center"
        style={{ marginTop: 16 }}
      >
        {title}
      </Text>
      <Text
        fontSize={14}
        lineHeight="24px"
        textAlign="center"
        style={{ marginTop: 8 }}
      >
        {description}
      </Text>
    </Stack>
  )
}

export default CarouselItem

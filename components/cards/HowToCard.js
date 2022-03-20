import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
const HowToCard = ({ title, text, image }) => {
  const [screenWindow, setScreenWindow] = useState("")
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/css/bootstrap.min.css")
      : null
    typeof window !== undefined
      ? setScreenWindow(window.screen)
      : console.log("no window")
  }, [])
  if (screenWindow !== "") {
    return (
      <Card
        style={
          screenWindow.width < 768
            ? {
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                borderWidth: "0px",
                marginBlock: "10px",
              }
            : {
                width: "20vw",
                height: "auto",
                backgroundColor: "white",
                borderWidth: "0px",
                marginInline: "20px",
              }
        }
      >
        <Card.Img
          variant="top"
          src={image}
          style={
            screenWindow.width < 768
              ? {
                  borderRadius: "10px",
                  height: "auto",
                  width: "80vw",
                }
              : {
                  borderRadius: "10px",
                  height: "auto",
                  width: "100%",
                }
          }
        />
        <Card.Body style={{ padding: "0px", marginInline: "0px" }}>
          <Card.Title style={{ paddingBlockStart: "5px" }}>{title}</Card.Title>
          <Card.Text
            style={{
              textAlign: "left",
              marginInline: "0px",
              paddingBlock: "0px",
              fontSize: "0.8rem",
            }}
          >
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  } else {
    return <p>loading</p>
  }
}
export default HowToCard

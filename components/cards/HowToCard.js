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

  const styleChoiceCard = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        borderWidth: "0px",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        borderWidth: "0px",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        height: "auto",
        backgroundColor: "white",
        borderWidth: "0px",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        borderWidth: "0px",
      }
    }
  }
  const styleChoiceCardImage = () => {
    if (screenWindow.width <= 600) {
      return {
        borderRadius: "10px",
        height: "156px",
        objectFit: "cover",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        borderRadius: "10px",
        height: "156px",
        objectFit: "cover",
      }
    } else if (screenWindow.width > 1024) {
      return {
        borderRadius: "10px",
        height: "156px",
        objectFit: "cover",
      }
    } else {
      return {
        borderRadius: "10px",
        height: "156px",
        objectFit: "cover",
      }
    }
  }
  const styleChoiceCardBody = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "column",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "column",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "column",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
      }
    }
  }

  if (screenWindow !== "") {
    return (
      <Card style={styleChoiceCard()}>
        <Card.Img variant="top" src={image} style={styleChoiceCardImage()} />
        <Card.Body
          style={styleChoiceCardBody()} /* style={{ padding: "0px", marginInline: "0px" }} */
        >
          <Card.Title
            style={{
              paddingBlockStart: "8px",
              paddingBlockEnd: "4px",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "left",
              marginInline: "0px",
              paddingBlock: "0px",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "22px",
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

import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"

const Video = ({ children }) => {
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
    console.log(screenWindow)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "100vw",
          backgroundColor: "#e4f9f6",
        }}
      >
        <div
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingBlock: "5%",
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100vw",
                  paddingInline: "20vw",
                }
          }
        >
          <div
            style={
              screenWindow.width < "768"
                ? {
                    padding: "0px",
                    width: "100vw",
                    height: "auto",
                    backgroundColor: "#e4f9f6",
                  }
                : {
                    padding: "0px",
                    width: "80vw",
                    height: "auto",

                    backgroundColor: "#e4f9f6",
                  }
            }
          >
            {screenWindow.width < "768" ? (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                controls={true}
                width={"63%"}
                height={"auto"}
                alt={"our journey"}
                style={{ marginInline: "auto" }}
              />
            ) : (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                controls={true}
                width={"640px"}
                height={"360px"}
                alt={"our journey"}
              />
            )}
          </div>
        </div>
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Video

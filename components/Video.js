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
        /*       className="col-12 offset-0 col-10 offset-2 "
         */ /* className="col-12 offset-0 col-md-6" */
        style={
          screenWindow.width < "768"
            ? {
                padding: "0px",
                marginInline: "30%",
                width: "100vw",
                height: "auto",
                backgroundColor: "#e4f9f6",
              }
            : {
                padding: "0px",
                width: "80vw",

                marginBlockStart: "40px",
                backgroundColor: "#e4f9f6",
              }
        }
      >
        {screenWindow.width < "768" ? (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            controls={true}
            width={"64%"}
            height={"36%"}
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
    )
  } else {
    return <p>loading</p>
  }
}
export default Video

import React, { useEffect, useState } from "react"
const Layout = ({ children }) => {
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
                display: "flex",
                flexDirection: "column",
                padding: "0px",
                margin: "0px",
                minWidth: "100vw",
              }
            : {
                display: "flex",
                flexDirection: "column",
                padding: "0px",
              }
        }
      >
        {children}
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Layout

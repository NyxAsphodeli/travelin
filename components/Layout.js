import { Col } from "react-bootstrap"
import React, { useEffect, useState } from "react"
const Layout = ({ children }) => {
  const [screenWindow, setScreenWindow] = useState("")
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/css/bootstrap.min.css")
      : null
    window ? setScreenWindow(window) : console.log("no window")
  }, [])

  return (
    <Col
      /* className="col-10 offset-1  col-lg-3 offset-lg-4 col-xl-6 offset-xl-3 " */
      className="col-12 offset-0 col-md-6"
      style={{
        display: "flow-root",
        paddingTop: "10px",
        width: `100vw`,
        maxWidth: "99.4%",
      }}
    >
      {children}
    </Col>
  )
}
export default Layout

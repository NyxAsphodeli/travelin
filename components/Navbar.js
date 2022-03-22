import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

const Navbar = ({ href, text }) => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
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
      <navbar
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          className="navbar"
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  height: "60px",
                  padding: "0px",
                  margin: "0px",
                  background: "rgb(255, 255, 255)",
                  background:
                    " linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(228,249,246,1) 100%)",
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  height: "60px",
                  padding: "0px",
                  margin: "0px",
                  background: "rgb(255, 255, 255)",
                  background:
                    " linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(228,249,246,1) 100%)",
                  paddingInline: "20%",
                }
          }
        >
          <Image
            src="https://i.ibb.co/Qvymb0T/logo-s.png"
            alt="Logo AWorld"
            width="90px"
            height="18px"
          />
          <a href={href} onClick={handleClick}>
            <div>{text}</div>{" "}
          </a>
        </div>
      </navbar>
    )
  } else {
    return <div>loading</div>
  }
}
export default Navbar

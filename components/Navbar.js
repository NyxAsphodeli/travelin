// react js
import React, { useEffect, useState } from "react"

// next js
import { useRouter } from "next/router"
import Image from "next/image"

// images
import sandwich from "../public/menu.png"

// styles
import styles from "../styles/Home.module.css"

const Navbar = ({ href, text }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(href)
  }
  const styleChoice = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "60px",
        paddingInline: "20px",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "60px",
        paddingInline: "20px",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "60px",
        paddingInline: "20px",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "60px",
      }
    }
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
      <div
        className="Navbar"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingBlockStart: "1rem",
        }}
      >
        <div className={"navbar " + styles.nakedElement} style={styleChoice()}>
          <Image
            src="https://i.ibb.co/Qvymb0T/logo-s.png"
            alt="Logo AWorld"
            width="133px"
            height="30px"
          />
          {/*  <button
            className={styles.nakedElement}
            style={{ backgroundColor: "#ffffff" }}
          >
            <Image
              src={sandwich}
              alt="sandwich menu"
              width={48.75}
              height={30}
            />
          </button> */}
        </div>
      </div>
    )
  } else {
    return <div>loading</div>
  }
}
export default Navbar

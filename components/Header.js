import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"
import bg from "../public/bg.png"
import bgBig from "../public/bgBig.png"

const Header = ({ children }) => {
  const [screenWindow, setScreenWindow] = useState("")
  const [backgroundImage, setBackgroundImage] = useState({ bg })
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/css/bootstrap.min.css")
      : null
    typeof window !== undefined
      ? setScreenWindow(window.screen)
      : console.log("no window")
  }, [])

  const styleChoice = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#004267",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingInline: "20px",
        backgroundColor: "#004267",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingInline: "20px",
        backgroundColor: "#004267",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#004267",
      }
    }
  }
  const styleChoiceIntro = () => {
    if (screenWindow.width <= 600) {
      return {
        width: "100%",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        width: "100%",
        paddingBlockEnd: "40px",
      }
    } else if (screenWindow.width > 1024) {
      return {
        width: "55%",
        paddingBlockEnd: "60px",
        marginBlockStart: "-290px",
        zIndex: "1",
      }
    } else {
      return {
        width: "100%",
      }
    }
  }

  if (screenWindow !== "") {
    console.log(screenWindow)
    return (
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: "100%",
        }}
      >
        {screenWindow.width < "600px" ? (
          <Image
            src={bg}
            alt="a beautiful sunrise over an old style map"
            width="311px"
            height="512px"
          />
        ) : (
          <Image
            src={bgBig}
            alt="a beautiful sunrise over an old style map"
            width="512px"
            height="359px"
          />
        )}
        <div className="description" style={styleChoice()}>
          <p
            className={
              "Intro " +
              styles.white +
              " " +
              styles.pMobile +
              " " +
              styles.weight500
            }
            style={styleChoiceIntro()}
          >{`Esplora la bellezza dell’Italia attraverso itinerari ed esperienze uniche. Immergiti in ciò che ti circonda, crea itinerari e guarda quelli di guide turistiche e altri utenti.`}</p>
        </div>
      </header>
    )
  } else {
    return <p>loading</p>
  }
}
export default Header

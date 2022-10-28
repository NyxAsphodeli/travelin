import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"
import bg from "../public/bg.png"

const Header = ({ children }) => {
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
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: "100%",
        }}
      >
        <Image
          src={bg}
          alt="a beautiful sunrise over an old style map"
          width="311px"
          height="512px"
        />
        <div
          className="description"
          style={{
            backgroundColor: "#004267",
            paddingBlockStart: "1rem",
            marginBlockStart: "-8px",
            width: "100vw",
          }}
        >
          <p
            className={
              styles.white + " " + styles.pMobile + " " + styles.weight500
            }
          >{`Esplora la bellezza dell’Italia attraverso itinerari ed esperienze uniche. Immergiti in ciò che ti circonda, crea itinerari e guarda quelli di guide turistiche e altri utenti.`}</p>
        </div>
      </header>
    )
  } else {
    return <p>loading</p>
  }
}
export default Header

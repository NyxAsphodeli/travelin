// react js
import React, { useEffect, useState } from "react"

// next js
import { useRouter } from "next/router"
import Image from "next/image"

// images
import sandwich from "../public/menu.png"

// styles
import styles from "../styles/Home.module.css"

const Navbar = ({ active }) => {
  const router = useRouter()
  const handleClick = (href) => {
    router.push(href)
  }
  const styleChoice = (type) => {
    if (screenWindow.width <= 600) {
      if (type === "navbar") {
        return {
          display: "none",
        }
      } else
        return {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "auto",
          paddingInline: "20px",
        }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      if (type === "sandwich") {
        return {
          display: "none",
        }
      } else
        return {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "60px",
          paddingInline: "20px",
        }
    } else if (screenWindow.width > 1024) {
      if (type === "sandwich") {
        return {
          display: "none",
        }
      } else
        return {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
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
    console.log("active inside useEffect", active)

    if (typeof document !== undefined) {
      require("bootstrap/dist/css/bootstrap.min.css")
    }
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
        <div
          className={"navbar " + styles.nakedElement}
          style={styleChoice("navbar")}
        >
          <Image
            src="https://i.ibb.co/Qvymb0T/logo-s.png"
            alt="Logo AWorld"
            width="163px"
            height="54px"
            objectFit="contain"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "55vw",
              justifyContent: "space-around",
            }}
          >
            <button
              id="home"
              onClick={() => handleClick("/")}
              className={
                styles.nakedElement +
                " " +
                styles.navbarButton +
                " " +
                (active === "home" ? styles.active : "")
              }
            >
              Travelin
            </button>
            <button
              id="viaggia-inclusivo"
              onClick={() => handleClick("/viaggia-inclusivo")}
              className={
                styles.nakedElement +
                " " +
                styles.navbarButton +
                " " +
                (active === "viaggia-inclusivo" ? styles.active : "")
              }
            >
              Viaggia inclusivo
            </button>
            <button
              id="per-le-aziende"
              onClick={() => handleClick("/per-le-aziende")}
              className={
                styles.nakedElement +
                " " +
                styles.navbarButton +
                " " +
                (active === "per-le-aziende" ? styles.active : "")
              }
            >
              Per le aziende
            </button>
          </div>
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
        <div
          className={"sandwich " + styles.nakedElement}
          style={styleChoice("sandwich")}
        >
          <Image
            src="https://i.ibb.co/Qvymb0T/logo-s.png"
            alt="Logo AWorld"
            width="163px"
            height="54px"
            objectFit="contain"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "55vw",
              justifyContent: "space-around",
            }}
          >
            <button
              id="home"
              onClick={() => handleClick("/")}
              className={
                styles.nakedElement +
                " " +
                styles.navbarButton +
                " " +
                (active === "home" ? styles.active : "")
              }
            >
              Travelin
            </button>
            <button
              id="viaggia-inclusivo"
              onClick={() => handleClick("/viaggia-inclusivo")}
              className={
                styles.nakedElement +
                " " +
                styles.navbarButton +
                " " +
                (active === "viaggia-inclusivo" ? styles.active : "")
              }
            >
              Viaggia inclusivo
            </button>
            <button
              id="per-le-aziende"
              onClick={() => handleClick("/per-le-aziende")}
              className={
                styles.nakedElement +
                " " +
                styles.navbarButton +
                " " +
                (active === "per-le-aziende" ? styles.active : "")
              }
            >
              Per le aziende
            </button>
          </div>
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

import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import MainButton from "./buttons/MainButton"

const Partners = ({ title }) => {
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
        style={
          screenWindow.width < 768
            ? {
                display: "flex",
                flexDirection: "column",
                width: "80vw",
                height: "auto",
              }
            : {
                display: "flex",
                flexDirection: "column",
                width: "80vw",
                marginBlockStart: "20px",
              }
        }
      >
        <p
          style={
            screenWindow.width < 768
              ? {
                  fontSize: "1.2em",
                  marginInline: "0px",
                  textAlign: "left",
                }
              : {
                  fontSize: "1.6em",
                  padding: "0px",
                  marginInline: "0px",
                  textAlign: "left",
                }
          }
        >
          <b> {title}</b>
        </p>
        <div
          style={
            screenWindow.width < 768
              ? {
                  height: "auto",
                  marginInline: "0px",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }
              : {
                  height: "auto",
                  padding: "0px",
                  marginInline: "0px",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }
          }
        >
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/J5ZfKd1/CULTURAACCESSIBILE.png"
              alt="Più cultura accessibile"
              width="160px"
              height="80px"
            />
          </div>
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/DbzrBcL/TURISMABILE-400x70.png"
              alt="Turismabile"
              width="160px"
              height="80px"
            />
          </div>
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/h1dQkT1/APRIONLUS-2.jpg"
              alt="Aprionlus"
              width="80px"
              height="80px"
            />
          </div>
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/gFHtc7P/FEDERAGIT2.png"
              alt="Federagit"
              width="100px"
              height="80px"
            />
          </div>
        </div>
      </div>
    )
  } else {
    return <p>loading</p>
  }
}

export default Partners

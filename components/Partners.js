import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import MainButton from "./buttons/MainButton"

/* 

https://i.ibb.co/k6C5LLx/federagit-color.png
https://i.ibb.co/LhkM9hc/pi-culturaaccessibile-color.png
https://i.ibb.co/hmH76W7/aprionlus-color.png
https://i.ibb.co/DWBF8Ng/willeasy-color.png
https://i.ibb.co/5cMpG4n/isitt-color.png

*/
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

  const styleChoicePartnersContainer = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        height: "auto",
        alignItems: "center",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        height: "auto",
        alignItems: "center",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        height: "auto",
        alignItems: "center",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        height: "auto",
        alignItems: "center",
      }
    }
  }
  const styleChoicePartnersTitle = () => {
    if (screenWindow.width <= 600) {
      return {
        fontSize: "1.6em",
        marginInline: "0px",
        textAlign: "left",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        fontSize: "1.6em",
        marginInline: "0px",
        textAlign: "left",
      }
    } else if (screenWindow.width > 1024) {
      return {
        fontSize: "1.6em",
        marginInline: "0px",
        textAlign: "left",
      }
    } else {
      return {
        fontSize: "1.6em",
        marginInline: "0px",
        textAlign: "left",
      }
    }
  }

  if (screenWindow !== "") {
    return (
      <div className="partnersContainer" style={styleChoicePartnersContainer()}>
        <p /* className="partnersTitle" style={styleChoicePartnersTitle()} */
          className={styles.nakedElement + " " + styles.howTitle}
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
                  marginBlockEnd: "2em",
                  alignItems: "center",
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
                  marginBlockEnd: "2em",
                }
          }
        >
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/k6C5LLx/federagit-color.png"
              alt="Federagit"
              width="248px"
              height="168px"
            />
          </div>
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/LhkM9hc/pi-culturaaccessibile-color.png"
              alt="Più cultura accessibile"
              width="357px"
              height="167px"
            />
          </div>
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/hmH76W7/aprionlus-color.png"
              alt="Aprionlus"
              width="317px"
              height="319px"
            />
          </div>
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/DWBF8Ng/willeasy-color.png"
              alt="willEASY"
              width="388px"
              height="115px"
            />
          </div>
          <div
            style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
          >
            <Image
              src="https://i.ibb.co/5cMpG4n/isitt-color.png"
              alt="isiTT"
              width="213px"
              height="215px"
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

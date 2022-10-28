import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import MainButton from "./buttons/MainButton"
const Partecipa = ({ children }) => {
  const [screenWindow, setScreenWindow] = useState("")
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/css/bootstrap.min.css")
      : null
    typeof window !== undefined
      ? setScreenWindow(window.screen)
      : console.log("no window")
  }, [])

  const styleChoicePartecipaContainer = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "column",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "column",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "column",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
      }
    }
  }

  if (screenWindow !== "") {
    console.log(screenWindow)
    return (
      <div
        className="styleChoicePartecipaContainer" /* style={styleChoiceCard()} */
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#e4f9f6",
          marginBlockStart: "40px",
          paddingBlock: "40px",
        }}
      >
        <div
          className="contentColumn"
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingBlock: "10%",
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  paddingBlock: "5%",
                  paddingInline: "5%",
                }
          }
        >
          <div style={{ paddingInline: "50px" }}>
            <Image
              src="https://i.ibb.co/G0pCRcY/Illustrazione-investi.png"
              alt="illustrazione"
              width="597"
              height="324"
            />
          </div>
          <div
            style={
              screenWindow.width < 768
                ? {
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "80vw",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "30vw",
                  }
            }
          >
            <p
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "1.6em",
                      marginInline: "0px",
                      textAlign: "left",
                    }
                  : {
                      fontSize: "2em",
                      padding: "0px",
                      marginInline: "0px",
                      textAlign: "left",
                    }
              }
            >
              {`Partecipa al cambiamento`}
            </p>

            <p
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "0.8em",
                      marginInline: "0px",
                      textAlign: "left",
                    }
                  : {
                      fontSize: "0.8em",
                      padding: "0px",
                      margin: "0px",
                      textAlign: "left",
                      paddingBlockEnd: "10px",
                    }
              }
            >
              {`Vogliamo creare una nuova realtà che esalti il turismo 
e l’accessibilità. 
é il tuo campo?  `}
            </p>
            <div
              className={styles.nakedElement}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <MainButton cta={`CONTATTACI`} />
            </div>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBlock: "20px",
                marginInline: "0px",
                paddingInline: "0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <Image
                    src="https://i.ibb.co/m9svSwD/Pulsante-App-Store.png"
                    alt="QR Code to travelin"
                    width="263"
                    height="78"
                  />
                </div>
                <div>
                  <Image
                    src="https://i.ibb.co/m9svSwD/Pulsante-App-Store.png"
                    alt="QR Code to travelin"
                    width="263"
                    height="78"
                  />
                </div>
              </div>
              <div style={{ paddingInline: "5px" }}>
                <Image
                  src="https://i.ibb.co/ncrKLFc/QRCODE.png"
                  alt="QR Code to travelin"
                  width="163"
                  height="157"
                />
              </div>
            </div> */}
          </div>
          {/* <div
            style={
              screenWindow.width < 768
                ? { maxWidth: "80vw" }
                : {
                    maxWidth: "50vw",
                    marginInlineStart: "80px",
                    marginBlockStart: "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }
            }
          >
            <p
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "0.8em",
                      padding: "0px",
                      marginInline: "0px",
                      textAlign: "left",
                    }
                  : {
                      fontSize: "0.8em",
                      padding: "0px",
                      margin: "0px",
                      textAlign: "left",
                      paddingBlockEnd: "30px",
                    }
              }
            >
              {`Il turismo è in crescita: `}
              <b>{`+42%`}</b>
              <br></br>

              <b>{`131 MLN `}</b>
              {`di turisti`}
              <br></br>
              <b>{`3.1 MLN `}</b>
              {`di persone con disabilità.`}
            </p>
            <MainButton cta={`INVESTI ORA`} />
            <p
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "0.8em",
                      padding: "0px",
                      marginInline: "0px",
                      textAlign: "left",
                    }
                  : {
                      fontSize: "0.6em",
                      padding: "0px",
                      margin: "0px",
                      textAlign: "left",
                      paddingBlockStart: "30px",
                    }
              }
            >
              {`Fonti: Agenzia Giornalistica Italia, Ttg Italia, Istat`}
            </p>
          </div> */}
        </div>
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Partecipa

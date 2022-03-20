import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
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
            alt="Home"
            width="90px"
            height="18px"
          />

          <div>Chi siamo</div>
        </div>
        <div
          className={styles.vetrina}
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingBlock: "5%",
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingBlock: "5%",
                  paddingInline: "10%",
                }
          }
        >
          <div
            style={
              screenWindow.width < 768
                ? {
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "50vw",
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
                      paddingInline: "0px",
                      marginInline: "0px",
                    }
                  : {
                      fontSize: "1.6em",
                      paddingInline: "16px",
                      marginInline: "0px",
                    }
              }
            >
              {`C'è un mondo da scoprire intorno a te.`}{" "}
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
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
            </div>
          </div>
          <div
            style={
              screenWindow.width < 768
                ? { maxWidth: "30vw" }
                : { maxWidth: "20vw" }
            }
          >
            <Image
              src="https://i.ibb.co/xhgcg1v/mock-up-travelin-ritaglio.png"
              alt="mockup travelin"
              width="537"
              height="1071"
            />
          </div>
        </div>
        <div
          className="description"
          style={{
            backgroundColor: "#004267",
            paddingBlockStart: "1rem",
            marginBlockStart: "-8px",
          }}
        >
          <p
            className={styles.white}
          >{`Esplora la bellezza dell'Italia attraverso itinerari ed esperienze uniche. Immergiti in ciò che ti circonda, crea itinerari e guarda quelli di guide turistiche e altri utenti.`}</p>
        </div>
      </header>
    )
  } else {
    return <p>loading</p>
  }
}
export default Header

import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
const Explore = ({ children }) => {
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
      <div
        style={
          screenWindow.width < 768
            ? {
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                justifyContent: "space-around",
                paddingBlock: "5%",
              }
            : {
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
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
                    padding: "0px",
                    margin: "0px",
                    textAlign: "left",
                  }
                : {
                    fontSize: "2.6em",
                    padding: "0px",
                    marginInline: "0px",
                    textAlign: "left",
                  }
            }
          >
            {`Esplora l'Italia`}
          </p>
          <p
            style={
              screenWindow.width < 768
                ? {
                    fontSize: "0.8em",
                    padding: "0px",
                    margin: "0px",
                    textAlign: "left",
                  }
                : {
                    fontSize: "1.8em",
                    padding: "0px",
                    margin: "0px",
                    textAlign: "left",
                    paddingBlockEnd: "10px",
                  }
            }
          >{`C'è un mondo da scoprire intorno a te.`}</p>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBlockStart: "20px",
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
        <div
          style={
            screenWindow.width < 768
              ? { maxWidth: "70vw" }
              : {
                  maxWidth: "25vw",
                  marginInlineStart: "40px",
                }
          }
        >
          <Image
            src="https://i.ibb.co/FJsBRXW/Illustrazione-app.png"
            alt="mascotte travelin"
            width="1154"
            height="1177"
          />
        </div>
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Explore

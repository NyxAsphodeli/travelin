import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import HowToCard from "./cards/HowToCard"
/* 
 https://i.ibb.co/VVRkB7G/Scopri-576-862.png
 https://i.ibb.co/7zgY4xW/Esplora-576-862.png
 https://i.ibb.co/FVNfSbn/Immergiti-576-862.png

 https://i.ibb.co/Dg9F5qw/beautiful-Penguin-Girl.jpg
https://i.ibb.co/72sf5LS/ice-Penguin-Cream.jpg
*/
const Body = ({ children }) => {
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
        className="funzionamentoValori"
        style={
          screenWindow.width < 768
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                padding: "0px",
                margin: "0px",
                marginBlockEnd: "40px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                paddingInlineStart: "0px",
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
                  marginInlineStart: "-20vw",
                  textAlign: "left",
                  marginBlock: "20px",
                }
          }
        >
          <b> {`Come funziona Travelin?`}</b>
        </p>
        <div
          style={
            screenWindow.width < 768
              ? { display: "flex", flexDirection: "column", width: "80%" }
              : {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }
          }
        >
          <HowToCard
            title={"Scopri"}
            text={`Prova gli itinerari creati dagli altri utenti, creane di tuoi e condividili.`}
            image={`https://i.ibb.co/VVRkB7G/Scopri-576-862.png`}
          />
          <HowToCard
            title={"Immergiti"}
            text={`Voci e testi ti guideranno. Immergiti nel racconto dei vari luoghi.`}
            image={`https://i.ibb.co/FVNfSbn/Immergiti-576-862.png`}
          />
          <HowToCard
            title={"Esplora"}
            text={`Colleziona esperienze uniche. Esplora angoli nascosti e caratteristici.`}
            image={`https://i.ibb.co/7zgY4xW/Esplora-576-862.png`}
          />
        </div>
        <p
          style={
            screenWindow.width < 768
              ? {
                  fontSize: "2rem",
                  marginInline: "0px",
                  textAlign: "left",
                }
              : {
                  fontSize: "2.4rem",
                  padding: "0px",
                  textAlign: "left",
                  marginBlock: "20px",
                  alignSelf: "flex-start",
                  paddingInlineStart: "0px !important",
                }
          }
        >
          <b> {`I suoi valori fondanti`}</b>
        </p>
        <div
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "column-reverse",
                  marginInline: "0px",
                  textAlign: "left",
                }
              : {
                  display: "flex",
                  flexDirection: "row",

                  fontSize: "2em",
                  padding: "0px",
                  textAlign: "left",
                  marginBlockEnd: "20px",
                }
          }
        >
          <div
            style={
              screenWindow.width < 768
                ? {
                    display: "flex",
                    flexDirection: "column",
                    marginInline: "0px",
                    textAlign: "left",
                    paddingInline: "5%",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",

                    fontSize: "2em",
                    padding: "0px",
                    textAlign: "left",
                    marginBlock: "20px",
                  }
            }
          >
            <p
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "1.6rem",
                      marginInline: "0px",
                      textAlign: "left",
                    }
                  : {
                      fontSize: "1.4rem",
                      padding: "0px",
                      textAlign: "left",
                      marginBlock: "20px",
                    }
              }
            >
              <b> {`Un turismo sostenibile`}</b>
            </p>
            <p
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "1rem",
                      marginInline: "0px",
                      textAlign: "left",
                    }
                  : {
                      fontSize: "1.2rem",
                      padding: "0px",
                      textAlign: "left",
                      marginBlock: "20px",
                    }
              }
            >
              {`Le `}
              <b>{`esperienze `}</b>
              {`indimenticabili sono quelle che ti mettono `}
              <b>{`in contatto con la gente `}</b>
              {`del luogo, le botteghe tipiche e le antiche `}
              <b>{`ricette di famiglia.`}</b>
              <br></br>
              <b>{`Il turismo sostenibile è sotto casa.`}</b>
            </p>
          </div>
          <div
            style={
              screenWindow.width < 768
                ? {
                    display: "flex",
                    flexDirection: "column",
                    marginInline: "0px",
                    textAlign: "left",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",

                    fontSize: "2em",
                    padding: "0px",
                    textAlign: "left",
                    marginBlock: "20px",
                  }
            }
          >
            <Image
              src="https://i.ibb.co/72sf5LS/ice-Penguin-Cream.jpg"
              alt="illustrazione"
              width="775"
              height="724"
            />
          </div>
        </div>
        <div
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "column",
                  marginInline: "0px",
                  textAlign: "left",
                }
              : {
                  display: "flex",
                  flexDirection: "row",

                  fontSize: "2em",
                  padding: "0px",
                  textAlign: "left",
                  marginBlock: "20px",
                }
          }
        >
          <div
            style={
              screenWindow.width < 768
                ? {
                    display: "flex",
                    flexDirection: "column",
                    marginInline: "0px",
                    textAlign: "left",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",

                    fontSize: "2em",
                    padding: "0px",
                    textAlign: "left",
                    marginBlock: "20px",
                  }
            }
          >
            <Image
              src="https://i.ibb.co/Dg9F5qw/beautiful-Penguin-Girl.jpg"
              alt="illustrazione"
              width="783"
              height="697"
            />
          </div>
          <div
            style={
              screenWindow.width < 768
                ? {
                    display: "flex",
                    flexDirection: "column",
                    marginInline: "0px",
                    textAlign: "left",
                    paddingInline: "5%",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",

                    fontSize: "2em",
                    padding: "0px",
                    textAlign: "left",
                    marginBlock: "20px",
                  }
            }
          >
            <p
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "1.6rem",
                      marginInline: "0px",
                      textAlign: "left",
                    }
                  : {
                      fontSize: "1.4rem",
                      padding: "0px",
                      textAlign: "left",
                      marginBlock: "20px",
                    }
              }
            >
              <b> {`Progettato per tutti`}</b>
            </p>
            <p
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "1rem",
                      marginInline: "0px",
                      textAlign: "left",
                    }
                  : {
                      fontSize: "1.2rem",
                      padding: "0px",
                      textAlign: "left",
                      marginBlock: "20px",
                    }
              }
            >
              {`La vita quotidiana è progettata per le persone comuni. Esistono però  `}
              <b>{`individua extra-ordinari `}</b>
              {`che ci permettono di `}
              <b>{`andare oltre `}</b>
              {`i limiti della nostra realtà`}
              <br></br>
              <b>{`Progettiamo tenendo in considerazione i bisogni di tutte le persone`}</b>
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Body

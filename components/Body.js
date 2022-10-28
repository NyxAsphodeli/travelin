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

  const styleChoiceFunzionamentoValori = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "0px",
        margin: "0px",
        marginBlockEnd: "20px",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        textAlign: "left",
        paddingInline: "20px",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        textAlign: "left",
        paddingInline: "40px",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        textAlign: "left",
        paddingInlineStart: "0px",
      }
    }
  }
  const styleChoiceHowToContainer = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80%",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80%",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "row",
        width: "80%",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80%",
      }
    }
  }
  const styleChoiceValoriFondantiContainer = () => {
    if (screenWindow.width <= 600) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginBlockStart: "40px",
      }
    } else if (screenWindow.width > 600 && screenWindow.width <= 1024) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginBlockStart: "40px",
      }
    } else if (screenWindow.width > 1024) {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginBlockStart: "40px",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginBlockStart: "40px",
      }
    }
  }
  if (screenWindow !== "") {
    console.log(screenWindow)
    return (
      <div
        className="funzionamentoValori"
        style={styleChoiceFunzionamentoValori()}
      >
        <p className={styles.nakedElement + " " + styles.howTitle}>
          <b> {`Come funziona Travelin?`}</b>
        </p>
        <div className="howToContainer" style={styleChoiceHowToContainer()}>
          <HowToCard
            title={"Scopri"}
            text={`Prova gli itinerari creati dagli altri utenti, creane di tuoi e condividili.`}
            image={`https://i.ibb.co/VVRkB7G/Scopri-576-862.png`}
          />
          <div className={styles.gap20} />
          <HowToCard
            title={"Immergiti"}
            text={`Voci e testi ti guideranno. Immergiti nel racconto dei vari luoghi.`}
            image={`https://i.ibb.co/FVNfSbn/Immergiti-576-862.png`}
          />
          <div className={styles.gap20} />
          <HowToCard
            title={"Esplora"}
            text={`Colleziona esperienze uniche. Esplora angoli nascosti e caratteristici.`}
            image={`https://i.ibb.co/7zgY4xW/Esplora-576-862.png`}
          />
        </div>
        <div
          className="valoriFondantiContainer"
          style={styleChoiceValoriFondantiContainer()}
        >
          <p
            className={styles.nakedElement + " " + styles.howTitle}
            /* style={
            screenWindow.width < 768
              ? null
              : {
                  fontSize: "2.4rem",
                  padding: "0px",
                  textAlign: "left",
                  marginBlockStart: "60px",
                  alignSelf: "flex-start",
                  paddingInlineStart: "0px !important",
                }
          } */
          >
            <b> {`I valori fondanti`}</b>
          </p>

          <div
            style={
              screenWindow.width < 768
                ? {
                    display: "flex",
                    flexDirection: "column-reverse",
                    marginInline: "0px",
                    textAlign: "left",
                    marginInline: "5%",
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
                      paddingInline: "20%",
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
                    marginInline: "5%",
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
                      paddingInline: "20%",
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
                {`L'`}
                <b>{`accessibilità `}</b>
                {`è la  `}
                <b>{`chiave `}</b>
                {`per permettere alle personedi vivere avventure `}
                <b>{`con i propri tempi e spazi, `}</b>
                {`tenendo in condiderazione i loro sogni e bisogni `}
                <br></br>
                <b>{`Progettiamo con occhio attento e mente aperta`}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Body

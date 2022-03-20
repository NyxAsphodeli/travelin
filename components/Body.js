import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import HowToCard from "./cards/HowToCard"
/* 
 https://i.ibb.co/VVRkB7G/Scopri-576-862.png
 https://i.ibb.co/7zgY4xW/Esplora-576-862.png
 https://i.ibb.co/FVNfSbn/Immergiti-576-862.png
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
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                paddingInline: "20%",
              }
        }
      >
        <p
          style={{
            fontSize: "2em",
            textAlign: "left",
            paddingInline: "0px",
            marginInline: "0px",
          }}
        >
          Come funziona Travelin?
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
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Body

/* 

      <body
        style={
          screenWindow.width < 768
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                padding: "0px",
                margin: "0px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                paddingInline: "20%",
              }
        }
      >
      </body>


*/

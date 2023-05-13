import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import perLeAziendeModule from "../styles/per-le-aziende.module.css"

import { useRouter } from "next/router"
import bg from "../public/bg.png"
import bgBig from "../public/bgBig.png"
import homeMockup from "../public/home-mockup.png"
import esperienzesulterritorio from "../public/esperienzesulterritorio.png"
import viaggiasenzalimiti from "../public/viaggiasenzalimiti.png"
import loghiesperienzesulterritorio from "../public/loghiesperienzesulterritorio.png"
import universaldesign from "../public/universaldesign.png"
import community0 from "../public/community0.png"
import community from "../public/community.png"
import filtraperincludere from "../public/filtraperincludere.png"
import viaggiainclusivo from "../public/viaggiainclusivo.png"

const ViaggiaInclusivoOnePage = ({ children }) => {
  const [screenWindow, setScreenWindow] = useState("")
  const [backgroundImage, setBackgroundImage] = useState({ bg })
  // countdown date
  const [countdownTime, setCountdownTime] = useState("")
  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor(duration / (1000 * 60 * 60 * 24))

    days = days < 10 ? "0" + days : days
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    return "-" + days + " g : " + hours + " ore : " + minutes + "m"
  }
  useEffect(() => {
    const ms = Math.abs(new Date(2023, 4, 19) - new Date())
    setCountdownTime(msToTime(ms))

    const intervalId = setInterval(() => {
      const ms = Math.abs(new Date(2023, 4, 19) - new Date())
      setCountdownTime(msToTime(ms))
    }, 60000)

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  })
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
      <header style={{ width: "100%" }}>
        <div
          className="imgASinistra"
          style={{
            display: "flex",
            flexDirection: screenWindow.width > 600 ? "row" : "column",
            alignItems: "center",
            marginBlock: "60px",
          }}
        >
          <div className="ViaggiaInclusivo" style={{ paddingInline: "20px" }}>
            <div style={{ width: screenWindow.width < 600 ? "100%" : "50%" }}>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBlockEnd: "30px",
                }}
              >
                Viaggia Inclusivo
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  textAlign: "start",
                  margin: 0,
                  marginBlockEnd: "30px",
                }}
              >
                Il turismo inclusivo è fare in modo che tutti possano viaggiare
                e scoprire il mondo in modo sicuro e senza barriere di alcun
                tipo.
                <br></br>
                <br></br>
                Vogliamo che tutti (amanti degli animali, celiaci, ciechi,
                persone in carrozzina...ecc.) possano godersi il viaggio senza
                troppe ansie.
                <br></br>
              </p>
            </div>
          </div>
          <Image
            src={viaggiainclusivo}
            alt="travelin app local viaggia inclusivo"
            width="485px"
            height="600px"
            objectFit="contain"
          />
        </div>
        <div
          className="imgADestra"
          style={{
            display: "flex",
            flexDirection: screenWindow.width > 600 ? "row" : "column-reverse",
            alignItems: "center",
            marginBlock: "60px",
          }}
        >
          <Image
            src={filtraperincludere}
            alt="travelin app local filtraperincludere mockup"
            width="607px"
            height="600px"
            objectFit="contain"
          />
          <div
            className="Filtra per includere"
            style={{
              paddingInline: "20px",
              width: screenWindow.width < 600 ? "100%" : "50%",
            }}
          >
            <div style={{}}>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBlockEnd: "30px",
                }}
              >
                Filtra per includere
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  textAlign: "start",
                  margin: 0,
                  marginBlockEnd: "30px",
                }}
              >
                Non possiamo abbattere muri né costruire ponti, ma possiamo
                darti gli strumenti per trovare facilmente i luoghi che fanno al
                caso tuo.
                <br></br>
                <br></br>
                Abbiamo creato dei filtri accessibilità! Scegli una località e
                troverai in un tap: ristoranti per celiaci, vegani ed
                intolleranti, strutture che consentono l’accesso a carrozine e
                passeggini, musei dove poter entrare con il tuo amico a 4
                zampe...ecc.
              </p>
            </div>
          </div>
        </div>
        <h1
          style={{ fontSize: "28px", fontWeight: "700", textAlign: "center" }}
        >
          Universal Design
        </h1>
        <div
          className="imgADestra"
          style={{
            display: "flex",
            flexDirection: screenWindow.width > 600 ? "row" : "column",
            alignItems: "flex-start",
            marginBlockEnd: "60px",
            marginBlockStart: "30px",
          }}
        >
          <Image
            src={universaldesign}
            alt="travelin app local universaldesign mockup"
            width="503px"
            height="106px"
            objectFit="contain"
          />

          <div
            className="Universal Design"
            style={{
              paddingInline: "20px",
              width: screenWindow.width < 600 ? "100%" : "50%",
            }}
          >
            <div style={{}}>
              <p style={{ fontSize: "16px", textAlign: "start", margin: 0 }}>
                Il design di Travelin è stato progettato per essere accessibile
                e fruibile da tutti, indipendentemente dalle disabilità o dalle
                necessità specifiche che si possono avere.
              </p>
            </div>
          </div>
        </div>
        <div
          className="imgASinistra"
          style={{
            display: "flex",
            flexDirection: screenWindow.width > 600 ? "row" : "column-reverse",
            alignItems: "center",
            marginBlock: "60px",
          }}
        >
          <div
            className="Esperienze sul territorio"
            style={{
              paddingInline: "20px",
              width: screenWindow.width < 600 ? "100%" : "50%",
            }}
          >
            <div style={{}}>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBlock: "30px",
                }}
              >
                Esperienze sul territorio
              </h1>
              <p style={{ fontSize: "16px", textAlign: "start", margin: 0 }}>
                All’interno di Travelin troverai i servizi dei nostri partners,
                aziende ed associazioni che ti offriranno soluzioni concrete per
                viaggiare inclusivo. <br></br>
                <br></br>
              </p>
              <Image
                src={loghiesperienzesulterritorio}
                alt="loghi"
                width={480}
                height={173}
              />
            </div>
          </div>
          <Image
            src={esperienzesulterritorio}
            alt="travelin app local esperienzesulterritorio mockup"
            width="607px"
            height="600px"
            objectFit="contain"
          />
        </div>
        <div
          className="imgADestra"
          style={{
            display: "flex",
            flexDirection: screenWindow.width > 600 ? "row" : "column-reverse",
            alignItems: "center",
            marginBlock: "60px",
          }}
        >
          <Image
            src={viaggiasenzalimiti}
            alt="travelin app local communviaggiasenzalimitiity mockup"
            width="611px"
            height="604px"
            objectFit="contain"
          />
          <div
            className="Viaggia senza limiti"
            style={{
              paddingInline: "20px",
              width: screenWindow.width < 600 ? "100%" : "50%",
            }}
          >
            <div style={{}}>
              <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
                Viaggia senza limiti
              </h1>
              <p style={{ fontSize: "16px", textAlign: "start", margin: 0 }}>
                Crea la tua nuova avventura!
              </p>
              <br></br>
            </div>
            <div>
              <h3 style={{ fontSize: "16px", fontVariant: "all-small-caps" }}>
                COUNT DOWN:
              </h3>
              <h3
                className={perLeAziendeModule.titleH3}
                style={{
                  fontWeight: 700,
                  margin: 0,
                  marginTop: 8,
                }}
              >
                {countdownTime}
              </h3>
              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px 28px",
                  gap: "10px",
                  background: "#2A36D8",
                  color: "#ffffff",
                  borderRadius: "5px",
                  width: "70%",
                  marginBlock: "20px",
                }}
              >
                Resta aggiornato
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  } else {
    return <p>loading</p>
  }
}
export default ViaggiaInclusivoOnePage

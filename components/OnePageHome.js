import React, { useEffect, useState } from "react"
import Image from "next/image"
import perLeAziendeModule from "../styles/per-le-aziende.module.css"
import { useRouter } from "next/router"
import bg from "../public/bg.png"
import bgBig from "../public/bgBig.png"
import homeMockup from "../public/home-mockup.png"
import viaggiaAModoTuo from "../public/viaggia-a-modo-tuo.png"
import viaggiaAModoTuo0 from "../public/viaggia-a-modo-tuo0.png"
import localExperience from "../public/local-experience.png"
import localExperience0 from "../public/local-experience0.png"
import community0 from "../public/community0.png"
import community from "../public/community.png"
import esploraSmart from "../public/esplora-smart.png"
import esploraSenzaLimiti from "../public/esplora-senza-limiti.png"
import milano from "../public/milano.png"
import roma from "../public/roma.png"
import torino from "../public/torino.png"
import flussoUtente from "../public/flussoUtente.png"

const OnePageHome = ({ children }) => {
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBlock: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection:
                screenWindow.width > 600 ? "row" : "column-reverse",
              alignItems: "center",
              marginBlockEnd: "30px",
            }}
          >
            <div className="description" style={{ paddingInline: "20px" }}>
              <div style={{ width: "50vw" }}>
                <h1
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBlockStart: "60px",
                  }}
                >
                  Viaggia senza limiti
                </h1>
                <h2 style={{ fontSize: "16px", marginBlockEnd: "30px" }}>
                  Scopri, crea e condividi i tuoi itinerari
                </h2>
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
              </div>
            </div>
            <Image
              src={homeMockup}
              alt="travelin app homepage mockup"
              width="385.8px"
              height="506.4px"
              style={{ position: "absolute", right: "0" }}
              objectFit="contain"
            />
          </div>
          <Image
            src={flussoUtente}
            alt="Esplora, crea itinerari e condividili!"
            width="3024px"
            height="282px"
            style={{ position: "absolute", left: "0", bottom: "0" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: screenWindow.width > 600 ? "row" : "column-reverse",
            marginBlock: "60px",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              width: screenWindow.width < 600 ? "100%" : "25%",
              marginInline: screenWindow.width < 600 ? "20px" : "0px",
              marginBlockStart: screenWindow.width < 600 ? "20px" : "0px",
            }}
          >
            <Image
              src={viaggiaAModoTuo0}
              alt="viaggia a modo tuo"
              width="101px"
              height="100px"
            />
            <h3
              style={{
                fontSize: "18px",
                marginBlockStart: screenWindow.width < 600 ? "20px" : "0px",
              }}
            >
              Viaggia a modo tuo
            </h3>
            <p>
              Viaggia seguendo il tuo mood. Rendi i tuoi desideri e bisogni
              l’inizio di una nuova avventura.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              width: screenWindow.width < 600 ? "100%" : "25%",
              marginInline: screenWindow.width < 600 ? "20px" : "0px",
              marginBlockStart: screenWindow.width < 600 ? "20px" : "0px",
            }}
          >
            <Image
              src={localExperience0}
              alt="Local experience"
              width="101px"
              height="100px"
            />
            <h3
              style={{
                fontSize: "18px",
                marginBlockStart: screenWindow.width < 600 ? "20px" : "0px",
              }}
            >
              Local experience
            </h3>
            <p>
              Affidati alla competenza delle guide turistiche locali e scopri le
              realtà tipiche del territorio.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              width: screenWindow.width < 600 ? "100%" : "25%",
              marginInlineStart: screenWindow.width < 600 ? "20px" : "0px",
              marginBlockStart: screenWindow.width < 600 ? "20px" : "0px",
            }}
          >
            <Image
              src={community0}
              alt="Community"
              width="101px"
              height="100px"
            />
            <h3
              style={{
                fontSize: "18px",
                marginBlockStart: screenWindow.width < 600 ? "20px" : "0px",
              }}
            >
              Community
            </h3>
            <p>
              Condividi viaggi ed itinerari con gli amici. Leggi le recensioni
              per garantirti ottime esperienze.
            </p>
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
            className="Esplora"
            style={{
              paddingInline: "20px",
              marginBlockStart: screenWindow.width < 600 ? "60px" : "0px",
            }}
          >
            <div style={{ width: screenWindow.width < 600 ? "100%" : "100%" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
                Esplora smart
              </h1>
              <p style={{ fontSize: "16px", textAlign: "start", margin: 0 }}>
                Immergiti nella cutura dei luoghi che ti circondano.
                <br></br>
                <br></br>
                Porta la curiosità in vacanza, scopri le storie e le stranezze
                dei luoghi intorno a te, attraverso testi leggeri e suggestive
                tracce audio.
                <br></br>
                <br></br>
                Abbiamo già digitalizzato i posti magici di{" "}
                <b>Milano, Torino, Roma</b> e molti altri sono in arrivo.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10",
                marginBlockStart: "20px",
                flexDirection: screenWindow.width > 600 ? "row" : "column",
                alignItems: "center",
              }}
            >
              <Image
                src={milano}
                alt="Milano"
                width="185px"
                height="150px"
                style={{ paddingInlineEnd: "3px" }}
              />
              <Image src={torino} alt="Torino" width="185px" height="150px" />
              <Image
                src={roma}
                alt="Roma"
                width="185px"
                height="150px"
                style={{ paddingInlineStart: "3px" }}
              />
            </div>
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 28px",
                gap: "10px",
                background: "#2A36D8",
                color: "#ffffff",
                borderRadius: "5px",
                marginBlock: "20px",
                width: "70%",
              }}
            >
              Guarda la demo
            </button>
          </div>
          <Image
            src={esploraSmart}
            alt="travelin app esplora mockup"
            width="508px"
            height="790px"
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
            src={viaggiaAModoTuo}
            alt="travelin app local viaggia a modo tuo mockup"
            width="607px"
            height="600px"
            objectFit="contain"
          />
          <div
            className="Viaggia a modo tuo"
            style={{
              paddingInline: "20px",
              marginBlockEnd: screenWindow.width < 600 ? "20px" : "0px",
            }}
          >
            <div style={{ width: screenWindow.width < 600 ? "100%" : "100%" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
                Viaggia a modo tuo
              </h1>
              <p style={{ fontSize: "16px", textAlign: "start", margin: 0 }}>
                Esplora nuove città e paesi seguendo il tuo mood. Crea
                facilmente degli itinerari filtrando i luoghi che più ti
                piacciono e che corrispondono alle tue esigenze.
                <br></br>
                <br></br>
                Elimina lo stress superfluo, con Travelin è tutto più semplice.
                Potrai sapere in un tap dove: portare il tuo amico a quattro
                zampe, mangiare green, accedere con la carrozzina...ecc. C’è un
                filtro per semplificare la vita di tutti, perchè il nostro motto
                è viaggia inclusivo.
              </p>
            </div>
          </div>
        </div>
        <div
          className="imgASinistra"
          style={{
            display: "flex",
            flexDirection: screenWindow.width > 600 ? "row" : "column",
            alignItems: "center",
            marginBlock: "60px",
          }}
        >
          <div
            className="Local experience"
            style={{
              paddingInline: "20px",
              marginBlockEnd: screenWindow.width < 600 ? "20px" : "0px",
            }}
          >
            <div style={{ width: screenWindow.width < 600 ? "100%" : "100%" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
                Local experience
              </h1>
              <p style={{ fontSize: "16px", textAlign: "start", margin: 0 }}>
                Affidati alla competenza delle guide turistiche del territorio,
                ti rivelaranno strani segreti sulle vie di città e piccoli
                borghi. <br></br>
                <br></br>
                <br></br>
                Contribuirai così all’economia delle zone meno inflazionate e
                potrai conoscere le piccole e tipiche realtà del posto, evitando
                le trappole per turisti.
              </p>
            </div>
          </div>
          <Image
            src={localExperience}
            alt="travelin app local experience mockup"
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
            src={community}
            alt="travelin app local community mockup"
            width="611px"
            height="604px"
            objectFit="contain"
          />
          <div
            className="Community"
            style={{
              paddingInline: "20px",
              marginBlockEnd: screenWindow.width < 600 ? "20px" : "0px",
            }}
          >
            <div style={{ width: screenWindow.width < 600 ? "100%" : "100%" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "700" }}>Community</h1>
              <p style={{ fontSize: "16px", textAlign: "start", margin: 0 }}>
                Non sarai solo, la community è al tuo fianco. Scopri gli
                itinerari che hanno creato gli altri utenti e condividi i tuoi
                con gli amici.
                <br></br>
                <br></br>
                Consulta le recensioni di luoghi, locali ed attività, per avere
                la garanzia di trovarti nel posto giusto al momento giusto.
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
            marginBlockStart: "60px",
          }}
        >
          <Image
            src={esploraSenzaLimiti}
            alt="travelin app local esplora senza limiti mockup"
            width="611px"
            height="604px"
            objectFit="contain"
          />
          <div
            className="Esplora senza limiti"
            style={{ paddingInline: "20px" }}
          >
            <div style={{ width: screenWindow.width < 600 ? "100%" : "100%" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
                Esplora senza limiti
              </h1>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                Crea la tua nuova avventura!
              </p>
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
export default OnePageHome

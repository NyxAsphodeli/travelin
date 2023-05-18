import Head from "next/head"
import Contatti from "./contatti"
import Navbar from "../components/Navbar"
import peopleOnMountainImage from "../public/people-on-mountain.png"
import Image from "next/image"
import perLeAziendeModule from "../styles/per-le-aziende.module.css"
import icon1 from "../public/carousel-icon-1.png"
import icon2 from "../public/carousel-icon-2.png"
import icon3 from "../public/carousel-icon-3.png"
import pubWithReviewsImage from "../public/pub-with-reviews.png"
import { useEffect, useState } from "react"
import signIcon from "../public/sign-icon.png"
import supportersLogoBig from "../public/supporters-logos-big.png"
import supportersLogoSmall from "../public/supporters-logos-small.png"
import cardGradientWallpaper from "../public/card-gradient-wallpaper.png"
import panchinaDegliInnamorati from "../public/panchina-degli-innamorati.png"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
const PerLeAziende = () => {
  const router = useRouter()
  const defaultTextColor = "#02030C"

  // event on window resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

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

  return (
    <>
      <Head>
        <title>Travelin</title>
        <link rel="icon" href="https://i.ibb.co/Cb640PJ/Logo-White-Bg.png" />
        <meta
          name="description"
          property="og:description"
          content={`Travelin official website`}
        />
        <meta property="og:image" content="../public/Logo.png" />
        <meta name="og:title" content="Travelin" />
      </Head>
      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          top: "0px",
          left: "0px",
        }}
      >
        <Navbar active={"per-le-aziende"} />
        <header style={{ width: "100%" }}>
          <div className={perLeAziendeModule.main}>
            <div
              className={perLeAziendeModule.header}
              style={{
                maxWidth: "100%",
                display: "flex",
              }}
            >
              <div
                className={perLeAziendeModule.headerItem}
                style={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1
                  className={perLeAziendeModule.title}
                  style={{
                    fontWeight: 800,
                    color: defaultTextColor,
                    margin: 0,
                  }}
                >
                  Se lavori nel turismo
                </h1>
                <p
                  className={perLeAziendeModule.subtitle}
                  style={{
                    fontWeight: 700,
                    color: defaultTextColor,
                    margin: 0,
                    lineHeight: "34px",
                  }}
                >
                  E crei attività esperienziali
                </p>
                <p
                  style={{
                    fontSize: 16,
                    color: defaultTextColor,
                    margin: 0,
                    fontWeight: 400,
                    marginTop: 24,
                  }}
                >
                  Iscriviti al nostro portale e porta la tua attività ad un
                  nuovo livello!
                </p>
                <p
                  style={{
                    fontSize: 16,
                    color: defaultTextColor,
                    margin: 0,
                    fontWeight: 400,
                    marginTop: 24,
                  }}
                >
                  Raggiungi{" "}
                  <span style={{ fontWeight: 700 }}>nuovi clienti</span>,
                  espandi la tua{" "}
                  <span style={{ fontWeight: 700 }}>visibilità</span> online e{" "}
                  <span style={{ fontWeight: 700 }}>gestisci facilmente</span>{" "}
                  tutto attraverso Travelin, una piattaforma intuitiva.
                </p>
              </div>
              <div
                className={
                  perLeAziendeModule.headerItem +
                  " " +
                  perLeAziendeModule.headerItemImage
                }
                style={{
                  width: "60%",
                  position: "relative",
                }}
              >
                <Image
                  src={peopleOnMountainImage}
                  alt="Gruppo di persone che ridono con una montagna rocciosa di sfondo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
              className={perLeAziendeModule.iconsContainer}
            >
              <CarouselIcon
                title="Raggiungi le nicchie"
                subtitle="Espandi il tuo pubblico, raggiungi nuove persone interessate ai tuoi servizi."
                image={icon1}
              />
              <CarouselIcon
                title="Ottieni visibilità"
                subtitle="Metti in mostra il tuo lavoro e dai risalto alle tue competenze."
                image={icon2}
              />
              <CarouselIcon
                title="Gestisci facile"
                subtitle="Tutto è in tuo controllo.
              Gestisci facilente clienti e prenotazioni."
                image={icon3}
              />
            </div>
            <div
              className={perLeAziendeModule.header}
              style={{
                maxWidth: "100%",
                display: "flex",
                marginTop:
                  windowWidth > 1600
                    ? 66
                    : windowWidth > 1200
                    ? 0
                    : windowWidth > 1100
                    ? -50
                    : windowWidth > 1040
                    ? -80
                    : windowWidth < 993
                    ? 50
                    : 0,
              }}
            >
              {windowWidth > 992 ? (
                <div
                  className={
                    perLeAziendeModule.headerItem +
                    " " +
                    perLeAziendeModule.headerItemImage2
                  }
                  style={{
                    width: "50%",
                    position: "relative",
                  }}
                >
                  <Image
                    src={pubWithReviewsImage}
                    alt="Pub con un ragazza e un ragazzo che si scattano un selfie e delle recensioni positive in sovraimpressione"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ) : null}
              <div
                className={perLeAziendeModule.headerItem2}
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2
                  className={perLeAziendeModule.titleH2}
                  style={{
                    fontWeight: 800,
                    color: defaultTextColor,
                    margin: 0,
                  }}
                >
                  Conquista nuovi clienti e fatti notare
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: defaultTextColor,
                    margin: 0,
                    fontWeight: 400,
                    marginTop: 24,
                  }}
                >
                  Ti offriamo la{" "}
                  <span style={{ fontWeight: 700 }}>visibilità che meriti</span>
                  . <span style={{ fontWeight: 700 }}>Amplia</span> facilmente{" "}
                  <span style={{ fontWeight: 700 }}>la tua clientela</span>.
                  Grazie all’alta accessibilità della piattaforma nuove persone
                  inizieranno a viaggiare, sii il primo a conquistarle.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    color: defaultTextColor,
                    margin: 0,
                    fontWeight: 400,
                    marginTop: 24,
                  }}
                >
                  Attraverso una{" "}
                  <span style={{ fontWeight: 700 }}>gestione</span> semplice ed{" "}
                  <span style={{ fontWeight: 700 }}>intuitiva</span> delle tue
                  attività, potrai concentrarti sul soddisfare i clienti,
                  fornendo loro i tuoi servizi di alta qualità.
                </p>
              </div>
              {windowWidth < 993 ? (
                <div
                  className={
                    perLeAziendeModule.headerItem +
                    " " +
                    perLeAziendeModule.headerItemImage2
                  }
                  style={{
                    width: "50%",
                    position: "relative",
                  }}
                >
                  <Image
                    src={pubWithReviewsImage}
                    alt="Pub con un ragazza e un ragazzo che si scattano un selfie e delle recensioni positive in sovraimpressione"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ) : null}
            </div>
            <div
              className={perLeAziendeModule.partecipaContainer}
              style={{
                width: "100vw",
                height: "auto",
                backgroundColor: "#E1E8FD",
                marginTop:
                  windowWidth > 1400
                    ? 80
                    : windowWidth > 1250
                    ? -20
                    : windowWidth > 1150
                    ? 0
                    : windowWidth > 992
                    ? -40
                    : windowWidth < 550 && windowWidth > 450
                    ? -40
                    : windowWidth < 451
                    ? 20
                    : 64,
                paddingTop: windowWidth > 450 ? 54 : 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                className={perLeAziendeModule.titleH3}
                style={{
                  fontWeight: 700,
                  color: defaultTextColor,
                  textAlign: "center",
                }}
              >
                Partecipa! NON ci sono commissioni
              </h3>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: windowWidth > 992 ? "row" : "column",
                  marginTop: 48,
                  alignItems: windowWidth > 992 ? undefined : "center",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: windowWidth > 992 ? 256 : 200,
                      height: windowWidth > 992 ? 200 : 156,
                      marginBottom: windowWidth > 992 ? 0 : 40,
                    }}
                  >
                    <Image src={signIcon} />
                  </div>
                </div>
                <div
                  style={{
                    width:
                      windowWidth > 992
                        ? "50%"
                        : windowWidth > 450
                        ? "60%"
                        : "80%",
                    textAlign: windowWidth > 450 ? "left" : "center",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: windowWidth > 992 ? "10%" : 0,
                    paddingRight: windowWidth > 992 ? "10%" : 0,
                    alignItems: windowWidth > 992 ? undefined : "center",
                  }}
                >
                  <p
                    style={{
                      color: defaultTextColor,
                      fontSize: 16,
                      lineHeight: "26px",
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>
                      Iscriviti gratuitamente
                    </span>{" "}
                    a Travelin!
                    <br />
                    Ti basterà compilare un{" "}
                    <span style={{ fontWeight: 700 }}>
                      veloce questionario
                    </span>{" "}
                    sulla tua attività. Non pagherai nessuna comissione.
                  </p>
                  <div
                    style={{
                      width: 200,
                      height: 68,
                      backgroundColor: "#2A36D8",
                      borderRadius: 8,
                      marginTop: windowWidth > 450 ? 46 : 30,
                      color: "white",
                      fontSize: 18,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "1px 4px 20px rgba(158, 165, 255, 0.6)",
                    }}
                    onClick={() => {
                      window.open("https://form.jotform.com/231156500603039")
                    }}
                  >
                    COMPILALO
                  </div>
                </div>
              </div>
              <div style={{ height: 60 }} />
            </div>
            <h3
              className={perLeAziendeModule.titleH3}
              style={{
                fontWeight: 700,
                color: defaultTextColor,
                textAlign: "center",
                marginTop: windowWidth > 992 ? 64 : 50,
              }}
            >
              Sono al nostro fianco
            </h3>
            <div style={{ width: "100%", marginTop: 32 }}>
              <Image
                src={
                  windowWidth > 900 ? supportersLogoBig : supportersLogoSmall
                }
              />
            </div>
            <div
              className={perLeAziendeModule.partecipaContainer}
              style={{
                width: "100vw",
                marginTop: 80,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: windowWidth > 800 ? "row" : "column",
                  justifyContent: "center",
                  alignItems: windowWidth > 800 ? undefined : "center",
                  gap: windowWidth > 800 ? 62 : 32,
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width:
                      windowWidth > 800
                        ? "35%"
                        : windowWidth > 550
                        ? "60%"
                        : "86%",
                    backgroundColor: "white",
                    borderRadius: 16,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingInline: 42,
                    border: "1px solid #02030C",
                    marginTop: 48,
                    marginBottom: windowWidth > 800 ? 48 : 0,
                  }}
                >
                  <h3
                    className={perLeAziendeModule.titleH3}
                    style={{
                      fontWeight: 700,
                      color: defaultTextColor,
                      textAlign: "center",
                      marginTop: 42,
                    }}
                  >
                    Operatori turistici
                  </h3>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 18,
                      lineHeight: "26px",
                      marginTop: 8,
                      marginBottom: 42,
                      color: defaultTextColor,
                    }}
                  >
                    Organizza facilmente visite turistiche e tour guidati.
                    <br />
                    Mostra ad un nuovo pubblico tutta la tua professionalità e
                    competenza.
                  </p>
                </div>
                <div
                  style={{
                    width:
                      windowWidth > 800
                        ? "35%"
                        : windowWidth > 550
                        ? "60%"
                        : "86%",
                    backgroundColor: "white",
                    borderRadius: 16,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingInline: 42,
                    border: "1px solid #02030C",
                    marginTop: windowWidth > 800 ? 48 : 0,
                    marginBottom: 48,
                  }}
                >
                  <h3
                    className={perLeAziendeModule.titleH3}
                    style={{
                      fontWeight: 700,
                      color: defaultTextColor,
                      textAlign: "center",
                      marginTop: 42,
                    }}
                  >
                    Aziende locali
                  </h3>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 18,
                      lineHeight: "26px",
                      marginTop: 8,
                      marginBottom: 42,
                      color: defaultTextColor,
                    }}
                  >
                    Organizzare attività esperienziali: mostre, degustazioni,
                    escursioni...ecc.
                    <br /> Ti permetterà di mettere in risalto la tua realtà,
                    riconnettendoti con il territorio.
                  </p>
                </div>
              </div>
              <Image
                src={cardGradientWallpaper}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={perLeAziendeModule.header}
              style={{
                width: windowWidth > 992 ? "100vw" : "100%",
                maxWidth: "100vw",
                display: "flex",
                marginLeft: windowWidth > 992 ? "-160px" : 0,
                marginTop: windowWidth < 1100 && windowWidth > 992 ? -50 : 0,
                marginBottom:
                  windowWidth < 1100 && windowWidth > 992
                    ? -50
                    : windowWidth < 992
                    ? 80
                    : 0,
                flexDirection: windowWidth > 992 ? "row" : "column",
              }}
            >
              <div
                className={perLeAziendeModule.headerItemImage3}
                style={{
                  width: windowWidth > 992 ? "50%" : "100%",
                  position: "relative",
                }}
              >
                <Image
                  src={panchinaDegliInnamorati}
                  alt="La panchina degli innamorati di Torino"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div
                style={{
                  width: windowWidth > 992 ? "50%" : "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "4vw",
                  paddingRight: windowWidth > 750 ? 160 : 0,
                }}
              >
                <h2
                  className={perLeAziendeModule.titleH2}
                  style={{
                    fontWeight: 800,
                    color: defaultTextColor,
                    margin: 0,
                  }}
                >
                  Viaggia senza limiti
                </h2>
                <p
                  className={perLeAziendeModule.subtitle}
                  style={{
                    fontWeight: 600,
                    color: defaultTextColor,
                    margin: 0,
                    lineHeight: "34px",
                    marginTop: 8,
                  }}
                >
                  Crea la tua nuova avventura!
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "start",
                    margin: 0,
                    marginBlockStart: "30px",
                  }}
                >
                  Scopri di più:
                </p>
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
                    textTransform: "uppercase",
                  }}
                  onClick={() => {
                    // load page home
                    router.push("/")
                  }}
                >
                  Home
                </button>
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
                    textTransform: "uppercase",
                  }}
                  onClick={() => {
                    // load page /viaggia-inclusivo
                    router.push("/viaggia-inclusivo")
                  }}
                >
                  Viaggia Inclusivo
                </button>

                {/* <p
                  className={perLeAziendeModule.subtitle}
                  style={{
                    fontWeight: 900,
                    color: defaultTextColor,
                    margin: 0,
                    lineHeight: "34px",
                    marginTop: windowWidth < 450 ? 22 : 42,
                  }}
                >
                  COUNTDOWN:
                </p>
                <h3
                  className={perLeAziendeModule.titleH3}
                  style={{
                    fontWeight: 700,
                    color: defaultTextColor,
                    margin: 0,
                    marginTop: 8,
                  }}
                >
                  {countdownTime}
                </h3> */}
              </div>
            </div>
          </div>
          {/* <div style={{ minHeight: 100 }} /> */}
        </header>
        <Footer />
      </main>
    </>
  )
}

const CarouselIcon = ({ title, subtitle, image }) => {
  const defaultTextColor = "#02030C"

  return (
    <div
      style={{
        height: "100%",
        maxWidth: 320,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={perLeAziendeModule.icon}>
        <Image src={image} alt="Icona" />
      </div>
      <p
        style={{
          fontSize: 24,
          color: defaultTextColor,
          margin: 0,
          fontWeight: 700,
          marginTop: 16,
          lineHeight: "36px",
          textAlign: "center",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: 14,
          color: defaultTextColor,
          margin: 0,
          fontWeight: 400,
          marginTop: 8,
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default PerLeAziende

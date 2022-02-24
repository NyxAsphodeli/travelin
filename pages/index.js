import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Valori from "./valori"
import Team from "./team"
import Partners from "./partners"
import Contatti from "./contatti"
import background from "../public/background.png"
import menu from "../public/menu.png"
import logoS from "../public/logo-s.png"
import Logo from "../public/Logo.png"

import Alessio from "../public/Alessio.jpeg"
import Dajana from "../public/Dajana.jpg"
import Denise from "../public/Denise.jpg"
import Laura from "../public/Laura.jpeg"
import Marta from "../public/Marta.jpg"
import Silvia from "../public/Silvia.jpg"

const teamMembers = [
  {
    nome: "Marta",
    cognome: "Grelli",
    ruolo: "C.E.O. / C.T.O.",
    descrizione: "Intraprendente, adora viaggiare.",
    foto: Marta,
  },
  {
    nome: "Dajana",
    cognome: "Gioffrè",
    ruolo: "Accessibility Expert",
    descrizione: "Animo intrepido, con la passione dei cani.",
    foto: Dajana,
  },
  {
    nome: "Laura",
    cognome: "Mongi",
    ruolo: "Front-end developer",
    descrizione: "Nerd, adoratrice di gatti.",
    foto: Laura,
  },
  {
    nome: "Alessio",
    cognome: "Massaglia",
    ruolo: "Front-end developer",
    descrizione: "Determinato, amante della musica.",
    foto: Alessio,
  },
  {
    nome: "Denise",
    cognome: "Basano",
    ruolo: "Graphic Designer",
    descrizione: "Dolce, come i biscotti che divora.",
    foto: Denise,
  },
  {
    nome: "Silvia",
    cognome: "Parisi",
    ruolo: "Social Media Manager",
    descrizione: "Dolce, come i biscotti che divora.",
    foto: Silvia,
  },
]

export default function Home() {
  return (
    <div
      className="home"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingInline: "5px",
      }}
    >
      <Head>
        <title>Travelin</title>
        <link rel="icon" href={logoS} />
        <meta
          name="description"
          property="og:description"
          content={`Travelin official website`}
        />
        <meta property="og:image" content={Logo} />
        <meta name="og:title" content="Travelin" />
      </Head>

      <main>
        <div
          style={{
            background: "#e4f9f6",
            height: "15vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{ width: "50vw", display: "flex", justifyContent: "center" }}
          >
            <Image
              className={styles.logoS}
              src={logoS}
              alt="logo travelin"
              width="515px"
              height="100px"
              layout="intrinsic"
              objectPosition="left"
            />
          </div>
          <div
            style={{
              width: "20vw",
              display: "flex",
              justifyContent: "right",
              height: "20vw",
              marginBlock: "auto",
            }}
          >
            <button
              onClick={() => {
                console.log("menù clicked")
              }}
            >
              <Image src={menu} alt="menu" />
            </button>
          </div>
        </div>
        <div
          style={{
            background:
              "#e4f9f6 linear-gradient(180deg, rgba(228,249,246,1) 59%, rgba(255,255,255,1) 100%)",
          }}
        >
          <Image src={background} alt="header image" className={styles.logoS} />
          <p className={styles.phrase}>Una nuova app sul turismo accessibile</p>
        </div>
        <div /* style={{ paddingInline: "5vw" }} */>
          <div style={{ height: "15vh" }} />
          <Valori />
          <div
            /*  className={styles.penguin} */
            style={{
              height: "auto",
              width: "100vw",
              marginBlock: "70px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <Image src={Logo} alt="menu" />
            </div>
            <div
              style={{
                width: "70vw",
                textAlign: "center",
                marginBlockStart: "70px",
              }}
            >
              <p>SELEZIONA GLI ELEMENTI DEL PINGUINO PER SAPERNE DI PIù</p>
            </div>
          </div>

          <Team members={teamMembers} />
          <div style={{ height: "15vh" }} />
          <Partners />
        </div>
        <div style={{ height: "15vh" }} />
      </main>

      <footer>
        <Contatti />
      </footer>
    </div>
  )
}

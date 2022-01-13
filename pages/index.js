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

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Head>
        <title>Travelin</title>
        <meta name="description" content="Travelin official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{
            background: "#e4f9f6",
            height: "15vh",
            width: "100vw",
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
            style={{ width: "30vw", display: "flex", justifyContent: "right" }}
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
        <div style={{ paddingInline: "5vw" }}>
          <div style={{ height: "15vh" }} />
          <Valori />
          <div
            className={styles.penguin}
            style={{ height: "15vh", width: "100vw" }}
          />
          <Team />
          <Partners />
        </div>
      </main>

      <footer>
        <Contatti />
      </footer>
    </div>
  )
}

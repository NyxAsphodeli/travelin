import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Valori from "./valori"
import Team from "./team"
import Partners from "./partners"
import Contatti from "./contatti"
import placeholder from "../public/placeholder.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Travelin</title>
        <meta name="description" content="Travelin official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={placeholder} alt="header image" />
        <p>Breve presentazione simpatica non più di 8 righe della mission</p>
        <Valori />
        <Team />
        <Partners />
      </main>

      <footer className={styles.footer}>
        <Contatti />
      </footer>
    </div>
  )
}

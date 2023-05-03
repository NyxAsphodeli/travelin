import Head from "next/head"
import Contatti from "./contatti"
/* import Header from "../components/Header" */
import Image from "next/image"
import Link from "next/link"

import Partners from "../components/Partners"
import Navbar from "../components/Navbar"
import ChiSiamo from "../components/ChiSiamo"
import CTA from "../components/CTA"

import carousel from "../styles/carousel.module.css"
import Footer from "../components/Footer"
/* 
https://i.ibb.co/Jj9Q3tS/Marta.jpg
https://i.ibb.co/CPYzNpm/menu.png
https://i.ibb.co/0XSjwv0/person-Placeholder.jpg
https://i.ibb.co/JzW8BX7/share.png
https://i.ibb.co/H4CQDjB/Silvia.jpg
https://i.ibb.co/FzM4Hys/travelinlight.png
https://i.ibb.co/kKYyWhJ/turismabile.png
https://i.ibb.co/sjQM0xT/insta.png
https://i.ibb.co/12d5Lk2/Laura.jpg
https://i.ibb.co/cYrdn2S/Logo.png
https://i.ibb.co/Df6TjF0/Ambassador-2.png
https://i.ibb.co/Np2BxXV/Ambassador-3.png
https://i.ibb.co/VL2Lgvx/Esplora.png
https://i.ibb.co/G0pCRcY/Illustrazione-investi.png
https://i.ibb.co/FJsBRXW/Illustrazione-app.png
https://i.ibb.co/m9svSwD/Pulsante-App-Store.png
https://i.ibb.co/vD366vD/Immergiti.png
https://i.ibb.co/0GW1bbK/pulsante-Google-Play.png
https://i.ibb.co/whRv28n/Home-provvisoria.png
https://i.ibb.co/QY8Y1vs/QR-CODE.png
https://i.ibb.co/1Grt3g4/Scopri.png
https://i.ibb.co/5BDY0pm/Slow-tourism.png
https://i.ibb.co/58sGKCJ/Tipa-Federagit.png
https://i.ibb.co/whRv28n/Home-provvisoria.png
https://i.ibb.co/w0tsBvq/Accessibilit.png
https://i.ibb.co/W0mQwWS/Ambassador-1.png
https://i.ibb.co/jMJtc1F/Amassador-4.png
https://i.ibb.co/dthynWd/federagit.jpg
https://i.ibb.co/Qvymb0T/logo-s.png
https://i.ibb.co/5FPDFc5/Alessio.jpg
https://i.ibb.co/Sy6qNtW/aprionlus.jpg
https://i.ibb.co/n1TmWdb/background.png
https://i.ibb.co/DYYmW8K/culturaccess.png
https://i.ibb.co/2WsTzsT/Dajana.jpg
https://i.ibb.co/GtwbrrJ/Denise.jpg
https://i.ibb.co/f1B1Jx1/mock-up-travelin-removebg.png
https://i.ibb.co/Tvbx2zn/bgimg-travelin-drawio.png
https://i.ibb.co/xhgcg1v/mock-up-travelin-ritaglio.png
https://i.ibb.co/ncrKLFc/QRCODE.png
*/
export default function Team() {
  let wip = true
  if (!wip) {
    return (
      <>
        <Head>
          <title>Travelin</title>
          <link rel="icon" href="https://i.ibb.co/Qvymb0T/logo-s.png" />
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
            justifyContent: "space-around",
          }}
        >
          <Navbar href={"/"} text={"Indietro"} />
          <ChiSiamo />

          <div className={carousel.slider}>
            <Link href="#slide-1" scroll={false}>
              <a>1</a>
            </Link>
            <Link href="#slide-2" scroll={false}>
              <a>2</a>
            </Link>
            <Link href="#slide-3" scroll={false}>
              <a>3</a>
            </Link>
            <Link href="#slide-4" scroll={false}>
              <a>4</a>
            </Link>
            <Link href="#slide-5" scroll={false}>
              <a>5</a>
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100vw",
                backgroundColor: "#e4f9f6",
                marginBlock: "0px",
              }}
            >
              <div className={carousel.slides}>
                <div
                  name="slide-1"
                  id="slide-1"
                  style={{ paddingInlineStart: "50vw" }}
                >
                  1
                </div>
                <div name="slide-2" id="slide-2">
                  2
                </div>
                <div id="slide-3">3</div>
                <div id="slide-4">4</div>
                <div id="slide-5" style={{ marginInlineEnd: "100%" }}>
                  5
                </div>
              </div>
            </div>
          </div>
          <CTA />
          <Partners title={"Partners"} />

          <Footer />
        </main>
      </>
    )
  } else {
    return (
      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Navbar href={"/"} text={"Indietro"} />
        <div
          style={{
            paddingBlockStart: "100px",
            paddingInline: "15px",
          }}
        >
          <Image
            src="https://i.ibb.co/ZTW9ZTy/wip.jpg"
            alt="Work in progress"
            width="1600px"
            height="1039px"
          />
        </div>
      </main>
    )
  }
}

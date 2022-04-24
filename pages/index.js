import Head from "next/head"
import Contatti from "./contatti"
import Header from "../components/Header"
import Body from "../components/Body"
import Explore from "../components/Explore"
import Invest from "../components/Invest"
/* import Ambassadors from "../components/Ambassadors"
import Video from "../components/Video" */
import Partners from "../components/Partners"
import Navbar from "../components/Navbar"
import Image from "next/image"
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
export default function Home() {
  let wip = false
  if (!wip) {
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
            justifyContent: "space-around",
            position: "relative",
            top: "0px",
            left: "0px",
          }}
        >
          {/* <div
            id="workInProgress"
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              minWidth: "100vw",
              minHeight: "100vh",
              filter: "blur(4px)",
              zIndex: "0",
            }}
          > */}
          <Navbar href={"/chi_siamo"} text={"Chi siamo"} />
          <Header />
          <Body />
          {/* <Video />
            <Ambassadors /> */}
          <Partners title={`Si fidano di noi`} />
          <Invest />
          <Explore />
          <footer>
            <Contatti />
          </footer>{" "}
          {/*   </div> */}
        </main>
      </>
    )
  } else {
    return (
      <div
        style={{
          paddingBlockStart: "100px",
        }}
      >
        <Image
          src="https://i.ibb.co/ZTW9ZTy/wip.jpg"
          alt="Work in progress"
          width="1600px"
          height="1039px"
        />
      </div>
    )
  }
}

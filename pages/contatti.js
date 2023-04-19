import Image from "next/image"
import travelinlight from "../public/travelinlight.png"
import insta from "../public/insta.png"
import share from "../public/share.png"
import styles from "../styles/Home.module.css"
function Contatti() {
  return (
    <div
      style={{
        minHeight: "20vh",
        maxHeight: "20vh",
        maxWidth: "100%",
        minWidth: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        className="social"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          maxWidth: "40%",
        }}
      >
        <div
          style={{
            maxWidth: "60%",
            marginInline: "auto",
          }}
        >
          <Image src={travelinlight} alt="logo travelin" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Image src={share} alt="share travelin" />
          <Image src={insta} alt="insta travelin" />
          {/* <Image src={insta} alt="linkedin travelin" /> */}
        </div>
      </div>
      <div
        className="contatti"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {/* <p className={styles.white} style={{ margin: "0px", padding: "0px" }}>
          Chi siamo
        </p> */}
        <a href="tel:331 848 2994">
          <p className={styles.white} style={{ margin: "0px", padding: "0px" }}>
            Investi
          </p>
        </a>
        <a href="mailto:martagrelli1997@gmail.com">
          <p className={styles.white} style={{ margin: "0px", padding: "0px" }}>
            Contattaci
          </p>
        </a>
      </div>
      <div
        className="contatti"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {/* <p className={styles.white} style={{ margin: "0px", padding: "0px" }}>
          {`Scarica l'app`}
        </p> */}
        {/* <p className={styles.white} style={{ margin: "0px", padding: "0px" }}>
          Privacy Policy
        </p> */}
        {/*  <p className={styles.white} style={{ margin: "0px", padding: "0px" }}>
          Cookies
        </p> */}
      </div>
    </div>
  )
}
export default Contatti

import styles from "../styles/Team.module.css"
import Image from "next/image"
import aprionlus from "../public/aprionlus.png"
import culturaccess from "../public/culturaccess.png"
import turismabile from "../public/turismabile.png"
import federagit from "../public/federagit.jpg"

function Partners() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        alignContent: "space-between",
      }}
    >
      <h1
        className={styles.names}
        style={{ fontSize: "2.2rem", fontWeight: 700, marginBlockEnd: "5vh" }}
      >
        Siamo sostenuti da
      </h1>
      <div
        className={styles.description}
        style={{
          marginInline: "30px",
        }}
      >
        <p style={{ fontSize: "1.3rem" }}>
          Diversi enti <b>amici che ci accompagnano in questa avventura,</b>{" "}
          condividendo con noi {"l'intento"} di rendere <b>la bellezza</b>{" "}
          {"dell'Italia"} <b>a portata di tutti</b>{" "}
        </p>
      </div>
      <div style={{ marginBlockEnd: "50px" }}>
        <Image src={aprionlus} alt="logo aprionlus" />
      </div>
      <div style={{ maxWidth: "60%", marginBlockEnd: "50px" }}>
        <Image src={federagit} alt="logo federagit" />
      </div>
      <div style={{ maxWidth: "60%", marginBlockEnd: "50px" }}>
        <Image src={culturaccess} alt="logo più cultura accessibile" />
      </div>
      <div style={{ marginBlockEnd: "50px" }}>
        <Image src={turismabile} alt="logo turismabile" />
      </div>
    </div>
  )
}
export default Partners

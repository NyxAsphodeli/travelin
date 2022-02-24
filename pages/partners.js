import styles from "../styles/Team.module.css"

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
    </div>
  )
}
export default Partners

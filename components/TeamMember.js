import personPlaceholder from "../public/personPlaceholder.jpg"
import Image from "next/image"
import styles from "../styles/Team.module.css"

const teamMembers = {
  marta: {
    nome: "Marta",
    cognome: "Grelli",
    ruolo: "C.E.O. / C.T.O.",
    descrizione: "Intraprendente, adora viaggiare.",
  },
  daja: {
    nome: "Dajana",
    cognome: "Gioffrè",
    ruolo: "Accessibility Expert",
    descrizione: "Animo intrepido, con la passione dei cani.",
  },
  laura: {
    nome: "Laura",
    cognome: "Mongi",
    ruolo: "Front-end developer",
    descrizione: "Nerd, adoratrice di gatti.",
  },
  alessio: {
    nome: "Alessio",
    cognome: "Massaglia",
    ruolo: "Front-end developer",
    descrizione: "Determinato, amante della musica.",
  },
  denise: {
    nome: "Denise",
    cognome: "Basano",
    ruolo: "Graphic Designer",
    descrizione: "Dolce, come i biscotti che divora.",
  },
  silvia: {
    nome: "Silvia",
    cognome: "Parisi",
    ruolo: "Social Media Manager",
    descrizione: "Dolce, come i biscotti che divora.",
  },
}

const TeamMember = ({ info }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "45%",
        alignContent: "space-between",
      }}
    >
      <Image
        className={styles.profileImage}
        src={info.foto}
        alt="profile image"
      />
      <h2 className={styles.names}>
        {info.nome} {info.cognome}
      </h2>{" "}
      <p className={styles.role}>{info.ruolo}</p>{" "}
      <p className={styles.description}>{info.descrizione}</p>{" "}
    </div>
  )
}

export default TeamMember

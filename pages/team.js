import personPlaceholder from "../public/personPlaceholder.jpg"
import Image from "next/image"
import styles from "../styles/Team.module.css"

function Team() {
  return (
    <>
      <h1>Il nostro team</h1>
      <p>Breve descrizione di come è stato costituito il team (4 righe)</p>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <Image
            className={styles.profileImage}
            src={personPlaceholder}
            alt="profile image"
          />
          <h2 className={styles.names}>nome cognome</h2>{" "}
          <p>Due parole di presentazione</p>{" "}
        </div>
        <div className={styles.div2}>
          <Image
            className={styles.profileImage}
            src={personPlaceholder}
            alt="profile image"
          />
          <h2 className={styles.names}>nome cognome</h2>{" "}
          <p>Due parole di presentazione</p>{" "}
        </div>
        <div className={styles.div3}>
          <Image
            className={styles.profileImage}
            src={personPlaceholder}
            alt="profile image"
          />
          <h2 className={styles.names}>nome cognome</h2>{" "}
          <p>Due parole di presentazione</p>{" "}
        </div>
        <div className={styles.div4}>
          <Image
            className={styles.profileImage}
            src={personPlaceholder}
            alt="profile image"
          />
          <h2 className={styles.names}>nome cognome</h2>{" "}
          <p>Due parole di presentazione</p>{" "}
        </div>
        <div className={styles.div5}>
          <Image
            className={styles.profileImage}
            src={personPlaceholder}
            alt="profile image"
          />
          <h2 className={styles.names}>nome cognome</h2>{" "}
          <p>Due parole di presentazione</p>{" "}
        </div>
        <div className={styles.div6}>
          <Image
            className={styles.profileImage}
            src={personPlaceholder}
            alt="profile image"
          />
          <h2 className={styles.names}>nome cognome</h2>{" "}
          <p>Due parole di presentazione</p>{" "}
        </div>
        <div className={styles.div7}>
          <Image
            className={styles.profileImage}
            src={personPlaceholder}
            alt="profile image"
          />
          <h2 className={styles.names}>nome cognome</h2>{" "}
          <p>Due parole di presentazione</p>{" "}
        </div>
        <div className={styles.div8}>
          <Image
            className={styles.profileImage}
            src={personPlaceholder}
            alt="profile image"
          />
          <h2 className={styles.names}>nome cognome</h2>{" "}
          <p>Due parole di presentazione</p>{" "}
        </div>
      </div>
    </>
  )
}
export default Team

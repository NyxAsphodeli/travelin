import personPlaceholder from "../public/personPlaceholder.jpg"
import Image from "next/image"
import styles from "../styles/Team.module.css"
import TeamMember from "../components/TeamMember"

function Team({ members }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "100%",
          alignContent: "space-between",
        }}
      >
        <div
          style={{
            margin: "0px",
            padding: "0px",
          }}
        >
          <h1 className={styles.names} style={{ fontSize: "1.7rem" }}>
            Il nostro fantastico Team
          </h1>
        </div>
        <div
          className={styles.description}
          /* style={{
            margin: "20px",
            padding: "0px",
          }} */
        >
          <p style={{ fontSize: "1.3rem", marginInline: "10px" }}>
            Alcuni di <b>noi</b> hanno avuto a che fare con la <b>disabilità</b>{" "}
            {"all'interno"} della loro vita. Per questo ed altro{" "}
            <b>progettiamo considerando tutti.</b>{" "}
          </p>
        </div>
      </div>
      <div className={styles.parent}>
        {members.map((member, index) => {
          return <TeamMember key={index} info={members[index]} />
        })}
      </div>
    </>
  )
}
export default Team

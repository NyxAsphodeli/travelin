import React from "react"
import styles from "../../styles/Home.module.css"
const MainButton = ({ cta }) => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#004267",
        height: "40px",
        width: "auto",
        borderRadius: "10px",
        textAlign: "center",
        marginBlock: "20px",
      }}
    >
      <p
        className={styles.white}
        style={{ textAlign: "center", paddingBlock: "0px", lineHeight: "40px" }}
      >
        {cta}
      </p>
    </div>
  )
}
export default MainButton

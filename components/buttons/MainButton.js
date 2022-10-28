import React from "react"
import styles from "../../styles/Home.module.css"
const MainButton = ({ cta }) => {
  return (
    <a
      className="buttonCall"
      style={{ width: "250px" }}
      href="tel:331 848 2994"
    >
      <div
        style={{
          color: "white",
          backgroundColor: "#004267",
          height: "40px",
          width: "100%",
          borderRadius: "10px",
          textAlign: "center",
          marginBlock: "20px",
        }}
      >
        <p
          className={styles.white}
          style={{
            textAlign: "center",
            paddingBlock: "0px",
            lineHeight: "40px",
          }}
        >
          {cta}
        </p>
      </div>
    </a>
  )
}
export default MainButton

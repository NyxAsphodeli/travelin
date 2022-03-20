import React from "react"

const MainButton = ({ cta }) => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#004267",
        minHeight: "1vh",
        minWidth: "5vh",
        borderRadius: "10px",
      }}
    >
      {cta}
    </div>
  )
}
export default MainButton

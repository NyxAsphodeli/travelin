import Image from "next/image"
import travelinlight from "../public/travelinlight.png"
import insta from "../public/insta.png"
import share from "../public/share.png"

function Contatti() {
  return (
    <div
      style={{
        minHeight: "20vh",
        maxHeight: "20vh",
        backgroundColor: "#004267",
        maxWidth: "100vw",
        minWidth: "100vw",
        display: "flex",
        color: "#deefef",
        justifyContent: "space-around",
      }}
    >
      <div
        className="social"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          maxWidth: "50%",
        }}
      >
        <div
          style={{
            maxWidth: "80%",
            marginInline: "auto",
          }}
        >
          <Image src={travelinlight} alt="logo travelin" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Image src={share} alt="logo travelin" />
          <Image src={insta} alt="logo travelin" />
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
        <p style={{ margin: "0px", padding: "0px" }}>Contattaci</p>
        <p style={{ margin: "0px", padding: "0px" }}>Privacy Policy</p>
        <p style={{ margin: "0px", padding: "0px" }}>Cookies</p>
      </div>
    </div>
  )
}
export default Contatti

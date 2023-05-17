import React from "react"
import logo from "../public/logo-s.png"
import logoInsta from "../public/logo-insta.png"
import logoLinkedin from "../public/logo-linkedin.png"
import Image from "next/image"

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#9EA5FF",
        paddingInline: "20px",
        paddingBlockEnd: "60px",
      }}
    >
      <div style={{ display: "flex", marginBlock: "50px" }}>
        <Image src={logo} alt="logo" width="163px" height="54px" />
      </div>
      <div style={{ display: "flex", marginBlock: "50px" }}>
        <Image
          src={logoInsta}
          alt="open travelin on instagram"
          width="48px"
          height="50px"
          onClick={() => {
            window.open("https://www.instagram.com/travelinitaly/", "_blank")
          }}
        />
        <Image
          src={logoLinkedin}
          alt="open travelin on linkedin"
          width="48px"
          height="49px"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/apptravelin/?trk=similar-pages",
              "_blank"
            )
          }}
        />
      </div>
      {/* <Contatti /> */}
      <p
        style={{
          width: "100%",
          padding: "0px",
          margin: "0px",
          borderTop: "0px",
        }}
      >
        Travelin srl - Partita Iva 12738180012
        <br></br>
        Via Cernaia 24, 10121 Torino
      </p>
    </footer>
  )
}

export default Footer

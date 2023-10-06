import { useContext, useEffect, useState } from "react"
import PageContainer from "../components/PageContainer"
import { MainContext } from "../controllers/main"
import { Stack } from "@mui/material"
import Text from "../components/Text"
import invitaliaLogo from "../assets/images/invitalia.png"
import { breakpoints } from "../services/config"

const Trasparenza = () => {
  const { pageWidth, paddingInline } = useContext(MainContext)

  // entering animation
  const [animation, setAnimation] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true)
    }, 10)
  }, [])

  return (
    <PageContainer
      style={{
        opacity: animation ? 1 : 0,
        transform: animation ? "none" : "scale(1.01)",
        transition: "200ms",
      }}
    >
      <Stack
        style={{
          width: "100%",
          marginTop:
            pageWidth < breakpoints.mobile
              ? 48
              : pageWidth < breakpoints.tablet
              ? 100
              : 116,
          gap: 24,
          maxWidth: pageWidth < breakpoints.tablet ? 380 : 590,
          paddingInline: pageWidth < breakpoints.mobile ? paddingInline : 0,
        }}
        alignItems={pageWidth < breakpoints.tablet ? "center" : "flex-start"}
      >
        <Text
          fontSize={pageWidth < breakpoints.mobile ? 26 : 38}
          fontWeight={700}
          lineHeight={pageWidth < breakpoints.mobile ? "36px" : "48px"}
          textAlign="center"
          style={{ maxWidth: pageWidth < breakpoints.tablet ? 286 : undefined }}
        >
          Trasparenza e aiuti di Stato
        </Text>
        <Text fontSize={16} lineHeight="26px">
          La società Travelin srl, ha ricevuto nel corso dell’anno 2022 aiuti di
          stato pubblicati sul RNA - sezione “Trasparenza”.
        </Text>
        <Text
          fontSize={16}
          lineHeight="26px"
          style={{
            lineBreak: "anywhere",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open(
              "https://www.rna.gov.it/RegistroNazionaleTrasparenza/faces/pages/TrasparenzaAiuto.jspx"
            )
          }}
        >
          https://www.rna.gov.it/RegistroNazionaleTrasparenza/faces/pages/TrasparenzaAiuto.jspx
        </Text>
        <img
          src={invitaliaLogo}
          style={{
            width:
              pageWidth < breakpoints.mobile
                ? 80
                : pageWidth < breakpoints.tablet
                ? 120
                : 160,
            alignSelf: "center",
            marginTop: pageWidth < breakpoints.tablet ? 16 : 0,
          }}
        />
      </Stack>
      <div
        style={{
          height:
            pageWidth < breakpoints.mobile
              ? 460
              : pageWidth < 700
              ? 532
              : pageWidth < breakpoints.tablet
              ? 406
              : 418,
        }}
      />
    </PageContainer>
  )
}

export default Trasparenza

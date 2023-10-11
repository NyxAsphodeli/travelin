import React from "react"
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../controllers/main"
import PageContainer from "../components/PageContainer"
import { Stack } from "@mui/material"
import Text from "../components/Text"
import Bold from "../components/Bold"
import { breakpoints } from "../services/config"
import tableWithLaptops from "../assets/images/table-with-laptops.png"
import PersonCard from "../components/PersonCard"
import martaGrelli from "../assets/images/marta-grelli.png"
import williamDelNegro from "../assets/images/william-del-negro.png"
import alessioMassaglia from "../assets/images/alessio-massaglia.png"
import lauraMongi from "../assets/images/laura-mongi.png"
import agneseDAlfondo from "../assets/images/agnese-d-alfonso.png"
import deniseBasano from "../assets/images/denise-basano.png"
import dajanaGioffre from "../assets/images/dajana-gioffre.png"
import massimilianoSquillace from "../assets/images/massimiliano-squillace.png"
import giulioLoIacono from "../assets/images/giulio-lo-iacono.png"
import AdvisorCard from "../components/AdvisorCard"
import supportersLogoBig from "../assets/images/supporters-logos-big.png"
import supportersLogoSmall from "../assets/images/supporters-logos-small.png"
import CustomButton from "../components/CustomButton"
import hadnshake from "../assets/images/handshake.png"
import invitaliaLogo from "../assets/images/invitalia.png"
import startupHerLogo from "../assets/images/startup-her.png"

const ChiSiamo = () => {
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
        direction={
          pageWidth < breakpoints.mobile
            ? "column-reverse"
            : pageWidth < breakpoints.tablet
            ? "column"
            : "row"
        }
        alignItems="center"
        style={{
          width: "100%",
          paddingInline: paddingInline,
          marginTop:
            pageWidth < breakpoints.mobile
              ? -40
              : pageWidth < breakpoints.tablet
              ? 24
              : 70,
        }}
      >
        <Stack
          alignItems="flex-start"
          style={{
            width: pageWidth < breakpoints.tablet ? "100%" : "50%",
            marginTop: pageWidth < breakpoints.mobile ? -40 : 0,
          }}
        >
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 30 : 46}
            lineHeight={pageWidth < breakpoints.mobile ? "40px" : "56px"}
            fontWeight={800}
            style={{
              marginTop:
                pageWidth < breakpoints.mobile
                  ? "-10vw"
                  : pageWidth < breakpoints.tablet
                  ? 0
                  : -168,
            }}
          >
            Chi siamo
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            <Bold>Travelin</Bold> nasce dal sogno di rendere{" "}
            <Bold>il turismo</Bold> culturale <Bold>semplice</Bold> ed{" "}
            <Bold>accessibile</Bold>.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Intorno a questo ideale si è così radunato un team di{" "}
            <Bold>professionisti del digitale</Bold>, desideroso di innovare e
            rendere il mondo un posto più inclusivo.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Ad agosto 2022 nasce così ufficialmente Travelin, start-up
            innovativa a vocazone sociale.
          </Text>
        </Stack>
        <img
          src={tableWithLaptops}
          style={{
            width:
              pageWidth < breakpoints.mobile
                ? "132%"
                : pageWidth < breakpoints.tablet
                ? "100%"
                : "55%",
            marginLeft:
              pageWidth < breakpoints.mobile
                ? "-35vw"
                : pageWidth < breakpoints.tablet
                ? "-21vw"
                : 0,
            marginTop:
              pageWidth < breakpoints.mobile
                ? 40
                : pageWidth < breakpoints.tablet
                ? 40
                : 0,
          }}
          alt="Tavolo visto dall'alto con laptop e braccia di ragazzi che lavorano"
        />
      </Stack>
      <Text
        fontSize={pageWidth < breakpoints.mobile ? 22 : 38}
        lineHeight={pageWidth < breakpoints.mobile ? "32px" : "48px"}
        fontWeight={700}
        textAlign="center"
        style={{
          marginTop:
            pageWidth < breakpoints.mobile
              ? 24
              : pageWidth < breakpoints.tablet
              ? -60
              : -20,
        }}
      >
        Il Team
      </Text>
      {pageWidth < breakpoints.tablet ? (
        <Stack
          style={{
            width: "100%",
            paddingInline: paddingInline,
            marginTop: 32,
            gap: 24,
          }}
          alignItems="center"
        >
          <Stack
            direction="row"
            style={{
              width: "100%",
              gap: 24,
            }}
          >
            <PersonCard
              image={martaGrelli}
              name="Marta Grelli"
              title="Chief executive officer"
            />
            <PersonCard
              image={williamDelNegro}
              name="William Del Negro"
              title="Chief financial officer"
            />
          </Stack>
          <Stack
            direction="row"
            style={{
              width: "100%",
              gap: 24,
            }}
          >
            <PersonCard
              image={alessioMassaglia}
              name="Alessio Massaglia"
              title="Front-end Developer"
            />
            <PersonCard
              image={lauraMongi}
              name="Laura Mongi"
              title="Front-end Developer"
            />
          </Stack>
          <Stack
            direction="row"
            style={{
              width: "100%",
              gap: 24,
            }}
          >
            <PersonCard
              image={agneseDAlfondo}
              name="Agnese D'Alfonso"
              title="UX/UI Designer"
            />
            <PersonCard
              image={deniseBasano}
              name="Denise Basano"
              title="Graphic e UX/UI Designer"
            />
          </Stack>
        </Stack>
      ) : (
        <Stack
          style={{
            width: "100%",
            paddingInline: paddingInline,
            marginTop: 32,
            gap: 32,
          }}
          alignItems="center"
        >
          <Stack
            direction="row"
            style={{
              width: "100%",
              gap: 24,
            }}
          >
            <PersonCard
              image={martaGrelli}
              name="Marta Grelli"
              title="Chief executive officer"
            />
            <PersonCard
              image={williamDelNegro}
              name="William Del Negro"
              title="Chief financial officer"
            />
            <PersonCard
              image={alessioMassaglia}
              name="Alessio Massaglia"
              title="Front-end Developer"
            />
            <PersonCard
              image={lauraMongi}
              name="Laura Mongi"
              title="Front-end Developer"
            />
          </Stack>
          <Stack
            direction="row"
            style={{
              width: "100%",
              gap: 24,
            }}
          >
            <PersonCard invisible />
            <PersonCard
              image={agneseDAlfondo}
              name="Agnese D'Alfonso"
              title="UX/UI Designer"
            />
            <PersonCard
              image={deniseBasano}
              name="Denise Basano"
              title="Graphic e UX/UI Designer"
            />
            <PersonCard invisible />
          </Stack>
        </Stack>
      )}
      <Text
        fontSize={pageWidth < breakpoints.mobile ? 22 : 38}
        lineHeight={pageWidth < breakpoints.mobile ? "32px" : "48px"}
        fontWeight={700}
        textAlign="center"
        style={{
          marginTop: pageWidth < breakpoints.mobile ? 64 : 116,
        }}
      >
        Gli Advisor
      </Text>
      <Stack
        style={{
          width: "100%",
          gap: 20,
          paddingInline: paddingInline,
          marginTop: 32,
        }}
        direction={pageWidth < breakpoints.tablet ? "column" : "row"}
      >
        <AdvisorCard
          image={dajanaGioffre}
          name="Dajana Gioffrè"
          title="CVO AccessiWay"
        />
        <AdvisorCard
          image={massimilianoSquillace}
          name="Massimiliano Squillace"
          title="CEO & Founder Contents"
        />
        <AdvisorCard
          image={giulioLoIacono}
          name="Giulio Lo Iacono"
          title="Segretario generale Asvis"
        />
      </Stack>
      <Stack
        alignItems="center"
        style={{
          width: "100%",
          paddingTop: pageWidth < breakpoints.mobile ? 32 : 54,
          paddingBottom: pageWidth < breakpoints.mobile ? 32 : 54,
          marginTop: pageWidth < breakpoints.mobile ? 64 : 116,
          backgroundColor: "#E2E8FB",
          paddingInline: paddingInline,
        }}
      >
        <Text
          fontSize={pageWidth < breakpoints.mobile ? 22 : 30}
          lineHeight={pageWidth < breakpoints.mobile ? "32px" : "40px"}
          fontWeight={700}
          textAlign="center"
        >
          Bandi vinti
        </Text>
        <Stack
          style={{
            width: "100%",
            height: pageWidth < breakpoints.mobile ? "auto" : 100,
            gap: pageWidth < breakpoints.mobile ? 26 : 72,
            marginTop: pageWidth < breakpoints.mobile ? 24 : 32,
          }}
          direction={pageWidth < breakpoints.mobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={invitaliaLogo}
            alt="Logo di Invitalia"
            style={{
              width:
                pageWidth < breakpoints.mobile
                  ? 131
                  : pageWidth >= breakpoints.mobile && pageWidth < 700
                  ? 70
                  : 160,
            }}
          />
          <img
            src={startupHerLogo}
            alt="Logo di StartupHER"
            style={{
              width:
                pageWidth < breakpoints.mobile
                  ? 233
                  : pageWidth >= breakpoints.mobile && pageWidth < 700
                  ? 193
                  : 283,
            }}
          />
        </Stack>
      </Stack>
      <Text
        fontSize={pageWidth < breakpoints.mobile ? 22 : 30}
        lineHeight={pageWidth < breakpoints.mobile ? "32px" : "40px"}
        fontWeight={700}
        textAlign="center"
        style={{ marginTop: pageWidth < breakpoints.mobile ? 60 : 116 }}
      >
        Sono al nostro fianco
      </Text>
      <div
        style={{ width: "100%", paddingInline: paddingInline, marginTop: 32 }}
      >
        <img
          src={
            pageWidth < breakpoints.tablet
              ? supportersLogoSmall
              : supportersLogoBig
          }
          style={{ width: "100%" }}
          alt="Percorsi inclusivi, #iocivado, cultura accessibile, city friend, will easy, asvis, anglat, notizie.it, progetto borghi, opes italia, agenda della disabilità, rete dei comuni sostenibili"
        />
      </div>
      <Stack
        direction={pageWidth < breakpoints.tablet ? "column" : "row"}
        alignItems="center"
        style={{
          width: "100%",
          marginTop: pageWidth < breakpoints.mobile ? 40 : 80,
          paddingInline: paddingInline,
        }}
      >
        <div
          style={{
            width:
              pageWidth < breakpoints.mobile
                ? "130%"
                : pageWidth < breakpoints.tablet
                ? "100%"
                : "50%",
          }}
        >
          <img
            src={hadnshake}
            style={{
              width: "100%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? 60
                  : pageWidth < breakpoints.tablet
                  ? 60
                  : 0,
            }}
            alt="Le mani di due persone che si stringono"
          />
        </div>
        <Stack
          alignItems="flex-start"
          style={{
            width: pageWidth < breakpoints.tablet ? "100%" : "50%",
            marginTop:
              pageWidth < breakpoints.mobile
                ? -40
                : pageWidth < breakpoints.tablet
                ? -30
                : 0,
          }}
        >
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 26 : 38}
            lineHeight={pageWidth < breakpoints.mobile ? "36px" : "48px"}
            fontWeight={800}
          >
            Collabora con noi
          </Text>
          <Text
            fontSize={16}
            lineHeight={"26px"}
            style={{ marginTop: pageWidth < breakpoints.mobile ? 8 : 16 }}
          >
            Se la nostra realtà ti intaressa non esitare a contattarci, siamo
            sempre aperti a parlare con aziende ed a collaborare con nuovi
            talenti!
          </Text>
          <CustomButton style={{ marginTop: 56 }} onClick={() => {}}>
            Contattaci
          </CustomButton>
        </Stack>
      </Stack>
      <div
        style={{
          height:
            pageWidth < 700 ? 432 : pageWidth < breakpoints.tablet ? 306 : 318,
        }}
      />
    </PageContainer>
  )
}

export default ChiSiamo

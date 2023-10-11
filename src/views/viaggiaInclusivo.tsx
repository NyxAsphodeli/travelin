import React from "react"
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../controllers/main"
import PageContainer from "../components/PageContainer"
import panchinaDegliInnamorati from "../assets/images/panchina-degli-innamorati.png"
import { Stack } from "@mui/material"
import Text from "../components/Text"
import Bold from "../components/Bold"
import CustomButton from "../components/CustomButton"
import { breakpoints } from "../services/config"
import selfieImage from "../assets/images/selfie.png"
import guysTalkingImage from "../assets/images/guys-talking.png"
import universalDesignImage from "../assets/images/universal-design.svg"
import guysWithBikesImage from "../assets/images/guys-with-bikes.png"
import travelinPartnersImage from "../assets/images/travelin-partners.png"

const ViaggiaInclusivo = () => {
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
            Viaggia Inclusivo
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Il turismo inclusivo è fare in modo che tutti possano viaggiare e
            scoprire il mondo in modo sicuro e senza barriere di alcun tipo.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Vogliamo che <Bold>tutti</Bold> (amanti degli animali, celiaci,
            ciechi, persone in carrozzina...ecc.){" "}
            <Bold>possano godersi il viaggio</Bold> senza troppe ansie.
          </Text>
        </Stack>
        <img
          src={selfieImage}
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
          alt="Ragazzi che si scattano un selfie"
        />
      </Stack>
      <Stack
        direction={
          pageWidth < breakpoints.mobile
            ? "column"
            : pageWidth < breakpoints.tablet
            ? "column-reverse"
            : "row"
        }
        alignItems="center"
        style={{
          width: "100%",
          marginTop:
            pageWidth < breakpoints.mobile
              ? 40
              : pageWidth < breakpoints.tablet
              ? 10
              : -20,
          paddingInline: paddingInline,
          gap: pageWidth < breakpoints.tablet ? 42 : 0,
        }}
      >
        <div style={{ width: pageWidth < breakpoints.tablet ? "100%" : "50%" }}>
          <img
            src={guysTalkingImage}
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "88%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? 0
                  : pageWidth < breakpoints.tablet
                  ? "8vw"
                  : 0,
            }}
            alt="Un gruppo di ragazzi che parlano tra di loro con in sovraimpressione i filtri dell'app Travelin"
          />
        </div>
        <Stack
          alignItems="flex-start"
          style={{
            width: pageWidth < breakpoints.tablet ? "100%" : "50%",
            marginTop:
              pageWidth < breakpoints.mobile
                ? -10
                : pageWidth < breakpoints.tablet
                ? -70
                : 0,
          }}
        >
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 30 : 46}
            lineHeight={pageWidth < breakpoints.mobile ? "40px" : "56px"}
            fontWeight={800}
          >
            Filtra per includere
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Non possiamo abbattere muri né costruire ponti, ma possiamo darti
            gli strumenti per trovare facilmente i luoghi che fanno al caso tuo.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Abbiamo creato dei <Bold>filtri accessibilità!</Bold> Scegli una
            località e <Bold>troverai in un tap:</Bold> ristoranti per celiaci,
            vegani ed intolleranti, strutture che consentono l’accesso a
            carrozine e passeggini, musei dove poter entrare con il tuo amico a
            4 zampe...ecc.
          </Text>
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        style={{
          width: "100%",
          paddingTop: pageWidth < breakpoints.mobile ? 32 : 56,
          paddingBottom: pageWidth < breakpoints.mobile ? 32 : 56,
          marginTop: pageWidth < breakpoints.mobile ? 60 : 120,
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
          Universal Design
        </Text>
        <Stack
          direction={pageWidth < breakpoints.tablet ? "column" : "row"}
          style={{
            width: "100%",
            marginTop: pageWidth < breakpoints.mobile ? 24 : 40,
          }}
          alignItems="center"
        >
          <div
            style={{
              width: pageWidth < breakpoints.tablet ? "100%" : "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={universalDesignImage}
              style={{
                width:
                  pageWidth < breakpoints.mobile
                    ? "100%"
                    : pageWidth < breakpoints.tablet
                    ? "76%"
                    : "75%",
                objectFit: "contain",
                minWidth:
                  pageWidth < breakpoints.mobile
                    ? 0
                    : pageWidth < breakpoints.tablet
                    ? 310
                    : 300,
                maxWidth:
                  pageWidth >= breakpoints.tablet
                    ? 480
                    : pageWidth < breakpoints.tablet &&
                      pageWidth >= breakpoints.mobile
                    ? 420
                    : undefined,
              }}
              alt="Icone indicanti disabilità uditive, motorie, visive e cognitive"
            />
          </div>
          <Stack
            style={{
              width:
                pageWidth < breakpoints.mobile
                  ? "100%"
                  : pageWidth < breakpoints.tablet
                  ? "80%"
                  : "50%",
              minWidth:
                pageWidth < breakpoints.mobile
                  ? 0
                  : pageWidth < breakpoints.tablet
                  ? 310
                  : 0,
              marginTop:
                pageWidth < breakpoints.mobile
                  ? 24
                  : pageWidth < breakpoints.tablet
                  ? 40
                  : 0,
            }}
            alignItems="center"
          >
            <Stack
              alignItems={
                pageWidth < breakpoints.tablet ? "center" : "flex-start"
              }
              style={{
                width: pageWidth < breakpoints.mobile ? "100%" : "95%",
              }}
            >
              <Text fontSize={16} lineHeight="26px" fontWeight={400}>
                Il design di Travelin è stato <Bold>progettato</Bold> per essere{" "}
                <Bold>accessibile</Bold> e fruibile da tutti, indipendentemente
                dalle disabilità o dalle necessità specifiche che si possono
                avere.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={
          pageWidth < breakpoints.mobile
            ? "column"
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
              ? 60
              : pageWidth < breakpoints.tablet
              ? 24
              : 100,
        }}
      >
        <Stack
          alignItems="flex-start"
          style={{
            width: pageWidth < breakpoints.tablet ? "100%" : "45%",
            marginTop:
              pageWidth < breakpoints.mobile
                ? 0
                : pageWidth < breakpoints.tablet
                ? 80
                : 0,
          }}
        >
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 30 : 46}
            lineHeight={pageWidth < breakpoints.mobile ? "40px" : "56px"}
            fontWeight={800}
          >
            Esperienze sul territorio
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            All’interno di Travelin troverai i servizi dei nostri partners,
            aziende ed associazioni che ti offriranno{" "}
            <Bold>soluzioni concrete</Bold> per viaggiare inclusivo.
          </Text>
          {pageWidth >= breakpoints.tablet && (
            <img
              src={travelinPartnersImage}
              style={{ width: "100%", marginTop: 32 }}
              alt="Loghi di Cultura Accessibile, CityFriend, Assoturismo, WillEasy, Forward, Apri ONLUS"
            />
          )}
        </Stack>
        <div
          style={{
            width:
              pageWidth < breakpoints.mobile
                ? "100%"
                : pageWidth < breakpoints.tablet
                ? "90%"
                : "50%",
          }}
        >
          <img
            src={guysWithBikesImage}
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "90%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? "-1vw"
                  : pageWidth < breakpoints.tablet
                  ? "3vw"
                  : "8.7vw",
              marginTop:
                pageWidth < breakpoints.mobile
                  ? 20
                  : pageWidth < breakpoints.tablet
                  ? "3vw"
                  : 0,
            }}
            alt="Un ragazzo e una ragazza che sostano vicino ad una pineta con le loro biciclette"
          />
        </div>
        {pageWidth < breakpoints.tablet && (
          <img
            src={travelinPartnersImage}
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "90%",
              marginTop: "3vw",
            }}
            alt="Loghi di Cultura Accessibile, CityFriend, Assoturismo, WillEasy, Forward, Apri ONLUS"
          />
        )}
      </Stack>
      <Stack
        direction={pageWidth < breakpoints.tablet ? "column" : "row"}
        alignItems="center"
        style={{
          width: "100%",
          marginTop: 30,
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
            src={panchinaDegliInnamorati}
            style={{
              width: "100%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? -40
                  : pageWidth < breakpoints.tablet
                  ? -50
                  : -100,
            }}
            alt="La panchina degli innamorati a Torino"
          />
        </div>
        <Stack
          alignItems="flex-start"
          style={{ width: pageWidth < breakpoints.tablet ? "100%" : "50%" }}
        >
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 30 : 46}
            lineHeight={pageWidth < breakpoints.mobile ? "40px" : "56px"}
            fontWeight={800}
          >
            Viaggia senza limiti
          </Text>
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 16 : 24}
            lineHeight={pageWidth < breakpoints.mobile ? "26px" : "34px"}
            fontWeight={600}
            style={{ marginTop: pageWidth < breakpoints.mobile ? 8 : 16 }}
          >
            Crea la tua nuova avventura!
          </Text>
          <CustomButton
            style={{ marginTop: 56 }}
            onClick={() => {
              window.open("https://travelin.me/")
            }}
          >
            Immergiti in Travelin
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

export default ViaggiaInclusivo

import React from "react"
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../controllers/main"
import PageContainer from "../components/PageContainer"
import peopleOnMountainImage from "../assets/images/people-on-mountain.png"
import icon1 from "../assets/images/carousel-icon-1.png"
import icon2 from "../assets/images/carousel-icon-2.png"
import icon3 from "../assets/images/carousel-icon-3.png"
import pubWithReviewsImage from "../assets/images/pub-with-reviews.png"
import signIcon from "../assets/images/sign-icon.png"
import supportersLogoBig from "../assets/images/supporters-logos-big.png"
import supportersLogoSmall from "../assets/images/supporters-logos-small.png"
import talkAboutUsBig from "../assets/images/talk-about-us-big.png"
import talkAboutUsSmall from "../assets/images/talk-about-us-small.png"
import cardGradientWallpaper from "../assets/images/card-gradient-wallpaper.png"
import panchinaDegliInnamorati from "../assets/images/panchina-degli-innamorati.png"
import { Stack } from "@mui/material"
import Text from "../components/Text"
import Bold from "../components/Bold"
import CarouselItem from "../components/CarouselItem"
import CustomButton from "../components/CustomButton"
import { breakpoints } from "../services/config"

const PerLeAziende = () => {
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
              ? -55
              : pageWidth < breakpoints.tablet
              ? 24
              : 0,
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
          >
            Se lavori nel turismo
          </Text>
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 16 : 22}
            lineHeight={pageWidth < breakpoints.mobile ? "26px" : "32px"}
            fontWeight={700}
          >
            E crei attività esperienziali
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Iscriviti al nostro portale e porta la tua attività ad un nuovo
            livello!
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Raggiungi <Bold>nuovi clienti</Bold>, espandi la tua{" "}
            <Bold>visibilità</Bold> online e <Bold>gestisci facilmente</Bold>{" "}
            tutto attraverso Travelin, una piattaforma intuitiva.
          </Text>
        </Stack>
        <img
          src={peopleOnMountainImage}
          style={{
            width:
              pageWidth < breakpoints.mobile
                ? "132%"
                : pageWidth < breakpoints.tablet
                ? "100%"
                : "50%",
            marginLeft:
              pageWidth < breakpoints.mobile
                ? "-35vw"
                : pageWidth < breakpoints.tablet
                ? "-21vw"
                : 0,
          }}
          alt="Ragazzi che sorridono con due montagne come sfondo"
        />
      </Stack>
      <Stack
        direction={pageWidth < 700 ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
        style={{
          width: "100%",
          paddingInline: paddingInline,
          marginTop: pageWidth < breakpoints.mobile ? 60 : 20,
          gap: pageWidth < 700 ? 42 : 0,
        }}
      >
        <CarouselItem
          title="Raggiungi le nicchie"
          description="Espandi il tuo pubblico, raggiungi nuove persone interessate ai tuoi servizi."
          image={icon1}
        />
        <CarouselItem
          title="Ottieni visibilità"
          description="Metti in mostra il tuo lavoro e dai risalto alle tue competenze."
          image={icon2}
        />
        <CarouselItem
          title="Gestisci facile"
          description="Tutto è in tuo controllo. Gestisci facilente clienti e prenotazioni."
          image={icon3}
        />
      </Stack>
      <Stack
        direction={pageWidth < breakpoints.tablet ? "column-reverse" : "row"}
        alignItems="center"
        style={{
          width: "100%",
          marginTop: 120,
          paddingInline: paddingInline,
          gap: pageWidth < breakpoints.tablet ? 42 : 0,
        }}
      >
        <div style={{ width: pageWidth < breakpoints.tablet ? "100%" : "50%" }}>
          <img
            src={pubWithReviewsImage}
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "88%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? 0
                  : pageWidth < breakpoints.tablet
                  ? "8vw"
                  : 0,
            }}
            alt="Un ragazzo e una ragazza che si scattano un selfie dentro ad un pub"
          />
        </div>
        <Stack
          alignItems="flex-start"
          style={{
            width: pageWidth < breakpoints.tablet ? "100%" : "50%",
            marginTop: pageWidth < breakpoints.mobile ? -50 : 0,
          }}
        >
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 30 : 46}
            lineHeight={pageWidth < breakpoints.mobile ? "40px" : "56px"}
            fontWeight={800}
          >
            Conquista nuovi clienti e fatti notare
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Ti offriamo <Bold>la visibilità che meriti</Bold>.{" "}
            <Bold>Amplia</Bold> facilmente <Bold>la tua clientela</Bold>. Grazie
            all’alta accessibilità della piattaforma nuove persone inizieranno a
            viaggiare, sii il primo a conquistarle.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Attraverso una <Bold>gestione</Bold> semplice ed{" "}
            <Bold>intuitiva</Bold> delle tue attività, potrai concentrarti sul
            soddisfare i clienti, fornendo loro i tuoi servizi di alta qualità.
          </Text>
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        style={{
          width: "100%",
          paddingTop: 54,
          paddingBottom: 78,
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
          Partecipa! NON ci sono commissioni
        </Text>
        <Stack
          direction={pageWidth < breakpoints.tablet ? "column" : "row"}
          style={{ width: "100%", marginTop: 48 }}
          alignItems="center"
        >
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <img
              src={signIcon}
              style={{
                width: "40%",
                objectFit: "contain",
                minWidth: 200,
                maxWidth: 320,
              }}
              alt="Disegno stilizzato di una mano con una penna che compila un foglio"
            />
          </div>
          <Stack
            style={{ width: pageWidth < breakpoints.tablet ? "100%" : "50%" }}
            alignItems="center"
          >
            <Stack
              alignItems={
                pageWidth < breakpoints.tablet ? "center" : "flex-start"
              }
              style={{
                width: pageWidth < breakpoints.mobile ? "100%" : "65%",
                marginTop: pageWidth < breakpoints.tablet ? 42 : 24,
              }}
            >
              <Text
                fontSize={16}
                lineHeight="26px"
                fontWeight={400}
                textAlign={pageWidth < breakpoints.mobile ? "center" : "left"}
              >
                <Bold>Iscriviti gratuitamente</Bold> a Travelin!
                <br />
                Ti basterà compilare <Bold>un veloce questionario</Bold> sulla
                tua attività. Non pagherai nessuna comissione.
              </Text>
              <CustomButton style={{ marginTop: 48 }} onClick={() => {}}>
                Compilalo
              </CustomButton>
            </Stack>
          </Stack>
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
      <Text
        fontSize={pageWidth < breakpoints.mobile ? 22 : 30}
        lineHeight={pageWidth < breakpoints.mobile ? "32px" : "40px"}
        fontWeight={700}
        textAlign="center"
        style={{ marginTop: pageWidth < breakpoints.mobile ? 60 : 116 }}
      >
        Parlano di noi
      </Text>
      <div
        style={{ width: "85%", paddingInline: paddingInline, marginTop: 32 }}
      >
        <img
          src={
            pageWidth < breakpoints.tablet ? talkAboutUsSmall : talkAboutUsBig
          }
          style={{ width: "100%" }}
          alt="Corriere torino, ansa.it, la stampa, torino oggi, millionaire"
        />
      </div>
      <Stack
        direction={pageWidth < breakpoints.tablet ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        style={{
          width: "100%",
          paddingInline: paddingInline,
          paddingTop: 48,
          paddingBottom: 48,
          backgroundImage: `url(${cardGradientWallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: pageWidth < breakpoints.mobile ? 80 : 120,
          gap: pageWidth < breakpoints.tablet ? 32 : 62,
        }}
      >
        <Stack
          alignItems="center"
          style={{
            width: pageWidth < breakpoints.tablet ? "90%" : "45%",
            padding: 42,
            paddingBottom: 186,
            backgroundColor: "white",
            borderRadius: pageWidth < breakpoints.mobile ? 8 : 16,
            border: "1px solid #02030C",
            position: "relative",
          }}
        >
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 22 : 30}
            lineHeight={pageWidth < breakpoints.mobile ? "32px" : "40px"}
            fontWeight={700}
            textAlign="center"
          >
            Operatori turistici
          </Text>
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 14 : 18}
            lineHeight={pageWidth < breakpoints.mobile ? "24px" : "26px"}
            fontWeight={500}
            style={{ marginTop: 8 }}
          >
            Organizza facilmente visite turistiche e tour guidati.
            <br />
            Mostra ad un nuovo pubblico tutta la tua professionalità e
            competenza.
          </Text>
          <CustomButton
            primary={false}
            style={{ position: "absolute", bottom: 66 }}
            onClick={() => {
              window.open("https://travelin.me/users/register/?type=f")
            }}
          >
            Iscriviti
          </CustomButton>
        </Stack>
        <Stack
          alignItems="center"
          style={{
            width: pageWidth < breakpoints.tablet ? "90%" : "45%",
            padding: 42,
            paddingBottom: 186,
            backgroundColor: "white",
            borderRadius: pageWidth < breakpoints.mobile ? 8 : 16,
            border: "1px solid #02030C",
            position: "relative",
          }}
        >
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 22 : 30}
            lineHeight={pageWidth < breakpoints.mobile ? "32px" : "40px"}
            fontWeight={700}
            textAlign="center"
          >
            Aziende locali
          </Text>
          <Text
            fontSize={pageWidth < breakpoints.mobile ? 14 : 18}
            lineHeight={pageWidth < breakpoints.mobile ? "24px" : "26px"}
            fontWeight={500}
            style={{ marginTop: 8 }}
          >
            Organizzare attività esperienziali: mostre, degustazioni,
            escursioni...ecc.
            <br />
            Ti permetterà di mettere in risalto la tua realtà, riconnettendoti
            con il territorio.
          </Text>
          <CustomButton
            primary={false}
            style={{ position: "absolute", bottom: 66 }}
            onClick={() => {
              window.open("https://travelin.me/users/register/?type=f")
            }}
          >
            Iscriviti
          </CustomButton>
        </Stack>
      </Stack>
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

export default PerLeAziende

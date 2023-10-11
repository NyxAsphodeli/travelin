import { useContext, useEffect, useState } from "react"
import { MainContext } from "../controllers/main"
import PageContainer from "../components/PageContainer"
import travelinHomeImage from "../assets/images/travelin-home.png"
import icon1 from "../assets/images/home-carousel-icon-1.svg"
import icon2 from "../assets/images/home-carousel-icon-2.svg"
import icon3 from "../assets/images/home-carousel-icon-3.svg"
import selfieWithFiltersImage from "../assets/images/selfie-with-filters.png"
import ancientCityImage from "../assets/images/ancient-city.png"
import peopleWithTabletImage from "../assets/images/people-with-tablet.png"
import supportersLogoBig from "../assets/images/supporters-logos-big.png"
import supportersLogoSmall from "../assets/images/supporters-logos-small.png"
import talkAboutUsBig from "../assets/images/talk-about-us-big.png"
import talkAboutUsSmall from "../assets/images/talk-about-us-small.png"
import panchinaDegliInnamorati from "../assets/images/panchina-degli-innamorati.png"
import { Stack } from "@mui/material"
import Text from "../components/Text"
import Bold from "../components/Bold"
import CarouselItem from "../components/CarouselItem"
import CustomButton from "../components/CustomButton"
import { breakpoints } from "../services/config"
import exploreIcon from "../assets/icons/explore.svg"
import editIcon from "../assets/icons/edit.svg"
import shareIcon from "../assets/icons/share.svg"
import travelinPlaceDetailsImage from "../assets/images/travelin-place-details.png"
import milanoImage from "../assets/images/milano.png"
import torinoImage from "../assets/images/torino.png"
import romaImage from "../assets/images/roma.png"

const Home = () => {
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
      {/* first section */}
      {pageWidth < breakpoints.mobile ? (
        <Stack
          direction="row"
          alignItems="center"
          style={{
            width: "100%",
            paddingInline: paddingInline,
            position: "relative",
            height: 557,
          }}
        >
          <Stack
            alignItems="flex-start"
            style={{
              width: "60%",
            }}
          >
            <Text
              fontSize={pageWidth < breakpoints.mobile ? 30 : 46}
              lineHeight={pageWidth < breakpoints.mobile ? "40px" : "56px"}
              fontWeight={800}
              style={{ marginTop: -100 }}
            >
              Viaggia senza limiti
            </Text>
            <Text
              fontSize={pageWidth < breakpoints.mobile ? 16 : 22}
              lineHeight={pageWidth < breakpoints.mobile ? "26px" : "32px"}
              fontWeight={700}
              style={{ marginTop: 16 }}
            >
              Scopri, crea e condividi i tuoi itinerari
            </Text>
            <CustomButton
              style={{
                marginTop: pageWidth < breakpoints.tablet ? 48 : 100,
              }}
              onClick={() => {
                window.open("https://travelin.me/")
              }}
            >
              Immergiti
            </CustomButton>
          </Stack>
          <img
            src={travelinHomeImage}
            style={{
              width: 375,
              position: "absolute",
              top: 0,
              right: -110,
              zIndex: -1,
            }}
            alt="La schermata esplora dell'app Travelin"
          />
        </Stack>
      ) : (
        <Stack
          direction={
            pageWidth < breakpoints.mobile
              ? "row"
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
                ? -50
                : pageWidth < breakpoints.tablet
                ? 24
                : 20,
          }}
        >
          <Stack
            alignItems={
              pageWidth < breakpoints.tablet ? "center" : "flex-start"
            }
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
                    ? -60
                    : pageWidth < breakpoints.tablet
                    ? 0
                    : -180,
              }}
              textAlign={
                pageWidth < breakpoints.mobile
                  ? "left"
                  : pageWidth < breakpoints.tablet
                  ? "center"
                  : "left"
              }
            >
              Viaggia senza limiti
            </Text>
            <Text
              fontSize={pageWidth < breakpoints.mobile ? 16 : 22}
              lineHeight={pageWidth < breakpoints.mobile ? "26px" : "32px"}
              fontWeight={700}
              style={{ marginTop: 16 }}
              textAlign={
                pageWidth < breakpoints.mobile
                  ? "left"
                  : pageWidth < breakpoints.tablet
                  ? "center"
                  : "left"
              }
            >
              Scopri, crea e condividi i tuoi itinerari
            </Text>
            <CustomButton
              style={{ marginTop: pageWidth < breakpoints.tablet ? 48 : 100 }}
              onClick={() => {
                window.open("https://travelin.me/")
              }}
            >
              Immergiti in Travelin
            </CustomButton>
          </Stack>
          <img
            src={travelinHomeImage}
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
                  ? "-32vw"
                  : 0,
              marginTop: pageWidth < breakpoints.tablet ? 60 : 0,
            }}
            alt="La schermata esplora dell'app Travelin"
          />
        </Stack>
      )}
      {/* second section */}
      <div
        style={{
          width: "100%",
          paddingInline:
            pageWidth < breakpoints.mobile
              ? paddingInline
              : pageWidth < breakpoints.tablet
              ? 0
              : paddingInline,
          marginTop:
            pageWidth < breakpoints.mobile
              ? -20
              : pageWidth < breakpoints.tablet
              ? -40
              : -10,
        }}
      >
        <Stack
          direction={pageWidth < breakpoints.mobile ? "column" : "row"}
          style={{ width: "100%" }}
        >
          <div
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "33.33%",
              backgroundColor: "#91FFB3",
              borderTopLeftRadius: 80,
            }}
          >
            <Stack
              alignItems="center"
              style={{
                width: "100%",
                height: "100%",
                paddingTop: 56,
                paddingBottom: 56,
                paddingInline: 22,
                backgroundColor: "#9EA5FF",
                borderTopLeftRadius: 80,
                borderBottomRightRadius: 80,
              }}
            >
              <img
                src={exploreIcon}
                alt="Bussola stilizzata"
                style={{ width: 40, height: 40 }}
              />
              <Text
                fontSize={24}
                lineHeight="34px"
                fontWeight={700}
                style={{ marginTop: 16 }}
                textAlign="center"
              >
                Esplora
              </Text>
              <Text
                fontSize={16}
                lineHeight="26px"
                fontWeight={500}
                style={{ marginTop: 4 }}
                textAlign="center"
              >
                Scopri luoghi ed itinerari
              </Text>
            </Stack>
          </div>
          <div
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "33.33%",
              backgroundColor: "#9EA5FF",
            }}
          >
            <Stack
              alignItems="center"
              style={{
                width: "100%",
                height: "100%",
                paddingTop: 56,
                paddingBottom: 56,
                paddingInline: 22,
                backgroundColor: "#91FFB3",
                borderTopRightRadius: pageWidth < breakpoints.mobile ? 0 : 80,
                borderTopLeftRadius: pageWidth < breakpoints.mobile ? 80 : 0,
                borderBottomLeftRadius: pageWidth < breakpoints.mobile ? 80 : 0,
              }}
            >
              <img
                src={editIcon}
                alt="Matita stilizzata"
                style={{ width: 40, height: 40 }}
              />
              <Text
                fontSize={24}
                lineHeight="34px"
                fontWeight={700}
                style={{ marginTop: 16 }}
                textAlign="center"
              >
                Crea Itinerari
              </Text>
              <Text
                fontSize={16}
                lineHeight="26px"
                fontWeight={500}
                style={{ marginTop: 4 }}
                textAlign="center"
              >
                Crea itinerari personalizzati
              </Text>
            </Stack>
          </div>
          <div
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "33.33%",
              backgroundColor: "#91FFB3",
              borderTopRightRadius: pageWidth < breakpoints.mobile ? 0 : 80,
              borderBottomRightRadius: pageWidth < breakpoints.mobile ? 80 : 0,
            }}
          >
            <Stack
              alignItems="center"
              style={{
                width: "100%",
                height: "100%",
                paddingTop: 56,
                paddingBottom: 56,
                paddingInline: 22,
                backgroundColor: "#9EA5FF",
                borderTopRightRadius: pageWidth < breakpoints.mobile ? 0 : 80,
                borderBottomRightRadius:
                  pageWidth < breakpoints.mobile ? 80 : 0,
              }}
            >
              <img
                src={shareIcon}
                alt="Simblo di condivisione"
                style={{ width: 40, height: 40 }}
              />
              <Text
                fontSize={24}
                lineHeight="34px"
                fontWeight={700}
                style={{ marginTop: 16 }}
                textAlign="center"
              >
                Condividi
              </Text>
              <Text
                fontSize={16}
                lineHeight="26px"
                fontWeight={500}
                style={{ marginTop: 4 }}
                textAlign="center"
              >
                I tuoi viaggi con gli amici
              </Text>
            </Stack>
          </div>
        </Stack>
      </div>
      {/* third section */}
      <Stack
        direction={pageWidth < 700 ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
        style={{
          width: "100%",
          paddingInline: paddingInline,
          marginTop: pageWidth < breakpoints.mobile ? 60 : 110,
          gap: pageWidth < 700 ? 42 : 0,
        }}
      >
        <CarouselItem
          title="Viaggia a modo tuo"
          description="Viaggia seguendo il tuo mood. Rendi i tuoi desideri e bisogni l’inizio di una nuova avventura."
          image={icon1}
        />
        <CarouselItem
          title="Local Experience"
          description="Affidati alla competenza delle guide turistiche locali e scopri le realtà tipiche del territorio."
          image={icon2}
        />
        <CarouselItem
          title="Community"
          description="Condividi viaggi ed itinerari con gli amici. Leggi le recensioni per garantirti ottime esperienze."
          image={icon3}
        />
      </Stack>
      <Stack
        direction={
          pageWidth < breakpoints.tablet ? "column-reverse" : "row-reverse"
        }
        alignItems="center"
        style={{
          width: "100%",
          marginTop: pageWidth < breakpoints.tablet ? 100 : 120,
          paddingInline: paddingInline,
          gap: pageWidth < breakpoints.tablet ? 42 : 0,
        }}
      >
        <div style={{ width: pageWidth < breakpoints.tablet ? "100%" : "50%" }}>
          <img
            src={travelinPlaceDetailsImage}
            style={{
              width:
                pageWidth < breakpoints.mobile
                  ? "100%"
                  : pageWidth < breakpoints.tablet
                  ? "70%"
                  : pageWidth > 1900
                  ? "85%"
                  : "95%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? "-1.5vw"
                  : pageWidth < breakpoints.tablet
                  ? "9vw"
                  : "6vw",
              marginTop: pageWidth < breakpoints.tablet ? 20 : 0,
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
            Esplora Smart
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Immergiti nella cultura dei luoghi che ti circondano.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Porta la curiosità in vacanza, scopri le storie e le stranezze dei
            luoghi intorno a te, attraverso testi leggeri e suggestive tracce
            audio.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Abbiamo già digitalizzato i posti magici di{" "}
            <Bold>Milano, Torino, Roma</Bold> e molti altri sono in arrivo!
          </Text>
          <Stack
            direction="row"
            style={{ gap: 16, marginTop: 40, width: "100%" }}
          >
            <Stack
              style={{
                width: "33%",
              }}
              alignItems="center"
            >
              <img
                src={milanoImage}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
                alt="Duomo di Milano"
              />
              <Text
                fontSize={18}
                lineHeight="26px"
                fontWeight={600}
                style={{ marginTop: 8 }}
              >
                Milano
              </Text>
            </Stack>
            <Stack
              style={{
                width: "33%",
              }}
              alignItems="center"
            >
              <img
                src={torinoImage}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
                alt="Vista di Torino con Mole Antonelliana"
              />
              <Text
                fontSize={18}
                lineHeight="26px"
                fontWeight={600}
                style={{ marginTop: 8 }}
              >
                Torino
              </Text>
            </Stack>
            <Stack
              style={{
                width: "33%",
              }}
              alignItems="center"
            >
              <img
                src={romaImage}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
                alt="Colosseo di Roma"
              />
              <Text
                fontSize={18}
                lineHeight="26px"
                fontWeight={600}
                style={{ marginTop: 8 }}
              >
                Roma
              </Text>
            </Stack>
          </Stack>
          <CustomButton
            style={{
              marginTop: 48,
              alignSelf: pageWidth < breakpoints.tablet ? "center" : undefined,
            }}
            onClick={() => {}}
          >
            Guarda la demo
          </CustomButton>
        </Stack>
      </Stack>
      {/* fourth section */}
      <Stack
        direction={pageWidth < breakpoints.tablet ? "column-reverse" : "row"}
        alignItems="center"
        style={{
          width: "100%",
          marginTop: 100,
          paddingInline: paddingInline,
          gap: pageWidth < breakpoints.tablet ? 42 : 0,
        }}
      >
        <div style={{ width: pageWidth < breakpoints.tablet ? "100%" : "50%" }}>
          <img
            src={selfieWithFiltersImage}
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "88%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? 0
                  : pageWidth < breakpoints.tablet
                  ? "8vw"
                  : 0,
            }}
            alt="Ragazzi che si scattano un selfie, con in sovraimpressione i filtri selezionabili nell'app Travelin"
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
            Viaggia a modo tuo
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Esplora nuove città e paesi seguendo il tuo mood.
            <br />
            <Bold>Crea</Bold> facilmente degli <Bold>itinerari</Bold> filtrando
            i luoghi che più ti piacciono e che corrispondono alle tue esigenze.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            <Bold>Elimina lo stress</Bold>, con Travelin potrai sapere in un tap
            dove: portare il tuo amico a quattro zampe, mangiare green, accedere
            con la carrozzina...ecc.
            <br />
            C’è un filtro per semplificare la vita di tutti, perché il nostro
            motto è{" "}
            <Bold style={{ textDecoration: "underline" }}>
              viaggia inclusivo
            </Bold>
            .
          </Text>
        </Stack>
      </Stack>
      {/* fifth section */}
      <Stack
        direction={
          pageWidth < breakpoints.tablet ? "column-reverse" : "row-reverse"
        }
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
            src={ancientCityImage}
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "88%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? 0
                  : pageWidth < breakpoints.tablet
                  ? "3vw"
                  : "6vw",
            }}
            alt="Rovine di edifici ricoperti di vegetazione"
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
            Local Experience
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Affidati alla competenza delle <Bold>guide turistiche locali</Bold>,
            ti rivelaranno strani segreti sulle vie di città e piccoli borghi.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Contribuirai così all’economia delle zone meno inflazionate e potrai
            conoscere le <Bold>realtà tipiche</Bold>, evitando le trappole per
            turisti.
          </Text>
        </Stack>
      </Stack>
      {/* sixth section */}
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
            src={peopleWithTabletImage}
            style={{
              width: pageWidth < breakpoints.mobile ? "100%" : "88%",
              marginLeft:
                pageWidth < breakpoints.mobile
                  ? 0
                  : pageWidth < breakpoints.tablet
                  ? "8vw"
                  : 0,
            }}
            alt="Gruppo di ragazzi che guardano un tablet"
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
            Community
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Non sarai solo, la community è al tuo fianco!
            <br />
            Scopri gli itinerari che hanno creato gli altri utenti e{" "}
            <Bold>condividi</Bold> i tuoi con gli amici.
          </Text>
          <Text
            fontSize={16}
            lineHeight="26px"
            fontWeight={400}
            style={{ marginTop: 24 }}
          >
            Consulta le <Bold>recensioni</Bold> di luoghi, locali ed attività,
            per avere la garanzia di trovarti nel posto giusto al momento
            giusto.
          </Text>
        </Stack>
      </Stack>
      {/* seventh section */}
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
      {/* eight section */}
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

export default Home

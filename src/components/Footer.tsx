import { Stack } from "@mui/material"
import { useContext } from "react"
import { MainContext } from "../controllers/main"
import travelinLogo from "../assets/images/travelin-logo.svg"
import Text from "./Text"
import instagramLogo from "../assets/images/instagram-logo.svg"
import linkedinLogo from "../assets/images/linkedin-logo.svg"
import { useNavigate } from "react-router-dom"
import { breakpoints } from "../services/config"

const Footer = () => {
  const { pageWidth, paddingInline } = useContext(MainContext)
  const navigate = useNavigate()

  return pageWidth < 700 ? (
    <Stack
      style={{
        width: "100%",
        paddingInline: paddingInline,
        paddingTop: 24,
        paddingBottom: 24,
        gap: 24,
        backgroundColor: "#9EA5FF",
        position: "absolute",
        bottom: 0,
      }}
    >
      <img src={travelinLogo} style={{ height: 40 }} />
      <Stack
        direction="row"
        justifyContent="center"
        style={{ height: 24, gap: 24 }}
      >
        <img
          src={instagramLogo}
          style={{ width: 24, height: 24, cursor: "pointer" }}
          alt="Instagram"
          onClick={() => {
            window.open("https://www.instagram.com/travelin_ita")
          }}
        />
        <img
          src={linkedinLogo}
          style={{ width: 24, height: 24, cursor: "pointer" }}
          alt="Linkedin"
          onClick={() => {
            window.open("https://www.linkedin.com/in/marta-grelli")
          }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        style={{ height: 30, gap: 42 }}
      >
        <Text
          fontSize={18}
          lineHeight="30px"
          fontWeight={600}
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "auto" })
            navigate("/chi-siamo")
          }}
        >
          Chi siamo
        </Text>
        <Text
          fontSize={18}
          lineHeight="30px"
          fontWeight={600}
          style={{ cursor: "pointer" }}
        >
          Contatti
        </Text>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        style={{ height: 30, gap: 36 }}
      >
        <Text
          fontSize={14}
          lineHeight="26px"
          fontWeight={500}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Privacy Policy
        </Text>
        <Text
          fontSize={14}
          lineHeight="26px"
          fontWeight={500}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Termini e Condizioni
        </Text>
      </Stack>
      <Text
        fontSize={14}
        lineHeight="26px"
        fontWeight={500}
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          marginTop: -12,
        }}
        textAlign="center"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "auto" })
          navigate("/trasparenza")
        }}
      >
        Trasparenza
      </Text>
      <Text fontSize={12} lineHeight="24px" textAlign="center" fontWeight={400}>
        Partita Iva 647892304873839r9433
      </Text>
      <Text
        fontSize={11}
        lineHeight="28px"
        textAlign="center"
        onClick={() => {
          window.open("https://www.linkedin.com/in/alessio-massaglia-b83269233")
        }}
      >
        Made with ♥ by Alessio Massaglia
      </Text>
    </Stack>
  ) : pageWidth < breakpoints.tablet ? (
    <Stack
      style={{
        width: "100%",
        paddingInline: paddingInline,
        paddingTop: 24,
        paddingBottom: 24,
        gap: 16,
        backgroundColor: "#9EA5FF",
        position: "absolute",
        bottom: 0,
      }}
    >
      {/* first section */}
      <Stack
        direction="row"
        alignItems="center"
        style={{ height: 56, position: "relative" }}
      >
        <img src={travelinLogo} style={{ width: 168, maxHeight: "100%" }} />
        <Stack
          direction="row"
          alignItems="center"
          style={{ height: 24, gap: 24, marginLeft: 58 }}
        >
          <img
            src={instagramLogo}
            style={{ width: 24, height: 24, cursor: "pointer" }}
            alt="Instagram"
            onClick={() => {
              window.open("https://www.instagram.com/travelin_ita")
            }}
          />
          <img
            src={linkedinLogo}
            style={{ width: 24, height: 24, cursor: "pointer" }}
            alt="Linkedin"
            onClick={() => {
              window.open("https://www.linkedin.com/in/marta-grelli")
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          style={{
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            gap: 32,
          }}
        >
          <Text
            fontSize={18}
            lineHeight="36px"
            fontWeight={600}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "auto" })
              navigate("/chi-siamo")
            }}
          >
            Chi siamo
          </Text>
          <Text
            fontSize={18}
            lineHeight="36px"
            fontWeight={600}
            style={{ cursor: "pointer" }}
          >
            Contatti
          </Text>
        </Stack>
      </Stack>
      {/* second section */}
      <Stack
        direction="row"
        alignItems="center"
        style={{
          height: "100%",
          gap: 60,
        }}
      >
        <Text
          fontSize={14}
          lineHeight="36px"
          fontWeight={500}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Privacy Policy
        </Text>
        <Text
          fontSize={14}
          lineHeight="36px"
          fontWeight={500}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Termini e Condizioni
        </Text>
        <Text
          fontSize={14}
          lineHeight="36px"
          fontWeight={500}
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "auto" })
            navigate("/trasparenza")
          }}
        >
          Trasparenza
        </Text>
      </Stack>
      {/* third section */}
      <Text fontSize={12} lineHeight="36px" fontWeight={400}>
        Partita Iva 647892304873839r9433
      </Text>
      <Text
        fontSize={11}
        lineHeight="24px"
        textAlign="center"
        style={{ marginBottom: -12 }}
        className="credits"
        onClick={() => {
          window.open("https://www.linkedin.com/in/alessio-massaglia-b83269233")
        }}
      >
        Made with ♥ by Alessio Massaglia
      </Text>
    </Stack>
  ) : (
    <Stack
      style={{
        width: "100%",
        paddingInline: paddingInline,
        paddingTop: 24,
        paddingBottom: 24,
        gap: 24,
        backgroundColor: "#9EA5FF",
        position: "absolute",
        bottom: 0,
      }}
    >
      {/* first section */}
      <Stack
        direction="row"
        alignItems="center"
        style={{ height: 56, position: "relative" }}
      >
        <img src={travelinLogo} style={{ width: 168, maxHeight: "100%" }} />
        <Stack
          direction="row"
          alignItems="center"
          style={{
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            gap: 72,
          }}
        >
          <Text
            fontSize={18}
            lineHeight="36px"
            fontWeight={600}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "auto" })
              navigate("/chi-siamo")
            }}
          >
            Chi siamo
          </Text>
          <Text
            fontSize={18}
            lineHeight="36px"
            fontWeight={600}
            style={{ cursor: "pointer" }}
          >
            Contatti
          </Text>
        </Stack>
      </Stack>
      {/* second section */}
      <Stack
        direction="row"
        alignItems="center"
        style={{ height: 24, gap: 24 }}
      >
        <img
          src={instagramLogo}
          style={{ width: 24, height: 24, cursor: "pointer" }}
          alt="Instagram"
          onClick={() => {
            window.open("https://www.instagram.com/travelin_ita")
          }}
        />
        <img
          src={linkedinLogo}
          style={{ width: 24, height: 24, cursor: "pointer" }}
          alt="Linkedin"
          onClick={() => {
            window.open("https://www.linkedin.com/in/marta-grelli")
          }}
        />
      </Stack>
      {/* third section */}
      <Stack
        direction="row"
        alignItems="center"
        style={{ height: 56, position: "relative" }}
      >
        <Text fontSize={12} lineHeight="36px" fontWeight={400}>
          Partita Iva 647892304873839r9433
        </Text>
        <Stack
          direction="row"
          alignItems="center"
          style={{
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            gap: 60,
          }}
        >
          <Text
            fontSize={14}
            lineHeight="36px"
            fontWeight={500}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Privacy Policy
          </Text>
          <Text
            fontSize={14}
            lineHeight="36px"
            fontWeight={500}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Termini e Condizioni
          </Text>
          <Text
            fontSize={14}
            lineHeight="36px"
            fontWeight={500}
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "auto" })
              navigate("/trasparenza")
            }}
          >
            Trasparenza
          </Text>
        </Stack>
      </Stack>
      <Text
        fontSize={11}
        lineHeight="24px"
        textAlign="center"
        style={{ marginBottom: -12 }}
        className="credits"
        onClick={() => {
          window.open("https://www.linkedin.com/in/alessio-massaglia-b83269233")
        }}
      >
        Made with ♥ by Alessio Massaglia
      </Text>
    </Stack>
  )
}

export default Footer

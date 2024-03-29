import { Stack } from "@mui/material"
import travelinLogo from "../assets/images/travelin-logo.svg"
import { useContext, useState } from "react"
import { MainContext } from "../controllers/main"
import Text from "./Text"
import { useNavigate } from "react-router-dom"
import { breakpoints } from "../services/config"
import menuIcon from "../assets/icons/menu.svg"

const NavBar = () => {
  const { pageWidth, paddingInline } = useContext(MainContext)
  const navigate = useNavigate()

  // mobile drawer open
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [drawerAnimation, setDrawerAnimation] = useState<boolean>(false)

  return (
    <Stack
      direction="row"
      alignItems="center"
      style={{
        width: "100%",
        height: 88,
        position: "relative",
        paddingInline: paddingInline,
      }}
    >
      <img
        src={travelinLogo}
        alt="Travelin logo"
        style={{ width: pageWidth > 500 ? 168 : 125, cursor: "pointer" }}
        onClick={() => {
          navigate("/")
        }}
      />
      {pageWidth < breakpoints.tablet ? (
        <img
          src={menuIcon}
          alt="Menu"
          style={{
            width: 78,
            height: 48,
            position: "absolute",
            right: pageWidth < breakpoints.mobile ? 0 : 80,
            cursor: "pointer",
            zIndex: 10,
          }}
          onClick={() => {
            setDrawerOpen(true)
            setTimeout(() => {
              setDrawerAnimation(true)
            }, 10)
          }}
        />
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          style={{
            position: "absolute",
            right: paddingInline,
            gap: 44,
          }}
        >
          <Text
            fontWeight={window.location.pathname === "/" ? 800 : 600}
            style={{
              minWidth: 75.96,
              transition: "100ms",
              textDecoration:
                window.location.pathname === "/" ? "underline" : "none",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/")
            }}
          >
            Travelin
          </Text>
          <Text
            fontWeight={
              window.location.pathname === "/viaggia-inclusivo" ? 800 : 600
            }
            style={{
              minWidth: 164.42,
              transition: "100ms",
              textDecoration:
                window.location.pathname === "/viaggia-inclusivo"
                  ? "underline"
                  : "none",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/viaggia-inclusivo")
            }}
          >
            Viaggia Inclusivo
          </Text>
          <Text
            fontWeight={
              window.location.pathname === "/per-le-aziende" ? 800 : 600
            }
            style={{
              minWidth: 138.34,
              transition: "100ms",
              textDecoration:
                window.location.pathname === "/per-le-aziende"
                  ? "underline"
                  : "none",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/per-le-aziende")
            }}
          >
            Per le Aziende
          </Text>
        </Stack>
      )}
      {drawerOpen && (
        <div
          style={{
            width: "100%",
            height: window.innerHeight,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 20,
            opacity: drawerAnimation ? 1 : 0,
            transition: "100ms",
          }}
          onClick={() => {
            setDrawerAnimation(false)
            setTimeout(() => {
              setDrawerOpen(false)
            }, 200)
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="flex-start"
            style={{
              width: "100%",
              height: pageWidth < breakpoints.mobile ? 150 : 160,
              backgroundColor: "white",
              position: "fixed",
              top: drawerAnimation
                ? 0
                : pageWidth < breakpoints.mobile
                ? -150
                : -160,
              transition: "200ms",
              paddingInline: paddingInline,
              gap: 10,
            }}
          >
            <Text
              fontWeight={window.location.pathname === "/" ? 800 : 600}
              style={{
                minWidth: 75.96,
                transition: "100ms",
                textDecoration:
                  window.location.pathname === "/" ? "underline" : "none",
                display: "flex",
                justifyContent: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/")
                setDrawerAnimation(false)
                setTimeout(() => {
                  setDrawerOpen(false)
                }, 200)
              }}
            >
              Travelin
            </Text>
            <Text
              fontWeight={
                window.location.pathname === "/viaggia-inclusivo" ? 800 : 600
              }
              style={{
                minWidth: 164.42,
                transition: "100ms",
                textDecoration:
                  window.location.pathname === "/viaggia-inclusivo"
                    ? "underline"
                    : "none",
                display: "flex",
                justifyContent: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/viaggia-inclusivo")
                setDrawerAnimation(false)
                setTimeout(() => {
                  setDrawerOpen(false)
                }, 200)
              }}
            >
              Viaggia Inclusivo
            </Text>
            <Text
              fontWeight={
                window.location.pathname === "/per-le-aziende" ? 800 : 600
              }
              style={{
                minWidth: 138.34,
                transition: "100ms",
                textDecoration:
                  window.location.pathname === "/per-le-aziende"
                    ? "underline"
                    : "none",
                display: "flex",
                justifyContent: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/per-le-aziende")
                setDrawerAnimation(false)
                setTimeout(() => {
                  setDrawerOpen(false)
                }, 200)
              }}
            >
              Per le Aziende
            </Text>
          </Stack>
        </div>
      )}
    </Stack>
  )
}

export default NavBar

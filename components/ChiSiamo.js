import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

const ChiSiamo = ({ href, text }) => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  const [screenWindow, setScreenWindow] = useState("")
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/css/bootstrap.min.css")
      : null
    typeof window !== undefined
      ? setScreenWindow(window.screen)
      : console.log("no window")
  }, [])
  if (screenWindow !== "") {
    return (
      <div
        style={
          screenWindow.width < 768
            ? {
                display: "flex",
                flexDirection: "column",
                marginInline: "0px",
                textAlign: "left",
                paddingInline: "5%",
              }
            : {
                display: "flex",
                flexDirection: "column",
                minWidth: "100%",

                fontSize: "2em",
                padding: "0px",
                textAlign: "left",
                marginBlock: "20px",
              }
        }
      >
        <div
          className="funzionamentoValori"
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  padding: "0px",
                  margin: "0px",
                  marginBlockEnd: "40px",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  textAlign: "left",
                  paddingInlineStart: "0px",
                }
          }
        >
          <p
            style={
              screenWindow.width < 768
                ? {
                    fontSize: "1.6em",
                    marginInline: "0px",
                    textAlign: "left",
                  }
                : {
                    fontSize: "2em",
                    padding: "0px",

                    textAlign: "left",
                    marginBlock: "20px",
                    marginInline: "0px",
                  }
            }
          >
            <b> {`Il nostro team`}</b>
          </p>
          <p
            style={
              screenWindow.width < 768
                ? {
                    fontSize: "1rem",
                    marginInline: "0px",
                    textAlign: "left",
                  }
                : {
                    fontSize: "1.2rem",
                    padding: "0px",
                    textAlign: "left",
                    marginBlock: "20px",
                    marginInline: "0px",
                    maxWidth: "50vw",
                  }
            }
          >
            {`Siamo un team giovane e dimanico, proveniente da tutta Italia. `}
            <b>{`Innovatori nel cuore, `}</b>
            {`vogliamo che tutti si accorgano della bellezza della nostra terra. `}
          </p>
        </div>
      </div>
    )
  } else {
    return <div>loading</div>
  }
}
export default ChiSiamo

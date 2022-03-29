import React, { useEffect, useState } from "react"

const CTA = () => {
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
                maxWidth: "80%",

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
                  textAlign: "left",
                  paddingInlineStart: "0px",
                }
          }
        >
          <p
            style={
              screenWindow.width < 768
                ? {
                    fontSize: "0.6em",
                    marginInline: "0px",
                    textAlign: "left",
                  }
                : {
                    fontSize: "1em",
                    padding: "0px",

                    textAlign: "left",
                    marginBlock: "20px",
                    marginInline: "0px",
                    maxWidth: "50vw",
                  }
            }
          >
            {`Ti piacerebbe collaborare con noi? `}
            <u>
              <b> {`Contattaci`}</b>
            </u>
            {` e facciamoci due chiacchiere.`}
          </p>
        </div>
      </div>
    )
  } else {
    return <div>loading</div>
  }
}
export default CTA

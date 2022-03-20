import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import MainButton from "./buttons/MainButton"
import AmbassadorCard from "./cards/AmbassadorCard"

/* 
https://i.ibb.co/c31R8zd/Ambassador2-499-645.png
https://i.ibb.co/NjmrN27/Ambassador3-499-645.png
https://i.ibb.co/X5kKbZN/Ambassador1-499-645.png
https://i.ibb.co/YNfg6NH/Amassador4-499-645.png

https://i.ibb.co/J5ZfKd1/CULTURAACCESSIBILE.png
https://i.ibb.co/DbzrBcL/TURISMABILE-400x70.png
https://i.ibb.co/h1dQkT1/APRIONLUS-2.jpg
https://i.ibb.co/gFHtc7P/FEDERAGIT2.png
*/
const Ambassadors = ({ children }) => {
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
    console.log(screenWindow)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingBlock: "10%",
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  paddingBlock: "5%",
                  paddingInline: "5%",
                }
          }
        >
          <div
            style={
              screenWindow.width < 768
                ? {
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "80vw",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "80vw",
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
                      marginInline: "0px",
                      textAlign: "left",
                    }
              }
            >
              <b> {`I nostri Ambassadors`}</b>
            </p>
            <div
              style={
                screenWindow.width < 768
                  ? {
                      fontSize: "1.6em",
                      marginInline: "0px",
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                    }
                  : {
                      fontSize: "2em",
                      padding: "0px",
                      marginInline: "0px",
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "row",
                    }
              }
            >
              <AmbassadorCard
                name={`Jasper Khamal`}
                social={`Tick-Tock`}
                image={`https://i.ibb.co/X5kKbZN/Ambassador1-499-645.png`}
                video={``}
              />
              <AmbassadorCard
                name={`Franca Gaetana`}
                social={`Instagram`}
                image={`https://i.ibb.co/c31R8zd/Ambassador2-499-645.png`}
                video={``}
              />
              <AmbassadorCard
                name={`Eleonora Trimellini`}
                social={`Instagram`}
                image={`https://i.ibb.co/NjmrN27/Ambassador3-499-645.png`}
                video={``}
              />
              <AmbassadorCard
                name={`Omar Gauducci`}
                social={`Instagram`}
                image={`https://i.ibb.co/YNfg6NH/Amassador4-499-645.png`}
                video={``}
              />
            </div>
          </div>
        </div>
        <div
          style={
            screenWindow.width < 768
              ? {
                  display: "flex",
                  flexDirection: "column",
                  width: "80vw",
                  height: "auto",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  width: "80vw",
                  marginBlockStart: "20px",
                }
          }
        >
          <p
            style={
              screenWindow.width < 768
                ? {
                    fontSize: "1.2em",
                    marginInline: "0px",
                    textAlign: "left",
                  }
                : {
                    fontSize: "1.6em",
                    padding: "0px",
                    marginInline: "0px",
                    textAlign: "left",
                  }
            }
          >
            <b> {`Si fidano di noi`}</b>
          </p>
          <div
            style={
              screenWindow.width < 768
                ? {
                    height: "auto",
                    marginInline: "0px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }
                : {
                    height: "auto",
                    padding: "0px",
                    marginInline: "0px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }
            }
          >
            <div
              style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
            >
              <Image
                src="https://i.ibb.co/J5ZfKd1/CULTURAACCESSIBILE.png"
                alt="Più cultura accessibile"
                width="160px"
                height="80px"
              />
            </div>
            <div
              style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
            >
              <Image
                src="https://i.ibb.co/DbzrBcL/TURISMABILE-400x70.png"
                alt="Turismabile"
                width="160px"
                height="80px"
              />
            </div>
            <div
              style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
            >
              <Image
                src="https://i.ibb.co/h1dQkT1/APRIONLUS-2.jpg"
                alt="Aprionlus"
                width="80px"
                height="80px"
              />
            </div>
            <div
              style={{ minHeight: "40px", width: "100px", marginInline: "5px" }}
            >
              <Image
                src="https://i.ibb.co/gFHtc7P/FEDERAGIT2.png"
                alt="Federagit"
                width="100px"
                height="80px"
              />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Ambassadors

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
      </div>
    )
  } else {
    return <p>loading</p>
  }
}
export default Ambassadors

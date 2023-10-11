import React from "react"
import { createContext, ReactNode, useEffect, useState } from "react"

interface MainContextInterface {
  pageWidth: number
  paddingInline: number
}

const MainContext = createContext<MainContextInterface>({
  pageWidth: window.innerWidth,
  paddingInline: 185,
})

const MainController = ({ children }: { children: ReactNode }) => {
  // states
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth) // current page width
  const paddingInline = pageWidth > 1144 ? 185 : pageWidth > 500 ? 80 : 16

  // update current page width on window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth)
    })
  }, [])

  return (
    <MainContext.Provider
      value={{
        pageWidth,
        paddingInline,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
export { MainController, MainContext }

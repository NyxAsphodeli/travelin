import React, { createContext, useState } from "react"

// CONTEXT
const AppContext = createContext()

const AppProvider = ({ children }) => {
  // TEAM
  const [team, setTeam] = useState()
  return (
    <AppContext.Provider value={{ team, setTeam }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }

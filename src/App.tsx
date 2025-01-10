import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useEffect } from "react";
import { MainController } from "./controllers/main"
import Home from "./views/home"
import { Stack } from "@mui/material"
import NavBar from "./components/NavBar"
import PerLeAziende from "./views/perLeAziende"
import ViaggiaInclusivo from "./views/viaggiaInclusivo"
import Footer from "./components/Footer"
import PopUpNavBar from "./components/PopUpNavBar"
import ChiSiamo from "./views/chiSiamo"
import Trasparenza from "./views/trasparenza"

const App = () => {
  const RedirectToExternal = () => {
    useEffect(() => {
        window.location.href = "https://travelin.me"; // Redirect to external site
    }, []);
    return null; // Render nothing
};

  return (
    <BrowserRouter>
    <Routes>
                {/* Redirect all users */}
                <Route path="*" element={<RedirectToExternal />} />
            </Routes>
      {/* <MainController>
        <Stack
          style={{
            position: "relative",
            minHeight: "100vh",
          }}
        >
          <NavBar />
          <PopUpNavBar />
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viaggia-inclusivo" element={<ViaggiaInclusivo />} />
            <Route path="/per-le-aziende" element={<PerLeAziende />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/trasparenza" element={<Trasparenza />} />
          </Routes> 
          <Footer />
        </Stack>
      </MainController> */}
    </BrowserRouter>
  )
}

export default App

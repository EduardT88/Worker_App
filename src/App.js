import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import WorkerStrip from "./components/WorkerStrip";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import WorkerInfo from "./components/WorkerInfo";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <WorkerStrip />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/employee/"
            element={<WorkerInfo />}
          />
          {/* <Route path="/employee/:id" element={<WorkerInfo/>}/> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

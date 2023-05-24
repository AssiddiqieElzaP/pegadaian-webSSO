import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import Login from "./login";
import Dashboard from "./pages/Pendaftaran/dashboard";
import NavbarComp from "./component/navbar/NavbarComp";
import AddBackup from "./pages/Pendaftaran/daftarPengguna/addBackup";
import RegisterBackup from "./pages/Pendaftaran/daftarPengganti/registerBackup";
import { ToastContainer } from "react-toastify";
import Tabs from "./component/tabs/Tabs";

const App = () => {
  return (
    <>
    <ToastContainer theme='colored' position='top-center'></ToastContainer>
    <Router>
      <ProSidebarProvider>
        <NavbarComp/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-backup" element={<Tabs />} />
          <Route path="/register-backup" element={<RegisterBackup />} />
        </Routes>
      </ProSidebarProvider>
    </Router>
    </>
  );
};

export default App;

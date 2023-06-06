import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import NavbarComp from "./component/navbar/NavbarComp";
import { ToastContainer } from "react-toastify";
import Tabs from "./component/tabs/Tabs";
import UserRoleMatrix from "./pages/Rolematrix/UserRoleMatrix";
import PersetujuanUserBackup from "./pages/Persetujuan/PersetujuanUserBackup";

const App = () => {
  return (
    <>
    <ToastContainer theme='colored' position='center'></ToastContainer>
    <Router>
      <ProSidebarProvider>
        <NavbarComp/>
        <Routes>
          <Route path="/" element={<Tabs />} />
          <Route path="/register-backup" element={<PersetujuanUserBackup />} />
          <Route path="/user-role" element={<UserRoleMatrix />} />
        </Routes>
      </ProSidebarProvider>
    </Router>
    </>
  );
};

export default App;

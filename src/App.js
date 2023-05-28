import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import Login from "./login";
import Dashboard from "./pages/Pendaftaran/dashboard";
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
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-backup" element={<Tabs />} />
          <Route path="/approval" element={<PersetujuanUserBackup />} />
          <Route path="/role-matrix" element={<UserRoleMatrix />} />
        </Routes>
      </ProSidebarProvider>
    </Router>
    </>
  );
};

export default App;

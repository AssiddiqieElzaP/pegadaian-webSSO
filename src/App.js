import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { ToastContainer } from "react-toastify";
import Tabs from "./component/tabs/Tabs";
import PersetujuanUserBackup from "./pages/Persetujuan/PersetujuanUserBackup";
import Login from '../src/login/index'

const App = () => {
  return (
    <>
    <ToastContainer theme='colored' position='center'></ToastContainer>
    <Router>
      <ProSidebarProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/persetujuan" element={<PersetujuanUserBackup />} />
          
          {/* <Route path="/user-role" element={<UserRoleMatrix />} /> */}
        </Routes>
      </ProSidebarProvider>
    </Router>
    </>
  );
};

export default App;

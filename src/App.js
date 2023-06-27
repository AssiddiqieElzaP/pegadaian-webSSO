import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { ToastContainer } from "react-toastify";
import Tabs from "./component/tabs/Tabs";
import PersetujuanUserBackup from "./pages/Persetujuan/PersetujuanUserBackup";
// import Login from '../src/login/index'
import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import { useEffect } from "react";
import axios from "axios";
import AuthSSO from "./pages/Auth/Auth";

const App = () => {
  return (
    <>
      <ToastContainer theme="colored" position="center"></ToastContainer>

      <ProSidebarProvider>
        <Routes>
          <Route path="/" element={<AuthSSO />} />
          {/* <Route path="/pengajuan" element={<Tabs />} /> */}
          <Route path="/persetujuan" element={<PersetujuanUserBackup />} />
          <Route exact path="/pengajuan" element={<Tabs />} />
          {/* <Route path="/user-role" element={<UserRoleMatrix />} /> */}
        </Routes>
      </ProSidebarProvider>

      {/* <AuthSSO> */}
          <ProSidebarProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/pengajuan" element={<Tabs />} /> */}
              <Route path="/persetujuan" element={<PersetujuanUserBackup />} />
              <Route exact path="/pengajuan" element={<Tabs />} />
              {/* <Route path="/user-role" element={<UserRoleMatrix />} /> */}
            </Routes>
          </ProSidebarProvider>
        {/* </AuthSSO> */}
    </>
  );
};

export default App;

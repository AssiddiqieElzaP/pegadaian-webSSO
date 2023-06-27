import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Tabs from "./component/tabs/Tabs";
import PersetujuanUserBackup from "./pages/Persetujuan/PersetujuanUserBackup";

import AuthSSO from "./pages/Auth/Auth";

const App = () => {
  return (
    <>
      <ToastContainer theme="colored" position="center" />

      <ProSidebarProvider>
        <Routes>
          <Route path="/" element={<AuthSSO />} />
          <Route path="/persetujuan" element={<PersetujuanUserBackup />} />
          <Route path="/pengajuan" element={<Tabs />} />
        </Routes>
      </ProSidebarProvider>
    </>
  );
};

export default App;

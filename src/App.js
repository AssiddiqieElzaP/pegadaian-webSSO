import React, { useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Tabs from "./component/tabs/Tabs";
import PersetujuanUserBackup from "./pages/Persetujuan/PersetujuanUserBackup";
import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import { isLogged } from "./helpers/utils";
import AuthSSO from "./pages/Auth/Auth";

const App = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = isLogged();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn, navigate]);

  return (
    <>
      <ToastContainer theme="colored" position="center" />

      <ProSidebarProvider>
        <Routes>
          <Route path="/" element={<AuthSSO />} />
          {isUserLoggedIn && (
            <>
              <Route path="/persetujuan" element={<PersetujuanUserBackup />} />
              <Route path="/pengajuan" element={<Tabs />} />
            </>
          )}
        </Routes>
      </ProSidebarProvider>
    </>
  );
};

export default App;
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { ToastContainer } from "react-toastify";
import Tabs from "./component/tabs/Tabs";
import PersetujuanUserBackup from "./pages/Persetujuan/PersetujuanUserBackup";
import Login from '../src/login/index'

const App = () => {
  // function Riderect() {
  //   const location = useLocation();
  //   const searchParam = new URLSearchParams(location.search);
  //   const codes = searchParam.get("code");

  //   useEffect(() => async () => {
  //     // const redirect = `htpp://localhost:3000` === 'admin' ? REACT_APP_SSO_REDIRECT_URI :
  //     if (!localStorage.getItem("token")) {
  //       const url = `http://10.254.1.180:8081/hcis/oauth/authorize?client_id=delegasilocal&response_type=code&redirect_uri=http://localhost:3000&state=12345`;
  //       window.location.href = url;
  //       console.log("test lagi");
  //       console.log(codes);
  //       try {
  //         // await axios
  //         //   .post(`http://localhost:8080/api/v1/auth-sso/code`, {
  //         //     code: codes
  //         //   })
  //         //   .then((res) => {
  //         //     const data = res.data
  //         //     localStorage.setItem("token", "ini coba");
  //         //     console.log("coba gembel");
  //         //     console.log(data);
  //         //   });
  //       } catch (error) {
  //         console.log("error mulu");
  //       }
  //       console.log("test", codes);
  //     }

  //     // console.log("1");
  //     // console.log("ini coba");
  //     // console.log("test", location);
  //     // console.log("test lagi", codes);
  //   });
  // }
  return (
    <>
    <ToastContainer theme='colored' position='center'></ToastContainer>
    <Router>
      <ProSidebarProvider>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Tabs />} />
          <Route path="/persetujuan" element={<PersetujuanUserBackup />} />
          
          {/* <Route path="/user-role" element={<UserRoleMatrix />} /> */}
        </Routes>
      </ProSidebarProvider>
    </Router>
    </>
  );
};

export default App;

import { useEffect } from "react";
import { redirectLoginSSo, isLogged, test } from "../../helpers/utils";
// import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { ApiAuth } from "../../helpers/Api";
import { redirect } from "react-router-dom/dist/umd/react-router-dom.development";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../../component/navbar/NavbarComp";
import SidebarMenu from "../../component/sidebar/sidebar";

const AuthSSO = () => {
  //dibikin kondisi untuk jika code tidak didapat masuk kedalam HOME
  const navigate = useNavigate();
  useEffect(
    () => async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");
      const haveTokken = isLogged() ?? "";

      if (authCode === null && haveTokken === '') {
        redirectLoginSSo();
      } else {
        try {
          await ApiAuth()
            .loginSSO({ code: authCode })
            .then((res) => {
              const data = res.data;
              console.log("coba gembel", data.data);
              localStorage.setItem("token", data.data.token);
              localStorage.setItem("username",data.data.user_name)
              localStorage.setItem("role",data.data.role)
              localStorage.setItem("kode_jabatan", data.data.kode_jabatan)
              localStorage.setItem("work_unit",data.data.kode_parent_work_unit)
              console.log(data);
              navigate('/pengajuan')
            });
        } catch (error) {
          console.log("error mulu");
        }
      }if(haveTokken){
          navigate('/pengajuan')
      }

      // if (authCode) {
      //   dispatch(loginUSERSSO(authCode)).then((res) => {
      //     if (res?.success === true) {
      //       router.push("/");
      //     }
      //   });
      // } else if (isLogin) {
      //   router.push("/");
      // }
    },
    []
  );
};

export default AuthSSO;

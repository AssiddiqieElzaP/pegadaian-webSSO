import { useEffect } from "react";
import { redirectLoginSSo } from "../../helpers/utils";
import axios from "axios";
import { Navigate } from "react-router-dom/dist/umd/react-router-dom.development";

const AuthSSO = () => {
  //dibikin kondisi untuk jika code tidak didapat masuk kedalam HOME

  useEffect(
    () => async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");

      if (authCode === null) {
        redirectLoginSSo()
      }

      if (authCode) {
        try {
          await axios
            .post(`http://localhost:8080/api/v1/auth-sso/code`, {
              code: authCode,
            })
            .then((res) => {
              const data = res.data;
              console.log("coba gembel");
              localStorage.setItem("token", data.data.token);
              console.log(data);
              // navigate('/pengajuan')
              <Navigate to="/pengajuan" />;

              // Redirect ("/pengajuan")
            });
        } catch (error) {
          console.log("error mulu");
        }
      }
      else if (isLogin) {
        router.push("/");
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

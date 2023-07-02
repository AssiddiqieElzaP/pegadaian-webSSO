import { useEffect } from "react";
import { redirectLoginSSo } from "../../helpers/utils";
import axios from "axios";

const AuthSSO = () => {
  useEffect(
    () => async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");

      if (authCode === null) {
        redirectLoginSSo();
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
              // localStroage.setItem("role", data.data.role);
              console.log(data);
              // navigate('/pengajuan');
            });
        } catch (error) {
          console.log("error mulu");
        }
      }
    },
    []
  );
};

export default AuthSSO;

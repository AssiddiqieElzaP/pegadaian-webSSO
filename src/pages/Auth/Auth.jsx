import { useEffect } from "react";
import { redirectLoginSSo, isLogged } from "../../helpers/utils";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { ApiAuth } from "../../helpers/Api";


const AuthSSO = () => {
  //dibikin kondisi untuk jika code tidak didapat masuk kedalam HOME
  const navigate = useNavigate();
  useEffect(
    () => async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");
      const isLogin = isLogged() ?? ""
      
      if (authCode === null || isLogin === "") {
        redirectLoginSSo()
      }

      else {

        try {
          await ApiAuth().loginSSO({ code: authCode})
            .then((res) => {
              const data = res.data;
              console.log("coba gembel", data.data);
              localStorage.setItem("token", data.data.token);
              console.log(data);
              if(data.code === '200'){
                navigate("/")
              }
            });
        } catch (error) {
          console.log("error mulu");
        }
      }
       if (isLogged) {
        console.log("ini is", isLogged)
        navigate("/pengajuan");
        console.log(localStorage.getItem("token"))
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
    [isLogged()]
  );
};

export default AuthSSO;

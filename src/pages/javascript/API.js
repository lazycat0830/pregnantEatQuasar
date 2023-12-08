import axios from "axios";
import { useRouter } from "vue-router";

export default function () {
  const router = useRouter();
  //登入 v
  const LoginAPI = (loginData) => {
    axios
      .post("http://localhost:55688/api/Auth/login", loginData)
      .then((res) => {
        console.log(res.data.data);
        const token = res.data.data.token;
        sessionStorage.setItem("token", token);
        if (res.data.data.role === "admin") {
          console.log("admin");
          router.push({
            name: "AdminheaderPage",
            state: {
              accountName: "管理員 先生",
              Roles: "管理員",
            },
          });
        } else if (res.data.data.role === "maker") {
          console.log("maker");
          router.push({
            name: "MakerheaderPage",
            state: {
              accountName: "中央廚房",
              Roles: "製作者",
            },
          });
        } else if (res.data.data.role === "main") {
          console.log("main");
          router.push({
            name: "headerPage",
            state: {
              accountName: "王小姐",
              Roles: "孕婦",
            },
          });
        } else {
          return;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //註冊 v
  //註冊一定要圖片
  const RegisterAPI = (fromData) => {
    axios
      .post("http://localhost:55688/api/Auth/register", fromData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //取得所有餐點 v
  const getDishesAPI = async (token) => {
    let dishesData;
    await axios
      .get("http://localhost:55688/api/Dish/getDishes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("getDishes", res.data.data);
        dishesData = res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return dishesData;
  };
  //取得使用者資料
  const getUserAPI = (token) => {
    axios
      .get("http://localhost:55688/api/Auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("getUser", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //推薦 401錯誤
  // const getRecommendAPI = (token) => {
  //   axios
  //     .get("http://localhost:55688/api/Dish/recommend", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log("getUser", res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  //忘記密碼 v
  const ForgetpasswordAPI = (account) => {
    console.log(account);
    axios
      .post(`http://localhost:55688/api/Auth/forgetpassword`, {
        account: account,
      })
      .then((res) => {
        console.log("forgetpassword", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    LoginAPI,
    RegisterAPI,
    getDishesAPI,
    getUserAPI,
    // getRecommendAPI,
    ForgetpasswordAPI,
  };
}

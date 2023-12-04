<template>
  <div class="relative header-bg" style="height: 100px">
    <div class="absolute header-absolute-style">
      <q-btn
        flat
        @click="toggleNav"
        round
        dense
        icon="menu"
        style="font-size: 20px"
      />
    </div>
    <div class="column justify-center items-center">
      <div class="header-Title-Text">食在好孕</div>
    </div>
  </div>
  <div style="padding: 10px">
    <menuPage></menuPage>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import menuPage from "./components/menuPage.vue";
import scopedPage from "./components/scopedPage.vue";

import CarouselCard from "./components/CarouselCard.vue";
import historicalPage from "./components/historicalPage.vue";

import axios from "axios";

const inView = ref(Array.apply(null, Array(10)).map((_) => false));
const date = new Date();
const today = ref(
  date.getFullYear() +
    "/" +
    (Number(date.getMonth()) + 1).toString().padStart(2, "0") +
    "/" +
    date.getDate()
);

const dialog = ref(false);
const stars = ref(4);
// const historyValue = reactive(history.state);

const onIntersection = (entry) => {
  const index = parseInt(entry.target.dataset.id, 10);
  setTimeout(() => {
    inView.value.splice(index, 1, entry.isIntersecting);
  }, 50);
};

const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
  "leftDrawerOpen",
  "toggleLeftDrawer",
]);
const router = useRouter();

const toggleNav = () => {
  toggleLeftDrawer();
  router.push({
    path: "/Page/HeaderPage",
    query: { navOpen: leftDrawerOpen.value },
  });
};

const desert = reactive({
  fruit: { cheacked: false, label: "水果", color: "indigo-5" },
  vegetable: { cheacked: false, label: "蔬菜", color: "teal-5" },
  meat: { cheacked: false, label: "肉類", color: "orange-5" },
  egg: { cheacked: false, label: "蛋", color: "red-5" },
});

const selection = computed(() => {
  return Object.keys(desert)
    .filter((type) => desert[type] === true)
    .join(", ");
});

const changeShow = ref("home");
const showComponent = (show) => {
  changeShow.value = show;
};

const toGenerate = () => {
  router.push({
    name: "generateProd",
  });
};

const stapleFood = ref([
  {
    type: "rice",
    name: "飯類",
    dataList: [
      { name: "白米", src: "/public/images/Ingredients/grains/rice/白飯.jpeg" },
      { name: "紫米", src: "/public/images/Ingredients/grains/rice/紫米.jpg" },
      { name: "糙米", src: "/public/images/Ingredients/grains/rice/糙米.jpg" },
    ],
  },
  {
    type: "nodle",
    name: "麵類",
    dataList: [
      {
        name: "刀削麵",
        src: "/public/images/Ingredients/grains/nodle/刀削麵.jpg",
      },
      {
        name: "米粉",
        src: "/public/images/Ingredients/grains/nodle/米粉平均值.jpg",
      },
      {
        name: "米苔目",
        src: "/public/images/Ingredients/grains/nodle/米苔目.jpg",
      },
      {
        name: "烏龍麵",
        src: "/public/images/Ingredients/grains/nodle/冷凍烏龍麵.jpg",
      },
      { name: "拉麵", src: "/public/images/Ingredients/grains/nodle/拉麵.jpg" },
    ],
  },
]);
// ,
//   { type: "other", name: "其他", dataList: [{ name: "", src: "" }] },

onMounted(async () => {
  await api();
});

const token = ref("");
const api = async () => {
  //登入
  await axios
    .post("http://localhost:55688/api/Auth/login", {
      account: "admin",
      password: "admin",
    })
    .then((res) => {
      console.log(res.data.data);
      token.value = res.data.data.token;
    })
    .catch((error) => {
      console.log(error);
    });
  //取得所有餐點
  await axios
    .get("http://localhost:55688/api/Dish/getDishes")
    .then((res) => {
      console.log("getDishes", res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  //取得使用者資料
  await axios
    .get("http://localhost:55688/api/Auth/user", {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
    .then((res) => {
      console.log("getUser", res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  //推薦 401錯誤
  // await axios
  //   .get("http://localhost:55688/api/Dish/recommend", {
  //     headers: {
  //       Authorization: `Bearer ${token.value}`,
  //     },
  //   })
  //   .then((res) => {
  //     console.log("getUser", res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //忘記密碼 400錯誤
  // await axios
  //   .get("http://localhost:55688/api/Auth/forgetpassword", { account: "admin" })
  //   .then((res) => {
  //     console.log("forgetpassword", res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //註冊
  //註冊一定要圖片
  const Register = new FormData();
  Register.append("account", "1111");
  Register.append("password", "1111");
  Register.append("name", "1111");
  Register.append("phone", "1111");
  Register.append("email", "1111");
  Register.append("role", "1111");
  Register.append("pocture", "");
  // await axios
  //   .post("http://localhost:55688/api/Auth/register", Register, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};
</script>
<style>
.my-card {
  width: 100%;
  max-width: 300px;
}

.example-item {
  height: 290px;
  width: 290px;
}

.dropFood-table {
  width: 50%;
}

.drapFood {
  display: flex;
  justify-content: center;
  align-items: center;
}
.drapFood span {
  text-align: center;
}

.drapFood div {
  width: 100%;
}
</style>

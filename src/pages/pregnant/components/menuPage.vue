<template>
  <q-card flat bordered>
    <q-card-section class="q-py-xs q-px-xs bg-pink-11 text-white">
      <!-- 在這個q-toolbar放你的標頭 -->
      <q-toolbar
        class="flex items-center justify-center"
        style="display: inline-flex"
      >
        <q-btn
          v-if="dayDate !== date.getDate() + 1"
          flat
          icon="chevron_left"
        ></q-btn>
        <q-btn flat v-else></q-btn>
        <span class="text-h6" style="font-weight: bolder">
          &nbsp;{{
            date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + dayDate
          }}菜單 &nbsp;
        </span>
        <q-btn flat icon="chevron_right"></q-btn>
      </q-toolbar>
    </q-card-section>
    <q-separator />
    <q-card-section
      class="row justify-center"
      style="max-height: 550px; overflow: hidden; overflow-y: scroll"
    >
      <!-- 在這裡面放你喜歡的表格 -->

      <q-card
        v-for="menudata in menu"
        :key="menudata"
        style="width: 80%"
        flat
        bordered
      >
        <table style="width: 100%" class="HeaderimgTable">
          <tr>
            <td>
              <q-img style="width: 100%; height: 100%" :src="menudata.img1" />
            </td>
            <td>
              <q-img style="width: 100%; height: 100%" :src="menudata.img2" />
            </td>
            <td>
              <q-img style="width: 100%; height: 100%" :src="menudata.img3" />
            </td>
          </tr>
          <tr>
            <td>
              <q-img style="width: 100%; height: 100%" :src="menudata.img4" />
            </td>
            <td>
              <q-img style="width: 100%; height: 100%" :src="menudata.img5" />
            </td>
            <td>
              <q-img style="width: 100%; height: 100%" :src="menudata.img6" />
            </td>
          </tr>
        </table>
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label>{{ menudata.text }}</q-item-label>
          </q-item-section>
          <div>
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="
                menudata.imgbool ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
              "
              @click="menudata.imgbool = !menudata.imgbool"
            />
          </div>
        </q-item>
        <q-slide-transition>
          <div v-show="menudata.imgbool">
            <q-separator />
            <q-card-section class="text-subtitle2">
              <div>
                <div
                  class="text-h5 q-mt-sm q-mb-xs row items-center justify-between"
                >
                  菜色
                  <q-btn flat to="changeMenuPage"> 替換</q-btn>
                </div>
              </div>
              <div class="text-caption text-grey">
                <ul>
                  <li>{{ menudata.food1 }}</li>
                  <li>{{ menudata.food2 }}</li>
                  <li>{{ menudata.food3 }}</li>
                  <li>{{ menudata.food4 }}</li>
                  <li>{{ menudata.food5 }}</li>
                  <li>{{ menudata.food6 }}</li>
                </ul>
              </div>
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { data } from "autoprefixer";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const showInfo = ref(false);
const item1 = ref(true);
const props = defineProps({});
const router = useRouter();
const date = new Date();
const dayDate = date.getDate() + 1;

const menu = ref({
  breakfast: {
    img1: "/public/images/menu/mainMeal/小米粥.jpg",
    img2: "/public/images/menu/Dishes/干貝蒸蛋.png",
    img3: "/public/images/menu/Dishes/麻油龍鬚菜.png",
    img4: "/public/images/menu/Dishes/野菇西芹.png",
    img5: "/public/images/menu/Soup/青木瓜排骨湯_0.jpg",
    img6: "/public/images/menu/fruit/香蕉.jpg",
    imgbool: false,
    food1: "小米粥",
    food2: "干貝蒸蛋",
    food3: "麻油龍鬚菜",
    food4: "野菇西芹",
    food5: "青木瓜排骨湯",
    food6: "香蕉",
    text: "早餐",
  },
  lunch: {
    img1: "/public/images/menu/mainMeal/紫米飯.jpg",
    img2: "/public/images/menu/Dishes/黑胡椒豬柳.jpg",
    img3: "/public/images/menu/Dishes/青龍炒肉片.jpg",
    img4: "/public/images/menu/Dishes/蝦仁玉米豆腐.jpg",
    img5: "/public/images/menu/Soup/麻油雞湯.jpg",
    img6: "/public/images/menu/fruit/水蜜桃.jpg",
    imgbool: false,
    food1: "紫米飯",
    food2: "黑胡椒豬柳",
    food3: "青龍炒肉片",
    food4: "蝦仁玉米豆腐",
    food5: "麻油雞湯",
    food6: "水蜜桃",
    text: "午餐",
  },
  dinner: {
    img1: "/public/images/menu/mainMeal/麻油煎蛋麵線.jpg",
    img2: "/public/images/menu/Dishes/香煎鱸魚.jpg",
    img3: "/public/images/menu/Dishes/紅燒豆腐.jpg",
    img4: "/public/images/menu/Dishes/紅麴燒肉片.jpg",
    img5: "/public/images/menu/Soup/藥燉排骨湯.jpg",
    img6: "/public/images/menu/fruit/橘子.png",
    imgbool: false,
    food1: "麻油煎蛋麵線",
    food2: "香煎鱸魚",
    food3: "紅燒豆腐",
    food4: "紅麴燒肉片",
    food5: "藥燉排骨湯",
    food6: "橘子",
    text: "晚餐",
  },
});
</script>

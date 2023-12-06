<template>
  <!-- style="position: relative" -->
  <!-- style="
        transform: rotate(90deg);
        width: 736px;
        position: absolute;
        top: 150px;
        left: -170px;
      " -->
  <div>
    <div>
      <q-card flat bordered style="width: 100%">
        <q-card-section
          class="q-py-xs q-px-xs bg-pink-11 text-white"
          style="position: fixed; width: 100%; z-index: 80"
        >
          <!-- 在這個q-toolbar放你的標頭 -->
          <q-toolbar
            class="flex items-center justify-between"
            style="display: inline-flex"
          >
            <div class="row items-center">
              <q-icon name="chevron_left" size="24px" @click="back()"></q-icon>
              <span class="text-h6">菜色替換</span>
            </div>

            <div class="row q-gutter-sm">
              <q-btn
                :class="
                  nowAction === 'changeOrder'
                    ? 'bg-dark text-grey-1'
                    : 'bg-grey-1 text-dark'
                "
                @click="drop()"
                ><div class="column justify-center items-center">
                  <div>菜色替換</div>
                </div></q-btn
              >
              <q-btn
                :class="
                  nowAction === 'askOrder'
                    ? 'bg-dark text-grey-1'
                    : 'bg-grey-1 text-dark'
                "
                @click="nowAction = 'askOrder'"
                ><div class="column justify-center items-center">
                  <div>選餐小幫手</div>
                </div></q-btn
              >
              <q-btn
                :class="
                  nowAction === 'askSymptom'
                    ? 'bg-dark text-grey-1'
                    : 'bg-grey-1 text-dark'
                "
                @click="nowAction = 'askSymptom'"
                ><div class="column justify-center items-center">
                  <div>食療小助手</div>
                </div></q-btn
              >
            </div>
          </q-toolbar>
        </q-card-section>
        <q-separator />
        <q-card-section style="padding-top: 70px">
          <!-- 在這裡面放你喜歡的表格 -->
          <div class="col">
            <div class="row container" style="width: 100%; height: 80%">
              <div style="width: 50%">
                <div class="row justify-center">
                  <!-- <canvas
                    ref="plateCanvas"
                    style="width: 100%; height: 100%"
                  ></canvas> -->
                  <div>
                    <div style="font-size: 18px; font-weight: bolder">
                      {{ hisoryState.year }} {{ hisoryState.type }} 套餐
                    </div>
                  </div>
                </div>
                <div
                  class="row justify-center"
                  style="padding-top: 10px; position: relative"
                >
                  <!-- <div
                    class="row justify-center"
                    style="
                      position: absolute;
                      top: 10px;
                      left: 15px;
                      z-index: 80;
                      width: 30%;
                    "
                  >
                    <div
                      style="
                        text-align: center;
                        background-color: black;
                        border-radius: 20px;
                        width: 60%;
                      "
                      class="text-grey-1"
                    >
                      主食
                    </div>
                  </div>
                  <div
                    class="row justify-center"
                    style="
                      position: absolute;
                      top: 10px;
                      left: 125px;
                      z-index: 80;
                      width: 30%;
                    "
                  >
                    <div
                      style="
                        text-align: center;
                        background-color: black;
                        border-radius: 20px;
                        width: 60%;
                      "
                      class="text-grey-1"
                    >
                      菜色1
                    </div>
                  </div>
                  <div
                    class="row justify-center"
                    style="
                      position: absolute;
                      top: 10px;
                      left: 235px;
                      z-index: 80;
                      width: 30%;
                    "
                  >
                    <div
                      style="
                        text-align: center;
                        background-color: black;
                        border-radius: 20px;
                        width: 60%;
                      "
                      class="text-grey-1"
                    >
                      菜色2
                    </div>
                  </div>
                  <div
                    class="row justify-center"
                    style="
                      position: absolute;
                      top: 120px;
                      left: 15px;
                      z-index: 80;
                      width: 30%;
                    "
                  >
                    <div
                      style="
                        text-align: center;
                        background-color: black;
                        border-radius: 20px;
                        width: 60%;
                      "
                      class="text-grey-1"
                    >
                      菜色3
                    </div>
                  </div>
                  <div
                    class="row justify-center"
                    style="
                      position: absolute;
                      top: 120px;
                      left: 125px;
                      z-index: 80;
                      width: 30%;
                    "
                  >
                    <div
                      style="
                        text-align: center;
                        background-color: black;
                        border-radius: 20px;
                        width: 60%;
                      "
                      class="text-grey-1"
                    >
                      湯
                    </div>
                  </div>
                  <div
                    class="row justify-center"
                    style="
                      position: absolute;
                      top: 120px;
                      left: 235px;
                      z-index: 80;
                      width: 30%;
                    "
                  >
                    <div
                      style="
                        text-align: center;
                        background-color: black;
                        border-radius: 20px;
                        width: 60%;
                      "
                      class="text-grey-1"
                    >
                      水果
                    </div>
                  </div> -->
                  <div
                    data-drop="copy"
                    ref="box2"
                    style="position: relative"
                    class="grey dropbox"
                    @click.stop="closeFood"
                  >
                    <q-card class="column">
                      <div class="row justify-center">
                        <q-img
                          src="/public/images/menu/mainMeal/紫米飯.jpg"
                        ></q-img>
                        紫米飯
                      </div>
                    </q-card>
                  </div>
                  <div
                    data-drop="copy"
                    ref="box3"
                    class="grey dropbox"
                    @click.stop="closeFood"
                    style="position: relative"
                  >
                    <q-card class="column">
                      <div class="row justify-center">
                        <q-img
                          src="/public/images/menu/Dishes/干貝蒸蛋.png"
                        ></q-img>
                        干貝蒸蛋
                      </div>
                    </q-card>
                  </div>

                  <div
                    ref="box4"
                    data-drop="copy"
                    class="grey dropbox"
                    @click.stop="closeFood"
                  >
                    <q-card class="column">
                      <div class="row justify-center">
                        <q-img
                          src="/public/images/menu/Dishes/青椒炒牛肉.jpg"
                        ></q-img>
                        青椒炒牛肉
                      </div>
                    </q-card>
                  </div>
                  <div
                    ref="box5"
                    data-drop="copy"
                    class="grey dropbox"
                    @click.stop="closeFood"
                  >
                    <q-card class="column">
                      <div class="row justify-center">
                        <q-img
                          src="/public/images/menu/Dishes/蝦仁玉米豆腐.jpg"
                        ></q-img>
                        蝦仁玉米豆腐
                      </div>
                    </q-card>
                  </div>
                  <div
                    ref="box6"
                    data-drop="copy"
                    class="grey dropbox"
                    @click.stop="closeFood"
                    style="position: relative"
                  >
                    <q-card class="column">
                      <div class="row justify-center">
                        <q-img
                          src="/public/images/menu/Soup/麻油雞湯.jpg"
                        ></q-img>
                        麻油雞湯
                      </div>
                    </q-card>
                  </div>
                  <div
                    ref="box7"
                    data-drop="copy"
                    class="grey dropbox"
                    @click.stop="closeFood"
                    style="position: relative"
                  >
                    <q-card class="column">
                      <div class="row justify-center">
                        <q-img
                          src="/public/images/menu/fruit/水蜜桃.jpg"
                        ></q-img>
                        水蜜桃
                      </div>
                    </q-card>
                  </div>
                </div>
                <div class="row justify-center" style="padding-top: 10px">
                  <q-btn color="red" @click="persistent = true"
                    ><div class="column justify-center items-center">
                      <div>確認送出</div>
                    </div></q-btn
                  >
                </div>
              </div>
              <div class="dropFood-changebox">
                <q-card
                  v-if="nowAction === 'changeOrder'"
                  flat
                  bordered
                  class=""
                >
                  <q-card-section class="q-py-xs q-px-xs bg-amber-8 text-white">
                    <!-- 在這個q-toolbar放你的標頭 -->
                    <q-toolbar
                      class="flex items-center justify-between"
                      style="display: inline-flex"
                    >
                      <span class="text-h6">可替換菜色</span>
                      <q-select
                        outlined
                        dense
                        class="bg-grey-1"
                        v-model="changeOrder"
                        :options="[
                          { label: '主食', value: 'main' },
                          { label: '菜色', value: 'dishes' },
                          { label: '湯', value: 'soup' },
                          { label: '水果', value: 'fruit' },
                        ]"
                      >
                      </q-select>
                    </q-toolbar>
                  </q-card-section>
                  <q-separator />
                  <q-card-section style="padding: 5px">
                    <!-- 在這裡面放你喜歡的表格 -->
                    <div
                      style="width: 100%; flex-wrap: wrap"
                      class="row allcardFood"
                      ref="box1"
                      data-drop="move"
                    >
                      <q-card
                        data-effect="copy"
                        draggable="true"
                        class="column"
                        v-for="food in changeFood[changeOrder.value]"
                        :key="food"
                      >
                        <div class="row justify-center">
                          <q-img :src="food.src"></q-img>
                          {{ food.name }}
                        </div>
                      </q-card>
                    </div>
                  </q-card-section>
                </q-card>
                <!-- <askOrder
                  v-if="nowAction === 'askOrder'"
                  :actionTitle="nowAction"
                ></askOrder> -->

                <q-card flat bordered v-if="nowAction === 'askOrder'">
                  <q-card-section class="q-py-xs q-px-xs bg-amber-8 text-white">
                    <!-- 在這個q-toolbar放你的標頭 -->
                    <q-toolbar
                      class="flex items-center justify-start"
                      style="display: inline-flex"
                    >
                      <q-icon name="search" size="24px" />
                      <span class="text-h6">選餐小幫手</span>
                      <q-space />
                    </q-toolbar>
                  </q-card-section>
                  <q-card-section
                    class="row justify-center items-end"
                    :class="showVoice ? 'bg-grey-30' : ''"
                    style="
                      height: 400px;
                      max-height: 400px;
                      padding: 0px;
                      overflow: hidden;
                      overflow-y: scroll;
                      position: relative;
                    "
                  >
                    <!-- 在這裡面放你喜歡的表格 -->
                    <div style="width: 80%">
                      <div>
                        <q-chat-message
                          v-for="message in messageArray"
                          :key="message"
                          :name="message.name"
                          :avatar="message.avatar"
                          :sent="message.name === 'me'"
                          size="8"
                          bg-color="amber-7"
                        >
                          <div>{{ message.message }}</div>
                          <div
                            ref="box8"
                            v-if="
                              message.name === 'robot' &&
                              message.food.length !== 0
                            "
                            style="width: 100%"
                            class="row askordercard"
                          >
                            <q-card
                              data-effect="copy"
                              class="column"
                              v-for="food in message.food"
                              :key="food"
                            >
                              <div class="row justify-center">
                                <q-img :src="food.img"></q-img>
                                {{ food.foodName }}
                              </div>
                            </q-card>
                          </div>
                        </q-chat-message>
                      </div>
                    </div>

                    <div
                      style="
                        position: absolute;
                        width: 25%;
                        height: 100%;
                        bottom: 0px;
                      "
                    >
                      <div v-if="showVoice" class="row justify-center">
                        <div
                          class="record-btn cursor-pointer"
                          :class="showAnima ? 'anima' : ''"
                          @click="closeVoice"
                        ></div>
                        <div class="border-wrapper">
                          <div
                            v-if="showAnima"
                            class="record-wrapper first"
                          ></div>
                          <div
                            v-if="showAnima"
                            class="record-wrapper second"
                          ></div>
                          <div
                            v-if="showAnima"
                            class="record-wrapper third"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <!-- 在下方div放你喜歡的按鈕 -->
                  </q-card-section>
                  <q-card-section>
                    <q-input
                      v-model="inputMessage"
                      dense
                      outlined
                      @keyup.enter="sumbitMessage()"
                    >
                      <template #after
                        ><q-btn
                          flat
                          dense
                          round
                          icon="subdirectory_arrow_left"
                          @click="sumbitMessage()"
                        ></q-btn
                      ></template>
                      <template #prepend
                        ><q-btn
                          flat
                          dense
                          round
                          icon="mic"
                          @click="showVoice = true"
                        ></q-btn
                      ></template>
                    </q-input>
                  </q-card-section>
                </q-card>
                <q-card flat bordered v-if="nowAction === 'askSymptom'">
                  <q-card-section class="q-py-xs q-px-xs bg-amber-8 text-white">
                    <!-- 在這個q-toolbar放你的標頭 -->
                    <q-toolbar
                      class="flex items-center justify-start"
                      style="display: inline-flex"
                    >
                      <q-icon name="search" size="24px" />
                      <span class="text-h6">食療小助手</span>
                      <q-space />
                    </q-toolbar>
                  </q-card-section>
                  <q-card-section
                    class="row justify-center items-end"
                    :class="showVoiceSymptom ? 'bg-grey-30' : ''"
                    style="
                      height: 400px;
                      max-height: 400px;
                      padding: 0px;
                      overflow: hidden;
                      overflow-y: scroll;
                      position: relative;
                    "
                  >
                    <!-- 在這裡面放你喜歡的表格 -->
                    <div style="width: 80%">
                      <div>
                        <q-chat-message
                          v-for="Symptmessage in messageSymptArray"
                          :key="Symptmessage"
                          :name="Symptmessage.name"
                          :avatar="Symptmessage.avatar"
                          :sent="Symptmessage.name === 'me'"
                          size="8"
                          bg-color="amber-7"
                        >
                          <div>{{ Symptmessage.message }}</div>
                          <div
                            ref="box9"
                            v-if="
                              Symptmessage.name === 'robot' &&
                              Symptmessage.food.length !== 0
                            "
                            style="width: 100%"
                            class="row askordercard"
                          >
                            <q-card
                              data-effect="copy"
                              class="column"
                              v-for="food in Symptmessage.food"
                              :key="food"
                            >
                              <div class="row justify-center">
                                <q-img :src="food.img"></q-img>
                                {{ food.foodName }}
                              </div>
                            </q-card>
                          </div>
                          <div
                            v-if="
                              Symptmessage.name === 'robot' &&
                              Symptmessage.food.length !== 0
                            "
                          >
                            {{ Symptmessage.illustrate }}
                          </div>
                        </q-chat-message>
                      </div>
                    </div>
                    <div
                      style="
                        position: absolute;
                        width: 25%;
                        height: 100%;
                        bottom: 0px;
                      "
                    >
                      <div v-if="showVoiceSymptom" class="row justify-center">
                        <div
                          class="record-btn cursor-pointer"
                          :class="showAnimaSymptom ? 'anima' : ''"
                          @click="closeVoiceSymptom"
                        ></div>
                        <div class="border-wrapper">
                          <div
                            v-if="showAnimaSymptom"
                            class="record-wrapper first"
                          ></div>
                          <div
                            v-if="showAnimaSymptom"
                            class="record-wrapper second"
                          ></div>
                          <div
                            v-if="showAnimaSymptom"
                            class="record-wrapper third"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <!-- 在下方div放你喜歡的按鈕 -->
                  </q-card-section>
                  <q-card-section>
                    <q-input
                      v-model="inputSymptMessage"
                      dense
                      outlined
                      @keyup.enter="sumbitSymptMessage()"
                    >
                      <template #after
                        ><q-btn
                          flat
                          dense
                          round
                          icon="subdirectory_arrow_left"
                          @click="sumbitSymptMessage()"
                        ></q-btn
                      ></template>
                      <template #prepend
                        ><q-btn
                          flat
                          dense
                          round
                          icon="mic"
                          @click="showVoiceSymptom = true"
                        ></q-btn
                      ></template>
                    </q-input>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
          <!-- 在下方div放你喜歡的按鈕 -->
        </q-card-section>
      </q-card>
    </div>
  </div>
  <q-dialog
    v-model="persistent"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="bg-pink-3 text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">替換菜色</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> 確定修改? </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="確定" @click="toHistoricalRecord()" />
        <q-btn flat label="取消" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineProps, computed, onMounted, nextTick, watch } from "vue";
import { useRouter } from "vue-router";
import Sortable from "sortablejs";
// import { Drag, Drop } from "vue3-drag-drop";
import askOrder from "src/pages/pregnant/components/askOrder.vue";
import voicePage from "./components/voicePage.vue";

const changeOrder = ref({ label: "主食", value: "main" });
const nowAction = ref("changeOrder");
const persistent = ref(false);
const hisoryState = ref(history.state);
console.log(hisoryState.value);

const router = useRouter();

onMounted(() => {
  // forceLandscapeOrientation();
  // drop();
  // drawPlate();
  const container = document.querySelector(".container");
  let source;
  container.ondragstart = (e) => {
    e.dataTransfer.effectAllowed = e.target.dataset.effect;
    source = e.target;
  };

  container.ondragover = (e) => {
    e.preventDefault();
  };

  function getDropNode(node) {
    while (node) {
      if (node.dataset.drop) {
        return node;
      }
      node = node.parentNode;
    }
  }

  function clearDropStyle() {
    const dropNodes = document.querySelectorAll(".drop-over");
    dropNodes.forEach((node) => {
      node.classList.remove("drop-over");
    });
  }

  container.ondragenter = (e) => {
    clearDropStyle();
    const dropNode = getDropNode(e.target);
    console.log("enter", e.target);
    if (!dropNode) {
      return;
    }
    if (e.dataTransfer.effectAllowed === dropNode.dataset.drop) {
      dropNode.classList.add("drop-over");
    }
  };

  container.ondrop = (e) => {
    clearDropStyle();
    const dropNode = getDropNode(e.target);
    if (!dropNode) {
      return;
    }
    if (e.dataTransfer.effectAllowed !== dropNode.dataset.drop) {
      return;
    }
    console.log("drop", e.target);
    if (dropNode.dataset.drop === "copy") {
      dropNode.innerHTML = "";
      const cloned = source.cloneNode(true);
      cloned.dataset.effect = "move";
      dropNode.appendChild(cloned);
    } else {
      source.remove();
    }
  };
});
const box1 = ref(null);
const box8 = ref(null);
const box9 = ref(null);
const box2 = ref(null);
const box3 = ref(null);
const box4 = ref(null);
const box5 = ref(null);
const box6 = ref(null);
const box7 = ref(null);

let sortable = null;
const drop = () => {
  // nowAction.value = "askOrder";
  nowAction.value = "changeOrder";
  // console.log(box1.value);
  nextTick(() => {
    sortable = Sortable.create(box1.value, {
      group: {
        name: "shared",
        pull: "clone",
        put: false,
      },
      animation: 150,
      sort: false,
    });
  });

  sortable = Sortable.create(box2.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box3.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box4.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box5.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box6.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box7.value, {
    group: { name: "shared" },
    animation: 150,
  });
};

const closeFood = (evt) => {
  evt.target.innerHTML = "";
};

const toHistoricalRecord = () => {
  router.push({
    name: "headerPage",
  });
};

const back = () => {
  router.push({
    name: "headerPage",
  });
};

const inputMessage = ref("");
const inputSymptMessage = ref("");

const messageArray = ref([]);
const messageSymptArray = ref([]);

const dateTime = new Date();

const sumbitMessage = () => {
  if (!inputMessage.value) {
    return;
  }
  messageArray.value.push({
    name: "me",
    avater: "https://cdn.quasar.dev/img/avatar3.jpg",
    message: inputMessage.value,
    time: dateTime.getTime(),
  });
  inputMessage.value = "";
  messageArray.value.push({
    name: "robot",
    avater: "https://cdn.quasar.dev/img/avatar5.jpg",
    message: "推薦'清淡一點的湯'",
    time: dateTime.getTime(),
    food: [
      {
        foodName: "金針薑絲雞湯",
        img: "/public/images/menu/Soup/金針薑絲雞湯_0.jpg",
      },
      {
        foodName: "青木瓜排骨湯",
        img: "/public/images/menu/Soup/青木瓜排骨湯_0.jpg",
      },
      {
        foodName: "牛肉高麗菜湯",
        img: "/public/images/menu/Soup/牛肉高麗菜湯.png",
      },
    ],
  });
  setTimeout(function () {
    // 這是你想要在10秒後執行的程式碼
    askdrop();
  }, 50);
};

const askdrop = () => {
  nowAction.value = "askOrder";

  console.log(box8.value[0]);
  nextTick(() => {
    sortable = Sortable.create(box8.value[0], {
      group: {
        name: "shared",
        pull: "clone",
        put: false,
      },
      animation: 150,
      sort: false,
    });
  });

  sortable = Sortable.create(box2.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box3.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box4.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box5.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box6.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box7.value, {
    group: { name: "shared" },
    animation: 150,
  });
};

const askdropSympt = () => {
  nowAction.value = "askSymptom";

  console.log(box9.value[0]);
  nextTick(() => {
    sortable = Sortable.create(box9.value[0], {
      group: {
        name: "shared",
        pull: "clone",
        put: false,
      },
      animation: 150,
      sort: false,
    });
  });

  sortable = Sortable.create(box2.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box3.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box4.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box5.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box6.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box7.value, {
    group: { name: "shared" },
    animation: 150,
  });
};

const sumbitSymptMessage = () => {
  if (!inputSymptMessage.value) {
    return;
  }
  messageSymptArray.value.push({
    name: "me",
    avater: "https://cdn.quasar.dev/img/avatar3.jpg",
    message: inputSymptMessage.value,
    time: dateTime.getTime(),
  });
  inputSymptMessage.value = "";
  messageSymptArray.value.push({
    name: "robot",
    avater: "https://cdn.quasar.dev/img/avatar5.jpg",
    message: "'頭痛','心情不好'推薦",
    illustrate:
      "提供Omega-3脂肪酸，減緩身體發炎、鎂離子，神經肌肉放鬆、維生素B，幫助神經放鬆",
    time: dateTime.getTime(),
    food: [
      {
        foodName: "鮭魚意大利麵",
        img: "/public/images/menu/mainMeal/鮭魚意大利麵.jpg",
      },
    ],
  });
  setTimeout(function () {
    // 這是你想要在10秒後執行的程式碼
    askdropSympt();
  }, 50);
};

const changeFood = ref({});
changeFood.value = {
  main: [
    {
      name: "培根義大利麵",
      src: "/public/images/menu/mainMeal/培根義大利麵.jpg",
    },
    {
      name: "紫米飯",
      src: "/public/images/menu/mainMeal/紫米飯.jpg",
    },
    {
      name: "麻油煎蛋麵線",
      src: "/public/images/menu/mainMeal/麻油煎蛋麵線.jpg",
    },
    {
      name: "地瓜粥",
      src: "/public/images/menu/mainMeal/地瓜粥.jpg",
    },
    {
      name: "香鬆飯",
      src: "/public/images/menu/mainMeal/三島香鬆飯.jpg",
    },
    {
      name: "黃耆枸杞粥",
      src: "/public/images/menu/mainMeal/黃耆枸杞粥.jpg",
    },
    {
      name: "鮭魚意大利麵",
      src: "/public/images/menu/mainMeal/鮭魚意大利麵.jpg",
    },
    {
      name: "牛肉馬鈴薯泥",
      src: "/public/images/menu/mainMeal/牛肉馬鈴薯泥.png",
    },
  ],
  dishes: [
    {
      name: "青龍炒肉片",
      src: "/public/images/menu/Dishes/青龍炒肉片.jpg",
    },
    {
      name: "紅麴燒肉片",
      src: "/public/images/menu/Dishes/紅麴燒肉片.jpg",
    },
    {
      name: "野菇西芹",
      src: "/public/images/menu/Dishes/野菇西芹.png",
    },
    {
      name: "黑胡椒豬柳",
      src: "/public/images/menu/Dishes/黑胡椒豬柳.jpg",
    },
    {
      name: "干貝蒸蛋",
      src: "/public/images/menu/Dishes/干貝蒸蛋.png",
    },
    {
      name: "麻油龍鬚菜",
      src: "/public/images/menu/Dishes/麻油龍鬚菜.png",
    },
    {
      name: "蝦仁玉米豆腐",
      src: "/public/images/menu/Dishes/蝦仁玉米豆腐.jpg",
    },
    {
      name: "青椒炒牛肉",
      src: "/public/images/menu/Dishes/青椒炒牛肉.jpg",
    },
  ],
  soup: [
    {
      name: "栗子紅棗雞",
      src: "/public/images/menu/Soup/栗子紅棗雞.jpg",
    },
    {
      name: "麻油雞湯",
      src: "/public/images/menu/Soup/麻油雞湯.jpg",
    },
    {
      name: "藥燉排骨湯",
      src: "/public/images/menu/Soup/藥燉排骨湯.jpg",
    },
    {
      name: "藥膳燉雞湯",
      src: "/public/images/menu/Soup/藥膳燉雞湯.jpg",
    },
    {
      name: "紅麴燒肉片",
      src: "/public/images/menu/Soup/何首烏養生燉湯.jpg",
    },
    {
      name: "九尾雞湯",
      src: "/public/images/menu/Soup/九尾雞湯_0.jpg",
    },
    {
      name: "金針薑絲雞湯",
      src: "/public/images/menu/Soup/金針薑絲雞湯_0.jpg",
    },
    {
      name: "青木瓜排骨湯",
      src: "/public/images/menu/Soup/青木瓜排骨湯_0.jpg",
    },
    {
      name: "四物排骨湯",
      src: "/public/images/menu/Soup/四物排骨湯.jpg",
    },
    {
      name: "牛肉高麗菜湯",
      src: "/public/images/menu/Soup/牛肉高麗菜湯.png",
    },
  ],
  fruit: [
    {
      name: "水蜜桃",
      src: "/public/images/menu/fruit/水蜜桃.jpg",
    },
    {
      name: "木瓜",
      src: "/public/images/menu/fruit/木瓜.png",
    },
    {
      name: "香蕉",
      src: "/public/images/menu/fruit/香蕉.jpg",
    },
    {
      name: "芭樂",
      src: "/public/images/menu/fruit/芭樂.png",
    },
    {
      name: "奇異果",
      src: "/public/images/menu/fruit/奇異果.jpeg",
    },
    {
      name: "橘子",
      src: "/public/images/menu/fruit/橘子.png",
    },
    {
      name: "草莓",
      src: "/public/images/menu/fruit/草莓.jpg",
    },
    {
      name: "蜜棗",
      src: "/public/images/menu/fruit/蜜棗.jpg",
    },
    {
      name: "葡萄",
      src: "/public/images/menu/fruit/葡萄.jpg",
    },
  ],
};

const showVoice = ref(false);
const showAnima = ref(false);
const showVoiceSymptom = ref(false);
const showAnimaSymptom = ref(false);

let i = 0;
const closeVoice = () => {
  showAnima.value = !showAnima.value;
  getRecommendAPI(sessionStorage.getItem("token"));

  i += 1;
  if (i == 2) {
    showVoice.value = false;
    inputMessage.value = "我想喝清淡一點的湯";
  }
};

import api from "../javascript/API";
const { getRecommendAPI } = api();

let k = 0;
const closeVoiceSymptom = () => {
  // console.log(sessionStorage.getItem("token"));
  showAnimaSymptom.value = !showAnimaSymptom.value;
  getRecommendAPI(sessionStorage.getItem("token"));
  // showAnimaSymptom.value = !showAnimaSymptom.value;
  k += 1;
  if (k == 2) {
    showVoiceSymptom.value = false;
    inputSymptMessage.value = "我最近頭痛心情不好";
  }
};
</script>
<style scoped>
.dropFood-table {
  width: calc(85% / 2);
}

.drapFood {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px;
}
.drapFood div {
  width: 100%;
}
.drapFood span {
  text-align: center;
}

.dropFood-changebox {
  width: calc(100% / 2);
  height: 100%;
}

.actionBtn {
  width: 15%;
}

.actionBtn .q-btn {
  font-size: 18px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

.anima {
  animation-name: likes;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}

.record-btn {
  position: absolute;
  left: 40px;
  top: 100px;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background: url(https://imagev2.xmcdn.com/storages/bb7b-audiofreehighqps/93/D6/GMCoOSQFwEJIAAA9ygEPjfgY.png)
    no-repeat center/100%;
  margin: 0 auto;
  z-index: 2;
}

.border-wrapper {
  position: absolute;
  left: 40px;
  top: 100px;
  width: 100%;
  height: 100%;
  display: block;
}

.record-wrapper.first {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 85px;
  height: 85px;
  background: rgba(234, 90, 54, 0.2);
  opacity: 0.1;
  border-radius: 50%;
  animation: first 3s infinite linear;
}

.record-wrapper.second {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 85px;
  height: 85px;
  background: rgba(234, 90, 54, 0.2);
  opacity: 0.1;
  border-radius: 50%;
  animation: first 3s infinite linear;
  animation-delay: 1s;
}

.record-wrapper.third {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 85px;
  height: 85px;
  background: rgba(234, 90, 54, 0.2);
  opacity: 0.1;
  border-radius: 50%;
  animation: first 3s infinite linear;
  animation-delay: 2s;
}

@keyframes first {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  33% {
    opacity: 0.66;
    transform: scale(1.33);
  }
  66% {
    opacity: 0.33;
    transform: scale(1.67);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}

@keyframes likes {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(0.85);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.bg-grey-30 {
  background-color: #65636378;
}
</style>

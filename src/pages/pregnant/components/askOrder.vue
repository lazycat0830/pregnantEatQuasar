<template>
  <q-card flat bordered>
    <q-card-section class="q-py-xs q-px-xs bg-amber-8 text-white">
      <!-- 在這個q-toolbar放你的標頭 -->
      <q-toolbar
        class="flex items-center justify-start"
        style="display: inline-flex"
      >
        <q-icon name="search" size="24px" />
        <span v-if="props.actionTitle === 'askOrder'" class="text-h6"
          >選餐小幫手</span
        >
        <span v-else class="text-h6">食療小助手</span>
        <q-space />
      </q-toolbar>
    </q-card-section>
    <q-card-section
      class="row justify-center items-end"
      style="
        height: 200px;
        max-height: 200px;
        padding: 0px;
        overflow: hidden;
        overflow-y: scroll;
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
              v-if="message.name === 'robot' && message.food.length !== 0"
              style="width: 100%"
              class="row askordercard"
              ref="box8"
            >
              <q-card class="column" v-for="food in message.food" :key="food">
                <div class="row justify-center">
                  <q-img :src="food.img"></q-img>
                  {{ food.foodName }}
                </div>
              </q-card>
            </div>
          </q-chat-message>
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
      </q-input>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, defineProps, computed, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import Sortable from "sortablejs";

const props = defineProps({
  actionTitle: {
    type: String,
    default: "",
  },
});

const inputMessage = ref("");

const messageArray = ref([]);

const dateTime = new Date();

const sumbitMessage = () => {
  console.log(dateTime.getTime());
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
    message: "推薦",
    time: dateTime.getTime(),
    food: [
      { foodName: "菜色名1", img: "https://picsum.photos/500/300" },
      { foodName: "菜色名2", img: "https://picsum.photos/500/300" },
    ],
  });
};
</script>

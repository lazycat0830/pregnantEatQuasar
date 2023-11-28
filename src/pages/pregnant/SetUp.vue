<template>
  <div class="relative header-bg">
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
  <q-input v-model="gptText">
    <template #before><q-btn @click="callGPT4(gptText)">送出 </q-btn></template>
  </q-input>
  <!-- <div><dragDrop></dragDrop></div> -->
  <!-- <div><SetRolesPregnant :sts="'Login'"></SetRolesPregnant></div> -->
</template>

<script setup>
import { ref, defineProps, computed, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import SetRolesPregnant from "../common/components/SetRolesPregnant.vue";
import dragDrop from "./components/dragDrop.vue";
import axios from "axios";

const gptText = ref("");

const callGPT4 = (promptText) => {
  const endpoint =
    "https://api.openai.com/v1/engines/gpt-4.0-turbo/completions"; // 請根據實際情況調整 endpoint
  const apiKey = "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"; // 請替換為你的 API 金鑰

  try {
    const response = axios.post(
      endpoint,
      {
        prompt: promptText,
        max_tokens: 150, // 你可以根據需要調整這個值
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    // 返回生成的文本
    console.log(response.data.choices[0].text.trim());
  } catch (error) {
    console.error("Error calling GPT-4 API:", error);
    return null;
  }
};

const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
  "leftDrawerOpen",
  "toggleLeftDrawer",
]);
const router = useRouter();

const toggleNav = () => {
  toggleLeftDrawer();
  router.push({
    path: "/Page/SetUp",
    query: { navOpen: leftDrawerOpen.value },
  });
};
</script>

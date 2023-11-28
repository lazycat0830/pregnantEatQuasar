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
  <div style="padding: 10px 10px">
    <div style="width: calc(100% / 5)">
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom">
            <div class="text-h6">姓名</div>
            <div class="text-subtitle2">(房號)代號</div>
          </div>
        </q-img>

        <q-card-actions>
          <q-btn flat>查看數據</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
  <div>
    <dataAnalysis></dataAnalysis>
  </div>
</template>
<script setup>
import { ref, defineProps, computed, reactive } from "vue";
import { useRouter } from "vue-router";
// import dragDrop from "../pregnant/components/dragDrop.vue";
import dataAnalysis from "../pregnant/components/dataAnalysis.vue";

const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
  "leftDrawerOpen",
  "toggleLeftDrawer",
]);
const router = useRouter();

const toggleNav = () => {
  toggleLeftDrawer();
  router.push({
    path: "/Maker/DataAnalysis",
    query: { navOpen: leftDrawerOpen.value },
  });
};
</script>

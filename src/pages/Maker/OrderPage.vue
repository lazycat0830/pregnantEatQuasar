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
  <div>
    <OrderPage></OrderPage>
  </div>
</template>
<script setup>
import { ref, defineProps, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import OrderPage from "./components/OrderPage.vue";

const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
  "leftDrawerOpen",
  "toggleLeftDrawer",
]);
const router = useRouter();

const toggleNav = () => {
  toggleLeftDrawer();
  router.push({
    path: "/Maker/OrderPage",
    query: { navOpen: leftDrawerOpen.value },
  });
};
</script>

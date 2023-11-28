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

  <div><SetRolesPregnant :sts="'Login'"></SetRolesPregnant></div>
</template>

<script setup>
import { ref, defineProps, computed, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import SetRolesPregnant from "../common/components/SetRolesMaker.vue";

const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
  "leftDrawerOpen",
  "toggleLeftDrawer",
]);
const router = useRouter();

const toggleNav = () => {
  toggleLeftDrawer();
  router.push({
    path: "/Maker/SetUp",
    query: { navOpen: leftDrawerOpen.value },
  });
};
</script>

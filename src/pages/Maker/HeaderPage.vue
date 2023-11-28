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
    <div class="absolute" style="top: 200px; width: 100%">
      <div class="row justify-center">
        <q-file v-model="model" color="teal" outlined label="Label">
          <template #before
            ><span style="font-size: 16px; font-weight: bolder"
              >匯入食材：</span
            ></template
          >
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <div class="q-gutter-xs">
          <q-btn
            color="primary"
            label="食材"
            @click="categoryNo = 'Ingredients'"
          />
          <q-btn
            color="primary"
            label="所有菜色"
            @click="categoryNo = 'recipe'"
          />
          <q-btn
            color="primary"
            label="設置1周套餐"
            @click="categoryNo = 'combo'"
          />
        </div>
        <div style="width: 100%">
          <q-tab-panels v-model="categoryNo" keep-alive animated>
            <q-tab-panel name="Ingredients" class="cxl-p-0px">
              <headerTable></headerTable>
            </q-tab-panel>
            <q-tab-panel name="recipe" class="cxl-p-0px">
              <headerTable></headerTable>
            </q-tab-panel>
            <q-tab-panel name="combo" class="cxl-p-0px">
              <headerTable></headerTable>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";

import headerTable from "./components/headerTable.vue";

const categoryNo = ref("Ingredients");
// https://www.dietitian-tracy.com/food-exchange/

const pregnant = ref("陳女士");

const date = new Date();
const today = ref(
  date.getFullYear() +
    "/" +
    (Number(date.getMonth()) + 1).toString().padStart(2, "0") +
    "/" +
    date.getDate()
);

const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
  "leftDrawerOpen",
  "toggleLeftDrawer",
]);
const router = useRouter();
const toggleNav = () => {
  toggleLeftDrawer();
  router.push({
    path: "/Maker/HeaderPage",
    query: { navOpen: leftDrawerOpen.value },
  });
};
</script>

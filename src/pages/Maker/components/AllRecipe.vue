<template>
  <div class="column" item-center justify-center>
    <div v-for="data in AllData" :key="data" style="padding: 10px 0px">
      <q-card
        class="my-card"
        flat
        bordered
        style="border-radius: 25px; overflow: hidden"
      >
        <q-card-section horizontal>
          <q-img class="col-5" src="/public/images/other/OIG (1).jpg" />
          <div
            class="column item-center justify-end"
            style="padding-left: 10px"
          >
            <div style="font-weight: bolder; color: #000; font-size: 20px">
              {{ data.Title }}
            </div>
            <div>
              <q-chip
                v-for="food in data.foodList"
                :key="food"
                dense
                color="primary"
                text-color="white"
              >
                {{ food }}
              </q-chip>
            </div>
            <div
              class="row justify-end"
              style="color: #000; padding-right: 20px; padding-bottom: 5px"
            >
              <q-btn @click="lookRecipe">查看食譜</q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";

const dialog = ref(false);

const AllData = ref([]);
AllData.value = [
  {
    Title: "標題1",
    foodList: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
  },
  {
    Title: "標題1",
    foodList: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
  },
  {
    Title: "標題1",
    foodList: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
  },
  {
    Title: "標題1",
    foodList: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
  },
];

const emit = defineEmits(["submit"]);

const lookRecipe = () => {
  emit("submit");
};
</script>

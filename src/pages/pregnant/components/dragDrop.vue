<template>
  <div>
    <div ref="box1" class="row grey" style="height: 200px; padding: 10px">
      <div
        v-for="row in box1row"
        :key="row"
        style="width: 100px; height: 100px; text-align: center"
        class="text-white"
        :class="`bg-indigo-${row.id}`"
      >
        {{ row.id }}
      </div>
    </div>

    <div
      ref="box2"
      class="grey"
      style="width: 200px; height: 200px; padding: 10px"
    ></div>
    <div
      ref="box3"
      class="grey"
      style="width: 200px; height: 200px; padding: 10px"
    ></div>
    {{ box2row }}
    <Drag
      style="width: 100px; height: 100px; background-color: #878787"
      :transfer-data="scopedData"
    >
      <template v-slot="props">
        <div v-if="props.transferData">
          {{ props.transferData.dragText }}
        </div>
        <div v-else>drag me</div>
      </template>
    </Drag>
    <Drop @drop="handleDrop">
      <template v-slot="props">
        <div
          style="width: 100px; height: 100px; background-color: #ff0000"
          v-if="props.transferData"
        >
          {{ props.transferData.dropText }}
        </div>
      </template>
    </Drop>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, onMounted } from "vue";
import Sortable from "sortablejs";
import { Drag, Drop } from "vue3-drag-drop";
// console.log(Drag);
// console.log(Drop);

onMounted(() => {
  // 修正拼写错误
  drop();
});

const box1 = ref(null);
const box2 = ref(null);
const box3 = ref(null);
const box1row = ref([
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
]);
const box2row = ref([]);
const box3row = ref([]);
let sortable = null;
const drop = () => {
  sortable = Sortable.create(box1.value, {
    group: {
      name: "shared",
      pull: "clone",
      put: false, // Do not allow items to be put into this list
    },
    animation: 150,
    onEnd: function (evt) {
      // console.log(evt);
      // console.log(evt.item.innerHTML);
      // console.log(box2.value);
      box2row.value.push(evt.item.innerHTML);
    },
    sort: false, // To disable sorting: set sort to false
  });

  sortable = Sortable.create(box2.value, {
    group: { name: "shared" },
    animation: 150,
  });
  sortable = Sortable.create(box3.value, {
    group: { name: "shared" },
    animation: 150,
  });
};

// const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
//   "leftDrawerOpen",
//   "toggleLeftDrawer",
// ]);
// const router = useRouter();

// const toggleNav = () => {
//   toggleLeftDrawer();
//   router.push({
//     path: "/Page/SetUp",
//     query: { navOpen: leftDrawerOpen.value },
//   });
// };

// const box1 = ref(null);
// const box2 = ref(null);
// const box3 = ref(null);
// const box1row = ref([{ id: 1 }, { id: 2 }, { id: 3 }]);
// const box2row = ref([]);
// const box3row = ref([]);

// let sortable = null;
// const drop = () => {
//   sortable = Sortable.create(box1.value, {
//     group: {
//       name: "shared",
//       pull: "clone",
//       put: false, // Do not allow items to be put into this list
//     },
//     animation: 150,
//   });

//   sortable = Sortable.create(box2.value, {
//     group: { name: "shared" },
//     animation: 150,
//   });
//   sortable = Sortable.create(box3.value, {
//     group: { name: "shared" },
//     animation: 150,
//   });
// };

const handleDrop = (data) => {
  alert(`You dropped with data: ${JSON.stringify(data)}`);
};

const scopedData = computed(() => ({
  dragText: "scoped drag",
  dropText: "scoped drop",
}));
</script>

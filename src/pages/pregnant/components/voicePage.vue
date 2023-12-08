<template>
  <div
    v-if="showVoice"
    class="relative-position"
    style="width: 100%; height: 100%"
  >
    <div
      class="record-btn cursor-pointer"
      :class="showAnima ? 'anima' : ''"
      @click="closeVoice"
    ></div>
    <div class="border-wrapper">
      <div class="record-wrapper first"></div>
      <div class="record-wrapper second"></div>
      <div class="record-wrapper third"></div>
    </div>
  </div>
  {{ input }}
  <q-btn icon="mic" @click="showVoice = true"></q-btn>
</template>
<script setup>
import { ref } from "vue";

const showVoice = ref(false);
const showAnima = ref(false);
const input = ref("");
let i = 0;
const closeVoice = () => {
  showAnima.value = !showAnima.value;
  i += 1;
  if (i == 2) {
    showVoice.value = false;
    input.value = "asdfsadf";
  }
};
</script>
<style>
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
  position: fixed;
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
</style>

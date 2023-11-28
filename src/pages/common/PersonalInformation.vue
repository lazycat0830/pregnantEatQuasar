<template>
  <div class="row justify-center PersonalInformation_box">
    <q-card flat bordered style="width: 80%">
      <q-card-section class="row justify-center items-end">
        <q-avatar style="width: 200px; height: 200px">
          <img
            style="width: 100%; height: 100%"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-avatar>
        <div
          v-if="editCheck"
          class="row cursor-pointer"
          style="margin: 0px 30px; text-decoration: underline"
          @click="editCheck = false"
        >
          完成
        </div>
        <div
          v-else
          class="row cursor-pointer"
          style="margin: 0px 30px; text-decoration: underline"
          @click="editCheck = true"
        >
          修改
        </div>
      </q-card-section>
      <q-card-section>
        <q-list style="font-size: 20px">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="local_bar" />
            </q-item-section>

            <q-item-section>
              <q-input
                v-if="editCheck"
                v-model="userName"
                label="姓名"
              ></q-input>
              <q-item-label v-else>姓名</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>代號</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-input
                v-if="editCheck"
                v-model="userBirthday"
                label="生日"
              ></q-input>
              <q-item-label v-else>生日</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-input
                v-if="editCheck"
                v-model="userPhone"
                label="電話"
              ></q-input>
              <q-item-label v-else>電話</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Email</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({});
const editCheck = ref(false);
const userName = ref("");
const userBirthday = ref("");
const userPhone = ref("");
</script>

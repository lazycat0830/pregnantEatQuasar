<template>
  <q-card flat bordered>
    <q-card-section class="q-py-xs q-px-xs bg-green-6 text-white">
      <!-- 在這個q-toolbar放你的標頭 -->
      <q-toolbar
        class="flex items-center justify-start"
        style="display: inline-flex"
      >
        <span class="text-h6">客製化菜單</span>
        <q-space />
      </q-toolbar>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <!-- 在這裡面放你喜歡的表格 -->
      <div v-for="onedate in dateitem" :key="onedate" style="width: 100%">
        <q-expansion-item
          v-model="onedate.showDateitem"
          icon="calendar_month"
          :label="onedate.date"
        >
          <q-expansion-item
            v-model="onedate.showAllCustomizedBreakfast"
            :header-inset-level="1"
            style="width: 100%"
            icon="restaurant_menu"
            label="需要客製化的早餐"
          >
            <div
              v-for="customizedUser in customizedUsers"
              :key="customizedUser"
              style="width: calc(100% / 7); padding: 5px"
            >
              <q-card flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

                <q-separator />
                <q-item>
                  <q-item-section avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ customizedUser.userName }}</q-item-label>
                    <q-item-label caption>{{
                      customizedUser.userNo
                    }}</q-item-label>
                  </q-item-section>
                  <div>
                    <q-btn
                      color="grey"
                      round
                      flat
                      dense
                      :icon="
                        customizedUser.showInfo
                          ? 'keyboard_arrow_up'
                          : 'keyboard_arrow_down'
                      "
                      @click="
                        customizedUser.showInfo = !customizedUser.showInfo
                      "
                    />
                  </div>
                </q-item>
                <q-slide-transition>
                  <div v-show="customizedUser.showInfo">
                    <q-separator />
                    <q-card-section class="text-subtitle2">
                      <div>
                        <div
                          class="text-h5 q-mt-sm q-mb-xs row items-center justify-between"
                        >
                          {{ customizedUser.customizedTitle }}
                          <q-btn flat> 查看</q-btn>
                        </div>
                      </div>
                      <div class="text-caption text-grey">
                        <ul>
                          <li
                            v-for="eat in customizedUser.customizedEat"
                            :key="eat"
                          >
                            {{ eat }}
                          </li>
                        </ul>
                      </div>
                    </q-card-section>
                  </div>
                </q-slide-transition>
              </q-card>
            </div>
          </q-expansion-item>
          <q-expansion-item
            v-model="onedate.showAllCustomizedLunch"
            :header-inset-level="1"
            style="width: 100%"
            icon="restaurant_menu"
            label="需要客製化的午餐"
          >
            <div style="width: calc(100% / 7); padding: 5px">
              <q-card flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

                <q-separator />
                <q-item>
                  <q-item-section avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>名稱</q-item-label>
                    <q-item-label caption>代號</q-item-label>
                  </q-item-section>
                  <div>
                    <q-btn
                      color="grey"
                      round
                      flat
                      dense
                      :icon="
                        expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                      "
                      @click="expanded = !expanded"
                    />
                  </div>
                </q-item>
                <q-slide-transition>
                  <div v-show="expanded">
                    <q-separator />
                    <q-card-section class="text-subtitle2">
                      <div>
                        <div
                          class="text-h5 q-mt-sm q-mb-xs row items-center justify-between"
                        >
                          套餐名稱 <q-btn flat> 查看</q-btn>
                        </div>
                      </div>
                      <div class="text-caption text-grey">
                        <ul>
                          <li>更換菜色</li>
                        </ul>
                      </div>
                    </q-card-section>
                  </div>
                </q-slide-transition>
              </q-card>
            </div>
          </q-expansion-item>
          <q-expansion-item
            v-model="onedate.showAllCustomizedDinner"
            :header-inset-level="1"
            style="width: 100%"
            icon="restaurant_menu"
            label="需要客製化的晚餐"
          >
            <div style="width: calc(100% / 7); padding: 5px">
              <q-card flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

                <q-separator />
                <q-item>
                  <q-item-section avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>名稱</q-item-label>
                    <q-item-label caption>代號</q-item-label>
                  </q-item-section>
                  <div>
                    <q-btn
                      color="grey"
                      round
                      flat
                      dense
                      :icon="
                        expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                      "
                      @click="expanded = !expanded"
                    />
                  </div>
                </q-item>
                <q-slide-transition>
                  <div v-show="expanded">
                    <q-separator />
                    <q-card-section class="text-subtitle2">
                      <div>
                        <div
                          class="text-h5 q-mt-sm q-mb-xs row items-center justify-between"
                        >
                          套餐名稱 <q-btn flat> 查看</q-btn>
                        </div>
                      </div>
                      <div class="text-caption text-grey">
                        <ul>
                          <li>更換菜色</li>
                        </ul>
                      </div>
                    </q-card-section>
                  </div>
                </q-slide-transition>
              </q-card>
            </div>
          </q-expansion-item>
        </q-expansion-item>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({});

const expanded = ref(false);

const dateitem = ref([
  {
    date: "YYYY-MM-DD1",
    showDateitem: false,
    showAllCustomizedBreakfast: false,
    showAllCustomizedLunch: false,
    showAllCustomizedDinner: false,
  },
  {
    date: "YYYY-MM-DD2",
    showDateitem: false,
    showAllCustomizedBreakfast: false,
    showAllCustomizedLunch: false,
    showAllCustomizedDinner: false,
  },
]);

const customizedUsers = ref([
  {
    date: "YYYY-MM-DD",
    showInfo: false,
    userName: "名稱",
    userNo: "代號",
    customizedTitle: "Title",
    customizedEat: ["菜色1", "菜色2", "菜色3", "菜色4", "菜色5", "菜色6"],
  },
]);
</script>

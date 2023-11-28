<template>
  <div class="EditPassword_box">
    <q-card flat bordered>
      <q-card-section class="q-py-xs q-px-xs bg-pink-11 text-white">
        <!-- 在這個q-toolbar放你的標頭 -->
        <q-toolbar
          class="flex items-center justify-start"
          style="display: inline-flex"
        >
          <span class="text-h6" style="font-weight: bolder"
            ><q-icon name="edit" size="30px"></q-icon>修改密碼</span
          >
          <q-space />
        </q-toolbar>
      </q-card-section>
      <q-separator />
      <q-card-section class="row justify-center">
        <!-- 在這裡面放你喜歡的表格 -->
        <q-markup-table separator="cell" flat bordered style="width: 100%">
          <tbody>
            <tr>
              <td>
                <q-input v-model="oldPassword" outlined>
                  <template #before
                    ><span style="font-size: 20px">舊密碼：</span></template
                  >
                </q-input>
              </td>
            </tr>
            <tr>
              <td>
                <q-input v-model="newPassword" outlined>
                  <template #before><span>新密碼：</span></template>
                </q-input>
              </td>
            </tr>
            <tr>
              <td>
                <q-input v-model="newPasswordCheck" outlined>
                  <template #before><span>新密碼確認：</span></template>
                </q-input>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-sm q-pt-md text-center">
          <q-btn
            type="button"
            color="pink-2"
            label="確認"
            unelevated
            @click="submitEdit()"
          />
          <q-btn
            type="button"
            color="grey-8"
            label="重置"
            unelevated
            @click="refreshPassword()"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({});

const oldPassword = ref("");
const newPassword = ref("");
const newPasswordCheck = ref("");

const submitEdit = () => {
  const submitObject = {
    oldPassword: oldPassword.value,
    newPassword: newPassword.value,
    newPasswordCheck: newPasswordCheck.value,
  };
  console.log(submitObject);
};

const refreshPassword = () => {
  oldPassword.value = "";
  newPassword.value = "";
  newPasswordCheck.value = "";
};
</script>

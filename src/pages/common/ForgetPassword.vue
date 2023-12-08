<template>
  <q-card style="width: 500px; max-width: 500px">
    <div style="width: 100%; padding: 0px 10%">
      <div
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <div
          style="
            text-align: center;
            font-size: 20px;
            font-weight: bolder;
            margin: 10px 10%;
          "
        >
          忘記密碼
        </div>
        <table class="LoginTable">
          <tr>
            <td>
              <q-input
                v-model="account"
                dense
                outlined
                style="width: 80%"
                label="帳號"
              />
            </td>
          </tr>

          <tr>
            <td>
              <div
                style="
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                "
              >
                <!-- to="/SetRoles" -->
                <!-- toolbar = true -->
                <q-btn
                  rounded
                  dense
                  color="orange-14"
                  @click="getForgetPassword()"
                  style="
                    width: 60%;
                    margin: 5px 0px;
                    padding: 5px 0px;
                    font-size: 16px;
                  "
                  >驗證</q-btn
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style="width: 100%; text-align: end; text-decoration: underline"
              ></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </q-card>
  <q-dialog v-model="toolbar">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="/public/images/logo.jpeg" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">信箱驗證</span>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section>
        <a href="/SetRoles"
          >已發送連結，請到信箱點擊確認，謝謝!
        </a></q-card-section
      >
    </q-card>
  </q-dialog>
</template>
<script setup>
import HeaderLayout from "./components/HeaderLayout.vue";
import api from "../javascript/API";
import { ref } from "vue";

const { ForgetpasswordAPI } = api();

const isPwd = ref(true);
const toolbar = ref(false);
const account = ref("");

const getForgetPassword = () => {
  ForgetpasswordAPI(account.value);
  toolbar.value = true;
};
</script>
<style>
.LoginTable tr td {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
}
</style>

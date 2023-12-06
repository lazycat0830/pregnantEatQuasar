<template>
  <HeaderLayout :Title="'食在好孕'"></HeaderLayout>
  <div class="absolute LoginPage_box">
    <div class="column justify-center items-center">
      <div class="LoginPage_TitleText">登入</div>
      <table class="LoginTable">
        <tr>
          <td>
            <q-input
              v-model="AccountValue"
              aria-autocomplete="false"
              style="width: 100%"
              label="帳號："
            ></q-input>
          </td>
        </tr>
        <tr>
          <td>
            <q-input
              v-model="PasswordValue"
              type="password"
              autocomplete="off"
              style="width: 100%"
              label="密碼："
            ></q-input>
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
              <!-- to="/Page/HeaderPage" -->
              <q-btn
                @click="Login()"
                rounded
                dense
                style="
                  width: 100%;
                  margin: 5px 0px;
                  padding: 5px 0px;
                  color: #9e1d00;
                  background-color: #fadede;
                "
                >登入</q-btn
              >
              <q-btn
                to="/RegisterPage"
                rounded
                dense
                style="
                  width: 100%;
                  margin: 5px 0px;
                  padding: 5px 0px;
                  color: #9e1d00;
                  background-color: #f4e9d3;
                "
                >註冊</q-btn
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div
              style="width: 100%; text-align: end; text-decoration: underline"
            >
              <a
                style="cursor: pointer"
                @click="ForgetPasswordCheck = !ForgetPasswordCheck"
                >忘記密碼</a
              >
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <q-dialog v-model="ForgetPasswordCheck" style="max-width: 600px">
    <ForgetPassword></ForgetPassword>
  </q-dialog>
</template>
<script setup>
import HeaderLayout from "./components/HeaderLayout.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import ForgetPassword from "./ForgetPassword.vue";
import api from "../javascript/API";

const { LoginAPI } = api();

const AccountValue = ref("");
const PasswordValue = ref("");
const ForgetPasswordCheck = ref(false);

const router = useRouter();
const Login = () => {
  const UserData = LoginAPI({
    account: AccountValue.value,
    password: PasswordValue.value,
  });
};
</script>
<style>
.LoginTable tr td {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
}

a {
  color: #000;
  text-decoration: none;
}
</style>

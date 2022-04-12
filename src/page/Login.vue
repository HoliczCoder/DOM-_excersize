<template>
  <div
    class="wrapper w-screen h-screen bg-red-500 flex justify-center items-center"
  >
    <form @submit.prevent="_login()" class="bg-blue-500 w-96 h-72">
      <div class="font-extrabold text-4xl">Login</div>
      <div class="p-5">
        <input type="text" class="w-56 rounded-md px-2" v-model="Email" />
      </div>
      <div class="p-5">
        <input type="text" class="w-56 rounded-md px-2" v-model="Password" />
      </div>
      <button class="w-56 border-solid border-2 border-black rounded-md">
        Login
      </button>
      <div class="option flex flex-row flex-nowrap justify-between px-5 pt-16">
        <div>forgot password</div>
        <div class="flex flex-row">
          <div class="flex items-center">
            <input class="" type="radio" />
          </div>
          <div class="px-5">remember me</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import { Axios } from "../services/Axios";

export default {
  setup() {},
  name: "LoginThis",
  data: function () {
    return {
      Email: "Email",
      Password: "Password",
    };
  },
  methods: {
    async _login() {
      try {
        const response = await Axios.post("login", {
          email: this.Email,
          password: this.Password,
        });
        const data = await response.data;
        //console.log(response);
        localStorage.setItem("token", data.token);
        this.$router.push({
          name: "Home",
        });
      } catch (e) {
        console.log("dang nhap khong thanh cong");
      }
    },
  },
};
</script>

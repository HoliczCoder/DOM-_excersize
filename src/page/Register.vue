<template>
  <div>
    <div class="background">
      <form
        action=""
        class="border-1 text-left border-black"
        @submit.prevent="false"
      >
        <div class="container w-3/4 lg:w-1/2">
          <h1 class="font-bold text-2xl mb-7 text-white">Sign Up</h1>
          <hr class="border-1 border-solid border-slate-100" />
          <label for="email" class="text-white"><b>Name</b></label>
          <input
            v-model="signupName"
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5"
          />
          <label for="email" class="text-white"><b>Phone</b></label>
          <input
            v-model="signupPhone"
            type="text"
            placeholder="Enter Phone"
            name="phone"
            required
            class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5"
          />
          <label for="email" class="text-white"><b>Email</b></label>
          <input
            v-model="signupEmail"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5"
          />
          <label for="psw" class="text-white"><b>Password</b></label>
          <input
            v-model="signupPassword"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5"
          />
          <label for="psw-repeat" class="text-white"
            ><b>Repeat Password</b></label
          >
          <input
            v-model="signupRepeatPassword"
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
            class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5"
          />
          <div class="flex justify-between">
            <label class="text-white">
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                style="margin-bottom: 15px"
              />
              Remember me
            </label>
            <p class="text-white">
              Already have an account?
              <router-link to="/login">
                <a href="#" class="text-red-500">Log In</a>
              </router-link>
            </p>
          </div>
          <p class="my-4 text-white">
            By creating an account you agree to our
            <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
          </p>
          <div class="clearfix">
            <button
              @click="signup()"
              type="submit"
              class="signupbtn bg-green-600 text-white p-3 mt-2 border-0 cursor-pointer w-full lg:w-1/2 opacity-90 hover:opacity-100 float-left"
            >
              Sign Up
            </button>
            <button
              @click="goToHome()"
              type="button"
              class="cancelbtn bg-red-600 text-white p-3 mt-2 border-0 cursor-pointer w-full lg:w-1/2 opacity-90 hover:opacity-100 float-left"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
//import { defineComponent } from "@vue/composition-api";
import { Axios } from "../services/Axios";
export default {
  setup() {},
  name: "RegisterThis",
  data: function () {
    return {
      signupEmail: "",
      signupName: "",
      signupPassword: "",
      signupPhone: "",
      signupRepeatPassword: "",
    };
  },
  methods: {
    async signup() {
      if (
        this.signupName == "" ||
        this.signupPhone == "" ||
        this.signupEmail == "" ||
        this.signupPassword == "" ||
        this.signupRepeatPassword == ""
      ) {
        alert("Please fill all the fields");
      } else if (this.signupName.length <= 2 || this.signupName.length >= 20) {
        alert("Name must be between 2 and 20 characters");
      } else if (this.signupPhone.length != 10) {
        alert("Phone number must be 10 digits");
      } else if (
        this.signupEmail.indexOf("@") == -1 ||
        this.signupEmail.indexOf(".") == -1
      ) {
        alert("Please enter a valid email");
      } else if (this.signupPassword != this.signupRepeatPassword) {
        alert("Passwords do not match");
      } else if (this.signupPassword.length < 6) {
        alert("Password must be at least 6 characters");
      } else if (this.signupPassword.length > 20) {
        alert("Password must be less than 20 characters");
      } else {
        try {
          const response = await Axios.post("signup", {
            email: this.signupEmail,
            password: this.signupPassword,
            full_name: this.signupName,
            phone: this.signupPhone,
          });
          const data = await response;
          console.log(data + "ban da dang nhap thanh cong");
        } catch (e) {
          alert(e.response.data.message);
        }
      }
    },
  },
};
</script>

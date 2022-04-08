<script setup></script>

<template>
  <div id="app">
    <router-link :to="{ name: 'HomePage' }"> </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//import HomePage from "@/page/HomePage.vue";
export default {
  name: "App",
  components: {
    //HomePage,
  },
  computed: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 10px;
  padding-right: 10px;
}
body {
  background: black;
}
</style>

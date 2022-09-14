<template>
  <RegisterPage msg="Welcome to Your Vue.js App" />
</template>

<script>
// import LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/RegisterPage.vue";

export default {
  name: "App",
  components: {
    RegisterPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

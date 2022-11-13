<template>
  <Nav />
  <div
    class="homepage"
    :style="{
      'background-image':
        'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <SearchBar />
  </div>
</template>
<script>
import Nav from "./NavBar.vue";
import SearchBar from "./SearchBar.vue";
export default {
  components: {
    Nav,
    SearchBar,
  },
};
</script>
<style scoped>
h1 {
  color: white;
}
.homepage {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
</style>

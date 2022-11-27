<template>
    <Nav />
    <div
      class="location-review"
      :style="{
        'background-image':
          'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
      }"
    >
      <LocationReviewForm />
    </div>
  </template>

  <script scoped>
  import LocationReviewForm from "./LocationReviewForm.vue";
  import Nav from "./NavBar.vue";
  
  export default {
    components: {
      LocationReviewForm,
      Nav,
    },
  };
  </script>

  <style scoped>
  .location-review {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }
  .background-image {
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>
  
<template>
    <Nav />
    <body>
    <div
      class="profile-page"
      :style="{
        'background-image':
          'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
      }"
    ></div>
    <div class="profile">
        <h1>Username</h1>
        <h1>Age</h1>
        <h1>Height</h1>
    </div>
    <div>
      <button
        @click="submit"
        class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
      >
        Submit
      </button>
    </div>
    </body>
    <profile />
  </template>
  <script>
  import Nav from "./NavBar.vue";
  import profile from "./UserProfile.vue"
  export default {
    components: {
      Nav, 
      profile
    },
  };
  

  </script>
  <style scoped>
  h1 {
    color: white;
  }
  .profile{
    background-color: #333;
    margin-top: 50px;
    color: #eee;
    margin-left: 150px;
    margin-right: 150px;
}
  .profile-page {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
  </style>
  
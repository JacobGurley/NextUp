<template>
    <div class="w-full max-w-xs">
      <form class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-white mb-5 font-bold text-xl">Edit User</h1>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="Username">
            Username
          </label>
          <input
            v-model="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
        </div>
        <div class="mb-6">
          <label class="block text-white text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
          />
        </div>
        <div class="mb-6">
          <label class="block text-white text-sm font-bold mb-2" for="age">
            Age
          </label>
          <input
            v-model="age"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
          />
        </div>
        <div>
          <button
            @click="submit"
            class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </template>
  <script>
  import { getDatabase, ref, set } from "firebase/database";
  const db = getDatabase();
  export default {
    data() {
      return {
        username: null,
        name: null,
        age: null,
      };
    },
    methods: {
      changeProfile() {
        set(ref(db, "user/"), {
            username: this.username,
            name: this.name,
            age: this.age,
        });
      },
    },
  };
  </script>
  
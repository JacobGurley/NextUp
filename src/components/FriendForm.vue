<!--Styles the FriendForm-->
<template>
    <div class="w-full max-w-xs">
      <form class="bg-neutral-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-white mb-5 font-bold text-xl">Add Friend</h1>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="search">
            Search
          </label>
          <input
            v-model="friendemail"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="friend"
            type="text"
          />
        </div>
        <div>
        <button
          @click="addFriend"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Add
        </button>
      </div>
      </form>
    </div>
  </template>
<!--Creating a new Id for friends-->
<script>
import { getAuth, createFriend } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import router from "../router";
const db = getDatabase();
/*const reference = ref(db, 'friends' + friendId);

set(reference, {
  friendemail: this.friendemail,
});*/
export default {
  data() {
    return {
      friendemail: null,
    };
  },
  //Methods sends data to data
  methods: {
    addFriend(){
      createFriend(getAuth(), this.friendemail)
        .then((userCredential) => {
          const friendId = userCredential.user;
      set(ref(db, "friends/" + friendId), {
        friendemail: this.friendemail,
      });
      alert("Successfully added!");
          router.push("/friends");
        })
      
    },
  },
};
</script>
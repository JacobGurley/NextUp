<!--Styles the FriendForm-->
<template>
  <div class="w-full max-w-xs">
    <form class="bg-neutral-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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

<script>
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();
export default {
  data() {
    return {
      friendemail: null,  
    };
  },
  methods: {
    addFriend() {
      const friendsId = Date.now();
      set(ref(db, "friends/" + friendsId), {
        friendemail: this.friendemail,
      });
    },
  },
  };
  </script>

<!--
<template>
    <div>
      <input
        class="box-border rounded-md w-52 mt-5"
        type="text"
        placeholder="Search User"
        v-model="searchInput"
      />
      <div
        class="box-border rounded-md bg-stone-600 shadow-lg justify-center align-center mt-4 ml-96 mr-96 hover:scale-110"
        v-for="users in searchResult"
        :key="users.email"
      >
        <div class="flex align-center justify-center">
          <div class="flex-col text-white">
            <h1>User Email:{{ users.email }}</h1>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getDatabase, get, child, ref } from "firebase/database";
  const usersRef = ref(getDatabase());
  export default {
    data() {
      return {
        users: [],
        searchInput: "",
      };
    },
    created() {
      get(child(usersRef, `users/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              let value = childSnapshot.val();
              this.users.push(value);
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    computed: {
      searchResult() {
        let tempUsers = this.users;
        if (this.searchInput != "" && this.searchInput) {
          tempUsers = tempUsers.filter((users) => {
            return users.email
              .toUpperCase()
              .includes(this.searchInput.toUpperCase());
          });
        }
        return tempUsers;
      },
    },
  };
  </script>
  -->
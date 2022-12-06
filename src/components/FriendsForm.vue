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
  
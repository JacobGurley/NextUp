<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Name</label>
        <input v-model="user.name" required />
      </div>
      <div>
        <label>Email</label>
        <input v-model="user.email" type="email" required />
      </div>
      <button type="submit">Create User</button>
    </form>
  </div>
</template>
<script>
import { db } from "../firebaseDb";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      getDocs(collection(db, "test"))
        .then((data) => {
          const dataArr = data._snapshot.docChanges;
          dataArr.forEach((item) =>
            console.log(item.doc.data.value.mapValue.fields.email)
          );
        })
        .catch((error) => {
          console.log(error);
        });
      addDoc(collection(db, "test"), this.user)
        .then(() => {
          alert("User Created!");
          this.user.name = "";
          this.user.email = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

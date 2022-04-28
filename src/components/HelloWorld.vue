<template>
  <div class="hello">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

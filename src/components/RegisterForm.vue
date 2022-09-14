<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <input
          v-model="user.name"
          placeholder="FULLNAME"
          class="input input-form"
          required
        />
      </div>
      <div>
        <input
          v-model="user.email"
          class="input input-form"
          placeholder="EMAIL"
          type="email"
          required
        />
      </div>
      <div>
        <input class="input input-form" placeholder="USERNAME" required />
      </div>
      <div>
        <input class="input input-form" placeholder="PASSWORD" required />
      </div>
      <div>
        <input
          class="input input-form"
          placeholder="RE-ENTER PASSWORD"
          required
        />
      </div>
      <button type="submit" class="register register-button">
        CREATE ACCOUNT
      </button>
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
<style scoped>
input {
  background: transparent;
  border: 1px solid white;
}
input::placeholder {
  font-size: 10px;
  font-family: "Montserrat";
  font-weight: 300;
  color: white;
}
.input-form {
  margin-top: 15px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
}
.register-button {
  font-family: "Montserrat";
  color: black;
  font-weight: 600;
  border: none;
  font-size: 10px;
  width: 210px;
  height: 30px;
  margin-top: 30px;
  border-radius: 5px;
}
</style>

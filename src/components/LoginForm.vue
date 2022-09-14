<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <input
          v-model="user.name"
          placeholder="USERNAME"
          class="input input-username"
          required
        />
      </div>
      <div>
        <input
          v-model="user.email"
          class="input input-password"
          placeholder="PASSWORD"
          type="email"
          required
        />
      </div>
      <button type="submit" class="login login-button">LOGIN</button>
    </form>
    <label>Don't Have An Account? Sign Up</label>
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
label {
  font-size: 10px;
  color: white;
}
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
.input-username {
  width: 200px;
  height: 25px;
  border-radius: 5px;
}
.input-password {
  margin-top: 20px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
}
.login-button {
  font-family: "Montserrat";
  color: black;
  font-weight: 600;
  border: none;
  font-size: 10px;
  width: 210px;
  height: 30px;
  margin-top: 30px;
  border-radius: 5px;
  background: white;
}
</style>

<template>
  <main class="contain">
    <div class="imgprofile">
      <img src="../../assets/person.svg" alt="Logo">
    </div>
    <div class="reg">
      <h1>Login</h1>
      <div class="linea"></div>
    </div>
    <div class="in">
      <label for="">Correo</label>
      <input type="text" name="usuario" id="usuario" v-model="usuario">
    </div>
    <div class="in">
      <label for="">Contraseña</label>
      <input type="password" name="pass" id="pass" v-model="contraseña">
    </div>
    <button @click="authuser">Ingresar</button>
    <div class="goface">
      <img src="../../assets/gmail.png" alt="Google">
      <img src="../../assets/facebook.png" alt="Facebook">
    </div>
    <footer>
      <img src="../../assets/Logo-removebg-preview.png" alt="Logo">
      <button class="bt-reg" @click="registro">Regìstrate</button>
      <div class="space"></div>
    </footer>
  </main>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { ref, type Ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const router = useRouter()

const registro = () => {
  router.push("/registro")
}

const usuario: Ref<string> = ref("")
const contraseña: Ref<string> = ref("")

const authuser = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, usuario.value, contraseña.value)
    .then((userCredential) => {
      const user = userCredential.user
      alert("Bienvenido")
    })
    .then(() => {
      router.push({name: 'Informacion'})
    })
    .catch((error) => {
      alert("Intente de nuevo")
      const errorCode = error.code
      const errorMessage = error.message
    })
}




</script>

<style lang="scss" scoped>
.contain {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 60px;

  .imgprofile {
    margin-top: 25px;
    padding: 10px 10px;
    border-radius: 50%;
    display: flex;
    background-color: #5d61c6;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: -15px -15px 5px 5px rgba(188, 194, 216, 0.75);

    img {
      width: 200px;
    }
  }

  .reg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    h1 {
      font-size: 40px;
      font-weight: 700;
      color: black;
      margin: 0px;
    }

    .linea {
      width: 1px;
      height: 1px;
      padding: 0px 70px;
      background-color: black;
    }
  }

  .in {
    width: 500px;
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      font-size: 20px;
      font-weight: 700;
      color: black;
      margin-bottom: 10px;
      text-align: right;
    }

    input {
      width: 300px;
      height: 40px;
      border-radius: 50px;
      border: none;
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
      padding: 0px 10px;
      outline: none;
      font-size: 20px;
      font-weight: 700;
      color: black;
    }
  }

  button {
    padding: 5px 30px;
    border: none;
    background-color: #5d61c6;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-top: 50px;
    cursor: pointer;
  }

  .goface {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    padding: 15px 75px;
    margin-top: 20px;
    border-radius: 5%;
    background-color: #cac4c1;

    img {
      margin-top: 10px;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }

  footer {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cac4c1;

    img {
      margin-left: 30px;
      width: 100px;
      height: 100px;
    }

    .bt-reg {
      margin-bottom: 90px;
    }

    .space {
      width: 125px;
    }
  }
}
</style>
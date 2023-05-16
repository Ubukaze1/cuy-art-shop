<template>
  <main class="contain">
    <div class="imgprofile">
      <img src="../../assets/person.svg" alt="Logo">
    </div>
    <div class="reg">
      <h1>Registrarse</h1>
      <div class="linea"></div>
    </div>
    <div class="in">
      <label for="">Nombre Usuario</label>
      <input type="text" name="usuario" id="usuario" placeholder="Hugo Ricardo" v-model="usuario" required>
    </div>
    <div class="in">
      <label for="">Correo</label>
      <input type="email" name="usuario" id="usuario" placeholder="hugoRicardo@gmail.con" v-model="correo" required>
    </div>
    <div class="in">
      <label for="">Contraseña</label>
      <input type="password" name="pass" id="pass" placeholder="Contraseña" v-model="pass" required>
    </div>
    <div class="in">
      <label for="">Repite Contraseña</label>
      <input type="password" name="pass" id="pass" placeholder="Contraseña" v-model="passaut" required>
    </div>
    <button @click="regi">Registrate</button>
    <div class="goface">
      <img src="../../assets/gmail.png" alt="Google">
      <img src="../../assets/facebook.png" alt="Facebook">
    </div>
    <div class="linea"></div>
    <footer>
      <img src="../../assets/Logo-removebg-preview.png" alt="Logo">
      <button class="bt-reg" @click="login">Ingresa</button>
      <div class="space"></div>
    </footer>
  </main>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { type Ref, ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, addDoc, setDoc, doc } from 'firebase/firestore'
import { useRegistroStore } from '../../store/registro'
import { db } from '../../Firebase/Fire'



const reg = useRegistroStore()

const usuario: Ref<string> = ref("")
const pass: Ref<string> = ref("")
const correo: Ref<string> = ref("")
const passaut: Ref<string> = ref("")

const router = useRouter()

const login = () => {
  router.push("/login")
}

const regi = async () => {

  if (usuario.value.trim() == "" && correo.value.trim() == "" && pass.value.trim() == "" && passaut.value.trim() == "") {
    console.log("Llenar todos los datos")
    return
  }

  if (pass.value !== passaut.value) {
    console.log("mal rey")
    return
  }

  console.log("adentro")


  try {
    await setDoc(doc(db, "usuarios", correo.value.toString()), {
      nombre: usuario.value.toString(),
      correo: correo.value.toString(),
      password: pass.value.toString(),
      uso: true
    }).then(() => {
      console.log("Document successfully written!");
    })
    console.log("Document written with ID: ", doc( db, "usuarios", correo.value.toString()).id);
  } catch (error) {
    console.log("Error adding document: ", error)
  }


  await createUserWithEmailAndPassword(getAuth(), correo.value.toString(), pass.value.toString()).then((userCredential) => {
  })

  reg.clearAll()
  await reg.setAll()



  router.push({ name: 'Informacion'})



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
    margin-bottom: 20px;

    h1 {
      font-size: 40px;
      font-weight: 700;
      color: black;
      margin: 0px;
    }

    .linea {
      width: 1px;
      height: 1px;
      padding: 0px 100px;
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
    cursor: pointer;
  }

  .goface {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    padding: 15px 75px;
    margin-top: 20px;
    border-radius: 5%;
    background-color: #cac4c1;

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }

  footer {
    width: 100%;
    height: 97px;
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
      margin-bottom: 35px;
    }

    .space {
      width: 125px;
    }
  }
}
</style>
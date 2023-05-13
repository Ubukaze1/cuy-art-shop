<template>
  <main class="contain">
    <div class="imgprofile">
      <img src="../../assets/person.svg" alt="Logo">
    </div>
    <div class="reg">
      <h1>Informacion</h1>
      <div class="linea"></div>
    </div>
    <div class="in">
      <label for="">Nombre de Usuario</label>
      <input :placeholder="nom" type="text" name="usuario" id="usuario" v-model="usuario">
    </div>
    <div class="in">
      <label for="">Correo</label>
      <input :placeholder="cor" type="email" name="correo" id="correo1" v-model="correo">
    </div>
    <div class="in">
      <label for="">Contraseña</label>
      <input :placeholder="pas" type="password" name="password" id="password" v-model="pass">
    </div>
    <div class="in">
      <label for="">Telèfono</label>
      <input :placeholder="tel" type="number" name="telefono" id="telefono" v-model="telefono">
    </div>
    <div class="in">
      <label for="">Direcciòn</label>
      <input :placeholder="dir" type="text" name="dirreccion" id="dirreccion" v-model="direcciòn">
    </div>
    <div class="actu">
      <button class="bt-act" @click="aa">Actualizar</button>
      <button class="bt-can">Cancelar</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue'
import { getAuth } from 'firebase/auth'
import { useRegistroStore } from '../../store/registro'

defineProps({
  nom: String,
  cor: String,
  pas: String,
  tel: String,
  dir: String
})

const reg = useRegistroStore()
const user = getAuth().currentUser

const usuario: Ref<string> = ref("")
const correo: Ref<string> = ref("")
const pass: Ref<string> = ref("")
const telefono: Ref<string> = ref("")
const direcciòn: Ref<string> = ref("")


const aa = () => {
  if (getAuth().currentUser != null) {
    reg.adddireccion(user?.email?.toString() || '', direcciòn.value)
    reg.addtelefono(user?.email?.toString() || '', telefono.value)
  } else {
    console.log("Nada")
  }
}





</script>

<style lang="scss" scoped>
.contain {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 250px;
  background-color: #e3dfde;

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

    h1 {
      font-size: 40px;
      font-weight: 700;
      color: black;
      margin: 0px;
    }

    .linea {
      width: 1px;
      height: 1px;
      padding: 0px 105px;
      background-color: black;
    }
  }

  .in {
    width: 550px;
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

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
      border-radius: 10px;
      border: none;
      box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.5);
      padding: 0px 10px;
      outline: none;
      font-size: 20px;
      font-weight: 700;
      color: black;
      background-color: #d4cbc9;
    }
  }

  .actu {

    display: flex;
    justify-content: space-between;

    button {
      padding: 10px 30px;
      border: none;
      border-radius: 10px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 20px;
      margin-left: 30px;
      cursor: pointer;
      box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    .bt-act {
      background-color: #42ae53;
    }

    .bt-can {
      background-color: #fe4e26;
    }

  }
}
</style>
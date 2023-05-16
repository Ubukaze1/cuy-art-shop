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
      <button class="bt-act" @click="actual">Actualizar</button>
      <button class="bt-can">Cancelar</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { updateDoc, doc, deleteDoc, setDoc } from 'firebase/firestore'
import { useRegistroStore } from '../../store/registro'
import { db } from '../../Firebase/Fire'

const router = useRouter()

const reg = useRegistroStore()
const user = getAuth().currentUser

const usuario: Ref<string> = ref("")
const correo: Ref<string> = ref("")
const pass: Ref<string> = ref("")
const telefono: Ref<string> = ref("")
const direcciòn: Ref<string> = ref("")

let nom = reg.getRegistro(user?.email?.toString() || '')?.nombre || ''
let cor = reg.getRegistro(user?.email?.toString() || '')?.correo || ''
let pas = reg.getRegistro(user?.email?.toString() || '')?.password || ''
let tel = reg.getRegistro(user?.email?.toString() || '')?.telefono || ''
let dir = reg.getRegistro(user?.email?.toString() || '')?.direccion || ''

const actual = async () => {


  let b = false

  if (user == null) return

  console.log(user)

  let cor = user?.email?.toString()
  let us = reg.getRegistro(user.email?.toString() || '')?.nombre || ''
  let pas = reg.getRegistro(user.email?.toString() || '')?.password || ''
  let tel = reg.getRegistro(user.email?.toString() || '')?.telefono || ''
  let dir = reg.getRegistro(user.email?.toString() || '')?.direccion || ''

  if (reg.getRegistro(user?.email?.toString() || '')?.correo != correo.value && correo.value.trim() != '') {
    try {
      await updateEmail(user, correo.value.toString()).then(() => {
        console.log("correo actualizado")
        b = true
      }).catch((error) => {
        console.log("error al actualizar correo")
        return
      }).then(() => {
        console.log("documento creado")
      }).catch((error) => {
        console.log("error al crear el documento")
        return
      });
    } catch (error) {
      console.log(error)
    }
  }

  if (reg.getRegistro(user?.email?.toString() || '')?.password != pass.value && pass.value.trim() != '') {
    try {
      await updatePassword(user, pass.value.toString()).then(() => {
        console.log("Contraseña actualizado")
      }).catch((error) => {
        console.log("error al actualizar la contraseña")
        return
      }).then(() => {
        console.log("documento creado")
      }).catch((error) => {
        console.log("error al crear el documento")
        return
      });
    } catch (error) {
      console.log(error)
    }
    try {
      await updateDoc(doc(db, "usuarios", cor || ''), {
        password: pass.value
      }).then(() => {
        console.log("documento actualizado")
      }).catch((error) => {
        console.log("error al actualizar el documento")
        return
      }).then(() => {
        console.log("documento creado")
      }).catch((error) => {
        console.log("error al crear el documento")
        return
      });

    } catch (error) {
      console.log(error)
    }
  }
  if (b) {
    try {
      await deleteDoc(doc(db, "usuarios", cor || '')).then(() => {
        console.log("documento eliminado")
      }).catch((error) => {
        console.log("error al eliminar el documento")
        return
      });
      await setDoc(doc(db, "usuarios", correo.value.toString()), {
        nombre: usuario.value.toString().trim() != '' ? usuario.value.toString() : us.toString(),
        correo: correo.value.toString(),
        password: pass.value.toString().trim() != '' ? pass.value.toString() : pas.toString(),
        telefono: telefono.value.toString().trim() != '' ? telefono.value.toString() : tel.toString(),
        direccion: direcciòn.value.toString().trim() != '' ? direcciòn.value.toString() : dir.toString(),
        uso: true
      }).then(() => {
        console.log("documento creado")
      }).catch((error) => {
        console.log("error al crear el documento")
        return
      });
    } catch (error) {
      console.log(error)
    }
  }
  if (usuario.value.toString().trim() != '') {
    try {
      await updateDoc(doc(db, "usuarios", cor || ''), {
        nombre: usuario.value
      }).then(() => {
        console.log("documento actualizado")
      }).catch((error) => {
        console.log("error al actualizar el documento")
        return
      });

    } catch (error) {
      console.log(error)
    }
  }
  if (telefono.value.toString().trim() != '') {
    try {
      await updateDoc(doc(db, "usuarios", cor || ''), {
        telefono: telefono.value
      }).then(() => {
        console.log("documento actualizado")
      }).catch((error) => {
        console.log("error al actualizar el documento")
        return
      });

    } catch (error) {
      console.log(error)
    }
  }
  if (direcciòn.value.toString().trim() != '') {
    try {
      await updateDoc(doc(db, "usuarios", cor || ''), {
        direccion: direcciòn.value
      }).then(() => {
        console.log("documento actualizado")
      }).catch((error) => {
        console.log("error al actualizar el documento")
        return
      });

    } catch (error) {
      console.log(error)
    }
  }
  reg.clearAll()
  await reg.setAll()

  router.push({ name: 'Informacion' })
}









</script>

<style lang="scss" scoped>
.contain {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e3dfde;
  margin-bottom: 500px;
  height: 100%;

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
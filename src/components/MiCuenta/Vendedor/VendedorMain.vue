<template>
  <main class="main">
    <div class="left">
      <div class="top">
        <h1>Productos</h1>
        <div class="linea"></div>
      </div>
      <div class="center">
        <div class="pp" v-for="(o, i) of ob" :key="o.desc">
          <img :src="o.img[0]" alt="Un Cuy">
          <div class="produc">
            <div class="desc">
              <p>{{ o.nombre }}</p>
              <p>{{ o.desc }}</p>
            </div>
            <div>
              <button @click="sett(i)"><img src="../../../assets/settings.svg" alt="settings"> </button>
              <button @click="eliminar(i)"><img src="../../../assets/delete.svg" alt="Delete"> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="rightop">
        <div class="imgprof">
          <img src="../../../assets/person.svg" alt="Persona">
        </div>
        <h1>{{ name }}</h1>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../../../Firebase/Fire'
import { useRegistroStore, type InProd, seti } from '../../../store/registro'

const emit = defineEmits(['cambio'])

const reg = useRegistroStore()
const user = getAuth().currentUser
const router = useRouter()

const name: Ref<string> = ref(reg.getRegistro(user?.email?.toString() || '')?.nombre || '');

const corre = reg.getRegistro(user?.email?.toString() || '')?.correo || ''

const ob: Array<InProd> = reg.getRegistro(user?.email?.toString() || '')?.productos || []

console.log(ob)

const sett = (i: number) => {
  console.log("este es el numero" + i)
  router.push({ name: 'ActualizarProd', })
  emit('cambio')
  seti(i)
}

const eliminar = async (i: number) => {
  ob.splice(i, 1)
  try {
    await updateDoc(doc(db, "usuarios", corre || ''), {
      productos: ob
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




</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .left {
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      flex-direction: column;
      justify-content: left;
      margin-bottom: 20px;

      h1 {
        font-size: 2rem;
        font-weight: 500;
        margin: 0px;
      }

      .linea {
        width: 50%;
        height: 2px;
        background-color: #000;
      }
    }

    .center {
      display: flex;
      flex-direction: column;
      justify-content: space-evenlys;
      align-items: center;
      width: 900px;
      height: 750px;
      background-color: #cfcfcf;
      box-shadow: -1px -1px 10px 0px rgba(0, 0, 0, 0.75);

      .pp {
        margin-top: 30px;
        display: flex;
        width: 75%;
        height: 13.4%;
        margin-bottom: 10px;

        img {
          width: 150px;
          height: 100px;
        }
      }

      .produc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 0px;
        border-bottom: 1px solid #000;
        background-color: #3cd29a;


        .desc {
          display: flex;
          flex-direction: column;
          justify-content: left;
          margin-left: 10px;

          p {
            font-size: 1.2rem;
            font-weight: 400;
            margin: 0px;
          }
        }

        button {
          width: 35px;
          height: 30px;
          margin-right: 10px;
          border: none;
          border-radius: 5px;
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .right {
    margin-left: 90px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 300px;
    height: 100%;

    .rightop {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;

      h1 {
        font-size: 1.5rem;
        margin: 0px;
      }

      .imgprof {
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
    }
  }
}
</style>
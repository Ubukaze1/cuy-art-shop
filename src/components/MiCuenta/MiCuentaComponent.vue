<template>
  <main class="main">
    <div class="mainleft">
      <div class="mainleftleft">
        <h1>Mi Cuenta</h1>
        <div class="linea1"></div>
        <div class="list">
          <div>
            <div class="linea2" :class="!ver ? 'rot' : ''"></div>
            <div class="lineaa2" v-show="!ver"></div>
          </div>
          <label @click="cent">Actualizar Informacion</label>
        </div>
        <div class="list1">
          <div>
            <div class="linea3" :class="opc ? 'rot' : ''"></div>
            <div class="lineaa3" v-show="opc"></div>
          </div>
          <label @click="centopc">Vendedora</label>
        </div>
        <div class="opc">
          <div class="list3">
            <div>
              <div class="linea4" v-show="opc" :class="opcselc ? 'rot' : ''"></div>
              <div class="lineaa4" v-show="opcselc"></div>
            </div>
            <label @click="centopc22" v-show="opc">Añadir Producto</label>
          </div>
          <div class="list4">
            <div>
              <div class="linea5" v-show="opc" :class="opcselc1 ? 'rot' : ''"></div>
              <div class="lineaa5" v-show="opcselc1"></div>
            </div>
            <label v-show="opc">Actualizar Producto</label>
          </div>
        </div>
        <div class="linea"></div>
        <img class="logo" src="../../assets/Logo.jpeg" alt="El logo">
        <h1>CUYART-SHOP</h1>
        <img src="../../assets/youtube.png" alt="Youtube">
        <img src="../../assets/facebook.png" alt="Facebook">
      </div>
    </div>
    <div class="mainright">
      <RouterView @cambio="centopc11"/>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, type Ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useRegistroStore } from '../../store/registro'
import { getAuth } from 'firebase/auth'
import MiCuentaInformacion from './MiCuentaInformacion.vue';
import MiCuentaActualizar from './MiCuentaActualizar.vue';
import VendedorMain from './Vendedor/VendedorMain.vue'

const router = useRouter()

let use = {}
onBeforeMount(() => {

  const reg = useRegistroStore()
  const user = getAuth().currentUser
  use = {
    nom: reg.getRegistro(user?.email?.toString() || ' ')?.nombre || ' ',
    cor: reg.getRegistro(user?.email?.toString() || '')?.correo || '',
    pas: reg.getRegistro(user?.email?.toString() || '')?.password || '',
    tel: reg.getRegistro(user?.email?.toString() || '')?.telefono || '',
    dir: reg.getRegistro(user?.email?.toString() || '')?.direccion || '',
  }
})

const ver: Ref<boolean> = ref(true)
const opc: Ref<boolean> = ref(false)
const opcselc: Ref<boolean> = ref(false)
const opcselc1: Ref<boolean> = ref(false)

const cent = () => {
  if (opc.value === false) {
    ver.value = !ver.value
  } else {
    opc.value = false
    ver.value = true
    router.push({ name: 'Informacion' })
  }
  if (ver.value === true) {
    router.push({ name: 'Informacion' })
  } else {
    router.push({ name: 'Actualizar' })
  }

}

const centopc = () => {
  if (ver.value === true) {
    if (!opc.value) {
      opc.value = !opc.value
    }
  } else {
    ver.value = true
    if (!opc.value) {
      opc.value = !opc.value
    }
  }

  if (opc.value === false) {
    opcselc.value = false
    opcselc1.value = false
  }


  if (opc.value === true) {
    opcselc.value = false
    opcselc1.value = false
  }

  router.push({ name: 'Vendedor' })
}

const centopc11 = () => {
  if (opcselc.value === false) {
    opcselc1.value = !opcselc1.value
  } else {
    opcselc.value = false
    opcselc1.value = !opcselc1.value
  }
  router.push({ name: 'ActualizarProd' })
}

const centopc22 = () => {
  if (opcselc1.value === false) {
    opcselc.value = !opcselc.value
  } else {
    opcselc1.value = false
    opcselc.value = !opcselc.value
  }
  router.push({ name: 'Añadir' })
}


</script>

<style lang="scss" scoped>
.main {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .mainleft {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 100%;
    padding: 10px;

    .mainleftleft {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      width: 250px;
      padding: 10px 10px;

      h1 {
        margin: 0px;
      }

      .linea1 {
        width: 70%;
        height: 2px;
        background-color: black;
        margin-bottom: 10px;
      }

      .linea {
        width: 100%;
        height: 3px;
        background-color: #e3dfde;
        margin-bottom: 10px;
      }

      .list {
        display: flex;
        align-items: center;
        justify-content: left;
        margin-top: 30px;

        .linea2 {
          width: 25px;
          height: 2px;
          background-color: black;
          margin-right: 10px;
        }

        .rot {
          position: relative;
          bottom: 1px;
          transform: rotate(15deg);
        }

        .lineaa2 {
          top: 3px;
          width: 25px;
          height: 2px;
          background-color: black;
          margin-right: 10px;
          position: relative;
          transform: rotate(-15deg);
        }

        label {
          font-weight: bold;
          cursor: pointer;
        }

        margin-bottom: 20px;
      }

      .list1 {
        display: flex;
        align-items: center;
        justify-content: right;

        .linea3 {
          width: 25px;
          height: 2px;
          background-color: black;
          margin-right: 10px;
        }

        .rot {
          position: relative;
          bottom: 1px;
          transform: rotate(15deg);
        }

        .lineaa3 {
          top: 3px;
          width: 25px;
          height: 2px;
          background-color: black;
          margin-right: 10px;
          position: relative;
          transform: rotate(-15deg);
        }

        label {
          margin-right: 85px;
          font-weight: bold;
          cursor: pointer;
        }


      }

      .opc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 15px;

        .list3 {
          display: flex;
          align-items: center;
          justify-content: left;

          .linea4 {
            width: 25px;
            height: 2px;
            background-color: black;
            margin-right: 10px;
          }

          .rot {
            position: relative;
            bottom: 1px;
            transform: rotate(15deg);
          }


          .lineaa4 {
            top: 3px;
            width: 25px;
            height: 2px;
            background-color: black;
            margin-right: 10px;
            position: relative;
            transform: rotate(-15deg);
          }

          label {
            cursor: pointer;
          }


        }

        .list4 {
          display: flex;
          align-items: center;
          justify-content: left;
          margin-top: 10px;

          .linea5 {
            width: 25px;
            height: 2px;
            background-color: black;
            margin-right: 10px;
          }

          .rot {
            position: relative;
            bottom: 1px;
            transform: rotate(15deg);
          }


          .lineaa5 {
            top: 3px;
            width: 25px;
            height: 2px;
            background-color: black;
            margin-right: 10px;
            position: relative;
            transform: rotate(-15deg);
          }

          label {
            cursor: pointer;
          }


        }

        margin-bottom: 280px;
      }


      .logo {
        margin-top: 10px;
        width: 165px;
        height: 165px;
        border-radius: 50px;
        border: none;
        cursor: pointer;
      }

      img {
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }
}

.mainright {
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 65%;
  height: 90%;
  padding: 5px 10px;
  background-color: #e3dfde;

  h1 {
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
    margin-right: 10px;
    font-weight: 500;
    font-size: 20px;
  }
}
</style>
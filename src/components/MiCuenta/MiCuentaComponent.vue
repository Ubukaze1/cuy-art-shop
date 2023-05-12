<template>
  <main class="main">
    <div class="mainleft">
      <div class="mainleftleft">
        <h1>Mi Cuenta</h1>
        <div class="linea1"></div>
        <div class="list">
          <div class="linea2"></div>
          <label @click="ver = !ver">Actualizar Informacion</label>
        </div>
        <div class="list1">
          <div class="linea3"></div>
          <label>Vendedora</label>
        </div>
        <div class="linea"></div>
        <img class="logo" src="../../assets/Logo.jpeg" alt="El logo">
        <h1>CUYART-SHOP</h1>
        <img src="../../assets/youtube.png" alt="Youtube">
        <img src="../../assets/facebook.png" alt="Facebook">
      </div>
    </div>
    <div class="mainright">
      <MiCuentaInformacion v-show="ver" />
      <MiCuentaActualizar v-show="!ver" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, type Ref, watch } from 'vue'
import MiCuentaInformacion from './MiCuentaInformacion.vue';
import MiCuentaActualizar from './MiCuentaActualizar.vue';

const ver: Ref<boolean> = ref(true)


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
    margin-right: 200px;

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

        label {
          margin-right: 85px;
          font-weight: bold;
          cursor: pointer;
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
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 50%;
  padding: 5px 10px;
  margin-bottom: 250px;
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
<template>
  <header class="head">
    <button>
      <img src="../assets/person.svg" alt="Persona">
    </button>
    <h1>CUYART-SHOP</h1>
    <button @click="home">
      <img src="../assets/salir.svg" alt="Menu">
    </button>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const home = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #48ac56;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: fixed;
  z-index: 100;
  color: white;
  button {
    border: none;
    border-radius: 50px;
    width: 3%;
    height: 85%;
    img {
      margin-left: 1px;
      width: 100%;
      height: 100%;
    }
  }

}
</style>
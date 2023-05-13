<template>
  <header class="head">
    <button @click="menu">
      <img src="../../assets/Logo-removebg-preview.png" alt="Persona">
    </button>
    <h1 @click="casa">CUYART-SHOP</h1>
    <button @click="home">
      <img src="../../assets/salir.svg" alt="Menu">
    </button>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { getAuth, signOut } from 'firebase/auth'
const router = useRouter()
const home = () => {
  signOut(getAuth())
  router.push('/')
}

const casa = () => {
  router.push('/')
}

const menu = () => {
  if (getAuth().currentUser != null) {
    router.push('/micuenta')
  } else {
    router.push('/login')
  }
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

  h1 {
    cursor: pointer;
  }

  button {
    border: none;
    border-radius: 50px;
    width: 3%;
    height: 85%;
    cursor: pointer;

    img {
      margin-left: 1px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
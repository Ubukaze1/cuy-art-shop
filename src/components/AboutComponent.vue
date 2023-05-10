<template>
  <main class="main">
    <div class="mainleft">
      <div class="mainleftleft">
        <img class="logo" src="../assets/Logo.jpeg" alt="El logo">
        <h1>CUYART-SHOP</h1>
        <h3>Redes Sociales</h3>
        <img src="../assets/youtube.png" alt="Youtube">
        <img src="../assets/facebook.png" alt="Facebook">
        <img src="../assets/twitch.png" alt="Twitch">
        <h3>Contàctanos</h3>
        <img src="../assets/gmail.png" alt="Gmail">
      </div>
    </div>
    <div class="mainright">
      <h1>¿Quienes Somos?</h1>
      <p>CUYART-SHOP es una tienda virtual de artesanìas que atraves del comercio electrònico busca conectar y ayudar a expandir los negocios de los artesanos a otras regiones del paìs</p>
      <h1>Misiòn</h1>
      <p>La misiòn de la empresa Cuy Art Shop es brindar a los artesanos una conexiòn seguray de calidad con sus compradores promoviendo el comercio electrònico y extendiendo los negocios de nuestros artesanos</p>
      <h1>Visiòn</h1>
      <p>Cuy Art Shop serà la empresa lìder en Colombia en venta y compra de artesanìas, siendo una de las màs importanes para expandir los negocios de los artesanos</p>


    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, type Ref, watch } from 'vue'
const num: Ref<number> = ref(20000)
</script>

<style lang="scss" scoped>
.main {
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .mainleft {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;

    .mainleftleft {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      width: 40%;
      height: 80%;

      .logo {
        margin-top: 50px;
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
  width: 45%;
  height: 70%;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
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
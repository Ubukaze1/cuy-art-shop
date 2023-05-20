<template>
  <header class="head">
    <div class="lefthead">
      <button @click="home">
        <img src="../../assets/Logo-removebg-preview.png" alt="Persona">
      </button>
    </div>
    <div class="centerhead">
      <input type="text" name="text" id="one">
      <div class="centersearch">
        <img src="../../assets/Puntos.svg" alt="Puntos">
        <button>
          <img src="../../assets/search.svg" alt="Busqueda">
        </button>
      </div>
    </div>
    <div class="righthead">
      <button @click="login">
        <img src="../../assets/person.svg" alt="Persona">
      </button>
      <button @click="carro">
        <img src="../../assets/shopping_cart.svg" alt="Carro de compra">
      </button>
      <button>
        <img src="../../assets/menu.svg" alt="Menu" @click="menu = !menu">
      </button>
    </div>
  </header>
  <div class="containmodal" v-show="menu">
    <div class="contain">
      <div class="salir">
        <button @click="menu = !menu">
          <img src="../../assets/close.svg" alt="Cerrar">
        </button>
      </div>
      <div class="opciones">
        <h2>Menu</h2>
        <p href="#" @click="cuenta">Mi Cuenta</p>
        <p href="#" @click="acerca">Acerca de nosotros</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth } from "firebase/auth";
const menu: Ref<boolean> = ref(false);
const router = useRouter();
const acerca = () => {
  router.push("/about");
};
const login = () => {
  if (getAuth().currentUser != null) {
    router.push({name: 'Informacion'});
  } else {
    router.push("/login");
  }
};

const home = () => {
  router.push({name: 'Home'})
}

const carro = () => {
  router.push({name: 'Carrito'})
  console.log("Carroo")
}

const cuenta = () => {
  if (getAuth().currentUser != null) {
    router.push({name: 'Informacion'});
  } else {
    router.push("/login");
  }
};

</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #48ac56;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  .lefthead {
    width: 15%;
    display: flex;
    justify-content: space-around;

    button {
      border: none;
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      width: 22%;

      img {
        width: 100%;
      }
    }
  }

  .centerhead {
    width: 60%;
    display: flex;
    justify-content: space-around;
    background-color: white;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    input {
      width: 100%;
      height: 30px;
      border-radius: 20px;
      border: none;
      padding: 0 10px;
      font-size: 18px;
      outline: none;
    }

    .centersearch {
      display: flex;
      justify-content: space-around;

      img {
        width: 50px;
        height: 30px;
      }

      button {
        background-color: white;
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 50%;
        outline: none;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .righthead {
    width: 15%;
    display: flex;
    justify-content: space-around;

    button {

      border: none;
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      margin: 50px 0;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.containmodal {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: right;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  transition: all 5000ms ease;

  .contain {
    width: 15%;
    height: 100%;
    background-color: #1c1c1c;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;


    .opciones {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        margin-bottom: 0px;
      }

      p {
        margin-top: 10px;
        margin-bottom: 0px;
        cursor: pointer;
      }
    }

    .salir {
      width: 50px;
      height: 50px;

      button {
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 10px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
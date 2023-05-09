<template>
  <header class="head">
    <div class="lefthead">
      <button>
        <img src="../assets/person.svg" alt="Persona">
      </button>
    </div>
    <div class="centerhead">
      <input type="text" name="text" id="one">
      <div class="centersearch">
        <img src="../assets/Puntos.svg" alt="Puntos">
        <button>
          <img src="../assets/search.svg" alt="Busqueda">
        </button>
      </div>
    </div>
    <div class="righthead">
      <button>
        <img src="../assets/person.svg" alt="Persona">
      </button>
      <button>
        <img src="../assets/shopping_cart.svg" alt="Carro de compra">
      </button>
      <button>
        <img src="../assets/menu.svg" alt="Menu">
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
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
    button {
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
</style>
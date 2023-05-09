<template>
  <div class="container">
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
    <main class="main">
      <div class="mainleft">
        <div class="mainleftleft">
          <div class="categorias">
            <h2>Catergorias</h2>
            <div class="linea"></div>
            <form>
              <div>
                <input type="checkbox" name="tipo1" id="tipo1">
                <label for="tipo1">Ceràmica</label>
              </div>
              <div>
                <input type="checkbox" name="tipo2" id="tipo2">
                <label for="tipo2">Barro</label>
              </div>
              <div>
                <input type="checkbox" name="tipo3" id="tipo3">
                <label for="tipo3">Tela</label>
              </div>
              <div>
                <input type="checkbox" name="tipo4" id="tipo4">
                <label for="tipo4">Acuarela</label>
              </div>
            </form>
          </div>
          <div class="precios">
            <h2>Precios</h2>
            <div class="linea"></div>
          </div>

        </div>
      </div>
      <div class="mainright">
      </div>

    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e3dfde;
}

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
      background-color: white;
      border: thin solid black;
      width: 75%;
      height: 75%;

      .categorias {
        display: flex;
        flex-direction: column;

        h2 {
          margin-left: 40px;
          font-weight: bold;
          text-decoration: solid;
          margin-bottom: 0px;
        }

        .linea {
          margin-left: 40px;
          width: 150px;
          height: 1px;
          background-color: black;
        }

        form {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 40px;

          div {
            margin-top: 10px;
            width: 200px;
            display: flex;
            align-items: center;

            input {
              width: 20px;
              height: 20px;
              margin: 10px 10px;
            }
          }
        }
      }

      .precios {
        margin-top: 80px;
        display: flex;
        flex-direction: column;

        h2 {
          margin-left: 40px;
          font-weight: bold;
          text-decoration: solid;
          margin-bottom: 0px;
        }

        .linea {
          margin-left: 40px;
          width: 150px;
          height: 1px;
          background-color: black;
        }
      }
    }

  }

  .mainright {
    width: 70%;
    height: 100%;
    color: white;
  }
}
</style>
<template>
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
          <div class="precio">
            <div class="preciosss">
              <h3>20.000</h3>
              <h3>800.000</h3>
            </div>
            <input type="range" name="rango" id="rango" min="20000" max="800000" v-model="num" step="100">
            <div class="precioss">
              <span>$</span>
              <input type="number" name="numero" id="numero" v-model="num" step="100">
              <button>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mainright">
      <div class="promocion">
        <img src="../../assets/prom.jpg" alt="promocion">
      </div>
      <div class="targetas">
        <div class="targeta">
          <img src="../../assets/articulos/09757-BIG.jpg" alt="Primer Articulo">
          <div class="linea"></div>
          <h2>Vandola de Cafe</h2>
          <div class="price">
            <p>$ 45.000</p>
            <div class="lineap"></div>
          </div>
          <p>Ha, Pero que lindo</p>
        </div>
        <div class="targeta">
          <img src="../../assets/articulos/taza-tradicional.webp" alt="Segundo Articulo">
          <div class="linea"></div>
          <h2>Taza personalizada de Ceramìca</h2>
          <div class="price">
            <p>$ 25.000</p>
            <div class="lineap"></div>
          </div>
          <p>Producto Tolimence, para tomar cafesito</p>
        </div>
        <div class="targeta">
          <img src="../../assets/articulos/9a0e8b4110eb49644003a6d56f7b1232.jpg" alt="Tercer Articulo">
          <div class="linea"></div>
          <h2>Calletero :v</h2>
          <div class="price">
            <p>$ 40.000</p>
            <div class="lineap"></div>
          </div>
          <p>Para Guardar tus deliciosas Galletas</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, type Ref, watch } from 'vue'
import {useRegistroStore} from '../../store/registro'

const reg = useRegistroStore()
const num: Ref<number> = ref(20000)

console.log(reg.getAll())
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 1570px) {
  .mainleft {
    margin-right: 40px;
  }
}


@media only screen and (max-width: 1482px) {
  .mainleft {
    margin-right: 80px;
  }
}

@media only screen and (max-width: 1380px) {
  .mainleft {
    margin-right: 120px;
  }
}


@media only screen and (max-width: 1300px) {
  .mainleft {
    margin-right: 140px;
  }
}

@media only screen and (max-width: 1250px) {
  .mainleft {
    margin-right: 160px;
  }
}


@media only screen and (max-width: 1200px) {
  .mainleftleft {
    display: none;
  }

  .mainright {
    margin-right: 60px;
  }
}

.main {
  margin-top: 50px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;

  .mainleft {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20% 5%;
    width: 30%;

    .mainleftleft {
      background-color: white;
      border: thin solid black;
      width: 75%;
      height: 75%;

      .categorias {
        display: flex;
        flex-direction: column;

        h2 {
          margin-left: 20px;
          font-weight: bold;
          text-decoration: solid;
          margin-bottom: 0px;
        }

        .linea {
          width: 1px;
          padding: 0px 70px;
          margin-left: 20px;
          margin-right: 20px;
          height: 1px;
          background-color: black;
        }

        form {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 20px;

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
          margin-left: 20px;
          font-weight: bold;
          text-decoration: solid;
          margin-bottom: 0px;
        }

        .linea {
          width: 1px;
          padding: 0px 70px;
          margin-left: 20px;
          margin-right: 20px;
          height: 1px;
          background-color: black;
        }

        .precio {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 20px;

          .preciosss {
            width: 75%;
            display: flex;
            justify-content: space-between;

            h3 {
              margin: 0;
              font-weight: 500;
            }
          }

          input {
            width: 75%;
            margin-top: 0px;
            margin-bottom: 20px;
          }

          .precioss {
            margin-top: 20px;
            width: 75%;
            display: flex;
            margin-bottom: 20px;

            span {
              font-size: 20px;
              font-weight: 500;

            }

            input {
              width: 50%;
              height: 20px;
              border: none;
              font-size: 18px;
              outline: none;
              background-color: #e3dfde;
              margin-left: 10px;
            }

            button {
              background-color: #5e62c4;
              width: 50px;
              height: 20px;
              border: none;
              outline: none;
              cursor: pointer;
              color: white;
              margin-left: 20px;
            }
          }
        }

      }
    }
  }

  .mainright {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .promocion {
      margin-top: 40px;
      margin-right: 200px;

      img {
        width: 1000px;
        height: 200px;
      }
    }

    .targetas {
      display: flex;
      justify-content: space-evenly;
      margin-right: 150px;

      .targeta {
        margin-right: 50px;
        width: 300px;
        height: 500px;
        border: thin solid black;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          margin-top: 20px;
          width: 75%;
          height: 50%;
        }

        .linea {
          margin-top: 5px;
          width: 75%;
          height: 1px;
          background-color: lightgray;
        }

        h2 {
          width: 75%;
          height: 10%;
          margin: 0px;
          margin-top: 10px;
        }

        .price {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-left: 75px;

          p {
            width: 75%;
            font-size: 34px;
            margin-bottom: 0px;
          }

          .lineap {
            width: 50%;
            height: 1px;
            background-color: gray;
          }
        }

        p {
          margin-bottom: 0px;

        }

      }
    }
  }
}
</style>
<template>
  <main class="main">
    <div class="mainleft">
      <div class="mainleftleft">
        <div class="categorias">
          <h2>Catergorias</h2>
          <div class="linea"></div>
          <form @change="cc">
            <div>
              <input type="radio" name="tipo1" id="tipo1" value="Ceràmica" v-model="tipo">
              <label for="tipo1">Ceràmica</label>
            </div>
            <div>
              <input type="radio" name="tipo2" id="tipo2" value="Barro" v-model="tipo">
              <label for="tipo2">Barro</label>
            </div>
            <div>
              <input type="radio" name="tipo3" id="tipo3" value="Tela" v-model="tipo">
              <label for="tipo3">Tela</label>
            </div>
            <div>
              <input type="radio" name="tipo4" id="tipo4" value="Acuarela" v-model="tipo">
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
      <div class="targetas">
        <div class="targeta" v-for="(ob, i) of productos" :key="i">
          <img :src="ob.img[0]" alt="Primer Articulo">
          <div class="linea"></div>
          <h2>{{ ob.nombre }}</h2>
          <div class="price">
            <p>$ {{ ob.precio }}</p>
            <div class="lineap"></div>
          </div>
          <p class="po">{{ ob.desc }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, type Ref, onBeforeMount, onUnmounted, } from 'vue'
import { useRegistroStore, type InProd } from '../../store/registro'

const reg = useRegistroStore()
const num: Ref<number> = ref(20000)
const tipo: Ref<string> = ref('')

let productos: Array<InProd> = [];

for (let i = 0; i < reg.datos.length; i++) {
  for (let j = 0; j < reg.datos[i].productos.length; j++) {
    productos.push(reg.datos[i].productos[j]);
  }
}
console.log(productos)

const cc = () => {
  console.log(tipo.value)
}

onUnmounted(async () => {
  reg.clearAll()
  await reg.setAll()
})


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
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;


    .targetas {
      display: grid;
      justify-content: space-evenly;
      grid-template-columns: auto auto auto;
      margin-right: 150px;
      overflow: auto;
      width: 100%;
      row-gap: 15px;

      .targeta {
        width: 300px;
        height: 430px;
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
          text-align: center;
          width: 100%;
          height: 10%;
          margin: 0px;
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .price {
          display: flex;
          flex-direction: column;
          width: 80%;


          p {
            width: 70%;
            font-size: 34px;
            margin-top: 0px;
            margin-bottom: 0px;
          }


          .lineap {
            width: 70%;
            height: 1px;
            background-color: gray;
          }
        }

        .po {
          text-align: center;

        }

        p {
          margin-bottom: 0px;

        }

      }
    }
  }
}
</style>
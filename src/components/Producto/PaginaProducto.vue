<template>
  <div class="container">
    <NavBar />
    <main class="main">
      <div class="left">
        <div class="center">
          <img src="../../assets/articulos/cuy.jpeg" alt="Un Cuy">
          <div class="linea"></div>
          <div class="info">
            <h2>Descripcion</h2>
            <p>Cerdito de Ceramica blanco con salpicadura de colores.</p>
            <p>Producto tolimence</p>
            <p>Perfecto regalo para tu pareja o amig@</p>
            <p>Entrègale a esa persona un recuerdo del tolima y de nuestros artesanos, pequeño, lindo y con carisma</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="rightop">
          <div class="top">
            <h1>Cerdito personalizado de ceramica</h1>
            <div class="linea"></div>
            <h2>$ 25.000</h2>
            <div class="sto">
              <h2>Stock</h2>
              <input type="number" name="stock" id="stock">
            </div>
            <div class="masmen">
              <button>+</button>
              <button>-</button>
            </div>
            <div class="agrecom">
              <button class="bt-add">Agregar</button>
              <button class="bt-comp">Comprar</button>
            </div>
          </div>
          <div class="valor">
            <div class="targeta">
              <img src="../../assets/articulos/09757-BIG.jpg" alt="Primer Articulo">
              <div class="price">
                <div class="ppp">
                  <h2>Vandola de Cafe</h2>
                  <div>
                    <p>$ 45.000</p>
                    <div class="lineap"></div>
                  </div>
                  <p>Ha, Pero que lindo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '../NavBar/NavBar.vue';
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

.main {
  display: flex;
  justify-content: space-evenly;
  margin-top: 150px;
  width: 100%;
  height: 100%;

  .left {
    display: flex;
    flex-direction: column;


    .center {
      display: flex;
      flex-direction: column;
      justify-content: space-evenlys;
      align-items: center;
      width: 900px;
      height: 750px;
      background-color: white;
      box-shadow: -1px -1px 10px 0px rgba(0, 0, 0, 0.75);

      img {
        margin-top: 20px;
        width: 50%;
        height: 50%;
      }

      .linea {
        margin-top: 20px;
        width: 80%;
        height: 2px;
        background-color: lightgrey;
      }

      .info {
        margin-top: 10px;
        width: 80%;
        height: 50%;
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 1.5rem;
          font-weight: bold;
        }

        p {
          font-size: 1rem;
          margin: 0px;
          margin-top: 5px;
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 400px;
    height: 100%;

    .rightop {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      width: 100%;
      height: 100%;
      margin-bottom: 20px;


      .top {
        display: flex;
        flex-direction: column;
        justify-content: left;
        margin-bottom: 20px;
        background-color: white;
        width: 100%;
        height: 30%;
        
        padding: 20px;

        h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0px;
          width: 350px;
        }

        .linea {
          width: 100%;
          height: 2px;
          background-color: #000;
        }

        h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0px;
          margin-top: 10px;
        }

        .sto {
          display: flex;
          align-items: center;
          margin-top: 20px;

          h2 {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0px;
          }

          input {
            margin-left: 20px;
            width: 150px;
            height: 20px;
            border: none;
            border-radius: 5px;
            background-color: #e3dfde;
            text-align: center;
          }
        }

        .masmen {
          display: flex;
          justify-content: center;
          align-items: center;

          button {
            width: 25px;
            height: 25px;
            border: none;
            border-radius: 50%;
            background-color: #e3dfde;
            font-weight: bold;
            cursor: pointer;
          }

        }

        .agrecom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;

          button {
            width: 150px;
            height: 40px;
            border: none;
            border-radius: 5px;
            background-color: #e3dfde;
            font-weight: bold;
            cursor: pointer;
          }

          .bt-add {
            background-color: lightblue;
          }

          .bt-comp {
            background-color: #9ad496;
          }
        }
      }

      .valor {
        margin-top: 70px;
        width: 110%;
        height: 50%;
        background-color: #d9d2cf;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        overflow: auto;
        align-items: center;

        .targeta {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 75%;

          img {
            width: 50%;
            height: 50%;
            margin-bottom: 10px;
            margin-top: 40px;
          }

          .price {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background-color: lightblue;

            .ppp {
              display: flex;
              flex-direction: column;
              justify-content: left;
              padding: 20px;

              h2 {
                font-size: 1.5rem;
                margin: 0px;
                margin-top: 10px;
              }

              p {
                font-size: 1.5rem;
                margin: 0px;
                margin-top: 10px;
              }

              .lineap {
                width: 30%;
                height: 2px;
                background-color: #000;
              }
            }

          }

        }

      }
    }
  }
}
</style>


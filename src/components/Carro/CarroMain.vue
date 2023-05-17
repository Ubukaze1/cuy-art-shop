<template>
  <main class="main">
    <div class="left">
      <div class="center">
        <div class="pp">
          <img src="../../assets/articulos/cuy.jpeg" alt="Un Cuy">
          <div class="produc">
            <div class="desc">
              <p>Figura Cuy - Graduado</p>
              <p>(Producto Nariñense decorado a mano)</p>
            </div>
            <div>
              <button>eliminar</button>
            </div>
          </div>
        </div>
        <div class="pp">
          <img src="../../assets/articulos/cuy.jpeg" alt="Un Cuy">
          <div class="produc">
            <div class="desc">
              <p>Figura Cuy - Graduado</p>
              <p>(Producto Nariñense decorado a mano)</p>
            </div>
            <div>
              <button>eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="rightop">
        <div class="top">
          <h1>Carrito de Compra</h1>
          <div class="linea"></div>
        </div>
        <div class="valor">
          <div>
            <h2>Precio</h2>
            <h3>$ 50.000</h3>
          </div>
          <div>
            <h2>Descuento de la oferta</h2>
            <h3>$ 0.0</h3>
          </div>
          <div>
            <h2>Envìo</h2>
            <h3>$ 10.000</h3>
          </div>
          <div>
            <h2>Subtotal</h2>
            <h3>$ 60.000</h3>
          </div>
          <div class="bt">
            <button class="bt-comp">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
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
      background-color: #cfcfcf;
      box-shadow: -1px -1px 10px 0px rgba(0, 0, 0, 0.75);

      .pp {
        margin-top: 30px;
        display: flex;
        width: 75%;
        height: 13.4%;
        margin-bottom: 10px;

        img {
          width: 150px;
          height: 100px;
        }
      }

      .produc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 0px;
        border-bottom: 1px solid #000;
        background-color: #3cd29a;


        .desc {
          display: flex;
          flex-direction: column;
          justify-content: left;
          margin-left: 10px;

          p {
            font-size: 1.2rem;
            font-weight: 400;
            margin: 0px;
          }
        }

        button {
          width: 100px;
          height: 30px;
          margin-right: 20px;
          border: none;
          border-radius: 5px;
          background-color: #000;
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
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

        h1 {
          font-size: 3rem;
          font-weight: bold;
          margin: 0px;
        }

        .linea {
          width: 100%;
          height: 2px;
          background-color: #000;
        }
      }

      .valor {
        margin-top: 70px;
        width: 110%;
        height: 65%;
        background-color: #9ad496;
        display: flex;
        flex-direction: column;
        flex-direction: left;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

        div {
          margin-top: 30px;
          margin-left: 40px;
          margin-bottom: 25px;

          h2 {
            margin: 0px;
          }

          h3 {
            margin: 0px;
          }
        }

        .bt {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          margin-left: 40px;
          margin-bottom: 25px;

          button {
            width: 100px;
            height: 30px;
            border: none;
            border-radius: 5px;
            background-color: #000;
            color: #fff;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
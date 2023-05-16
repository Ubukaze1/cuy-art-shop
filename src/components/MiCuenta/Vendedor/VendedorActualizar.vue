<template>
  <main class="main">
    <div class="left">
      <div class="top">
        <h1>Actualizar Productos</h1>
        <div class="linea"></div>
      </div>
      <div class="center">
        <div class="leftcenter">
          <h2>Nombre del Producto</h2>
          <h2>Precio del producto</h2>
          <h2>Stock del Producto</h2>
          <h2>Imàgenes del producto</h2>
          <h2 class="dee">Descripciòn</h2>
        </div>
        <div class="rightcenter">
          <input type="text">
          <input type="text">
          <input type="text">
          <div class="añaimg">
            <img src="../../../assets/articulos/cuy.jpeg" alt="Es un cuy">
            <button>añadir</button>
          </div>
          <textarea></textarea>
        </div>
      </div>
      <div class="bt">
        <button class="bt-add">Actualizar</button>
        <button class="bt-can">Cancelar</button>
      </div>
    </div>
    <div class="right">
      <div class="rightop">
        <div class="imgprof">
          <img src="../../../assets/person.svg" alt="Persona">
        </div>
        <h1>Nombre :V</h1>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 100%;

    .top {
      display: flex;
      flex-direction: column;
      justify-content: left;
      margin-bottom: 30px;

      h1 {
        font-size: 2rem;
        font-weight: 500;
        margin: 0px;
      }

      .linea {
        width: 30%;
        height: 2px;
        background-color: #000;
      }
    }

    .center {
      display: flex;
      justify-content: left;

      .leftcenter {
        display: flex;
        flex-direction: column;
        justify-content: right;

        h2 {
          width: 300px;
        }

        .dee {
          margin-top: 240px;
        }

      }

      .rightcenter {
        margin-top: 20px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;

        input {
          font-size: 20px;
          padding: 10px 300px 10px 10px;
          width: 300px;
          margin-bottom: 28px;
          border: none;
          box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.75);
          border-radius: 50px;
        }

        .añaimg {
          display: flex;
          margin-bottom: 28px;

          img {
            border: solid white 5px;
            border-radius: 10px;
            width: 250px;
            height: 250px;
          }

          button {
            width: 75px;
            height: 25px;
            border: none;
            border-radius: 50px;
            background-color: #5d61c6;
            color: #fff;
            font-size: 20px;
            font-weight: 500;
            box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.75);
          }
        }

        textarea {
          padding: 5px 500px 180px 5px;
          box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.75);
          border: none;
        }


      }

    }

    .bt {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .bt-add {
        width: 150px;
        height: 50px;
        border: none;
        border-radius: 50px;
        background-color: #5d61c6;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.75);
        margin-right: 20px;
        cursor: pointer;
      }

      .bt-can {
        width: 150px;
        height: 50px;
        border: none;
        border-radius: 50px;
        background-color: #ff0000;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.75);
        cursor: pointer;
      }


    }

  }


  .right {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 300px;
    height: 100%;

    .rightop {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;

      h1 {
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0px;
      }

      .imgprof {
        margin-top: 25px;
        padding: 10px 10px;
        border-radius: 50%;
        display: flex;
        background-color: #5d61c6;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        box-shadow: -15px -15px 5px 5px rgba(188, 194, 216, 0.75);

        img {
          width: 200px;
        }
      }
    }
  }
}
</style>

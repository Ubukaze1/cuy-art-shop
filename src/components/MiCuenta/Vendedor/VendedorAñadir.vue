<template>
  <main class="main">
    <div class="left">
      <div class="top">
        <h1>Añadir Productos</h1>
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
          <input type="text" v-model="nomProducto" />
          <input type="text" v-model="preProducto" />
          <input type="text" v-model="stockProducto" />
          <div class="anaimg">
            <div v-for="(im, i) of imgg" class="ii">
              <img :src="im" alt="Es un cuy" />
              <label class="bor" @click="ele(im)">x</label>
            </div>
            <label for="file" class="add">Añadir</label>
            <input type="file" name="file" id="file" @change="subir($event)">
          </div>
          <textarea v-model="desProducto"></textarea>
        </div>
      </div>
      <div class="bt">
        <button class="bt-add" @click="añadir">Añadir</button>
        <button class="bt-can">Cancelar</button>
      </div>
    </div>
    <div class="right">
      <div class="rightop">
        <div class="imgprof">
          <img src="../../../assets/person.svg" alt="Persona" />
        </div>
        <h1>{{ name }}</h1>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { getAuth } from "firebase/auth";
import { useRegistroStore } from "../../../store/registro";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase/Fire";

const reg = useRegistroStore();
const user = getAuth().currentUser;

const name: Ref<string> = ref(
  reg.getRegistro(user?.email?.toString() || "")?.nombre || ""
);
const correo: Ref<string> = ref(
  reg.getRegistro(user?.email?.toString() || "")?.correo || ""
);

const productos = reg.getRegistro(user?.email?.toString() || "")?.productos || [];

const nomProducto: Ref<string> = ref("");
const preProducto: Ref<string> = ref("");
const stockProducto: Ref<number> = ref(0);
const imgProducto: Ref<string> = ref("");
let imgg: Ref<Array<string>> = ref([]);
const desProducto: Ref<string> = ref("");

const subir = (e: any) => {
  console.log(e.target.files[0]);
  const filereader = new FileReader();
  filereader.readAsDataURL(e.target.files[0]);
  if (imgg.value.length < 3) {
    filereader.onload = (e: any) => {
      imgProducto.value = e.target.result;
      imgg.value.push(e.target.result);
    };
  }
}

const ele = (el: string) => {
  imgg.value = imgg.value.filter(im => !(im = el))
}

const añadir = async () => {

  const img: Array<string> = [imgProducto.value.toString()]

  const prod = {
    nombre: nomProducto.value.toString(),
    precio: preProducto.value.toString(),
    stock: stockProducto.value,
    img: img,
    desc: desProducto.value.toString(),
  };

  productos.push(prod);

  await updateDoc(doc(db, "usuarios", correo.value || ""), {
    productos: productos,
  }).then(() => {
    console.log("documento actualizado");
  }).catch((error) => {
    console.error("Error adding document: ", error);
  });
};
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

        .anaimg {
          display: flex;
          margin-bottom: 28px;

          .ii {
            display: flex;
            width: 250px;
            height: 200px;

            img {
              border: solid white 5px;
              border-radius: 10px;
              width: 100%;
              height: 100%;
            }

            .bor {
              margin-top: 8px;
              background-color: #000;
              color: white;
              width: 20px;
              height: 20px;
              padding: 0px 5px 5px 5px;
              text-align: center;
              align-items: center;
              position: relative;
              right: 35px;
            }
          }


          input[type="file"] {
            display: none;
          }

          .add {
            text-align: center;
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

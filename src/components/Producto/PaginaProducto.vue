<template>
  <div class="container">
    <NavBar />
    <main class="main">
      <div class="left">
        <div class="center">
          <img :src="imgg" alt="Un Cuy">
          <div class="linea"></div>
          <div class="info">
            <h2>Descripcion</h2>
            <p>{{ desc }}</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="rightop">
          <div class="top">
            <h1> {{ nombre }} </h1>
            <div class="linea"></div>
            <h2>$ {{ precio }} </h2>
            <div class="sto">
              <h2>Stock</h2>
              <input type="number" name="stock" id="stock" v-model="st">
            </div>
            <div class="masmen">
              <button @click="man">+</button>
              <button @click="men">-</button>
            </div>
            <div class="agrecom">
              <button class="bt-add" @click="add">Agregar</button>
              <button class="bt-comp">Comprar</button>
            </div>
          </div>
          <div class="valor">
            <div class="targeta" v-for="(ob, i) of productos" :key="i" @click="id = i">
              <img :src="ob.img[0]" alt="Primer Articulo">
              <div class="price">
                <div class="ppp">
                  <h2> {{ ob.nombre }} </h2>
                  <div>
                    <p>$ {{ ob.precio }} </p>
                    <div class="lineap"></div>
                  </div>
                  <p> {{ ob.desc }} </p>
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
import { useRegistroStore, type InProd } from '../../store/registro'
import NavBar from '../NavBar/NavBar.vue';
import { doc, updateDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../../Firebase/Fire'
import { useRoute, useRouter } from 'vue-router'
import { ref, type Ref } from 'vue'


const user = getAuth().currentUser
const reg = useRegistroStore()
const routerrr = useRoute()
const routerr = useRouter()
let productos: Array<InProd> = [];
let id = parseInt(routerrr.params.id[0]) || 0
let correo = reg.getRegistro(user?.email?.toString() || '')?.correo || ''
const desc: Ref<string> = ref('')
const precio: Ref<string> = ref('')
const stock: Ref<number> = ref(1)
const imgg: Ref<string> = ref('')
const iimmgg: Ref<Array<string>> = ref([])
const nombre: Ref<string> = ref('')
const tipo: Ref<string> = ref('')
let st: Ref<number> = ref(1)
const carro = reg.getRegistro(user?.email?.toString() || '')?.carro || []

for (let i = 0; i < reg.datos.length; i++) {
  if (reg.datos[i].productos == undefined) {
    continue;
  }
  for (let j = 0; j < reg.datos[i].productos.length; j++) {
    productos.push(reg.datos[i].productos[j]);
  }
}

const add = async () => {
  const prod = {
    nombre: nombre.value.toString(),
    precio: precio.value.toString(),
    stock: st.value,
    img: iimmgg.value,
    desc: desc.value.toString(),
    tipo: tipo.value.toString(),
  };

  let stototal = stock.value - st.value

  const prod2 = {
    nombre: nombre.value.toString(),
    precio: precio.value.toString(),
    stock: (stock.value - st.value),
    img: iimmgg.value,
    desc: desc.value.toString(),
    tipo: tipo.value.toString(),
  };
  console.log(prod)

  console.log(carro)
  carro.push(prod)

  await updateDoc(doc(db, "usuarios", correo || ""), {
    carro: carro,
  }).then(() => {
    console.log("documento actualizado");
  }).catch((error) => {
    console.error("Error adding document: ", error);
  });

  const prpr = reg.getRegistro(reg.getCorreo(prod.img[0]) || '')?.productos || []

  let a = reg.getIndeximg(prod.img[0] || '') || 0

  prpr.splice(a, 1, prod2);

  await updateDoc(doc(db, "usuarios", reg.getCorreo(prod.img[0]) || ""), {
    productos: prpr,
  })
    .then(() => {
      console.log("documento actualizado");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  
  routerr.push({ name: 'Carro' })
}

function getIndeximg(img: string):number {
  let a = 0;
  for (let i = 0; i < reg.datos.length; i++) {
    for (let j = 0; j < reg.datos[i].productos.length; j++) {
      for (let k = 0; k < reg.datos[i].productos[j].img.length; k++) {
        if (reg.datos[i].productos[j].img[k] == img) {
          a = k;
        }
      }
    }
  }
  return a;
}




let producto: InProd = productos[id]

desc.value = producto.desc
precio.value = producto.precio
stock.value = producto.stock
imgg.value = producto.img[0]
iimmgg.value = producto.img
nombre.value = producto.nombre

console.log(producto)

const men = () => {
  if (st.value > 0) {
    st.value--
  }
}

const man = () => {
  if (st.value < stock.value) {
    st.value++
  }
}

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
        height: 41%;
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
          cursor: pointer;

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


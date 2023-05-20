<template>
  <main class="main">
    <div class="left">
      <div class="center">
        <div class="pp" v-for="(ob, i) of carro" :key="i">
          <img :src="ob.img[0]" alt="Un Cuy">
          <div class="produc">
            <div class="desc">
              <p>{{ ob.nombre }}</p>
              <p>{{ ob.desc }}</p>
            </div>
            <div>
              <button @click="eliminar(i)"><img src="../../assets/delete.svg" alt="Delete"></button>
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
            <h2>Descuento de la oferta</h2>
            <h3>$ 0.0</h3>
          </div>
          <div>
            <h2>Envìo</h2>
            <h3>$ 10.000</h3>
          </div>
          <div>
            <h2>Subtotal</h2>
            <h3>$ {{ total }}</h3>
          </div>
          <div class="bt">
            <button class="bt-comp" @click="comp">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../../Firebase/Fire'
import { getAuth } from 'firebase/auth'
import { useRegistroStore, type InProd } from '../../store/registro'
import { type Ref, ref } from 'vue'
import { parse } from 'path'


const user = getAuth().currentUser
const reg = useRegistroStore()

let total: Ref<number> = ref(0)


const carro = reg.getRegistro(user?.email?.toString() || '')?.carro || []

const router = useRouter()

const corre = reg.getRegistro(user?.email?.toString() || '')?.correo || ''

const comp = () => {
  router.push({ name: 'Compra' })
}

const eliminar = async (i: number) => {

  const prpr = reg.getRegistro(reg.getCorreo(carro[i].img[0]) || '')?.productos || []

  let a = reg.getIndeximg(carro[i].img[0].toString() || '')

  

  const prod2 = {
    nombre: carro[i].nombre.toString(), 
    precio: carro[i].precio.toString(),
    stock: (carro[i].stock + prpr[a].stock),
    img: carro[i].img,
    desc: carro[i].desc,
    tipo: carro[i].tipo,
  };

  prpr.splice(a, 1, prod2);

  await updateDoc(doc(db, "usuarios", reg.getCorreo(carro[i].img[0]) || ""), {
    productos: prpr,
  })
    .then(() => {
      console.log("documento actualizado");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });


  carro.splice(i, 1)
  try {
    await updateDoc(doc(db, "usuarios", corre || ''), {
      carro: carro
    }).then(() => {
      console.log("documento creado")
    }).catch((error) => {
      console.log("error al crear el documento")
      return
    });

  } catch (error) {
    console.log(error)
  }


  if (carro.length === 0) {
    total.value = 0
  } else {
    for (let i = 0; i < carro.length; i++) {
      total.value += (parseInt(carro[i].precio) * carro[i].stock) 
    }
    total.value += 10000
  }

}
if (carro.length === 0) {
  total.value = 0
} else {
  for (let i = 0; i < carro.length; i++) {
    total.value += (parseInt(carro[i].precio) * carro[i].stock) 
  }
  total.value += 10000
}

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
          width: 35px;
          height: 30px;
          margin-right: 10px;
          border: none;
          border-radius: 5px;
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
          }
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
          margin-top: 50px;
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
<template>
  <div class="container">
    <NavBarUser />
    <main class="main">
      <div class="left">
        <div class="leftleft">
          <h2>Direccìon</h2>
          <h4>Otra:</h4>
          <h2 class="hh">Metodo de Pago</h2>
        </div>
        <div class="leftright">
          <input type="text" name="dir" id="dir" class="dir">
          <textarea name="otra" id="otra"></textarea>
          <input type="text" name="pago" id="pago">
          <div class="more">
            <h4>Numero Targeta</h4>
            <input type="text" name="tar" id="tar">
            <h4>Nombre Titular</h4>
            <input type="text" name="tit" id="tit">
            <h4>Expira</h4>
            <input type="date" name="ex" id="ex" class="da">
            <h4>CVV</h4>
            <input type="text" name="cv" id="cv">
          </div>
          <div class="bt">
            <button class="bt-comp" @click="fin">Comprar</button>
            <button class="bt-can">Cancelar</button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="rightop">
          <div class="pp" v-for="(ob,i) of carro" :key="i">
            <img :src="ob.img[0]" alt="Un Cuy">
            <div class="produc">
              <div class="desc">
                <p>{{ob.nombre}}</p>
                <p>{{ ob.desc }} </p>
              </div>
              <div>
                <button @click="eliminar(i)"><img src="../../assets/delete.svg" alt="Delete"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="rightbottom">
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
              <h3>$ {{total}}</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import NavBarUser from '../NavBar/NavBarUser.vue';
import { useRegistroStore, type InProd } from '../../store/registro'
import { getAuth } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../Firebase/Fire'
import { type Ref, ref } from 'vue';
import {useRouter} from 'vue-router'


const router = useRouter()
const user = getAuth().currentUser
const reg = useRegistroStore()
const total: Ref<number> = ref(0)
const corre = reg.getRegistro(user?.email?.toString() || '')?.correo || ''

let carro = reg.getRegistro(user?.email?.toString() || '')?.carro || []


if (carro.length === 0) {
  total.value = 0
} else {
  for (let i = 0; i < carro.length; i++) {
    total.value += (parseInt(carro[i].precio) * carro[i].stock) 
  }
  total.value += 10000
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

const fin = async () => {
  carro = []
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
  alert("Compra realizada con exito")
  router.push({ name: 'Home' })
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
  justify-content: center;
  margin-top: 150px;
  width: 100%;
  height: 100%;

  .left {
    display: flex;

    .leftleft {
      display: flex;
      flex-direction: column;
      align-items: right;
      width: 50%;
      margin-right: 20px;

      .hh {
        margin-top: 60px;
        text-align: right;
      }

      h2 {
        text-align: right;
      }

      h4 {
        text-align: right;
        font-weight: 300;
        font-size: 20px;
      }

    }

    .leftright {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .dir {
        margin-top: 20px;
        margin-bottom: 40px;
        width: 400px;
        height: 30px;
        border: black 1px solid;
        border-radius: 5px;
      }

      textarea {
        font-size: 20px;
        padding: 5px;
        width: 400px;
        height: 60px;
        border-radius: 5px;
        margin-bottom: 35px;
      }

      input {
        font-size: 20px;
        padding: 5px;
        width: 400px;
        height: 30px;
        border: black 1px solid;
        border-radius: 5px;
      }

      .more {
        display: flex;
        flex-direction: column;
        justify-content: left;
        height: 50%;

        input {
          width: 400px;
          font-size: 20px;
          padding: 5px;
          height: 30px;
          border: black 1px solid;
          border-radius: 5px;
        }

        h4 {
          font-weight: 300;
          font-size: 20px;
        }

        .da {
          height: 145px;
        }
      }

      .bt {
        display: flex;
        margin-top: 30px;

        .bt-comp {
          width: 150px;
          height: 40px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          background-color: red;
          margin-right: 20px;
        }

        .bt-can {
          width: 150px;
          height: 40px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          background-color: #9ad496;
        }

      }

    }
  }

  .right {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 40%;
    height: 100%;

    .rightop {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      width: 100%;
      height: 35%;
      background-color: lightgrey;
      overflow: auto;

      .pp {
        margin-top: 20px;
        display: flex;
        width: 75%;

        img {
          width: 30%;
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

    .rightbottom {
      height: 70%;

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
          margin-top: 45px;
          margin-left: 40px;
          margin-bottom: 25px;

          h2 {
            margin: 0px;
          }

          h3 {
            margin: 0px;
          }
        }

      }
    }

  }


}
</style>



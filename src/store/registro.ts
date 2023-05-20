import { defineStore } from "pinia";
import { db } from "../Firebase/Fire";
import { collection, query, where, getDocs } from "firebase/firestore";

let i = 0;
let b = true;

export const seti = (a: number) => {
  i = a;
};

export const geti = () => {
  return i;
};

export interface InProd {
  nombre: string;
  precio: string;
  stock: number;
  img: Array<string>;
  desc: string;
  tipo: string;
}

interface RegistroState {
  nombre: string;
  correo: string;
  password: string;
  telefono: string;
  direccion: string;
  productos: Array<InProd>;
  carro: Array<InProd>;
  uso: boolean;
}

export const useRegistroStore = defineStore("registro", {
  state: () => ({
    datos: [
      {
        nombre: "Juan",
        correo: "juan@juan.com",
        password: "123456",
        telefono: "1234567890",
        direccion: "Calle 123",
        productos: [
          {
            nombre: "Producto 1",
            precio: "100",
            stock: 10,
            img: [" "],
            desc: "Descripcion del producto 2",
            tipo: "Barro",
          },
        ],
        carro: [
          {
            nombre: "Producto 1",
            precio: "100",
            stock: 10,
            img: [" "],
            desc: "Descripcion del producto 2",
            tipo: "Barro",
          },
        ],
        uso: true,
      },
    ],
  }),
  actions: {
    addRegistro(dato: RegistroState) {
      this.datos.push(dato);
    },
    getRegistro(correo1: string) {
      for (let i = 0; i < this.datos.length; i++) {
        if (this.datos[i].correo == correo1) {
          return this.datos[i];
        }
      }
    },
    addtelefono(correo1: string, tele: string) {
      for (let i = 0; i < this.datos.length; i++) {
        if (this.datos[i].correo == correo1) {
          this.datos[i].telefono = tele;
        }
      }
    },
    adddireccion(correo1: string, direc: string) {
      for (let i = 0; i < this.datos.length; i++) {
        if (this.datos[i].correo == correo1) {
          this.datos[i].direccion = direc;
        }
      }
    },
    getAll() {
      for (let i = 0; i < this.datos.length; i++) {
        console.log(this.datos[i]);
      }
    },
    getCorreo(img: string) {
      for (let i = 0; i < this.datos.length; i++) {
        if (this.datos[i].productos == undefined) {
          continue;
        }
        for (let j = 0; j < this.datos[i].productos.length; j++) {
          for (let k = 0; k < this.datos[i].productos[j].img.length; k++) {
            if (this.datos[i].productos[j].img[k] == img) {
              return this.datos[i].correo;
            }
          }
        }
      }
    },
    getIndeximg(img: string): number {
      let a = 0;
      for (let i = 0; i < this.datos.length; i++) {
        if (this.datos[i].productos == undefined) {
          console.log("undefined");
          continue;
        }
        for (let j = 0; j < this.datos[i].productos.length; j++) {
          for (let k = 0; k < this.datos[i].productos[j].img.length; k++) {
            if (this.datos[i].productos[j].img[k].toLocaleLowerCase().toString() == img.toLocaleLowerCase().toString()) {
              return j;
            }
          }
        }
      }
      return a;
    },
    async setAll() {
      try {
        const q = query(collection(db, "usuarios"), where("uso", "==", true));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const reg = {
            nombre: doc.data().nombre,
            correo: doc.data().correo,
            password: doc.data().password,
            telefono: doc.data().telefono,
            direccion: doc.data().direccion,
            productos: doc.data().productos,
            carro: doc.data().carro,
            uso: doc.data().uso,
          };
          this.addRegistro(reg);
        });
      } catch (error) {}
    },
    clearAll() {
      this.datos = [];
    },
    getAllProductos(): Array<InProd> {
      let productos = [];
      for (let i = 0; i < this.datos.length; i++) {
        for (let j = 0; j < this.datos[i].productos.length; j++) {
          productos.push(this.datos[i].productos[j]);
        }
      }
      return productos;
    },
  },
  persist: true,
});

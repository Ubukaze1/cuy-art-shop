import { defineStore } from "pinia";
import { db } from "../Firebase/Fire";
import { collection, query, where, getDocs } from "firebase/firestore";

interface RegistroState {
  nombre: string;
  correo: string;
  password: string;
  telefono: string;
  direccion: string;
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
            uso: doc.data().uso,
          };
          this.addRegistro(reg);
        });
      } catch (error) {}
    },
    clearAll() {
      this.datos = [];
    }
  },
  persist: true,
});

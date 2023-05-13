import { defineStore} from 'pinia'

interface RegistroState {
  nombre: string;
  correo: string;
  password: string;
  telefono: string;
  direccion: string;
}

export const useRegistroStore = defineStore('registro', {
  state: () => ({
    datos: [{
      nombre: 'Juan',
      correo: 'juan@juan.com',
      password: '123456',
      telefono: '1234567890',
      direccion: 'Calle 123'
    }]
  }),
  actions: {
    addRegistro(dato: RegistroState) {
      this.datos.push(dato)
    },
    getRegistro(correo1: string) {
      for (let i = 0; i < this.datos.length; i++) {
        if (this.datos[i].correo == correo1) {
          return this.datos[i]
        }
      }
    },
    addtelefono(correo1: string, tele: string) {
      for (let i = 0; i < this.datos.length; i++) {
        if (this.datos[i].correo == correo1) {
          this.datos[i].telefono = tele 
        }
      }
    },
    adddireccion(correo1: string, direc: string) {
      for (let i = 0; i < this.datos.length; i++) {
        if (this.datos[i].correo == correo1) {
          this.datos[i].direccion = direc 
        }
      }
    },
    getAll(){
      for (let i =0; i< this.datos.length; i++) {
        return this.datos[1]
      }
    }
  },
  persist: true
})
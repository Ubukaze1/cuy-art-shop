<template>
  <main class="contain">
    <div class="imgprofile">
      <img src="../../assets/person.svg" alt="Logo">
    </div>
    <div class="reg">
      <h1>Informacion</h1>
      <div class="linea"></div>
    </div>
    <div class="in">
      <label for="">Nombre de Usuario</label>
      <input type="text" name="usuario" id="usuario" placeholder="Hugo Ricardo">
    </div>
    <div class="in">
      <label for="">Correo</label>
      <input type="text" name="usuario" id="usuario" placeholder="hugoRicardo@gmail.con">
    </div>
    <div class="in">
      <label for="">Telèfono</label>
      <input type="text" name="usuario" id="usuario">
    </div>
    <div class="in">
      <label for="">Direcciòn</label>
      <input type="text" name="usuario" id="usuario">
    </div>
  </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.contain {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 250px;
  background-color: #e3dfde;

  .imgprofile {
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

  .reg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 40px;
      font-weight: 700;
      color: black;
      margin: 0px;
    }

    .linea {
      width: 1px;
      height: 1px;
      padding: 0px 105px;
      background-color: black;
    }
  }

  .in {
    width: 500px;
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    label {
      font-size: 20px;
      font-weight: 700;
      color: black;
      margin-bottom: 10px;
      text-align: right;
    }

    input {
      width: 300px;
      height: 40px;
      border-radius: 10px;
      border: none;
      box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.5);
      padding: 0px 10px;
      outline: none;
      font-size: 20px;
      font-weight: 700;
      color: black;
      background-color:#d4cbc9;
    }
  }

  button {
    padding: 5px 30px;
    border: none;
    background-color: #5d61c6;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-top: 50px;
    cursor: pointer;
  }

  .goface {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    padding: 15px 75px;
    margin-top: 20px;
    border-radius: 5%;
    background-color: #cac4c1;

    img {
      margin-top: 10px;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }

  footer {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cac4c1;

    img {
      margin-left: 30px;
      width: 100px;
      height: 100px;
    }

    .bt-reg {
      margin-bottom: 90px;
    }

    .space {
      width: 125px;
    }
  }
}
</style>
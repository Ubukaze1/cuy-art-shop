<template>
  <div class="container">
    <NavBarUser/>
    <CarroMain/>
  </div>
</template>

<script lang="ts" setup>
import NavBarUser from '@/components/NavBar/NavBarUser.vue';
import CarroMain from './CarroMain.vue';
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
</style>
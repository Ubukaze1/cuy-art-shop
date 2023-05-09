<template>
  <div class="container">
    <NavBar/>
    <MainComponent/>
  </div>
</template>

<script lang="ts" setup>
import NavBar from './NavBar.vue'
import MainComponent from './MainComponent.vue';

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
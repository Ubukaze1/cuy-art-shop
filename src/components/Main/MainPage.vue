<template>
  <div class="container">
    <NavBar/>
    <MainComponent/>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue';
import MainComponent from '@/components/Main/MainComponent.vue';
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
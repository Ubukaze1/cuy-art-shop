<template>
  <div class="container">
    <NavBarUser />
    <AboutComponent />
  </div>
</template>

<script lang="ts" setup>
import NavBarUser from './NavBarUser.vue';
import AboutComponent from './AboutComponent.vue';
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
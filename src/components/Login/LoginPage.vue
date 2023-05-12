<template>
  <div class="container">
    <NavBarUser />
    <LoginComponent />
  </div>
</template>

<script lang="ts" setup>
import NavBarUser from '@/components/NavBar/NavBarUser.vue';
import LoginComponent from '@/components/Login/LoginComponent.vue';

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
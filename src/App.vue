<script setup>
import Header from "./views/Header.vue"
import {RouterLink,RouterView} from 'vue-router'
</script>

<template>
  <div class="headerShow">
    <Header />
  </div>
  <div class="contentShow">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.headerShow{
  width: 100vw;
  height: 15vh;
}
</style>

<script setup lang="ts">
import Main from './components/Main';
</script>

<template>
  <Main id="main"/>
</template>

<style>
#main > * {
  padding-left: 17px;
  padding-right: 17px;
}

body {
  max-width: 100vw;
}

#app {
  background-color: #f2f2f2;
  font-family: PingFang SC, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

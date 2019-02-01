<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
  import layout from './views/layout/layout'

  export default {
    name: 'app',
    components: {
      layout
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
</style>

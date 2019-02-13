<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style>
  body {
    margin: 0px;
    padding: 0px;
    font-family: Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,  SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  .el-header, .el-footer {
    background-color: #545c64;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
</style>

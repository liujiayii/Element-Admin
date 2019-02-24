<template>
  <el-container style="height: 100%">
    <layoutAsider />
    <el-container style="flex-direction: column">
      <layoutHeader />
      <el-main>
        <transition
          name="main"
          mode="out-in"
        >
          <router-view />
        </transition>
      </el-main>
      <layoutFooter />
    </el-container>
  </el-container>
</template>

<script>
  import layoutAsider from './asider'
  import layoutFooter from './footer'
  import layoutHeader from './header'

  export default {
    name: "Layout",
    components: {
      layoutAsider,
      layoutFooter,
      layoutHeader
    },
    data: function () {
      return {}
    },
    methods: {},
  }
</script>

<style scoped>
  .main-enter, .main-leave-to {
    opacity: 0;
    transform: translateY(30px);

  }

  .main-enter-active {
    transition: all 0.2s;
  }

  .main-leave-active {
    position: absolute;
    transition: all 0.3s;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>

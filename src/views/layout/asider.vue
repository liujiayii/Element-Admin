<template>
  <el-aside class="aside">
    <p class="logo">{{ logo }}</p>
    <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
            unique-opened
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="$store.state.isCollapse">
      <template v-for="(menu_a,index) in menu">
        <el-submenu v-if="menu_a.children" :key="index" :index="index+''">
          <template slot="title">
            <i :class="menu_a.icon"/>
            <span slot="title">{{ menu_a.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(menu_c,index_c) in menu_a.children" :key="index_c" :index="menu_c.path">
              <span slot="title">{{ menu_c.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :index="menu_a.path" :key="index">
          <i :class="menu_a.icon"/>
          <span slot="title">{{ menu_a.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>

  export default {
    name: "Asider",
    data() {
      return {
        menu: this.$store.state.menu,
      }
    },
    computed: {
      logo() {
        return !this.$store.state.isCollapse ? 'Element' : 'E'
      }
    }
  }
</script>

<style scoped>
  .logo {
    margin: 0;
    height: 60px;
    line-height: 60px;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    width: auto;
  }

  .aside {
    background-color: #545c64;
    width: auto !important;
    height: 100%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu {
    border-right: none !important;
  }
</style>

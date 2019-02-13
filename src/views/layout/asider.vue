<template>
  <el-aside class="aside">
    <p class="logo">{{logo}}</p>
    <!--<el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
            unique-opened
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="$store.state.isCollapse">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>客户信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/CarResource">车辆资源</el-menu-item>
          <el-menu-item index="/BuyCarConsult">买车咨询</el-menu-item>
          <el-menu-item index="/DisplaceCar">置换车辆</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">交易管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">评估审核</el-menu-item>
          <el-menu-item index="2-2">保险凭证</el-menu-item>
          <el-menu-item index="2-3">分期管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">售车管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/carSales">售车管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">车辆管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/carManage">车辆管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">财务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/finance">财务管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">库存管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/stock">库存管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">人员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/staffManage">员工管理</el-menu-item>
          <el-menu-item index="/access">权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>-->
    <template v-for="(menu_v,index) in menu">
      <el-submenu v-if="menu_v.children" :key="index">
        <template slot="title">
          <i :class="menu_v.icon"></i>
          <span slot="title">{{ menu_v.name }}</span>
        </template>
        <el-menu-item v-for="(menuChildren_v,index) in menu_v.children"
                      :key="index"
                      :index="menuChildren_v.path">
          <i class="is-children fa fa-circle-o"></i>
          <span slot="title">{{ menuChildren_v.name }}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="menu_v.path" :key="index">
        <i :class="menu_v.icon"></i>
        <span slot="title">{{ menu_v.name }}</span>
      </el-menu-item>
    </template>
  </el-aside>
</template>

<script>
  import Menu from '@/menu/index';

  export default {
    name: "asider",
    data() {
      return {
        menu: Menu,
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

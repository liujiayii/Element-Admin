<template>
  <el-header class="head">
    <span class="ico" @click="$store.state.isCollapse = !$store.state.isCollapse">
     <i class="fa fa-indent fa-lg"></i>
    </span>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link" style="color:#fff;cursor: pointer">
          超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">基本资料</el-dropdown-item>
        <el-dropdown-item command="b">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      handleCommand(command) {
        if (command === 'logout') {
          this.$router.push({path: '/login'})
        } else if (command === 'a') {
          this.$notify({
            title: '提示',
            message: '基本资料',
            type: 'warning',
            position: 'bottom-right'
          });
        } else if (command === 'b') {
          this.$notify({
            title: '提示',
            message: '修改密码',
            type: 'warning',
            position: 'bottom-right'
          });
        }
      }
    }
  }
</script>

<style scoped>
  .ico{
    font-size: 20px;
    cursor: pointer;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
</style>

<template>
  <div>
    <el-container class="secondNav">
      <div class="title" @click="isCollapse = !isCollapse">权限管理</div>
      <el-button class="btn" type="primary" icon="el-icon-plus" round
                 onclick="window.location.href='accessEdit.jsp'">添加
      </el-button>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "access"
  }
</script>

<style scoped>

</style>

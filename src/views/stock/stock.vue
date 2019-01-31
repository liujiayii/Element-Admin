<template>
  <div>
    <el-container class="secondNav">
      <div class="title" @click="isCollapse = !isCollapse">库存管理</div>
      <el-button class="btn" type="primary" icon="el-icon-plus" round
                 onclick="window.location.href='carResourcesEdit.jsp'">添加
      </el-button>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "stock"
  }
</script>

<style scoped>

</style>

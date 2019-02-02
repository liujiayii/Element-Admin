<template>
  <div>
    <el-container class="secondNav">
      <div class="title" @click="isCollapse = !isCollapse">车辆资源</div>
      <el-button class="btn" type="primary" icon="el-icon-plus" round>添加</el-button>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "carResource"
  }
</script>

<style scoped>

</style>

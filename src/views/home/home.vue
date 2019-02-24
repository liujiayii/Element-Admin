<template>
  <el-card shadow="hover">
    <el-steps
      direction="vertical"
      :active="2"
      space="80px"
    >
      <el-step
        title="版本信息"
        description="1.0"
      />
      <el-step
        title="基于框架"
        description="vue3.0全家桶 + element-ui"
      />
      <el-step
        title="主要特色"
        description="单页面 / 响应式 "
      />
    </el-steps>
  </el-card>
</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped>



</style>

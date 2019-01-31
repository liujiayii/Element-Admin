<template>
  <div>
    <el-container class="secondNav">
      <div class="title" @click="isCollapse = !isCollapse">买车咨询</div>
      <el-button class="btn" type="primary" icon="el-icon-plus" round
                 onclick="window.location.href='buyingCarConsultEdit.jsp'">添加
      </el-button>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "buyCarConsult"
  }
</script>

<style scoped>

</style>

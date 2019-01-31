<template>
  <div>
    <el-container class="secondNav">
      <div class="title" @click="isCollapse = !isCollapse">置换车辆</div>
      <el-button class="btn" type="primary" icon="el-icon-plus" round
                 onclick="window.location.href='buyingCarConsultEdit.jsp'">添加
      </el-button>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "displaceCar"
  }
</script>

<style scoped>

</style>

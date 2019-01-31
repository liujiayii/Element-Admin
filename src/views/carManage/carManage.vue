<template>
  <div>
    <el-container class="secondNav">
      <div class="title" @click="isCollapse = !isCollapse">车辆管理</div>
      <el-button class="btn" type="primary" icon="el-icon-plus" round>添加</el-button>
    </el-container>
    <el-container class="main"></el-container>
    <el-container class="page-box">
      <div class="block">
        <el-pagination
                @current-change="handleCurrentChange"
                layout="total,prev, pager, next, jumper"
                :total="tableData.count">
        </el-pagination>
      </div>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "carManage",
    methods: {
      handleCurrentChange(val) {
        console.log(val)
      },
    },
  }
</script>

<style scoped>

</style>

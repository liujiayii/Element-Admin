<template>
  <div>
    <el-container class="secondNav">
      <div class="title" @click="isCollapse = !isCollapse">买车咨询</div>
      <el-button class="btn" type="primary" icon="el-icon-plus" round
                 onclick="window.location.href='buyingCarConsultEdit.jsp'">添加
      </el-button>
    </el-container>
    <el-container>
      <div>
        <el-button @click="show3 = !show3">Click Me</el-button>
        <div style="margin-top: 20px; height: 200px;">
          <el-collapse-transition>
            <div v-show="show3">
              <div class="transition-box">el-collapse-transition</div>
              <div class="transition-box">el-collapse-transition</div>
            </div>
          </el-collapse-transition>
        </div>
      </div>
      <div>
        <el-button @click="show2 = !show2">Click Me</el-button>

        <div style="display: flex; margin-top: 20px; height: 100px;">
          <transition name="el-zoom-in-center">
            <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
          </transition>

          <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
          </transition>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>


  export default {
    name: 'buyCarConsult',
    data: () => ({
      show3: true,
      show2: true
    })
  }
</script>

<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>

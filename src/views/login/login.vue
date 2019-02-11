<template>
  <el-container class="main">
    <p class="title">喔驰后台管理系统</p>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="submit" round :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        ruleForm: {
          username: 'admin',
          password: '12345678'
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
          ]
        },
        loading: false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            console.log('success submit!!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  body{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("/assets/login.png") no-repeat center;
  }
  .main{
    position: absolute;
    bottom: 20%;
    right: 20%;
    width: 600px;
    height: 500px;
    flex-direction: column;
    align-items: center;
  }
  .title{
    padding-left: 68px;
    font-size: 30px;
    color: #5966c6;
    margin-bottom: 94px;
  }
  .submit{
    margin-top: 100px;
    width: 100%;
    background: #5966c6;
  }

</style>

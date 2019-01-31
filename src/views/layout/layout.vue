<template>
  <div>
    <el-container style="height: 100%">
      <el-container>
        <el-header class="head">
          <div>喔驰后台管理系统</div>
          <img src="../../assets/images/close.png"/>
        </el-header>
        <el-container>
          <el-aside style="width: auto">
            <el-menu
                    :default-active="navActive"
                    class="el-menu-vertical-demo"
                    router
                    :collapse="isCollapse"
                    unique-opened>
              <el-submenu index="1">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/1.png"></i>
                  <span>客户信息</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">车辆资源</el-menu-item>
                  <el-menu-item index="1-2">买车咨询</el-menu-item>
                  <el-menu-item index="1-3">置换车辆</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/2.png"></i>
                  <span slot="title">交易管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">评估审核</el-menu-item>
                  <el-menu-item index="2-2">保险凭证</el-menu-item>
                  <el-menu-item index="2-3">分期管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/3.png"></i>
                  <span slot="title">售车管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">售车管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/4.png"></i>
                  <span slot="title">车辆管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">车辆管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/5.png"></i>
                  <span slot="title">财务管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">财务管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/6.png"></i>
                  <span slot="title">库存管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">库存管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/7.png"></i>
                  <span slot="title">人员管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="7-1">员工管理</el-menu-item>
                  <el-menu-item index="7-2">权限管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/7.png"></i>
                  <span slot="title">维修管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="8-1">维修工单</el-menu-item>
                  <el-menu-item index="8-2">维修车型分类</el-menu-item>
                  <el-menu-item index="8-3">维修工时计算</el-menu-item>
                  <el-menu-item index="8-4">维修项目定义</el-menu-item>
                  <el-menu-item index="8-5">维修项目用料</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/7.png"></i>
                  <span slot="title">维修档案管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="9-1">客户档案</el-menu-item>
                  <el-menu-item index="9-2">车辆档案</el-menu-item>
                  <el-menu-item index="9-3">员工档案</el-menu-item>
                  <el-menu-item index="9-4">驾驶员信息档案</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="menu-ico"><img src="/static/images/7.png"></i>
                  <span slot="title">报表管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="10-1">维修报表</el-menu-item>
                  <el-menu-item index="10-2">售车报表</el-menu-item>
                  <el-menu-item index="10-3">进车报表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-container>
            <el-main>
              <transition name="main" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-main>
            <el-footer>©2018 智莱云 All rights resered 石家庄智莱云信息技术有限公司</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>

  export default {
    name: "layout",
    data: function () {
      return {
        navActive: '4-1',
        isCollapse: false,
        tableData: {
          data: [],
          count: 0
        },
        searchVal: '',
        loading2: true
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        window.location.href = 'carManageEdit.jsp?id=' + row.id
      },
      handleCurrentChange(val) {
        this.getTable(val)
        console.log(val)
      },
    },
  }
</script>

<style scoped>
  .main-enter, .main-leave-to {
    opacity: 0;
    transform: translateY(30px);

  }
  .main-enter-active {
    transition: all 0.2s;
  }
  .main-leave-active {
    position: absolute;
    transition: all 0.3s;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>

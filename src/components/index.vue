<template>
  <div class="dd">
    <el-container class="ct">
        <!-- 头部区域 -->
      <el-header class="top">
          <div class="top-left">
              <img src="../assets/logo.png" alt="">
              <span>电商后台管理项目</span>
          </div>
          <el-button @click="tuichu">退出</el-button>
      </el-header>
      <el-container class="ct1">
          <!-- 侧边栏区域 -->
        <el-aside class="slid" ref="slid">
        <div class="shou" @click="shou">|||</div>
            <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      :collapse="iscoll"
      text-color="#fff"
      unique-opened
      :collapse-transition="false"
      active-text-color="#ffd04b">
      <el-submenu v-for="(item,index) in 3" :index="index+''" :key="3+index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航{{item}}</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>




        </el-aside>
        <!-- 主体区域 -->
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            iscoll:false
        }
    },
    methods: {
        tuichu(){
            window.sessionStorage.removeItem("wode")
            this.$router.push("/submit")
        },
        shou(){
            this.iscoll=!this.iscoll;
            // console.log(thi)
            this.$refs.slid.width=(this.$refs.slid.width=="5%")?"25%":"5%"
        }
    },
};
</script>

<style scoped lang="less">
.dd,.ct{
    height: 100%;
    width: 100%;
    color: white;
}
.top{
    height: 50px;
    background-color: #666;
    display:flex;
    justify-content: space-between; 
    padding-left: 0;
    .top-left{
        display: flex;
        align-items: center;
        img{
            padding:0 10px; 
            height: 40px;
            width:40px;
        }
        span{
            line-height: 50px;
            font-size: 30px;
        }
    }
}
.slid{
    width: 30%;
    height: 100%;
    background-color: #666;
    .shou{
        cursor: pointer;
        text-align: center;
        letter-spacing: 3px;
    }
    .el-menu{
        border-right: none;
    }
}
.main{
    height: 100%;
    background-color: #eee;
    color:black;
}
</style>
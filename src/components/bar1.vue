<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>导航一</el-breadcrumb-item>
      <el-breadcrumb-item>列表项</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="40">
        <el-col :span="8">
          <el-input placeholder="请输入内容"  class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
            <el-button type="primary">click</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style lang="less">
    .box-card{
        margin-top: 40px;
    }
</style>
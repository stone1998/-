<template>
  <div id="cc">
    <div class="ct">
      <div class="icon">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form
      :model="ruleForm"
      :rule="rules"
      ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="age">
          <el-input prefix-icon="iconfont icon-user" v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input prefix-icon="iconfont icon-pwd" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input prefix-icon="iconfont icon-pwd" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="dd">
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.$message.success("登录成功")
          this.$router.push("/home")
        } else {
          this.$message.error("登录失败")
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
#cc {
  height: 100%;
  width: 100%;
  background-color: #333;
  // padding-top: 25%;
  .ct {
    // border: 1px red solid;
    width: 450px;
    height: 450px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    .icon {
      border: 1px black solid;
      border-radius: 50%;
      padding: 10px;
      height: 100px;
      width: 100px;
      background-color: white;
      transform: translate(165px, -60px);
      img {
        height: 100px;
        width: 100px;
        background-color: #ccc;
        box-shadow: 0 0 10px;
        border-radius: 50%;
      }
    }
    .demo-ruleForm{
      box-sizing: border-box;
      width: 90%;
      text-align: center;
      margin: 0 auto;
      .dd{
        display: flex;
        // justify-content: right;
      }
    }
    .sub {
    }
  }
}
</style>
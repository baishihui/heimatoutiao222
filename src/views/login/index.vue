<template>
  <div class="login">
      <!-- 使用UI组件 card -->
      <el-card class="login-card">
          <div class="title">
              <img src="../../assets/img/collect.png" alt="">
          </div>
          <!-- 表单 -->
       <el-form ref="myForm" style="margin-top:20px" :model="loginForm" :rules="loginRules" >

        <el-form-item prop="mobile">
        <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
      </el-form-item>

       <el-form-item prop="code">
        <el-input style="width:65%" placeholder="验证码" v-model="loginForm.code"></el-input>
         <el-button plain style="float:right">发送验证码</el-button>
      </el-form-item>

        <el-form-item prop="check">
        <el-checkbox v-model="loginForm.check">我已阅读并同意<font color="#3296fa">用户协议</font>和<font color="#3296fa">隐私条款</font></el-checkbox>
      </el-form-item>

      <el-form-item>
       <el-button @click="sumbitForm" style="width:100%" type="primary">登录</el-button>
      </el-form-item>

       </el-form>

</el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false
      },
      //   规则
      loginRules: {
        mobile: [{ required: true, message: '请输入您的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '手机格式不正确'
        }],
        code: [{ required: true, message: '请输入验证码' }, {
          pattern: /^\d{6}$/, message: '验证码格式不正确'
        }],
        check: [//   自定义校验方式
          { validator: function (rule, value, callback) {
            if (value) {
              callback()
            } else {
              callback(new Error('您必须被我们坑')
              )
            }
          } }]
      }
    }
  },
  methods: {
    // validate  对整个表单进行校验
    sumbitForm () {
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          // 校验成功
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login{
background: url(../../assets/img/dili.jpg);
height: 100vh;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
.login-card{
    width: 440px;
    height: 340px;
    .title{
        text-align: center;
        img{
            height: 35px;
        }
    }
}
}
</style>

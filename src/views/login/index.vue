<template>
  <div class="login">
      <!-- 使用UI组件 card -->
      <el-card class="login-card">
          <div class="title">
              <img src="../../assets/img/collect.png" alt="">
          </div>
          <!-- 表单 -->
       <el-form style="margin-top:20px">

        <el-form-item>
        <el-input placeholder="请输入手机号"></el-input>
      </el-form-item>

       <el-form-item>
        <el-input style="width:65%" placeholder="验证码"></el-input>
         <el-button plain style="float:right">发送验证码</el-button>
      </el-form-item>

        <el-form-item>
        <el-checkbox>我已阅读并同意<font color="#3296fa">用户协议</font>和<font color="#3296fa">隐私条款</font></el-checkbox>
      </el-form-item>

      <el-form-item>
       <el-button style="width:100%" type="primary">登录</el-button>
      </el-form-item>

       </el-form>

</el-card>
  </div>
</template>

<script>
export default {
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

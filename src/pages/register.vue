<template>
  <el-row style="min-height: 100vh;background-color: #6366f1">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div class="welcome">欢迎光临</div>
        <div class="desc">此站点是 作文网 的演示地址</div>
      </div>

    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 style="font-weight: bold;font-size: 1.875rem;color: #1f2937">欢迎回来</h2>
      <div class="login-desc">
        <span class="desc-line"></span>
        <span>账号密码注册</span>
        <span class="desc-line"></span>
      </div>
      <el-form :model="form" class="form">
        <el-form-item>
          <el-input v-model="form.account" placeholder="请输入账号">
            <template #prefix>
              <el-icon ><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码" show-password>
            <template #prefix>
              <el-icon ><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="请输入姓名">
            <template #prefix>
              <el-icon ><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.sex" placeholder="请选择性别">
            <template #prefix>
              <el-icon><Male /></el-icon>
            </template>
            <el-option label="男" value="man" />
            <el-option label="女" value="woman" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button style="width: 250px;" color="#626aef" round type="primary" @click="onSubmit">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from 'vue'
import {register} from "../api/index.js";
import {toast} from "../composables/util.js";

import router from "../router/index.js";


const form = reactive({
  account:"",
  password:"",
  name:"",
  sex:""
})


const onSubmit = () => {

  register(form).then(res=>{
    if (res.success){
      toast("注册成功,即将跳转到登录页")
      setTimeout(()=>{
        //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
        router.push('/login')
        //延迟时间：3秒
      },3000)
    }else {
      toast(res.msg,'error')
    }
  })



}
</script>

<style scoped>
.left{
  display: flex;
  align-items: center;
  justify-content: center;
}
.right{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fdfdfd;
}
.welcome{
  font-weight: bold;
  font-size: 3rem;
  color: #fdfdfd;
  margin-bottom: 1rem
}
.desc{
  color: #e5e7eb;
  font-size: 0.875rem;
}
.login-desc{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #d1d5db;
}
.desc-line{
  height: 1px;
  width: 64px;
  background-color: #e5e7eb;
  margin-left: 5px;
  margin-right: 5px;
}

.form{
  width: 250px;
}
.el-select{
  width: 250px;
}
</style>
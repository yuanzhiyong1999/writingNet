<template>
  首页
  <div>
    <el-icon color="#409EFC" class="no-inherit">
      <Share/>
    </el-icon>
    <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
  </div>
</template>

<script setup>
import {setToken} from "~/composables/auth"
import {reactive, ref} from "vue";
import {toast} from "../composables/util.js";
import {useStore} from "vuex"
import router from "../router/index.js";

const form= reactive({
  username:'admin',
  password:'admin'
})
const loading = ref(false)
const store = useStore()


/*方法*/
let onSubmit = () => {
  loading.value=true
  store.dispatch("login",form).then(res=>{
    toast("登录成功")
    router.push("/test")
  }).finally(()=>{
    loading.value = false
  })
  // login('admin', 'admin')
  //     .then(res => {
  //       toast("登录成功")
  //       setToken(res.token)
  //       router.push('/test')
  //
  //     }).finally(()=>{
  //       loading.value = false
  // })
}





</script>

<style scoped>

</style>
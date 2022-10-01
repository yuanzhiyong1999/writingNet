<template>
  <div class="box">
    <el-menu
        :default-active="useRouter().currentRoute.value.path"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-row :gutter="10">
        <el-col :span="4">
          <el-menu-item index="/">首页</el-menu-item>
        </el-col>
        <el-col :span="4">
          <el-sub-menu index="2">
            <template #title>中文作文</template>
            <el-menu-item index="/test">测试</el-menu-item>
            <el-menu-item index="/ticai">体裁作文</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
        </el-col>
        <el-col :span="4">
          <el-sub-menu index="3">
            <template #title>英文作文</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
          </el-sub-menu>
        </el-col>
        <el-col :span="4">
          <el-sub-menu index="4">
            <template #title>考试作文</template>
            <el-menu-item index="4-1">item one</el-menu-item>
            <el-menu-item index="4-2">item two</el-menu-item>
            <el-menu-item index="4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-col>
        <el-col :span="4">
          <el-sub-menu index="5">
            <template #title>科普文</template>
            <el-menu-item index="5-1">item one</el-menu-item>
            <el-menu-item index="5-2">item two</el-menu-item>
            <el-menu-item index="5-3">item three</el-menu-item>
          </el-sub-menu>
        </el-col>
        <el-col :span="4">
          <el-sub-menu index="6">
            <template #title>爽文</template>
            <el-menu-item index="6-1">item one</el-menu-item>
            <el-menu-item index="6-2">item two</el-menu-item>
            <el-menu-item index="6-3">item three</el-menu-item>
          </el-sub-menu>
        </el-col>
      </el-row>
    </el-menu>
  </div>

</template>

<script setup>
import {useRouter} from "vue-router";
import router from "../router/index.js";

const handleSelect = (key, keyPath) => {
  router.push(key)
  console.log(key, keyPath)

}
</script>

<style scoped>
.box {
  margin-top: 20px;
}
/*.el-menu{*/
/*  flex-direction: column !important;*/
/*}*/

/*.el-menu--horizontal{*/
/*  flex-direction: column !important;*/
/*}*/

</style>
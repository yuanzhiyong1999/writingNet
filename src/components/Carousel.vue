<template>
  <div>
    <el-carousel :interval="4000" type="card" height="300px" >
      <el-carousel-item v-for="item in searchData" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {getCarousel} from "../api/index.js";
import {toast} from "../composables/util.js";

let searchData = ref(['http://cup.lijx.cloud/img/avatar/2022/7/17/000a5b5d-be3a-4eac-8eca-dcec6ad4f9b2',
  'http://cup.lijx.cloud/img/gallery/2022/7/1/1cf91f1e-9b4d-4a15-84c6-b6dac167bb43',
  'http://cup.lijx.cloud/img/gallery/2022/7/1/27986ad7-86a9-499b-b421-c6fe908403ff',
  'http://cup.lijx.cloud/img/gallery/2022/7/1/284e14f9-829b-4ebd-bb47-68f0958a62ad'])

getCarousel().then(res=>{
  if (res.success)
    searchData.value = res.data;
  else
    toast(res.msg,'error')
})


</script>

<style scoped>
.el-carousel {
  width: 800px;
  margin: 10px auto;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
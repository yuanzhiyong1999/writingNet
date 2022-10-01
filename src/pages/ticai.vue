<template>
  <div class="home">
  <div class=" block">
    <el-row :gutter="10">
      <el-col :span="16">
        <ContentBlockVue :title="title" :desc="desc"></ContentBlockVue>
      </el-col>
      <el-col :span="1">
        <el-divider direction="vertical"/>
      </el-col>
      <el-col :span="7">
        <AsideListVue :cardHeight="400" :title="AsideListTile[0]"></AsideListVue>
        <AsideListVue :cardHeight="400" :title="AsideListTile[1]"></AsideListVue>
      </el-col>
    </el-row>
    <el-row>

    </el-row>
  </div>
  </div>
</template>

<script setup>
let AsideListTile = ["推荐排序","推荐文章"]
let title = '体裁作文'
let desc = '华夏对联网体裁作文栏目为大家提供精选的体裁作文300字400字500字600字800字等优秀体裁作文大全。'

import AsideListVue from "../components/AsideList.vue";
import ContentBlockVue from "../components/ContentBlock.vue";
</script>

<style scoped>
.block {
  background-color: #f5f5f8;
}
</style>
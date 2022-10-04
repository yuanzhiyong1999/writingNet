<template>
  <div class="home">
    <div class="block first_block">
      <el-row :gutter="10">
        <el-col :span="16">
          <Carousel></Carousel>
          <BottomListVue></BottomListVue>
        </el-col>
        <el-col :span="1">
          <el-divider direction="vertical"/>
        </el-col>
        <el-col :span="7">
          <AsideListVue cardHeight="700" :title=ranktitle[0]></AsideListVue>
        </el-col>
      </el-row>
    </div>

    <div class=" block other_block">
      <el-row :gutter="10">
        <el-col :span="16">
          <BlockCard :title=cardtitle[0]></BlockCard>
        </el-col>
        <el-col :span="1">
          <el-divider direction="vertical"/>
        </el-col>
        <el-col :span="7">
          <AsideListVue cardHeight="400" :title=ranktitle[1]></AsideListVue>
        </el-col>
      </el-row>
    </div>

    <div class=" block other_block">
      <el-row :gutter="10">
        <el-col :span="16">
          <BlockCard :title=cardtitle[1]></BlockCard>
        </el-col>
        <el-col :span="1">
          <el-divider direction="vertical"/>
        </el-col>
        <el-col :span="7">
          <AsideListVue cardHeight="400" :title=ranktitle[2]></AsideListVue>
        </el-col>
      </el-row>
    </div>
{{$store.state.user}}
  </div>
</template>

<script setup>
import AsideListVue from '~/components/AsideList.vue'
import Carousel from '~/components/Carousel.vue'
import BottomListVue from '~/components/BottomList.vue'
import BlockCard from '~/components/BlockCard.vue'
import {ref} from "vue";

let ranktitle = ["热门排序","议论文热榜","说明文热榜"]

let cardtitle =["议论文","说明文"]


</script>

<style scoped>

.block {
  background-color: #f5f5f8;
}
.other_block{
  margin-top: 10px;
}

</style>
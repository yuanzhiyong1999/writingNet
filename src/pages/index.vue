<template>
  <div class="home">
    <div class="block first_block">
      <el-row :gutter="10">
        <el-col :span="16">
          <Carousel></Carousel>
          <BottomListVue1></BottomListVue1>
        </el-col>
        <el-col :span="1">
          <el-divider direction="vertical"/>
        </el-col>
        <el-col :span="7">
          <AsideListVue cardHeight="700" :title=ranktitle></AsideListVue>
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
          <AsideListVue cardHeight="400" :title=ranktitle></AsideListVue>
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
          <AsideListVue cardHeight="400" :title=ranktitle></AsideListVue>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script setup>
import AsideListVue from '~/components/AsideList.vue'
import Carousel from '~/components/Carousel.vue'
import BottomListVue1 from '~/components/BottomList1.vue'
import BlockCard from '~/components/BlockCard.vue'
import {ref} from "vue";

let ranktitle = "热门排序"

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
<template>

  <el-card class="box-card" :style="{height:cardHeight+'px'}">
    <template #header>
      <div class="card-header">
        <el-icon :size="30" style="padding: 0 5px 0 10px">
          <Rank/>
        </el-icon>
        <span class="head_text">{{ title }}</span>
      </div>
    </template>
    <div v-for="o in asideListData" :key="o" class="card_item">
      <el-icon :size="20" style="padding: 0 5px">
        <Edit/>
      </el-icon>
      <el-link :href="o.url" target="_blank">{{ o.title }}</el-link>
    </div>
  </el-card>


</template>

<script setup>
import {ref} from "vue";
import {getRank} from "../api/index.js";

const params = defineProps(['title', 'cardHeight'])

let asideListData = ref([
  {
    "id": 648,
    "title": "带合路例",
    "url": "http://www.baidu.com"
  },
  {
    "id": 976,
    "title": "们压她车",
    "url": "http://www.baidu.com"
  },
  {
    "id": 843,
    "title": "里样于次上百",
    "url": "http://www.baidu.com"
  },
  {
    "id": 797,
    "title": "山利员科",
    "url": "http://www.baidu.com"
  },
  {
    "id": 593,
    "title": "看可省者",
    "url": "http://www.baidu.com"
  },
  {
    "id": 349,
    "title": "将都东格",
    "url": "http://www.baidu.com"
  },
  {
    "id": 598,
    "title": "层王影北存",
    "url": "http://www.baidu.com"
  },
  {
    "id": 753,
    "title": "看精办总",
    "url": "http://www.baidu.com"
  },
  {
    "id": 722,
    "title": "参类高龙局料",
    "url": "http://www.baidu.com"
  },
  {
    "id": 574,
    "title": "观持委山色",
    "url": "http://www.baidu.com"
  }
],)

getRank(params.title).then(res=>{
  if (res.success)
    asideListData.value = res.data
  else
    toast(res.msg,'error')
})


</script>


<style scoped>
.box-card {
  width: 340px;
  margin: 10px 0 10px;

}

.card-header {
  background-color: #f5f5f8;
  height: 50px;
  display: flex;
  border-radius: 40px;
  align-items: center;

}

.head_text {
  font-size: large;
}

.card_item {
  padding-bottom: 5px;
  display: flex;
  align-items: center;
}
</style>
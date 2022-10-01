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
      {{ o }}
    </div>
  </el-card>


</template>

<script setup>
import axios from "axios";

import {reactive, ref} from "vue";

let asideListData = ref(['dfgrgerg', 'dfgdsfdsfdsf', 'sdfdsfdfdsf'])
defineProps(['title', 'cardHeight'])

function getList() {
  axios.get("https://console-mock.apipost.cn/mock/eaab8663-cc5b-47c4-9292-e10c043794aa/rank?apipost_id=51c177")
      .then(res => {
        // console.log(res.data.data)
        asideListData.value = res.data.data
      })
}
getList()

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
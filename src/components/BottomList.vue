<template>
  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :span="8" v-for="o in papersList" :key="o">
        <el-card :body-style="{ padding: '0px' }" style=" margin-bottom: 10px;">
          <div class="card_item">
            <img
                :src="o.url"
                class="image"
            />
            <div class="card_text">
              <span style="font-size: 14px">{{ o.title }}</span>
              <el-button text class="button">作文网</el-button>
            </div>
          </div>

        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import {ref} from "vue";
import {getNewPapers} from "../api/index.js";

let papersList = ref([
  {
    "id": -3815784603151780,
    "url": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    "title": "受运保比然都走主"
  },
  {
    "id": 8557585123152951,
    "url": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    "title": "受运保比然都走主"
  },
  {
    "id": 5744240407450275,
    "url": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    "title": "受运保比然都走主"
  },
  {
    "id": 459045422787519,
    "url": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    "title":"受运保比然都走主"
  },
  {
    "id": -204098639043780,
    "url": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    "title": "受运保比然都走主"
  },
  {
    "id": 628977453917211,
    "url": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    "title": "受运保比然都走主"
  }
],)

getNewPapers().then(res=>{
  if (res.success)
    papersList.value = res.data
  else
    toast(res.msg,'error')
})

</script>

<style scoped>
.box-card {
  margin: -5px 0 10px 10px;
}

.card_text{
  padding: 14px;
}

.button {
  padding: 0;
  min-height: auto;
  margin-top: 50px;
  /*margin-left: 100px;*/
  font-size: 12px;
}

.image {
  width: 30%;
  display: block;
  border-radius: 20px;
}
.card_item{
  height: 150px;
  display: flex;

}
</style>
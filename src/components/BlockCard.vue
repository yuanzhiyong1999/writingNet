<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-icon :size="30" color="red" style="padding: 0 5px 0 10px">
          <UserFilled/>
        </el-icon>
        <span>{{ title }}</span>
        <el-button class="button more" link type="info" size="small" style="float: right">更多</el-button>
      </div>
    </template>

    <el-row :gutter="20">
      <el-col :span="12" v-for="o in cardDataList" :key="o">
        <div class="card_item">
          <div class="center">
            <el-icon :size="20" style="padding: 0 5px">
              <Edit/>
            </el-icon>
            <el-link :href="o.url" target="_blank">{{ o.title }}</el-link>
          </div>
          <div class="summary" v-show="o.id===1||o.id===2">
            <span>
              两款手机的离开房间都是老款解开了简历库第四届立法肯定是解放开绿灯即将拉开圣诞节反抗类毒素解放开绿灯是教练的身份就打算离开房间了多少
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import {ref} from "vue";

defineProps(['title'])

let cardDataList = ref([
  {
    "id": 1,
    "title": "正较表导图多较",
    "url": "ftp://yuouvnssdg.tp/remhp"
  },
  {
    "id": 2,
    "title": "术气空才际步",
    "url": "wais://gmnwuygkjo.as/gnip"
  },
  {
    "id": 301,
    "title": "办上引布会",
    "url": "gopher://iipbsvex.cn/yeoul"
  },
  {
    "id": 390,
    "title": "过则般战离高",
    "url": "mailto://lje.ml/ztppmhxl"
  },
  {
    "id": 380,
    "title": "力积等型严于",
    "url": "news://mpcmjbbdeg.pl/cnhqfbqx"
  },
  {
    "id": 441,
    "title": "长成严体任而采",
    "url": "ftp://nehuggfe.ie/ogzvgnx"
  },
  {
    "id": 345,
    "title": "或低电",
    "url": "news://mopuz.hr/sbph"
  },
  {
    "id": 733,
    "title": "亲按老织群",
    "url": "cid://ycfwvimhf.gl/uqlxydv"
  },
  {
    "id": 773,
    "title": "程任市务",
    "url": "telnet://ymrrjjjr.gi/koueuvyipj"
  },
  {
    "id": 769,
    "title": "管价些近况",
    "url": "news://jmsbftt.hu/jgiwo"
  },
  {
    "id": 316,
    "title": "并金求参速",
    "url": "http://jjvs.cu/uwlpp"
  },
  {
    "id": 917,
    "title": "局门提报能",
    "url": "news://sdlebf.jp/yqsxrwum"
  },
  {
    "id": 874,
    "title": "称多天叫",
    "url": "tn3270://rkxyugwszh.pw/ndl"
  },
  {
    "id": 340,
    "title": "标列平却第",
    "url": "telnet://pvdeiikmqx.gt/qwqherxfl"
  },
  {
    "id": 433,
    "title": "律往斗质设",
    "url": "prospero://rjolc.gl/bunkofgfm"
  },
  {
    "id": 205,
    "title": "严大区代八只",
    "url": "mid://uwco.mv/smnj"
  }
])

</script>

<style scoped>
:deep(.el-card__header) {
  padding-top: 8px;
  padding-bottom: 8px;
}

.box-card {
  height: 400px;
  margin: 10px 0 10px 10px;
}

.card-header {
  height: 30px;
  display: flex;
  align-items: center;
}

.card_item {
  padding-bottom: 10px;
}

.center{
  display: flex;
  align-items: center;
}

.summary {
  margin-top: 5px;
  color: #CDD0D6;
  font-size: small;
  margin-bottom: 10px;
  display: -webkit-box; /*作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 2; /*显示的行数；如果要设置2行加...则设置为2*/
  overflow: hidden; /*超出的文本隐藏*/
  text-overflow: ellipsis; /* 溢出用省略号*/
  -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
}

.more {
  margin-left: auto;
  margin-right: 10px;
}
</style>
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
      <el-col :span="12">
        <div v-for="o in 8" :key="o" class="card_item">
          <el-icon :size="20" style="padding: 0 5px">
            <Edit/>
          </el-icon>
          {{ 'List item ' + o }}
          <div class="summary" v-show="o===1">
            <span>
              两款手机的离开房间都是老款解开了简历库第四届立法肯定是解放开绿灯即将拉开圣诞节反抗类毒素解放开绿灯是教练的身份就打算离开房间了多少
            </span>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div v-for="o in 8" :key="o" class="card_item">
          <el-icon :size="20" style="padding: 0 5px">
            <Edit/>
          </el-icon>
          {{ 'List item ' + o }}
          <div class="summary" v-show="o===1">
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

defineProps(['title'])

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

.summary {
  color: #CDD0D6;
  font-size: small;
  margin-bottom: 10px;
  display: -webkit-box; /*作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 2; /*显示的行数；如果要设置2行加...则设置为2*/
  overflow: hidden; /*超出的文本隐藏*/
  text-overflow: ellipsis; /* 溢出用省略号*/
  -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
}
.more{
  margin-left: auto;
  margin-right: 10px;
}
</style>
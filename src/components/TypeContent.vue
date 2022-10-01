<template>
  <div class="type-box">
    <div class="card-header">
      <el-icon :size="20" color="red" style="padding: 0 5px 0 10px">
        <CaretBottom/>
      </el-icon>
      <span class="head_text">{{ title }}</span>
      <el-button class="button more" link type="info" size="small">查看更多</el-button>
    </div>
    <!--    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>-->

    <div v-for="o in 5" :key="o" class="card_item">
      <el-icon :size="15" style="padding: 0 5px">
        <Edit/>
      </el-icon>
      <el-link :href="o" target="_blank">{{ 'List item ' + o }}</el-link>
      <span class="time">1564</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      des: '标题名'
    }
  },
  setup(props, context) {

    return {}
  }
}
</script>

<style scoped>
.card-header {
  background-color: #f5f5f8;
  height: 50px;
  display: flex;
  border-radius: 20px;
  align-items: center;
}

.head_text {
  font-size: large;
}
.card_item{
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.time {
  margin-left: auto;
  margin-right: 5px;
}
.more{
  margin-left: auto;
  margin-right: 10px;
}


</style>
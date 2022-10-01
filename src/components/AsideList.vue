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
    <div v-for="o in 10" :key="o" class="card_item">
      <el-icon :size="20" style="padding: 0 5px">
        <Edit/>
      </el-icon>
      {{ 'List item ' + o }}
    </div>
  </el-card>


</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '热门排序',
      des: '标题'
    },
    cardHeight: {
      type: Number,
      default: '',
      des: '卡片高度'
    },
  },
  setup(props, context) {

    return {}
  }
}
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

.card_item{
  padding-bottom: 5px;
}
</style>
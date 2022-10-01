<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <div class="title">
          <el-icon :size="20" color="red" style="padding-right: 5px">
            <Menu/>
          </el-icon>
          <span>{{ title }}</span>
        </div>
        <span style="font-size: 14px">{{ desc }}</span>
      </div>
    </template>

    <TypeContent v-for="o in 5" :key="o" :title="'类别'+o"></TypeContent>

  </el-card>
</template>

<script>
import TypeContent from "./TypeContent.vue";

export default {
  props: {
    title: {
      type: String,
      default: '',
      des: '标题名'
    },
    desc: {
      type: String,
      default: '',
      des: '描述信息'
    },
  },
  setup(props, context) {

    return {}
  }
}

</script>

<style scoped>
:deep(.el-card__header) {
  padding-top: 8px;
  padding-bottom: 8px;
}
:deep(.el-card__body){
  padding-top: 8px;
}

.box-card {
  height: auto;
  margin: 10px 0 10px 10px;

}

.card-header {
  height: 50px;
}
.title{
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

</style>
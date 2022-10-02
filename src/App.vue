<template>

  <div class="base" v-if="$route.meta.showOther">
    <el-container>
      <el-header height="150px">
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="50px">Footer</el-footer>
    </el-container>
  </div>

  <router-view v-if="!$route.meta.showOther"></router-view>


</template>

<script setup>
</script>
<style scoped>
:deep(.el-main){
  padding-top: 0;
}
.base {
  width: 1300px;
  height: 100%;
  margin: 0 auto;
}

.el-footer {
  background-color: lightblue;
}
:deep(.el-divider--vertical){
  width: 25px;
  height:100%;
  background-color: #ffffff;
  border-style: none;
}
</style>

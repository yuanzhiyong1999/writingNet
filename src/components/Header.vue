<script setup>
import {ref} from "vue";
import {Search} from "@element-plus/icons-vue";
import NavBar from "../components/NavBar.vue"

const searchData = ref("");
</script>

<template>
  <div class="box">
    <el-row :gutter="20">
      <el-col :span="8">
        <div style="margin-left: 10px">预留的Logo</div>

      </el-col>

      <el-col :span="16">
        <div class="search_box">
          <el-input
              v-model="searchData"
              placeholder="Type something to Search"
              size="large"
              :suffix-icon="Search"
          />
          <el-button type="primary" size="default">Search</el-button>
        </div>

      </el-col>

    </el-row>
    <NavBar/>
  </div>
</template>

<style scoped>
.box {
  margin-top: 20px;
}
.search_box{
  display: flex;
  justify-content: space-between;
}
.el-input{
  width: 700px;
}

</style>
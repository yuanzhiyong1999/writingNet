<script setup>


</script>

<template>
  <el-card class="box-card">

    <el-row :gutter="20">
      <el-col :span="8" v-for="o in 6" :key="o">
        <el-card :body-style="{ padding: '0px' }" style=" margin-bottom: 10px;">
          <div class="card_item">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
            <div class="card_text">
              <span>Yummy hamburger</span>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>

        </el-card>
      </el-col>
    </el-row>

  </el-card>

</template>

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
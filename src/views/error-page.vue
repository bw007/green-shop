<template>
  <div class="container">
    <el-row align="middle">
      <el-text type="success">404</el-text>
      <el-divider direction="vertical" />
      Page not found
    </el-row>
    <router-link to="/">
      <el-button type="warning" text>Back to home</el-button>
    </router-link>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.4rem;

  .el-text {
    font-size: 4rem;
  }

  .el-button {
    margin-top: 20px;
  }
}
</style>
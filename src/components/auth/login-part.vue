<template>
  <el-form 
    :model="form"
    class="mt-50"
  >
    <p class="desc mb-14">Enter your username and password to login.</p>
    <el-form-item>
      <el-input v-model="form.email" placeholder="almamun_uxui@outlook.com" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.password" placeholder="***********" show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({})

const onSubmit = () => {
  console.log(form.value);
}
</script>

<style lang="scss" >
.el-form {}
.el-input__inner {
  padding: 12px 14px;
}
.el-input__wrapper {
  width: 300px !important;
}
.desc {
  color: #3D3D3D;
  font-size: 1.3rem;
  line-height: 1.6rem;
  text-align: center;
}
</style>
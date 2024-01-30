<template>
  <el-form 
    :model="form"
    class="mt-50"
  >
    <p class="desc mb-14">Enter your username and password to login.</p>
    <el-form-item>
      <el-input :input-style="{padding: '12px 4px'}" v-model="form.email" placeholder="almamun_uxui@outlook.com" />
    </el-form-item>
    <el-form-item>
      <el-input :input-style="{ padding: '12px 4px' }" v-model="form.password" placeholder="***********" show-password />
    </el-form-item>
    <el-form-item>
      <el-link :underline="false" type="success">Forgot Password?</el-link>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>

import { ref } from 'vue';

const form = ref({
  email: "",
  password: ""
})

const onSubmit = () => {
  console.log(form.value);
}
</script>

<style lang="scss">
.el-form {}
.el-input__inner {
  
}

.desc {
  color: #3D3D3D;
  font-size: 1.3rem;
  line-height: 1.6rem;
  text-align: center;
}
</style>
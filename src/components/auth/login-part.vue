<template>
  <el-form 
    :model="form"
    class="mt-50"
    
  >
    <p class="desc mb-14">Enter your username and password to login.</p>
    <el-form-item>
      <el-input :input-style="{padding: '16px 4px' }" v-model="form.email" placeholder="Enter your email address" />
    </el-form-item>
    <el-form-item>
      <el-input :input-style="{ padding: '16px 4px' }" v-model="form.password" placeholder="Password" show-password />
    </el-form-item>
    <el-form-item>
      <el-link class="login-link" :underline="false" type="success">Forgot Password?</el-link>
    </el-form-item>
    <el-form-item>
      <el-button :loading="loadingBtn" class="login-btn" type="success" @click="onSubmit">Login</el-button>
    </el-form-item>

    
  </el-form>
</template>

<script setup>
import { loadingStore } from "@/stores/utils/loading";
import { storeToRefs } from "pinia";
import { ref } from 'vue';

const loading = loadingStore()
const { loadingBtn } = storeToRefs(loading)

const form = ref({
  email: "",
  password: ""
})

const onSubmit = () => {
  loading.setLoadingBtn(true)
  console.log(100);
}
</script>

<style lang="scss">
.el-form {}
.el-input__inner {
  
}
.login-link {
  font-size: 1.4rem;
  height: 16px;
  margin-left: auto;
}
.login-btn {
  width: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 16px;
}

.desc {
  color: #3D3D3D;
  font-size: 1.3rem;
  line-height: 1.6rem;
  text-align: center;
}
</style>
<template>
  <el-form 
    :model="form"
    class="mt-50"
    
  >
    <p class="desc mb-14">Enter your username and password to login.</p>
    <el-form-item>
      <el-input :input-style="{padding: '16px 4px' }" v-model="form.user" placeholder="Username" />
    </el-form-item>
    <el-form-item>
      <el-input :input-style="{ padding: '16px 4px' }" v-model="form.email" placeholder="Enter your email address" />
    </el-form-item>
    <el-form-item>
      <el-input :input-style="{ padding: '16px 4px' }" v-model="form.password" placeholder="Password" show-password />
    </el-form-item>
    <el-form-item>
      <el-input :input-style="{ padding: '16px 4px' }" v-model="form.confirmPswd" placeholder="Confirm Password" show-password />
    </el-form-item>
    <el-form-item>
      <el-button :loading="loadingBtn" class="login-btn" type="success" @click="onSubmit">Register</el-button>
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
  user: "",
  email: "",
  password: "",
  confirmPswd: ""
})

const onSubmit = () => {
  loading.setLoadingBtn(true)
  console.log(100);
}
</script>

<style lang="">
  
</style>
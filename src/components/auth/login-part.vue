<template>
  <el-form 
    :model="form"
  >
    <p class="auth__desc mb-14">Enter your username and password to login.</p>
    <el-form-item>
      <el-input :input-style="{padding: '20px 4px' }" v-model="form.email" placeholder="Enter your email address" />
    </el-form-item>
    <el-form-item>
      <el-input :input-style="{ padding: '20px 4px' }" v-model="form.password" placeholder="Password" show-password />
    </el-form-item>
    <el-form-item>
      <el-link class="auth__forgot" :underline="false" type="success">Forgot Password?</el-link>
    </el-form-item>
    <el-form-item>
      <el-button :loading="loading" class="auth__btn" type="success" @click="onSubmit(), loading = true">Login</el-button>
    </el-form-item>
    <div class="mt-45">
      <el-divider class="auth__divider" content-position="center">Or login with</el-divider>
    </div>
    <el-form-item>
      <div class="auth__btn-parent py-15">
        <el-button class="auth__btn">
          <google-icon />
          <span class="auth__btn-text">Login with Google</span>
        </el-button>
      </div>
      <div class="auth__btn-parent">
        <el-button class="auth__btn">
          <facebook-icon/>
          <span class="auth__btn-text">Login with Facebook</span>
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue';
import googleIcon from '@/assets/icons/google-icon.vue'
import facebookIcon from '@/assets/icons/facebook-icon.vue'


const loading = ref(false)

const form = ref({
  email: "",
  password: ""
})

const onSubmit = () => {
  console.log(form.value);
}
</script>
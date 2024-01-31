<template>
  <el-form 
    :model="form"
    ref="ruleFormRef"
    :rules="rules"
  >
    <p class="auth__desc mb-14">Enter your email and password to register.</p>
    <el-form-item prop="" class="pb-5">
      <el-input :input-style="{padding: '20px 4px' }" v-model="form.user" placeholder="Username" />
    </el-form-item>
    <el-form-item prop="" class="pb-5">
      <el-input :input-style="{ padding: '20px 4px' }" v-model="form.email" placeholder="Enter your email address" />
    </el-form-item>
    <el-form-item prop="password" class="pb-5">
      <el-input :input-style="{ padding: '20px 4px' }" v-model="form.password" placeholder="Password" show-password />
    </el-form-item>
    <el-form-item prop="confirmPswd" class="pb-5">
      <el-input :input-style="{ padding: '20px 4px' }" v-model="form.confirmPswd" placeholder="Confirm Password" show-password />
    </el-form-item>
    <el-form-item>
      <el-button :loading="loading" class="auth__btn" type="success" @click="onSubmit(ruleFormRef), loading = true">Register</el-button>
    </el-form-item>
    <div class="mt-45">
      <el-divider class="auth__divider" content-position="center">Or register with</el-divider>
    </div>
    <el-form-item>
      <div class="auth__btn-parent py-15">
        <el-button class="auth__btn">
          <google-icon />
          <span class="auth__btn-text">Continue with Google</span>
        </el-button>
      </div>
      <div class="auth__btn-parent">
        <el-button class="auth__btn">
          <facebook-icon/>
          <span class="auth__btn-text">Continue with Facebook</span>
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

const ruleFormRef = ref()

const form = ref({
  user: "",
  email: "",
  password: "",
  confirmPswd: ""
})

const rules = ref({
  user: [
    { 
      required: true, 
      message: 'Please input username', 
      trigger: 'blur' 
    },
    { 
      min: 3,
      message: 'Please length greater than 3', 
      trigger: ['blur', 'change'] 
    },
  ],
  email: [
    {
      required: true,
      message: "Please input email address",
      trigger: "blur"
    },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change']
    }
  ],
  password: [
    { 
      required: true, 
      message: 'Please input password', 
      trigger: 'blur' 
    },
    { 
      min: 3,
      message: 'Please length greater than 3', 
      trigger: ['blur', 'change'] 
    },
  ],
  confirmPswd: [
    { 
      required: !form.value.password, 
      message: 'Please input password', 
      trigger: 'blur' 
    },
    { 
      min: 3,
      message: 'Please length greater than 3', 
      trigger: ['blur', 'change'] 
    },
  ]
})

const onSubmit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(fields);
    } else {
      console.log('error submit!', fields)
      loading.value = false
    }
  })
}
</script>
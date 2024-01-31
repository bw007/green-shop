<template>
  <el-dialog
    v-model="dialogToggle"
    width="500"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    class="auth px-80 pb-10"
  >
    <span>
      <div class="auth__title mb-40">
        <el-link 
          class="auth__link" 
          @click="authTrigger = false" 
          :underline="false" 
          :type="!authTrigger ? 'success' : 'default'"
        >
          Login
        </el-link>
        <el-divider direction="vertical" />
        <el-link 
          class="auth__link" 
          @click="authTrigger = true" 
          :underline="false" 
          :type="authTrigger ? 'success' : 'default'"
        >
          Register
        </el-link>
      </div>
      <login-part v-if="!authTrigger" />
      <register-part v-else />
    </span>
    <template #footer>
      <div class="auth__bottom"></div>
    </template>
  </el-dialog>
</template>

<script setup>
import { dialogStore } from "@/stores/utils/dialog";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import loginPart from "./login-part.vue";
import registerPart from "./register-part.vue";

const authTrigger = ref(false)

const dialog = dialogStore()
const { dialogToggle } = storeToRefs(dialog)

const handleClose = () => {
  dialog.setDialogToggle(false)
  authTrigger.value = false
}

</script>

<style lang="scss">
@import './styles/auth.scss'
</style>
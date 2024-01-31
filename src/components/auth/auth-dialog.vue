<template>
  <el-dialog
    v-model="dialogToggle"
    width="500"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    class="auth-dialog"
  >
    <span class="px-99">
      <div class="auth-title">
        <el-link class="link" @click="authTrigger = false, loading.setLoadingBtn(false)" :underline="false" :type="!authTrigger ? 'success' : 'default'">Login</el-link>
        <el-divider direction="vertical" />
        <el-link class="link" @click="authTrigger = true, loading.setLoadingBtn(false)" :underline="false" :type="authTrigger ? 'success' : 'default'">Register</el-link>
      </div>
      <login-part v-if="!authTrigger" />
      <register-part v-else />
    </span>

  </el-dialog>
</template>

<script setup>
import { dialogStore } from "@/stores/utils/dialog";
import { loadingStore } from "@/stores/utils/loading";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import loginPart from "./login-part.vue";
import registerPart from "./register-part.vue";

const authTrigger = ref(false)
const loading = loadingStore()


const dialog = dialogStore()
const { dialogToggle } = storeToRefs(dialog)

const handleClose = () => {
  dialog.setDialogToggle(false)
  loading.setLoadingBtn(false)
}

</script>

<style lang="scss">
.auth-dialog {
  padding: 0 100px;
}
.auth-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.link {
  font-size: 2rem;
  line-height: 1.6rem;
}
.link:hover {
  color: #46A358;
}  
</style>
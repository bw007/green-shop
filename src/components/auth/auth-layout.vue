<template>
  <el-dialog
    v-model="dialogToggle"
    width="500"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <span class="px-99">
      <div class="title">
        <el-link @click="authTrigger = false" :underline="false" :type="!authTrigger && 'success'">Login</el-link>
        <el-divider direction="vertical" />
        <el-link @click="authTrigger = true" :underline="false" :type="authTrigger && 'success'">Register</el-link>
      </div>
      <login-part />
    </span>
    

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleClose">
          Confirm
        </el-button>
      </span>
    </template>

  </el-dialog>
</template>

<script setup>
import { dialogStore } from "@/stores/utils/dialog";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import loginPart from "./login-part.vue";

const authTrigger = ref(false)

const dialog = dialogStore()
const { dialogToggle } = storeToRefs(dialog)

const handleClose = () => {
  dialog.setDialogToggle(false)
}

</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.el-link {
  font-size: 2rem;
  line-height: 1.6rem;
}
.el-link:hover {
  color: #46A358;
}  
</style>
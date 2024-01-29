<template>
  <el-dialog
    v-model="dialogToggle"
    title="Tips"
    width="500"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <span>This is a message</span>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Login" name="login">
        
        Login

      </el-tab-pane>
      <el-tab-pane label="Register" name="reg">
        
        Register

      </el-tab-pane>
    </el-tabs>

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

const activeName = ref('first')


const dialog = dialogStore()
const { dialogToggle } = storeToRefs(dialog)

const handleClick = () => {
  console.log(activeName.value);
}

const handleClose = () => {
  dialog.setDialogToggle(false)
}

</script>

<style lang="">
  
</style>
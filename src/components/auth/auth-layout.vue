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

    <el-radio-group v-model="radio" class="ml-4">
      <el-radio label="1" size="large">Login</el-radio>
      
      <el-radio label="2" size="large">Register</el-radio>
    </el-radio-group>

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

const radio = ref('1')

console.log(radio.value);

const dialog = dialogStore()
const { dialogToggle } = storeToRefs(dialog)

const handleClose = () => {
  dialog.setDialogToggle(false)
}

</script>

<style lang="">
  
</style>
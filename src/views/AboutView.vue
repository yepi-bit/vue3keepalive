<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!--    <input/>-->
    <loading-comp></loading-comp>
    <button @click="open">open</button>
    <teleport :to="to" :disabled="disabled">
      <div style="color: red">{{ showingString }}</div>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import LoadingComp from "../components/LoadingComp.vue";

enum TeleportPosition {
  currentInstance, // 当前组件
  LoadingComp, // 子组件
  body, // body
}

// 位置
let position = ref(TeleportPosition.currentInstance);
// 显示的字符串内容
let showingString = ref("内容显示在当前组件内");
// 是否禁用teleport
let disabled = ref(true);
// 挂载的DOM节点
let to = ref("body");

const open = () => {
  if (position.value == TeleportPosition.currentInstance) {
    position.value = TeleportPosition.LoadingComp;
    showingString.value = "内容显示在子组件内";
    disabled.value = false;
    to.value = "#toTeleport";
  } else if (position.value == TeleportPosition.LoadingComp) {
    position.value = TeleportPosition.body;
    showingString.value = "内容显示在body内";
    disabled.value = false;
    to.value = "body";
  } else {
    position.value = TeleportPosition.currentInstance;
    showingString.value = "内容显示在当前组件内";
    disabled.value = true;
    to.value = "body";
  }
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .about {
    /*min-height: 100vh;*/
    display: flex;
    align-items: center;
    width: 600px;
    height: 300px;
    background-color: blueviolet;
  }
}
</style>

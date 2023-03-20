// app.vue
<script setup>
import {ref, onMounted, defineAsyncComponent} from 'vue'
import LoadingComp from '@/components/LoadingComp.vue'
import ErrorComp from '@/components/ErrorComp.vue'

const AsyncChild = defineAsyncComponent({
  loader: () => import('../views/AboutView.vue'),
  // loader: () => (new Promise((resolve, reject) => resolve())),
  loadingComponent: LoadingComp,
  delay: 200,
  errorComponent: ErrorComp,
  timeout: 2000
})
onMounted(() => {
  console.log('app')
})
let isShowAsyncComp = ref(false)
const loader = () => {
  isShowAsyncComp.value = true
}
</script>
<template>
  <button @click="loader">加载异步组件</button>
  <AsyncChild v-if="isShowAsyncComp"/>
</template>
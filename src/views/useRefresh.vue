<template>
  <div>
    <div>
      {{ aa }}--1
    </div>
    <p> {{ bb }}--2</p>
  </div>
</template>

<script setup lang="ts">
import {usePullRefresh} from '@/utils/usePullRefresh'
import {onMounted, onUnmounted, ref} from "vue";

const aa = ref(usePullRefresh())
const bb = ref([])
const getData = () => {
  let bb = aa.value.onLoad()
  return bb
}
onMounted(() => {
  getData()
  window.addEventListener('scroll', usePullRefresh, true)
})
onUnmounted(() => {
  window.removeEventListener('scroll', usePullRefresh)
})
</script>

<style lang="scss" scoped>

</style>
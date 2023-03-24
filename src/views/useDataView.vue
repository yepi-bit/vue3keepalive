<template>
  <div>
    <div>
      {{ year + '-' + data + '-' + day }}
    </div>
    <p> {{ getMonthLast }}</p>
    <p> {{ getMonthFirst }}</p>
    <p> {{ getYearLast }}</p>
    <p> {{ getYearFirst }}</p>
    <p> {{ getNow }}</p>
  </div>
</template>

<script setup>
import useData, {getMonth, getDataDay} from "../utils/useData";
import {ref} from "vue";

const {getYear, getMonthLastDay, getMonthFirstDay, getYearLastDay, getYearFirstDay, getNowDay} = useData()
const year = ref(getYear())
const data = ref(getMonth())
const day = ref(getDataDay())
const getMonthLast = ref(getMonthLastDay())
const getMonthFirst = ref(getMonthFirstDay())
const getYearLast = ref(getYearLastDay())
const getYearFirst = ref(getYearFirstDay())
const getNow = ref(getNowDay())
</script>

<style scoped>

</style>
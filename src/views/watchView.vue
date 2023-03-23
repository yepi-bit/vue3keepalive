<template>
  <div>
    <p>{{ sum }}</p>
    <button @click="changeMsg">更改 sum</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch, watchEffect, watchPostEffect} from "vue";

let sum = ref(0)
let msg = ref('你好啊')
let mes = reactive({
  say:'hello'
})
let person = reactive({
  name: '张三',
  age: 18,
  job: {
    salary: '15k'
  },
})
watch(()=>mes.say, (newValue, oldValue) => {  // watch不能直接监听reactive对象的属性mes.say
  console.log('新的值0', newValue);
  console.log('旧的值0', oldValue);
})
watch(sum, (newValue, oldValue) => {
  console.log('新的值1', newValue);
  console.log('旧的值1', oldValue);
})
watch([sum, msg], (newValue, oldValue) => {
  console.log('新的值2', newValue); //['sum的newValue', 'msg的newValue']
  console.log('旧的值2', oldValue); //['sum的oldValue', 'msg的oldValue']
}, {immediate: true, deep: true}) //这里vue3的deep是有点小问题的，可以不用deep，（隐式强制deep）
// watch(person, (newValue, oldValue) => {
//   console.log('新的值3', newValue);
//   console.log('旧的值3', oldValue);
// })
watch(()=>person, (newValue, oldValue) => {
  console.log('新的值3', newValue);
  console.log('旧的值3', oldValue);
},{deep:true})
watch(() => person.name, (newValue, oldValue) => {
  console.log('新的值4', newValue);
  console.log('旧的值4', oldValue);
})
watch(() => person.job, (newValue, oldValue) => {
  console.log('新的值5', newValue);
  console.log('旧的值5', oldValue);
}, {deep: true}) //此时deep有用
watchEffect(() => {
  //这里面你用到了谁就监视谁，里面就发生回调
  const x1 = sum.value
  console.log(person.job)
  console.log('x1', x1)
  console.log('我调用了');
})
watchPostEffect(()=>{
  console.log('DOM更新后执行')
})
watchEffect(() => {
  //这里面你用到了谁就监视谁，里面就发生回调
  console.log(person) // 不起作用
})
const changeMsg = () => {
  sum.value = 1
  person.age = 19
  person.name = '李四'
  person.job.salary = '20k'
  mes.say = 'hello you'
};
</script>

<style scoped>

</style>
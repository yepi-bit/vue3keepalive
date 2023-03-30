<template>
  <div>
    <v-md-editor v-model="text" :left-toolbar="leftToolbal" :disabled-menus="[]"  @change="change" height="500px" @upload-image="handleUploadImage"></v-md-editor>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const text = ref('')
const emit = defineEmits()
const leftToolbal = ref('undo redo | emoji | image | h | strikethrough | hr| bold | italic | ul | ol | link | code | save | clear | table')
// 富文本防抖
const timeout = ref(null)
const change = (markdownContent, htmlContent) => {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    console.log(markdownContent, htmlContent)
  }, 300);
}
const handleUploadImage = (event, insertImage, files) => {
  console.log(event, insertImage, files)
  // 此处只做示例
  insertImage({
    url:
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
    desc: '七龙珠',
    // width: 'auto',
    // height: 'auto',
  });
}
</script>

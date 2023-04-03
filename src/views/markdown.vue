<template>
  <div style="height: 90vh">
    <v-md-editor v-model="text" :left-toolbar="leftToolbal" :disabled-menus="[]"  @change="change" height="500px" @upload-image="handleUploadImage"></v-md-editor>

    <div class="container">
      <json-editor v-model="code" :codeFather="code" @codeSon="changeCode"></json-editor>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import JsonEditor from '../components/jsonEditor.vue'

const text = ref()
const code = ref(null);

const leftToolbal = ref('undo redo | emoji | image | h | strikethrough | hr| bold | italic | ul | ol | link | code | save | clear | table')
// 富文本防抖
const timeout = ref(null)
const change = (markdownContent, htmlContent) => {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    code.value = markdownContent
  }, 300);
}
const changeCode = (i) => {
  text.value = i
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

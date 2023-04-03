<template>
  <div>
    <div style="margin: 10px 10px 10px 0">
      <el-select v-model="editorTheme" placeholder="设置主题" @change="handleTheme">
        <el-option label="Visual Studio Dark" value="vs-dark"></el-option>
        <el-option label="Visual Studio" value="vs"></el-option>
        <el-option label="High Contrast Dark" value="hc-black"></el-option>
      </el-select>
    </div>
    <div class="editor" ref="dom"></div>
  </div>
</template>

<script setup>
import {onMounted, defineProps, defineEmits, ref, watchEffect} from 'vue';
import * as monaco from 'monaco-editor';

import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';

self.MonacoEnvironment = {
  getWorker(workerId, label) {
    if (label === 'json') {
      return new JsonWorker();
    }
    return new EditorWorker();
  },
};

const props = defineProps(['codeFather']);
const emit = defineEmits(['codeSon']);
const editorTheme = ref("vs-dark")
const dom = ref();

let instance;

const handleTheme = () => {
  monaco.editor.setTheme(editorTheme.value)
}
const myEditor = () => {
  const jsonModel = monaco.editor.createModel(props.codeFather, 'json');

  instance = monaco.editor.create(dom.value, {
    model: jsonModel,
    language:'javascript',
    tabSize: 2,
    scrollBeyondLastLine: false,
    theme: 'vs-dark', //官方自带三种主题vs, hc-black, or vs-dark
    selectOnLineNumbers: true,//显示行号
    roundedSelection: false,
    readOnly: false, // 只读
    cursorStyle: 'line', //光标样式
    automaticLayout: true, //自动布局
    glyphMargin: true, //字形边缘
    useTabStops: false,
    fontSize: 15, //字体大小
    autoIndent: true, //自动布局
    quickSuggestionsDelay: 100, //代码提示延时
  });

  instance.onDidChangeModelContent(() => {
    const value = instance.getValue();  // 获取件编辑器的值
    emit('codeSon', value);
  });
}
watchEffect(()=>{
  if(props.codeFather === null) {
    return
  }else {
    instance.dispose() // 注销编辑器实例
    myEditor()
  }
})
onMounted(() => {
  myEditor()
});
</script>

<style scoped>
.editor {
  height: 500px;
}
</style>
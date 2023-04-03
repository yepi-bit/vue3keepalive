import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// @ts-ignore
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/main.css'

// 富文本编辑器
// @ts-ignore
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// @ts-ignore
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs // 引入所有语言包
// @ts-ignore
// import hljs from 'highlight.js';

// 按需引入
import hljs from 'highlight.js/lib/core';
// 按需引入语言包
// @ts-ignore
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json);

// @ts-ignore
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';

VMdEditor.use(createEmojiPlugin());

VMdEditor.use(githubTheme, {
    Hljs: hljs,
    codeHighlightExtensionMap: {
        vue: 'xml',
    },
});


const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(VMdEditor)
app.mount('#app')

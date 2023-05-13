import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './plugins';
import VResizeDrawer from './index';
import CodeBlock from 'vue3-code-block';

const app = createApp(App);
app.use(VResizeDrawer);
app.use(CodeBlock);

registerPlugins(app);

app.mount('#app');

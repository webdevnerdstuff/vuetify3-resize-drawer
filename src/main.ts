import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import { registerPlugins } from '@/plugins';
import VResizeDrawer from '@/index';

const app = createApp(App);
app.use(VResizeDrawer);

registerPlugins(app);

app.mount('#app');

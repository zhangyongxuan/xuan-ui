import Theme from 'vitepress/theme';
import XuanUI from 'xuan-vue-ui';
import 'xuan-vue-ui/lib/style.css';
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(XuanUI);
    registerComponents(app);
  }
}
import Theme from 'vitepress/client/theme-default';
import XuanUI from 'xuan-vue-ui'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import 'xuan-vue-ui/lib/style.css'
import { registerComponents } from './register-components'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(XuanUI);
    registerComponents(app);
  }
}
import DefaultTheme from 'vitepress/theme'
import XuanUI from 'xuan-vue-ui'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import 'xuan-vue-ui/lib/style.css'
import { registerComponents } from './register-components'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(XuanUI)
    registerComponents(app)
  }
}
import DefaultTheme from 'vitepress/theme'
import XuanUI from 'xuan-vue-ui'
import 'xuan-vue-ui/lib/style.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(XuanUI)
  }
}
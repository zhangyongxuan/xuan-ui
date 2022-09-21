import VTD from 'vitepress-theme-demoblock';
export default{
    // 网站标题
    title: 'xuan-vue-ui',
    // 网站描述
    description: '一个基于vue3的自用ui组件库',
    // 打包目录
    dest: './dist',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    plugins: [],
    themeConfig: {
        logo: './logo.png',
        // 展示搜索框
        algolia: {
            appId: "EVAA80MZG2",
            apiKey: '67995fb2217bd2e764c4a5c028fb90ff',
            indexName: 'vite-press',
            searchParameters: {
                faeFilters: ['tags: guide, api']
            }
        },
        nav: [{
            text: '首页',
            link: '/',
        },
        {
            text: 'GitHub',
            link: 'https://github.com/zhangyongxuan/xuan-ui.git',
        },
        ],
        // 侧边栏
        sidebar: getDemoSidebar()
    },
    markdown: {
        config: (md) => {
            const {
                demoBlockPlugin
            } = VTD;
            md.use(demoBlockPlugin);
        },
        // lineNumbers:true
    }
}

function getDemoSidebar() {
    return [
        {
            text: "介绍",
            items: [
                {
                    text: "介绍",
                    link: "/components/index"
                },
                {
                    text: "安装使用",
                    link: "/components/start"
                },
            ]
        },

        // {
        //     text: "开发指南",
        //     items: [{
        //         text: "安装"
        //     }]
        // },
        // {
        //     text: "快速开始",
        //     link: "/"
        // },
        // {
        //     text: "基础组件",
        //     items: [{
        //         text: "Button 按钮",
        //         link: "/components/button/"
        //     },
        //     {
        //         text: "Icon 图标",
        //         link: "/components/icon/"
        //     },
        //     ],
        // },

    ]
}
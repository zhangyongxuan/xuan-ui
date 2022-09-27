import VTD from 'vitepress-theme-demoblock';
// import 'xuan-vue-ui/lib/style.css';
export default {
    // 网站标题
    title: 'xuan-vue-ui',
    lang: 'zh_cn',
    // 网站描述
    description: '一个基于vue3的自用ui组件库',
    // 打包目录
    base:'/xuidocs/',
    outDir:'../xuidocs',
    dest: './xuidocs',
    plugins: [],
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/xuidocs/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/logo1.png',
        // 展示搜索框
        algolia: {
            appId: "EVAA80MZG2",
            apiKey: '67995fb2217bd2e764c4a5c028fb90ff',
            indexName: 'xuan_ui_docs',
            // searchParameters: {
            //     faeFilters: ['tags: guide, api']
            // }
        },
        socialLinks:[

            {
                icon: 'github',
                link: 'https://github.com/zhangyongxuan/xuan-ui.git',
            },
        ],
        nav: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '指南',
                link: '/development/',
            },
            {
                text: '组件',
                link: '/components/',
            }

        ],
        // 侧边栏
        sidebar: {
            '/components/': [
                {
                    text: '开发指南',
                    items: [
                        {
                            text: '快速上手',
                            link: '/components/'
                        }
                    ],

                },
                {
                    text: '组件',
                    items: [
                        {
                            text: '视频字符化组件',
                            link: '/components/video-to-char'
                        }
                    ],
                }
            ],
            '/development/': [

            ]
        },
        lastUpdatedText: 'Updated Date',
        footer: {
            message: '自用组件',
            copyright: 'Copyright © 2019-2022 Xuan-vue-ui'
          }
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
            text: "开发指南",
            collapsible: true,
            items: [
                {
                    text: "安装",
                    link: "/components/index",
                },
                {
                    text: "快速使用",
                    link: "/components/start"
                }
            ]
        },
        {
            text: "组件",
            collapsible: true,
            items: [
                {
                    text: "视频字符化",
                    link: "/components/video-to-char/index"
                }
            ]
        },

    ]
}
const { config } = require("vuepress-theme-hope");
module.exports = config({
    title: "前端坎坷之路", //这里是博客标题
    description: '日常学习总结，没事儿多来逛逛', //博客描述
    dest: 'public', //博客部署时输出的文件夹
    head: [
        ['link', {}], //favicon图标设置
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'hope', //vuepress挂载的主题
    locales: {
        '/': {
            lang: 'zh-CN',
            // 多语言下拉菜单的标题
            selectText: '选择语言',
            // 该语言在下拉菜单中的标签
            label: '简体中文',
            // 编辑链接文字
            editLinkText: '在 GitHub 上编辑此页',
            // Service Worker 的配置
            serviceWorker: {
                updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                }
            },
            // 当前 locale 的 algolia docsearch 选项
            algolia: {},
            nav: [
                { text: '嵌套', link: '/zh/nested/' }
            ],
            sidebar: {
                '/zh/': [ /* ... */ ],
                '/zh/nested/': [ /* ... */ ]
            }
        },
    },
    themeConfig: {
        darkmode: 'auto-switch',
        hostname: ' https://mister-hope.github.io',
        blog: {
            avatar: '/logo.jpg',
            name: '菜鸡小谢',
            links: {
                'QQ': 1803493121,
                'Wechat': 'XZH_ddl'
            }
        }
    },
    markdown: {
        lineNumbers: true
    }
})
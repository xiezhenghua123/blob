const { config } = require("vuepress-theme-hope");
module.exports = config({
    base: '/blob/',
    title: "前端坎坷之路", //这里是博客标题
    description: '日常学习总结，没事儿多来逛逛', //博客描述
    dest: 'public', //博客部署时输出的文件夹
    head: [
        ['link', {}], //favicon图标设置
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        [
            "script",
            { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
        ],
        [
            "script",
            {
                src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
            },
        ],
        [
            "script",
            { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
        ],
        // vue 只需要 vue 库
        ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    ],
    theme: 'hope', //vuepress挂载的主题
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    themeConfig: {
        pwa: {
            cachePic: true,
            maxPicSize: '2048KB'
        },
        mdEnhance: {
            demo: true,
        },
        footer: {
            display: true,
            content: 'Copyright 2021 zhenghuaxie All rights Reserved.'
        },
        nav: [
            { text: "首页", link: "/", icon: "creative" },
            { text: "vuepress", link: "/article/vuepress/", icon: "creative" }
        ],
        sidebar: {
            '/article/vuepress/': ['', 'firstStudy']
        },
        darkmode: 'auto-switch',
        hostname: 'https://xiezhenghua123.github.io',
        blog: {
            avatar: '/logo.jpg',
            name: '菜鸡小谢',
            links: {
                'QQ': 'tencent://message/?uin=1803493121',
                'Wechat': '/blob/article/links/weChat/',
                'Github': 'https://github.com/xiezhenghua123'
            }
        }
    },
    markdown: {
        lineNumbers: true
    }

})
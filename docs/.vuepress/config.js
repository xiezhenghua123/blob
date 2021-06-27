const { config } = require("vuepress-theme-hope");
module.exports = config({
    base: '/blob/',
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
        },
    },
    themeConfig: {
        footer: {
            display: true,
            content: 'Copyright 2021 zhenghuaxie All rights Reserved.'
        },
        nav: [
            { text: "指南", link: "/article/array/", icon: "creative" },
        ],

        darkmode: 'auto-switch',
        hostname: 'https://xiezhenghua123.github.io',
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
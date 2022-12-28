const path = require("path");

//前端目录结构
const MENU = {
    web: [ //前端目录结构
        '/web/首页.md',
        '/web/知识点.md',
        '/web/HTML.md',
        '/web/CSS.md',
        '/web/vue.md',
        '/web/react.md',
        '/web/ES6.md',
        '/web/typescript.md',
        '/web/JS思维导图.md',
        '/web/JS函数大全.md',
        '/web/算法.md',
        '/web/前端性能优化.md',
        '/web/iconfont.md',
        '/web/WEB安全.md',
        '/web/canvas&svg.md',
        '/web/flex&grid.md',
    ],
    server: [ //后端目录结构
        '/server/首页.md',
        '/server/知识点.md',
        '/server/npm&yarn.md',
        '/server/node.md',
        '/server/sql语句.md',
        '/server/mongoDB.md',
        '/server/Create React App.md',
    ],
    interview: [ //面试目录结构
        '/interview/优秀博主.md',
        '/interview/精品文章.md',
        '/interview/面试点总结-1.md',
        '/interview/面试点总结-2.md',
        '/interview/vue思维导图.md',
        '/interview/Vue源码学习笔记.md',
        '/interview/vue双向绑定的简单实现.md',
    ],
    accumulation: [ //积累
        '/accumulation/github优秀库.md',
        '/accumulation/cpu.md',
        '/accumulation/js奇技淫巧.md',
        '/accumulation/js新特性.md',
        '/accumulation/js类.md',
        '/accumulation/正则表达式.md',
    ],
    tool: [//工具
        '/tool/markdown语法.md',
        '/tool/git使用手册.md',
        '/tool/webpack.md',
        '/tool/浏览器调试.md',
        '/tool/Mockjs.md',
    ],
}

module.exports = {
    title: "chen's blog",
    base: "/chendreamer.blog/",
    port: "9999",
    description: 'chendreamer的博客',
    head: [
        ['link', { rel: 'icon', href: 'image/logo.png' }]
    ],

    markdown: {
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@src/, path.resolve(__dirname, '../code/'))
        },
    },

    themeConfig: {
        locales: {
            sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
            lastUpdated: true,
            lastUpdatedText: '最近更新', // 文档更新时间：每个文件git最后提交的时间
            '/': {
                navbar: [{
                    text: '前端',
                    link: '/web/',
                    children: MENU.web
                },
                {
                    text: '后端',
                    link: '/server/',
                    children: MENU.server
                },
                {
                    text: '面试题',
                    link: '/interview/',
                    children: MENU.interview
                },
                {
                    text: '积累',
                    link: '/accumulation/',
                    children: MENU.accumulation
                },
                {
                    text: '工具类',
                    link: '/tool/',
                    children: MENU.tool
                },
                {
                    text: '示例项目',
                    children: [{
                        text: '记事本',
                        link: 'https://chendreamer.github.io/notepad-for-work/',
                    },
                    {
                        text: 'ui-design',
                        link: 'https://chendreamer.github.io/ui-design/',
                    },
                    {
                        text: '地图app',
                        link: 'https://chendreamer.github.io/subwaymap/',
                    }],
                },
                {
                    text: '我的GitHub',
                    link: 'https://github.com/chendreamer'
                }
                ],
                sidebar: {
                    '/web/': [{
                        text: '前端',
                        children: MENU.web
                    }],
                    '/server/': [{
                        text: '后端',
                        children: MENU.server
                    }],
                    '/interview/': [{
                        text: '面试题',
                        children: MENU.interview
                    }],
                    '/accumulation/': [{
                        text: '积累',
                        children: MENU.accumulation
                    }],
                    '/tool/': [{
                        text: '工具',
                        children: MENU.tool
                    }]
                }
            },
        },
    }
}
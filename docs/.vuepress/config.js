const path = require("path");

//前端目录结构
const menu = {
    web : [ //前端目录结构
        '/web/首页.md',
        '/web/知识点.md',
        '/web/HTML.md',
        '/web/CSS.md',
        '/web/vue.md',
        '/web/react.md',
        '/web/ES6.md',
        '/web/webpack.md',
        '/web/typescript.md',
        '/web/Mockjs.md',
        '/web/flex&grid.md',
        '/web/markdown语法.md',
        '/web/git使用手册.md',
        '/web/JS思维导图.md',
        '/web/JS函数大全.md',
        '/web/浏览器调试.md',
        '/web/算法.md',
        '/web/前端性能优化.md',
        '/web/iconfont.md',
        '/web/WEB安全.md',
        '/web/canvas&svg.md',
    ],
    server :  [ //后端目录结构
        '/server/首页.md',
        '/server/知识点.md',
        '/server/npm&yarn.md',
        '/server/node.md',
        '/server/sql语句.md',
        '/server/mongoDB.md',
        '/server/Create React App.md',
    ],
    interview : [ //面试目录结构
        '/interview/优秀博主.md',
        '/interview/精品文章.md',
        '/interview/vue思维导图.md',
        '/interview/Vue源码学习笔记.md',
        '/interview/vue双向绑定的简单实现.md',
        '/interview/js类.md',
        '/interview/js奇技淫巧.md',
        '/interview/面试点总结-1.md',
        '/interview/面试点总结-2.md'
    ]
}

module.exports = {
    title: "chen's blog",
    base: "/chendreamer.blog/",
    port: "9888",
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
                        children: menu.web
                    },
                    {
                        text: '后端',
                        link: '/server/',
                        children: menu.server
                    },
                    {
                        text: '面试题',
                        link: '/interview/',
                        children: menu.interview
                    },
                    {
                        text: '核心项目',
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
                            },
                        ],
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/chendreamer'
                    },
                ],
                sidebar: {
                    '/web/': [{
                        text: '前端',
                        children: menu.web
                    }],
                    '/server/': [{
                        text: '后端',
                        children: menu.server
                    }],
                    '/interview/': [{
                        text: '面试题',
                        children: menu.interview
                    }]
                }
            },
        },

    }
}
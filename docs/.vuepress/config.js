module.exports = {
	title: "chen's blog",
	base: "/",
	description: 'chendreamer的博客',
	head: [
		['link', { rel: 'icon', href: 'image/logo.png' }]
	],


	themeConfig: {

		locales: {
			sidebarDepth: 2,// e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
			lastUpdated: true,
			lastUpdatedText: '最近更新', // 文档更新时间：每个文件git最后提交的时间

			'/': {
				navbar: [
					{
						text: '前端',
						link: '/web/',
						children: [
							'/web/首页.md',
							'/web/知识点.md',
							'/web/markdown语法.md',
							'/web/ES6.md',
							'/web/flex&grid.md',
							'/web/git使用手册.md',
							'/web/js思维导图.md',
							'/web/JS函数大全.md',
							'/web/vue.md',
							'/web/Mockjs.md',
							'/web/WEB安全.md',
							'/web/webpack.md',
							'/web/typescript.md'
						]
					},
					{
						text: '后端',
						link: '/server/',
						children: [
							'/server/首页.md',
							'/server/知识点.md',
							'/server/node.md',
							'/server/sql语句.md',
							'/server/mongoDB.md'
						]
					},
					{
						text: 'GitHub',
						link: 'https://github.com/chendreamer'
					},
					{
						text: '百度',
						link: 'https://baidu.com'
					}
				],
				sidebar: {
					'/web/': [
						{
							text: '前端',
							children: [
								'/web/首页.md',
								'/web/知识点.md',
								'/web/markdown语法.md',
								'/web/ES6.md',
								'/web/flex&grid.md',
								'/web/git使用手册.md',
								'/web/js思维导图.md',
								'/web/JS函数大全.md',
								'/web/vue.md',
								'/web/Mockjs.md',
								'/web/WEB安全.md',
								'/web/webpack.md',
								'/web/typescript.md'
							]
						}
					],
					'/server/': [
						{
							text: '后端',
							children: [
								'/server/首页.md',
								'/server/知识点.md',
								'/server/node.md',
								'/server/sql语句.md',
								'/server/mongoDB.md'
							]
						}
					]
				}
			},
		},

	}
}

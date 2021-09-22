module.exports = {
	title: "chen's blog",
	base: "/",
	port: "9888",
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
							'/web/HTML.md',
							'/web/CSS.md',
							'/web/vue.md',
							'/web/ES6.md',
							'/web/webpack.md',
							'/web/typescript.md',
							'/web/Mockjs.md',
							'/web/flex&grid.md',
							'/web/markdown语法.md',
							'/web/git使用手册.md',
							'/web/JS思维导图.md',
							'/web/JS函数大全.md',
							'/web/算法.md',
							'/web/iconfont.md',
							'/web/WEB安全.md',
							
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
						text: '面试题',
						link: '/interview/',
						children: [
							'/interview/js类.md'
						]
					},
					{
						text: 'GitHub',
						link: 'https://github.com/chendreamer'
					},
				],
				sidebar: {
					'/web/': [
						{
							text: '前端',
							children: [
								'/web/首页.md',
								'/web/知识点.md',
								'/web/HTML.md',
								'/web/CSS.md',
								'/web/vue.md',
								'/web/ES6.md',
								'/web/webpack.md',
								'/web/typescript.md',
								'/web/Mockjs.md',
								'/web/flex&grid.md',
								'/web/markdown语法.md',
								'/web/git使用手册.md',
								'/web/JS思维导图.md',
								'/web/JS函数大全.md',
								'/web/算法.md',
								'/web/iconfont.md',
								'/web/WEB安全.md',
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
					],
					'/interview/': [
						{
							text: '面试题',
							children: [
								'/interview/js类.md'
							]
						}
					]
				}
			},
		},

	}
}

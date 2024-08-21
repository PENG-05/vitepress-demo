import { defineConfig } from 'vitepress';
import { set_sidebar } from './utils/index';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [['link', { rel: 'icon', href: '/3.jpg' }]],
	title: "peng's docs",
	description: 'A VitePress Site',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		outlineTitle: '目录', //类似大纲
		outline: [2, 6], // 2级标题到6级标题的索引，默认索引二级标题
		logo: '/1.jpg',
		nav: [
			{
				text: 'home',
				items: [
					{ text: '首页', link: '/' },
					{ text: 'markdown实例', link: '/introduce/page_one' },
				],
			},
			{ text: 'examples', link: '/markdown-examples' }, // link 绝对路径
		],
		// 文章页，默认三边栏，右边根据标题生成的，左边是sidebar---vitepress官网
		// 一个一个手写items比较麻烦，可以用脚本自动生成侧边栏
		// sidebar: [
		// 	{
		// 		text: 'Examples',
		// 		items: [
		// 			{ text: 'Markdown 演示', link: '/markdown-examples' },
		// 			{ text: 'Runtime API 演示', link: '/api-examples' },
		// 		],
		// 	},
		// 	{
		// 		text: 'Examples',
		// 		items: [
		// 			{ text: 'Markdown 演示', link: '/markdown-examples' },
		// 			{ text: 'Runtime API 演示', link: '/api-examples' },
		// 		],
		// 	},
		// ],
		sidebar: { '/page_one/vue': set_sidebar('/page_one/vue'), '/introduce/page_one': set_sidebar('/introduce/page_one') },
		// sidebar: false,
		// aside:"left", //设置右侧侧边栏在左侧使用

		socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
		// 设置搜索框的样式
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档',
					},
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: {
							selectText: '选择',
							navigateText: '切换',
						},
					},
				},
			},
		},
    // 底部设置
    footer: {
      copyright: "Copyright@ 2024 PENG"
    }
	},
});

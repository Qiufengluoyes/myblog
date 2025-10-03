import Key from "../i18nKey";
import type { Translation } from "../translation";

export const zh_CN: Translation = {
	[Key.home]: "主页",
	[Key.about]: "关于",
	[Key.archive]: "归档",
	[Key.friends]: '友链',
	[Key.anime]: "追番",
	[Key.search]: "搜索",

	[Key.tags]: "标签",
	[Key.categories]: "分类",
	[Key.recentPosts]: "最新文章",

	[Key.comments]: "评论",

	[Key.untitled]: "无标题",
	[Key.uncategorized]: "未分类",
	[Key.noTags]: "无标签",

	[Key.wordCount]: "字",
	[Key.wordsCount]: "字",
	[Key.minuteCount]: "分钟",
	[Key.minutesCount]: "分钟",
	[Key.postCount]: "篇文章",
	[Key.postsCount]: "篇文章",

	[Key.themeColor]: "主题色",

	[Key.lightMode]: "亮色",
	[Key.darkMode]: "暗色",
	[Key.systemMode]: "跟随系统",

	[Key.more]: "更多",

	[Key.author]: "作者",
	[Key.publishedAt]: "发布于",
	[Key.license]: "许可协议",

	// 番剧页面
	[Key.animeTitle]: "我的追番记录",
	[Key.animeSubtitle]: "记录我的二次元之旅",
	[Key.animeList]: "追番列表",
	[Key.animeTotal]: "总数",
	[Key.animeWatching]: "追番中",
	[Key.animeCompleted]: "已追完",
	[Key.animeAvgRating]: "平均评分",
	[Key.animeStatusWatching]: "追番中",
	[Key.animeStatusCompleted]: "已追完",
	[Key.animeStatusPlanned]: "计划中",
	[Key.animeYear]: "年份",
	[Key.animeStudio]: "制作",
	[Key.animeEmpty]: "暂无追番数据",
	[Key.animeEmptyBangumi]: "请检查 Bangumi 配置或网络连接",
	[Key.animeEmptyLocal]: "请在 src/data/anime.ts 文件中添加番剧信息",
};

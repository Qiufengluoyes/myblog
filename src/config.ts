import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "枫落丰源",
	subtitle: "和你的日常，就是奇迹",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th', 'vi'
	themeColor: {
		hue: 220, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "https://image.091026.xyz/img0.webp", 
		position: "center", 
		credit: {
			enable: true, 
			text: "初音未来-Deco27", 
			url: "https://www.bilibili.com/video/BV1JThqzwEGq/",
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
	bangumi: {
		userId: "qiufengluoye", // 在此处设置你的Bangumi用户ID，可以设置为 "sai" 测试
	},
  
	anime: {
		mode: "bangumi", // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置
	},
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "开往",
			url: "https://www.travellings.cn/plain.html", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "枫落丰源",
	bio: "和你的日常，就是奇迹",
	links: [
		{
			name: "哔哩哔哩",
			icon: "mingcute:bilibili-line", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/1735270180/",
		},
		{
			name: "Steam",
			icon: "mdi:steam",
			url: "https://steamcommunity.com/id/qiufengluoye44/",
		},
		{
			name: "GitHub",
			icon: "tabler:brand-github",
			url: "https://github.com/Qiufengluoyes",
		},
		{
			name: "电子邮箱",
			icon: "ic:round-mail-outline",
			url: "mailto:qiufengluoyes@outlook.com",
		},
		{
			name: "开往-友链接力",
			icon: "ic:sharp-directions-subway",
			url: "https://www.travellings.cn/plain.html",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

// 姓名：胡紫慧
// ✨   身份证号码：430611201001160042【女 | 2010年1月16日 | 湖南省 岳阳市 君山区】
// ✨   出生地：湖南省岳阳市君山区
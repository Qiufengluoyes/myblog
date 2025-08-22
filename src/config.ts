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
		hue: 160, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "https://image.091026.xyz/image0.webp", 
		position: "center", 
		credit: {
			enable: true, 
			text: "《蔚蓝档案》栗村 爱莉", 
			url: "https://kivo.wiki/data/character/10",
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
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "网站状况监测",
			url: "https://status.feng1026.top", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "开往",
			url: "https://www.travellings.cn/plain.html", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "枫落丰源",
	bio: "和你的日常，就是奇迹",
	links: [
		{
			name: "哔哩哔哩",
			icon: "mingcute:bilibili-line", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/1735270180",
		},
		{
			name: "GitHub",
			icon: "tabler:brand-github",
			url: "https://github.com/Qiufengluoyes",
		},
		{
			name: "Steam",
			icon: "mdi:steam",
			url: "https://steamcommunity.com/id/qiufengluoye44/",
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
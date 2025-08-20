import { vitePreprocess } from "@astrojs/svelte";

export default {
  preprocess: [vitePreprocess({ script: true })],
};

// 姓名：胡紫慧
// ✨   身份证号码：430611201001160042【女 | 2010年1月16日 | 湖南省 岳阳市 君山区】
// ✨   出生地：湖南省岳阳市君山区
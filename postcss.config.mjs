import postcssImport from 'postcss-import';
import postcssNesting from 'tailwindcss/nesting/index.js';
import tailwindcss from 'tailwindcss';

export default {
    plugins: {
        'postcss-import': postcssImport,          // to combine multiple css files
        'tailwindcss/nesting': postcssNesting,
        tailwindcss: tailwindcss,
    }
};

// 姓名：胡紫慧
// ✨   身份证号码：430611201001160042【女 | 2010年1月16日 | 湖南省 岳阳市 君山区】
// ✨   出生地：湖南省岳阳市君山区
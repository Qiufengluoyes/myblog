// src/pages/api/anime/[anime].ts
import type { APIRoute } from "astro";
import { siteConfig } from "../../../config";

const BANGUMI_API_BASE = "https://api.bgm.tv";
const BANGUMI_USER_ID = siteConfig.bangumi?.userId || "your-user-id";

export const GET: APIRoute = async ({ params }) => {
  try {
    const { anime } = params;
    if (!anime || isNaN(Number(anime))) {
      return new Response(JSON.stringify({ error: "无效的番剧ID" }), { status: 400 });
    }
    const animeId = Number(anime);

    // 1. 代理请求番剧基础信息
    const subjectRes = await fetch(`${BANGUMI_API_BASE}/v0/subjects/${animeId}`);
    if (!subjectRes.ok) throw new Error("番剧信息请求失败");
    const subjectData = await subjectRes.json();

    // 2. 代理请求用户收藏状态
    const collectionRes = await fetch(`${BANGUMI_API_BASE}/v0/users/${BANGUMI_USER_ID}/collections/${animeId}`);
    const collectionData = collectionRes.ok ? await collectionRes.json() : null;

    // 3. 格式化数据并返回（与动态路由页一致）
    const result = {
      id: animeId,
      title: subjectData.name_cn || subjectData.name || "未知标题",
      episodes: subjectData.eps || 0,
      userProgress: collectionData?.ep_status || 0,
      userStatus: collectionData?.type === 3 ? "watching" : collectionData?.type === 2 ? "completed" : collectionData?.type === 1 ? "planned" : "none",
      userRating: collectionData?.rate ? Number(collectionData.rate.toFixed(1)) : 0,
    };

    return new Response(JSON.stringify(result), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate", // 禁用代理缓存
      },
    });
  } catch (error) {
    console.error("API代理错误：", error);
    return new Response(JSON.stringify({ error: "数据获取失败" }), { status: 500 });
  }
};
import { resolve } from "path";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR

  if (!res.ok) {
    throw new Error("エラーが発生");
  }

  // ローディングの表示のため意図的に遅延を発生
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const articles = await res.json();
  return articles;
};
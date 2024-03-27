import { resolve } from "path";
import { Article } from "./types";
import { notFound } from "next/navigation";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3005/posts`, { cache: "no-store" }); //SSR

  if (!res.ok) {
    throw new Error("エラーが発生");
  }

  // ローディングの表示のため意図的に遅延を発生
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = await res.json();
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3005/posts/${id}`, {
    next: { revalidate: 60 },
  }); //ISR

  // ページがない場合
  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生");
  }

  // ローディングの表示のため意図的に遅延を発生
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const article = await res.json();
  return article;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string,
  imageId: number
): Promise<Article> => {
  const currentDateTime = new Date().toISOString();
  const res = await fetch(`http://localhost:3005/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      content,
      imageId,
      createdAt: currentDateTime,
    }),
  });

  if (!res.ok) {
    throw new Error("エラーが発生");
  }

  // ローディングの表示のため意図的に遅延を発生
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const newArticle = await res.json();
  return newArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3005/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("エラーが発生");
  }

  // ローディングの表示のため意図的に遅延を発生
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const deleteArticle = await res.json();
  return deleteArticle;
};

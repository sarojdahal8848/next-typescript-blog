import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export const fetchCategories = async () => api.get("/api/categories");
export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);
export const fetchArticlBySlug = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

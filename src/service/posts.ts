import { Post } from "../models/post";
import fetcher from "../utils/fetcher";

export async function getPosts() {
  const { data, error } = await fetcher<Post[]>(`/posts`);
  return { data, error };
}

export async function getPostById(id: number) {
  const { data, error } = await fetcher<Post>(`/posts/${id}`);
  return { data, error };
}

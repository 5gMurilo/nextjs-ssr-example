import { Comment } from "../models/comment";
import fetcher from "../utils/fetcher";

export async function getComments() {
  const { data, error } = await fetcher<Comment[]>(`/comments`);
  return { data, error };
}

export async function getCommentByPostId(id: number) {
  const { data, error } = await fetcher<Comment[]>(`/comments?postId=${id}`);
  return { data, error };
}

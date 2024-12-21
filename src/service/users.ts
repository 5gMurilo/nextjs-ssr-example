import { User } from "../models/user";
import fetcher from "../utils/fetcher";

export async function getUsers() {
  const { data, error } = await fetcher<User[]>(`/users`);
  return { data, error };
}

export async function getUserById(id?: number) {
  if (!id) return { data: null, error: null };
  const { data, error } = await fetcher<User>(`/users/${id}`);
  return { data, error };
}

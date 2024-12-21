import PostsTable from "@/src/components/posts/PostsTable";
import { getComments } from "@/src/service/comments";
import { getPosts } from "@/src/service/posts";
import { getUsers } from "@/src/service/users";

//server side ssr
export default async function Home() {
  const { data: posts } = await getPosts();
  const { data: users } = await getUsers();
  const { data: comments } = await getComments();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1>Home</h1>
      <PostsTable posts={posts} users={users} comments={comments} />
    </main>
  );
}

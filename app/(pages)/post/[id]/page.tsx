import { Separator } from "@/components/ui/separator";
import PostHeader from "@/src/components/posts/PostHeader";
import { getCommentByPostId } from "@/src/service/comments";
import { getPostById } from "@/src/service/posts";
import { getUserById } from "@/src/service/users";

async function PostById({ params }: { params: { id: number } }) {
  const { id } = params;

  console.log(id);

  const { data: postData, error: postError } = await getPostById(id);
  const { data: userData, error: userError } = await getUserById(
    postData ? postData.userId : undefined
  );
  const { data: commentsData, error: commentsError } = await getCommentByPostId(
    id
  );

  if (postError || userError || commentsError) {
    return (
      <div>
        <h1>Error: {postError || userError || commentsError}</h1>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center my-4">
      {postData && (
        <section className="w-7/12">
          <PostHeader
            title={postData.title}
            autor={userData?.name || undefined}
          />
          <Separator className="my-4" />
          <p>{postData.body}</p>
        </section>
      )}

      {commentsData && (
        <>
          <Separator className="my-4" />
          <section className="w-7/12 mt-4">
            <h3 className="text-2xl font-bold">Comments</h3>
            {commentsData.map((comment) => (
              <div
                key={comment.id}
                className="my-2 p-2 border border-gray-200 rounded"
              >
                <h4 className="font-semibold">{comment.email}</h4>
                <p>{comment.body}</p>
              </div>
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default PostById;

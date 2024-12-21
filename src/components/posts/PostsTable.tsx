import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Comment } from "@/src/models/comment";
import { Post } from "@/src/models/post";
import { User } from "@/src/models/user";
import PostTableRow from "./PostTableRow";

interface IPostsTableProps {
  posts?: Post[];
  users?: User[];
  comments?: Comment[];
}

function PostsTable({ comments, posts, users }: IPostsTableProps) {
  if (!posts) return null;

  return (
    <Table>
      <TableHeader className="w-max">
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Autor</TableHead>
          <TableHead>Comments</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-max">
        {posts.map((post) => {
          const user = users?.find((user) => user.id === post.userId);
          const postComments = comments?.filter(
            (comment) => comment.postId === post.id
          );
          return (
            <PostTableRow
              key={`${post.id}-post-row`}
              postId={post.id}
              title={post.title}
              user={user?.name || ""}
              postComments={postComments?.length || 0}
            />
          );
        })}
      </TableBody>
    </Table>
  );
}

export default PostsTable;

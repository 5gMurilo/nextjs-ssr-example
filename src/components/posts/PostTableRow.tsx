import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useId } from "react";

function PostTableRow({
  postId,
  title,
  postComments,
  user,
}: {
  postId: number;
  title: string;
  user: string;
  postComments: number;
}) {
  const id = useId();

  return (
    <TableRow key={id}>
      <TableCell>
        <Link href={`/post/${postId}`}>{title}</Link>
      </TableCell>
      <TableCell>
        <h2 className="font-medium">{user}</h2>
      </TableCell>
      <TableCell>{postComments}</TableCell>
    </TableRow>
  );
}

export default PostTableRow;

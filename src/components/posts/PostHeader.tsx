"use client";

import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function PostHeader({ title, autor }: { title: string; autor?: string }) {
  const router = useRouter();
  return (
    <section className="w-7/12">
      <Button variant={"ghost"} onClick={() => router.back()}>
        <MoveLeftIcon />
        Go Back
      </Button>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {autor && <h4 className="font-semibold">Autor: {autor}</h4>}
    </section>
  );
}

export default PostHeader;

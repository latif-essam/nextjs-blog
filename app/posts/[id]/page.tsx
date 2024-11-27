"use client";
import jsonApi from "@/api";
import CommentCard from "@/components/CommentCard";
import { useAppSelector } from "@/store";
import { selectPostById } from "@/store/reducers/posts";
import { Comment } from "@/types/post";
import { capitalizeFirstLetter } from "@/utils/helpers";
import { Icon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Posts({ params }: { params: { id: string } }) {
  const [comments, setComments] = useState<Comment[] | []>([]);
  const post = useAppSelector((state) =>
    selectPostById(state.posts.list, params.id)
  );

  useEffect(() => {
    const fetchPostComments = async () => {
      const res = await jsonApi.get(`comments?postId=${params.id}`);
      const data = await res.data;
      setComments(data);
    };
    fetchPostComments();
  }, [params.id]);

  return (
    <div className="bg-gray-100/10 min-h-screen">
      <div className="container mx-auto p-2">
        <Link
          href={"/posts"}
          className="flex gap-x-2 text-white hover:text-black items-center shadow-md w-fit p-2 hover:shadow-xl "
        >
          <FaArrowLeft size={20} />
          <span>Back to posts</span>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-transparent p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-indigo-600">
            {capitalizeFirstLetter(post?.title as string)}
          </h1>
          g<p className="text-lg text-zinc-300 mb-6">{post?.body}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>
        <div className="flex flex-col items-center space-y-4">
          {comments.map((comment) => (
            <CommentCard key={comment.id} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

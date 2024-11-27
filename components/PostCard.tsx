import { Post } from "@/types/post";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/utils/helpers";
import Bookmark from "./BookMark";
interface PostCardProps {
  post: Post;
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="max-w-[100%] flex flex-col justify-between bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg relative">
      <Bookmark postId={post.id} />
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">
          {post.title.length >= 50
            ? capitalizeFirstLetter(post.title.slice(0, 50)) + "..."
            : capitalizeFirstLetter(post.title)}
        </CardTitle>
        <CardDescription className="text-gray-800 mt-2">
          {post.body.split(" ").slice(0, 20).join(" ") +
            (post.body.split(" ").length > 20 ? "..." : "")}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-start items-center mt-4">
        {/* <p className="text-sm text-gray-600">User ID: {post?.userId}</p> */}
        <Link href={`/posts/${post?.id}`} className="">
          <span className="cursor-pointer text-blue-600 hover:text-blue-800">
            Read More
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

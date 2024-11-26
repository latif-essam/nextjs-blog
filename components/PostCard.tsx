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
interface PostCardProps {
  post: Post;
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="max-w-[100%] md:max-w-[50%] lg:max-w-[30%] flex flex-col justify-between bg-sky-50">
      <CardHeader>
        <CardTitle>
          {post.title.length >= 50
            ? post.title.slice(0, 50) + "....."
            : post.title}
        </CardTitle>
        <CardDescription>
          {" "}
          {post.body.split(" ").slice(0, 20).length >= 20
            ? post.body.split(" ").slice(0, 20).join(" ") + "....."
            : post.body}
        </CardDescription>
      </CardHeader>

      <CardFooter className="justify-between">
        <p>User Id: {post?.userId}</p>
        <Link href={`/posts/${post?.id}`}>
          <span className=" cursor-pointer text-blue-700">{"Read More"}</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

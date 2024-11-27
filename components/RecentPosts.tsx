import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/types/post";

const RecentPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="w-full lg:w-3/4 order-2 lg:order-1 my-10 lg:my-0">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;

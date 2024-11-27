"use client";
import PostCard from "@/components/PostCard";
import { useAppSelector } from "@/store";
import React from "react";

const Booked = () => {
  const { list } = useAppSelector((state) => state.posts);
  const bookedIndexes = useAppSelector((state) => state.posts.booked);

  const bookedList = list.filter((p) =>
    bookedIndexes.includes(p.id.toString())
  );
  console.log({ bookedList });

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="flex justify-center items-center gap-x-3 my-8 px-6">
        <h2 className="text-3xl font-bold text-white">Bookmarked Posts</h2>
      </div>
      <div className="container mx-auto px-6">
        {bookedList.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-white">
            <p className="text-lg mb-4">You have no bookmarked posts yet.</p>
            <p className="text-lg">
              Start exploring and bookmark your favorite posts!
            </p>
          </div>
        ) : (
          <div className="max-w-[1024px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bookedList.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booked;

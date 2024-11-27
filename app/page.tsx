"use client";
import HeaderImage from "@/components/HeaderImage";
import RecentPosts from "@/components/RecentPosts";
import Topics from "@/components/Topics";
import PlaceholderCard from "@/components/PlaceholderCard";
import { useAppSelector, useAppDispatch } from "@/store";
import { fetchPosts } from "@/store/actions/postsActions";
import React, { useEffect } from "react";
import home_header from "@/assets/home-header.png";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.list);
  const isLoading = useAppSelector((state) => state.posts.status);
  const topics = ["Technology", "Health", "Lifestyle", "Travel", "Food"];

  useEffect(() => {
    dispatch(fetchPosts(2));
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <HeaderImage title="Hi there 👋" image={home_header} />
      <div className="container flex flex-col lg:flex-row lg:space-y-6 items-start gap-4">
        <Topics topics={topics} />
        {isLoading === "loading" ? (
          <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <PlaceholderCard key={index} />
              ))}
            </div>
          </div>
        ) : (
          <RecentPosts posts={posts.slice(0, 5)} />
        )}
      </div>
    </div>
  );
};

export default HomePage;

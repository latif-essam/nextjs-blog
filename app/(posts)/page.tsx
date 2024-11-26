"use client";
import PostCard from "@/components/PostCard";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchPosts } from "@/store/actions/postsActions";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

const Posts = () => {
  const { list, status } = useAppSelector((state) => state.posts);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState(list);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!filteredList.length) {
      setFilteredList(list);
    }
    if (status === "idle" && !list.length) {
      dispatch(fetchPosts(1));
    }
  }, [dispatch, filteredList.length, list, status]);

  const handleSearch = (text: string) => {
    setSearch(text);
    const newList = list.filter((p) =>
      p.title.toLocaleLowerCase().includes(text.toLowerCase())
    );
    setFilteredList(newList);
  };
  // update when leave search

  useEffect(() => {
    setFilteredList(list);
  }, [list]);
  return (
    <div className="">
      <div className="flex flow-row justify-evenly  items-center gap-x-3 my-4">
        <Input
          onChange={(e) => handleSearch(e.target.value)}
          value={search}
          type="text"
          id="search"
          placeholder="search for posts by post title"
        />
      </div>
      <div className="max-w-[1024px] flex justify-start items-stretch flex-wrap gap-5">
        {filteredList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

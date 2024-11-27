import { useAppDispatch, useAppSelector } from "@/store";
import { toggleBooked } from "@/store/reducers/posts";
import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Bookmark: React.FC<{ postId: number }> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const bookmarkedPosts = useAppSelector((state) => state.posts.booked);
  const isBookmarked = bookmarkedPosts.includes(postId.toString());
  console.log(bookmarkedPosts, isBookmarked);

  const handleBookmarkToggle = () => {
    dispatch(toggleBooked(postId.toString()));
  };

  return (
    <div
      className="absolute top-2 right-2 cursor-pointer"
      onClick={handleBookmarkToggle}
    >
      {isBookmarked ? (
        <FaBookmark size={25} className="text-yellow-500" />
      ) : (
        <FaRegBookmark size={25} className="text-gray-500" />
      )}
    </div>
  );
};

export default Bookmark;

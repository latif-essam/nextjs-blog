import { Comment } from "@/types/post";
import React from "react";

const CommentCard: React.FC<Comment> = ({ body, email, name }) => {
  return (
    <div className="p-6 w-full bg-white/10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-indigo-800">{name}</h2>
      <p className="text-sm text-gray-300/80 mb-2">{email}</p>
      <p className="text-gray-800">{body}</p>
    </div>
  );
};

export default CommentCard;

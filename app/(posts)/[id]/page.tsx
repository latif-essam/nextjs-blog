import jsonApi from "@/api";
import { Post } from "@/types/post";

export default async function Posts({ params }: { params: { id: string } }) {
  const res = await jsonApi.get(`posts/${params?.id}`);
  const post: Post = await res.data;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">{post?.title}</h1>
      <p className="text-lg text-gray-700">{post?.body}</p>
    </div>
  );
}

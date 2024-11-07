import { getPost } from "@/lib/getPost";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

const Post =  ({ params }) => {
  
  console.log(params);

    const post =  getPost(id);

  return (
    <div className="mt-8">
      <h1>{post.title}</h1>
      <p className="mt-3">{post?.body}</p>
    </div>
  );
};

export default Post;

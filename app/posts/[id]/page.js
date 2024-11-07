

import { getPost } from "@/lib/getPost";
import React from "react";

const Post = async ({ params }) => {
    
    const id  = params.id;

  const post = await getPost(id);
  console.log(post)

  return (
    <div className="mt-8">
      <h1>{post.title}</h1>
      <p className="mt-3">{post.body}</p>
    </div>
  );
};

export default Post;

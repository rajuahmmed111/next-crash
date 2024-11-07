export const getPost =  ({ id }) => {
  const post = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//   if (!post.ok) {
//     throw new Error(`HTTP error! status: ${post.status}`);
//   }

  return  post;
};

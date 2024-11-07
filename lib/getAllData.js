export const GetAllDPosts = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  return data.json();
};
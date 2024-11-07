import Link from "next/link";

export default function Blogs() {

  const blogs = [
    {
      id: 1,
      title: "Blog Post 1",
      image: "/images/blog1.jpg",
      description: "Lorem ipsum dolor sit abet, consectetur advising edit.",
      date: "2022-01-01"
    },
    {
      id: 1,
      title: "Blog Post 2",
      image: "/images/blog1.jpg",
      description: "Lorem ipsum dolor sit abet, consectetur advising edit.",
      date: "2022-01-01"
    },
    
  ]
 
  return (
    <main className="mt-8">
      {blogs.map((blog) => (
        <div key={blog.id}>     
          <Link href={`/blogs/${blog.id}`}><h2 className="mb-3">{blog.title}</h2></Link>
        </div>
      ))}
    </main>
  );
}

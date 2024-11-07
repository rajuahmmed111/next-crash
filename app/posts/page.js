
import { GetAllDPosts } from '@/lib/getAllData'
import Link from 'next/link'
import React from 'react'

const Post = async () => {

    const posts =await GetAllDPosts()

    console.log(posts.length)

  return (
    <div className='mt-6'>
      <h1>All posts</h1>
      <ul>
        {posts.map((post) => (
          <li className='mt-3' key={post.id}>
            <Link href={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Post

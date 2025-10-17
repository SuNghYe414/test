import React from 'react'

export default function NewPostPage() {
  const x = 5,
    y = 10
  const result = x + y
  return (
    <div>
      <h1>NewPosts Page</h1>
      <p>localhost:3000/posts/new</p>
      <p>
        {x} + {y} = {result}
      </p>
    </div>
  )
}

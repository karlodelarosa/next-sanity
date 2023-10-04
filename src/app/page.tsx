import {client} from "@/client"

type Post = {
  _id: string
  title?: string
  slug?: {
    current: string
  },
  author?: {
    _id: string,
    name: string
  },
  body: any
}

export default async function Home() {
  const posts = await client.fetch<Post[]>(`
    *[_type == "post"] {
      _id,
      title,
      slug,
      author-> { 
        _id,
        name
      }
    }
  `)

  return (
      <ul>
        {posts.map((post) => (
            <li key={post._id}>
              <a href={post?.slug?.current}>{post?.title}</a>
              <p>{post.author?.name}</p>
            </li>
        ))}
      </ul>
  )
}

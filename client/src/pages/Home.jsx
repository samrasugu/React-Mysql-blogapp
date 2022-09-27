import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eveniet?",
      descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, exercitationem quod nam veniam, voluptas adipisci sunt dolore quia animi consequuntur! Sequi et iure deleniti doloremque totam quis in perspiciatis, saepe maiores nostrum ab illum placeat iusto sint molestias natus corporis quo veritatis inventore facere voluptatem labore libero voluptate blanditiis!",
      img: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eveniet?",
      descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, exercitationem quod nam veniam, voluptas adipisci sunt dolore quia animi consequuntur! Sequi et iure deleniti doloremque totam quis in perspiciatis, saepe maiores nostrum ab illum placeat iusto sint molestias natus corporis quo veritatis inventore facere voluptatem labore libero voluptate blanditiis!",
      img: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eveniet?",
      descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, exercitationem quod nam veniam, voluptas adipisci sunt dolore quia animi consequuntur! Sequi et iure deleniti doloremque totam quis in perspiciatis, saepe maiores nostrum ab illum placeat iusto sint molestias natus corporis quo veritatis inventore facere voluptatem labore libero voluptate blanditiis!",
      img: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eveniet?",
      descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, exercitationem quod nam veniam, voluptas adipisci sunt dolore quia animi consequuntur! Sequi et iure deleniti doloremque totam quis in perspiciatis, saepe maiores nostrum ab illum placeat iusto sint molestias natus corporis quo veritatis inventore facere voluptatem labore libero voluptate blanditiis!",
      img: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eveniet?",
      descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, exercitationem quod nam veniam, voluptas adipisci sunt dolore quia animi consequuntur! Sequi et iure deleniti doloremque totam quis in perspiciatis, saepe maiores nostrum ab illum placeat iusto sint molestias natus corporis quo veritatis inventore facere voluptatem labore libero voluptate blanditiis!",
      img: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post)=> (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.descr}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
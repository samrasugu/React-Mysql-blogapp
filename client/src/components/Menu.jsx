import React from 'react'

const Menu = () => {
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
        }
      ];
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className="post"key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
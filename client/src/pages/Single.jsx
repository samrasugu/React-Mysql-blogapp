import React from 'react'
import Edit from '../images/edit.png'
import Delete from '../images/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="info">
            <span>Sam</span>
            <p>Posted: 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, explicabo!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aut ratione dolorem explicabo repellendus, quo distinctio? Ipsam perferendis distinctio, expedita architecto temporibus dicta quibusdam totam maxime reiciendis corporis autem obcaecati ea cum velit. Possimus distinctio unde placeat quidem, fugiat voluptates, quas, officiis corrupti magni delectus ipsa voluptatem animi nobis! Recusandae.
          <br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et velit debitis, nihil dolor architecto vero molestiae maxime id voluptatum quam distinctio hic quis esse minima quod commodi voluptates sapiente enim maiores voluptatem? At, cum, in harum, aut asperiores rem ex pariatur qui earum placeat aliquid laudantium praesentium fuga blanditiis suscipit?<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima maxime expedita aperiam qui vitae. Et laboriosam perferendis eligendi error ipsum magnam atque, nobis tempora, deleniti quam, vero voluptas consectetur in omnis blanditiis cumque! Veniam, voluptatum. Voluptatum reiciendis, unde voluptates vitae ad dolores veritatis amet ratione autem eos, tempora aperiam ipsa molestiae porro iusto natus odit sint deserunt ex quibusdam ea quod cum. Ad obcaecati voluptatibus vero eligendi inventore, molestiae, deserunt eveniet autem impedit commodi officiis nostrum repellat ullam reprehenderit cum quas nam sunt facere. Aperiam modi a est facere, pariatur magni et ipsam doloribus, facilis iusto dolorem perspiciatis excepturi nostrum sed. Tempora, impedit eveniet molestias totam magnam perspiciatis, fugit nihil, odio quidem culpa magni eum corporis. Id nemo mollitia atque laboriosam corporis magnam doloribus officia? Atque ducimus doloremque eveniet obcaecati adipisci! Porro, nisi praesentium consequuntur placeat repellendus excepturi nihil eligendi, perferendis non soluta qui cupiditate rem error animi earum dolores quidem fuga ipsa eius explicabo? Dolore, minima distinctio porro impedit similique, laudantium vitae, ipsa obcaecati ratione optio saepe sequi? Animi, iure libero perspiciatis maiores esse, quam officiis dolore totam id, numquam voluptatibus nihil optio quidem repellat. Modi dolore officia dolor. Doloribus quaerat debitis perferendis cupiditate, nobis nam nisi minima?
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
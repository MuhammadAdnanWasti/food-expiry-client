import React from 'react'
import { Link, useLoaderData } from 'react-router'

const Fridge = () => {
  const foods=useLoaderData()
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-9 mx-9'>
     {
      foods.map(food=> <div className="card bg-base-100 md:w-76 shadow-sm" key={food._id}>
  <figure>
    <img
      src={food.food_image}
      alt="Food" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {food.title}
     
  {
    new Date(food.expiry_date) < new Date() ? (
      <span className="inline-block bg-red-500 text-white text-sm px-2 py-1 rounded">
        Expired
      </span>
    ) : (
      <span className="inline-block bg-green-500 text-white text-sm px-2 py-1 rounded">
        Valid
      </span>
    )
  }
    </h2>
<p>Quantity:{food.quantity}</p>
   
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{food.catagory}</div>
     
    </div>
    <div>
     <Link className="btn bg-amber-300" to={`/foodDetails/${food._id}`}>See Details</Link>
    </div>
  </div>
</div>)
     }
    </div>
  )
}

export default Fridge

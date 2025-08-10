
import React, { useState } from 'react'
import {  Link, useLoaderData } from 'react-router'

const Fridge = () => {
  const [search, setSearch]=useState('')
  const [selectedCatagory, setSelectedCatagory]=useState('All')

  const foods=useLoaderData()
  
  const categories = ['All', 'Dairy', 'Meat', 'Vegetables', 'Snacks'];

  const filteredFoods=selectedCatagory==='All'
  ?foods
  :foods.filter(food=> food.catagory===selectedCatagory)
  const handleSubmit=(e)=>{
      e.preventDefault();
        const data=e.target.search.value;
        setSearch(data)
       
  }
  return (
   <>
   <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto'>
 <form onSubmit={handleSubmit} className='flex items-center justify-center gap-3'>
    <input type="text"  name='search' className="input" placeholder='search here'/>
    <button className="btn btn-neutral ">Search</button>
   </form>
     <div className="mb-4 flex items-center justify-center ">
        <label className="font-bold mr-2">Filter by Category:</label>
        <select
          className="select select-bordered"
          value={selectedCatagory}
          onChange={(e) => setSelectedCatagory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
   </div>
  
 
  
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-9 mx-9'>
     {
      filteredFoods.filter((food)=>{
        return search.toLowerCase( ) ===''
        ? food
        : food.title.toLowerCase().includes(search)
      }).map(food=> <div className="card bg-base-100  shadow-sm" key={food._id}>
  <figure>
    <img
      src={food.food_image}
      alt="Food" className="h-48 w-full object-cover" />
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
   </>
    
  )
}

export default Fridge

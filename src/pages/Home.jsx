import React, {  useEffect, useState } from 'react'
import Banner from './Banner'
import Description from './Description'
import { Link, useLoaderData } from 'react-router'
import Banner2 from './Banner2'
import CountUp from 'react-countup'




const Home = () => {
  const foods=useLoaderData()
const [expiredFoods, setExpiredFoods] = useState([]);

// console.log(expiredFoods)
  useEffect(() => {
    fetch('https://food-expiry-tracker-server-alpha.vercel.app/expiredFoods')
      .then(res => res.json())
      .then(data => setExpiredFoods(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      
     
     {/* countup */}
    <div className="flex justify-center my-7">
  <div className="stats stats-vertical lg:stats-horizontal shadow text-amber-700">
    <div className="stat">
      <div className="stat-title">Target Customers:</div>
      <div className="stat-value">
        <CountUp end={10000000} duration={5}></CountUp>
      </div>
    </div>

    <div className="stat">
      <div className="stat-title">Nearly expired:</div>
      <div className="stat-value">
        <CountUp end={foods.length} duration={9}></CountUp>
      </div>
    </div>

    <div className="stat">
      <div className="stat-title">Expired items:</div>
      <div className="stat-value">
        <CountUp end={expiredFoods.length} duration={9}></CountUp>
      </div>
    </div>
  </div>
</div>


<Banner2></Banner2>
      {/* nearly Expired */}
<h1 className='text-3xl font-extrabold  text-amber-500 text-center'>Nearly Expired Itmes</h1>
     
        
     {
      
      foods.length===0 ? (<div className="flex justify-center my-9 bg-green-700  p-9 text-white">
  <p className="font-bold text-2xl">No Nearly Expired Food</p>
</div>
):(

   <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-9 mx-9'>

 {foods.map(food=> <div className="card bg-base-100  shadow-sm" key={food._id}>
  <figure>
    <img
      src={food.food_image}
      alt="Food" 
      className="h-48 w-full object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {food.title}
     
  
    </h2>
 <p>{food.description}</p>
   <p>Expiry date: {food.expiry_date}</p>
   
    <div>
     <Link className="btn bg-amber-300" to={`/foodDetails/${food._id}`}>See Details</Link>
    </div>
  </div>
</div>)}
   </div>

)


     }
    
 <Description></Description>
{/* Expired */}
   
      <section>
        <h2 className="text-2xl font-bold text-amber-500 text-center">❌ Expired Foods </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-7">
          {expiredFoods.map(food => (
            <div key={food._id} className="card  shadow-sm">
              <figure>
                <img src={food.food_image} alt={food.title} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-semibold">{food.title}</h3>
                
                <p>Quantity: {food.description}</p>
                <p>Expired on: {food.expiry_date}</p>
                <span className="badge bg-red-600 text-white mt-2 p-5">Expired</span>
                <div>
     <Link className="btn bg-amber-300" to={`/foodDetails/${food._id}`}>See Details</Link>
    </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home

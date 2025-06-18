import React from 'react'
import { useLoaderData } from 'react-router'
import Swal from 'sweetalert2'

const Update = () => {
    const foods=useLoaderData()
 const handleUpdate=(e) => { 
         e.preventDefault()
const formData= new FormData(e.target)
const updatedTask=Object.fromEntries(formData.entries())
fetch(`http://localhost:3000/foods/${foods._id}`,{
method:'PUT',
headers:{
  'content-type':'application/json'
},
body:JSON.stringify(updatedTask)
}).then(res=>res.json())
    .then(data=>{
if (data.
modifiedCount) {
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Food updated Successfully",
  showConfirmButton: false,
  timer: 1500
});
}
    })
      }
  return (
     <div>
      <h1 className='text-3xl font-bold text-center my-9 text-amber-500'>Update the food item:</h1>
      <form onSubmit={handleUpdate}  className='flex justify-center items-center flex-col my-9'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
 

  <label className="label"> Food Title</label>
  <input type="text"  name='title' defaultValue={foods.title} className="input" placeholder="Food title" />

  <label className="label">Quantity</label>
  <input type='number' name='quantity' defaultValue={foods.quantity} className="input" placeholder="Quantity" />
 
  <label className="label">Food Image</label>
  <input type="url" name='food_image' defaultValue={foods.food_image} className="input" placeholder="Food Image" />

  
</fieldset>

       


        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Food Catagory</legend>

 <select defaultValue="Food category" name='catagory'  className="select">
  <option disabled={true}>Food category</option>
  <option>Dairy</option>
  <option>Meat</option>
  <option>Vegetables</option>
  <option>Snacks</option>
</select>

  
</fieldset>

   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Expiry Date</legend>
  <input type="date" name='expiry_date' defaultValue={foods.expiry_date} className="input" />
</fieldset>



   




   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Description</legend>
<textarea className="textarea" name='description' defaultValue={foods.description} placeholder="Description"></textarea>
</fieldset>
   

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">User info</legend>

 
         <label className="label">Email</label>
          <input type="email"  name='email' defaultValue={foods.email} className="input" placeholder="Email" />
          
  
</fieldset>



 <button className="btn btn-neutral mt-4">Update Food</button>
      </form>
    </div>
  )
}

export default Update

import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const AddFood = () => {
  const {user}=use(AuthContext)
  const navigate=useNavigate()
  const handleSubmit=(e) => { 
     e.preventDefault();
        const form=e.target;
        const formData=new FormData(form)
        const data= Object.fromEntries(formData.entries())
        data.createdAt= new Date()
        
        axios.post("https://food-expiry-tracker-server-alpha.vercel.app/foods",data)
         .then(res=>{
              Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "Your data has successfully added",
                     showConfirmButton: false,
                     timer: 1500
                   });
                   navigate( '/myItems' )
        })
        .catch(error=>{
            // console.log(error)
        })
  }
  return (
     <div>
      <h1 className='text-3xl font-bold text-center my-9 text-amber-300'>Please Add a food item:</h1>
      <form onSubmit={handleSubmit}  className='flex justify-center items-center flex-col my-9'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
 

  <label className="label"> Food Title</label>
  <input type="text"  name='title' className="input" placeholder="Food title" />

  <label className="label">Quantity</label>
  <input type='number' name='quantity' className="input" placeholder="Quantity" />
 
  <label className="label">Food Image</label>
  <input type="url" name='food_image' className="input" placeholder="Food Image" />

  
</fieldset>

       


        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Food Catagory</legend>

 <select defaultValue="Food category" name='catagory' className="select">
  <option disabled={true}>Food category</option>
  <option>Dairy</option>
  <option>Meat</option>
  <option>Vegetables</option>
  <option>Snacks</option>
</select>

  
</fieldset>

   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Expiry Date</legend>
  <input type="date" name='expiry_date' className="input" />
</fieldset>



   




   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Description</legend>
<textarea className="textarea" name='description' placeholder="Description"></textarea>
</fieldset>
   

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">User info</legend>

 
         <label className="label">Email</label>
          <input type="email"  name='email' defaultValue={user.email} className="input" placeholder="Email" />
          
  
</fieldset>



 <button className="btn btn-neutral mt-4">Add Food</button>
      </form>
    </div>
  )
}

export default AddFood

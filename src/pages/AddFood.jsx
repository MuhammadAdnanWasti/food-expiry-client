import React from 'react'

const AddFood = () => {
  return (
     <div>
      <h1 className='text-3xl font-bold text-center my-9 text-amber-100'>Please Add a food item:</h1>
      <form  className='flex justify-center items-center flex-col my-9'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Basic info</legend>

  <label className="label"> Food Title</label>
  <input type="text"  name='title' className="input" placeholder="Food title" />

  <label className="label">Company</label>
  <input type="text" name='company' className="input" placeholder="Company" />
  <label className="label">Location</label>
  <input type="text" name='location' className="input" placeholder="Location" />
  <label className="label">Company Logo</label>
  <input type="url" name='company_logo' className="input" placeholder="Company Logo" />

  
</fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Job type</legend>

 <div className="filter">
  <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
  <input className="btn" type="radio" name="jobType" aria-label="On-site" value='On-site'/>
  <input className="btn" type="radio" name="jobType" aria-label="Remote" value='Remote'/>
  <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value='Hybrid'/>
</div>

  
</fieldset>



        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Food Catagory</legend>

 <select defaultValue="Food category" className="select">
  <option disabled={true}>Food category</option>
  <option>Dairy</option>
  <option>Meat</option>
  <option>Vegetables</option>
  <option>Snacks</option>
</select>

  
</fieldset>

   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Date</legend>
  <input type="date" name='applicationDeadline' className="input" />
</fieldset>



   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Salary Range</legend>
    <label className="label">Minimum Salary</label>
  <input type="text"  name='min' className="input" placeholder="Minimum Salary" />

  <label className="label">Maximum Salary</label>
  <input type="text" name='max' className="input" placeholder="Maximum Salary" />
  <label className="label">Currency</label>
 <select defaultValue="Select a currency" name='currency' className="select">
  <option disabled={true}>Select a currency</option>
  <option>BDT</option>
  <option>USD</option>
  <option>EU</option>
</select>
</fieldset>




   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Job Description</legend>
<textarea className="textarea" name='description' placeholder="Bio"></textarea>
</fieldset>
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Job Requirements</legend>
<textarea className="textarea" name='requirements' placeholder="Requirements(separate by comma)"></textarea>
</fieldset>


<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">HR info</legend>

 <label className="label">Name</label>
          <input type="text" name='hr_name' className="input" placeholder="Name" />
         <label className="label">Email</label>
          <input type="email"  name='hr_email' className="input" placeholder="Email" />
          
  
</fieldset>



 <button className="btn btn-neutral mt-4">Add Job</button>
      </form>
    </div>
  )
}

export default AddFood

import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';

function UpdateProfile() {
    const{updateUserProfile}=useContext(AuthContext)
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = (data)=>{
        const name=data.name;
        const photoURL=data.photoURL;
     
        updateUserProfile(name,photoURL).then(() => {
  // Profile updated!
  // ...
 alert("Profile Updated");
}).catch((error) => {
  // An error occurred
  // ...
  console.log(error);
});
     }

  return (
   <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
   
   
    <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
         <h1 className='font-bold'>Update Your Profile</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Uploard Photo</span>
          </label>
          <input  {...register("photoURL")}  type="text" placeholder="Photo URL" className="input input-bordered" required />
          
        </div>
        <div className="mt-6 form-control">
          <button className="text-white btn bg-orange">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default UpdateProfile

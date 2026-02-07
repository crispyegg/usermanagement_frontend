

import axios from 'axios'
import React, { useState } from 'react'

const AddUsers = () => {

  const [adduser,setAdduser]= useState({firstName:'' ,lastName:'', phone:'',email:''})

  const changeUserData= (e) =>{
    setAdduser({...adduser,[e.target.name]:e.target.value})
  } 

  const  userSubmitHandler =(e)=>{
      e.preventDefault()

      console.log(adduser);
      axios.post(`https://usermanagement-server-v9wf.onrender.com`,adduser)
      .then((res)=>{
        alert('User Added Successfully')
      })
      .catch((err)=>{
        alert('Failed to add User')
      })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="text-center mb-4">User Registration</h4>

              <form onSubmit={userSubmitHandler}>
                {/* First Name */}
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    name='firstName'
                    onChange={changeUserData}
                  />
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                    name='lastName'
                    onChange={changeUserData}
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    name='phone'
                    onChange={changeUserData}
                  />
                </div>

                {/* Email Address */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    name='email'
                    onChange={changeUserData}
                  />
                </div>

                {/* Submit Button */}
                <div>
                      <input  className='form-control btn my-3 bg-primary' type='submit'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUsers
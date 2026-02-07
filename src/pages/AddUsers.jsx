import axios from 'axios'
import React, { useState } from 'react'

const AddUsers = () => {

  const [adduser,setAdduser]= useState({firstName:'' ,lastName:'', phone:'',email:''})

  const changeUserData= (e) =>{
    setAdduser({...adduser,[e.target.name]:e.target.value})
  } 

  const  userSubmitHandler =(e)=>{
      e.preventDefault()

      const { firstName, lastName, phone, email } = adduser

      // 🔹 Input Validation
      if(!firstName || !lastName || !phone || !email){
        alert('All fields are required')
        return
      }

      if(!/^\d{10}$/.test(phone)){
        alert('Phone number must be 10 digits')
        return
      }

      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Enter a valid email address')
        return
      }

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

                <div>
                  <input className='form-control btn my-3 bg-primary' type='submit'/>
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

import axios from 'axios'
import React, { useState } from 'react'

const AddUsers = () => {

  const [adduser, setAdduser] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  })

  const [errors, setErrors] = useState({})

  const changeUserData = (e) => {
    setAdduser({ ...adduser, [e.target.name]: e.target.value })
  }

  const userSubmitHandler = (e) => {
    e.preventDefault()

    let newErrors = {}

    // First Name
    if (!adduser.firstName) {
      newErrors.firstName = 'First name is required'
    }

    // Last Name
    if (!adduser.lastName) {
      newErrors.lastName = 'Last name is required'
    }

    // Phone
    if (!adduser.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(adduser.phone)) {
      newErrors.phone = 'Phone number must be 10 digits'
    }

    // Email
    if (!adduser.email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adduser.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    // Stop submit if errors exist
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Clear errors if valid
    setErrors({})

    axios.post(`https://usermanagement-server-v9wf.onrender.com`, adduser)
      .then(() => {
        alert('User Added Successfully')
      })
      .catch(() => {
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

              <form onSubmit={userSubmitHandler} noValidate>

                {/* First Name */}
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    name="firstName"
                    onChange={changeUserData}
                  />
                  <div className="invalid-feedback">
                    {errors.firstName}
                  </div>
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    name="lastName"
                    onChange={changeUserData}
                  />
                  <div className="invalid-feedback">
                    {errors.lastName}
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    name="phone"
                    onChange={changeUserData}
                  />
                  <div className="invalid-feedback">
                    {errors.phone}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    onChange={changeUserData}
                  />
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                </div>

                <button className="btn btn-primary w-100" type="submit">
                  Submit
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUsers

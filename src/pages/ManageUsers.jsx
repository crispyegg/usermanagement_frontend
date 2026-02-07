import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [userData, setUserData] = useState([]); //to fetch the data in table

  const [editUser,setEditUser]= useState({firstName:'',lastName:'',phone:'',email:''})

  //to fetch the user
      useEffect(() => {
        axios
          .get(`https://usermanagement-server-v9wf.onrender.com/users`)
          .then((res) => {
            setUserData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      },[]);

  //to delete user
      const deleteUser = (uid) => {
        axios
          .delete(`https://usermanagement-server-v9wf.onrender.com/users/${uid}`)
          .then(() => {
            alert("User Deleted");
          })
          .catch((err) => {
            console.log("Unable to Delete");
          });
      };
 //to get one user data into the modal
      const getOneRecord = (uid)=>{
        axios.get(`https://usermanagement-server-v9wf.onrender.com/users/${uid}`)
        .then((res)=>{
          setEditUser(res.data)
        })
      }

   const changeUserData = (e)=>{
      setEditUser({...editUser,[e.target.name]:e.target.value})
   }   

   const updateSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`https://usermanagement-server-v9wf.onrender.com/${editUser._id}`,editUser)
        .then(()=>{
          alert('User Updated')
        })
        .catch((err)=>{
          console.log(err);
          
        })
   }

   const {firstName,lastName,phone,email}= editUser
  return (
    <section className="container">
      <h1 className="my-3 text-center"> All Users Data</h1>
      <div className="table-responsive ">
        <table className="table text-center table-bordered  table-success table-striped ">
          <thead className="text-success ">
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => {
              return (
                <tr key={index}>
                  <td className="fw-bold">{user.firstName}</td>
                  <td className="fst-italic">{user.lastName}</td>
                  <td className="fst-italic">{user.phone}</td>
                  <td className="fst-italic">{user.email}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-success rounded-pill me-2"
                      data-bs-target="#update"
                      data-bs-toggle="modal"
                      onClick={()=>getOneRecord(user._id)}
                    >
                     
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger rounded-pill"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


       {/*modal to edit or update */}

        <div className="modal fade"  id='update'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='container my-5' onSubmit={updateSubmitHandler}>
                
                <div>
                    <input className='form-control my-3' onChange={changeUserData} value={firstName}  name="firstName"   type='text' placeholder='First Name'/>
                </div>
                <div>
                      <input className='form-control my-3' onChange={changeUserData} value={lastName}  name="lastName"    type='text' placeholder='Last Name'/>
                </div>
                <div>
                      <input className='form-control my-3'onChange={changeUserData} value={phone} name="phone"  type='text' placeholder='phone'/>
                </div>
                <div>
                      <input className='form-control my-3' onChange={changeUserData} value={email}  name="email"  type='text' placeholder='email'/>
                </div>
                          
                 <div>
                      <input  className='form-control btn my-3 bg-success' type='submit'/>
                </div>

              </form>  
            </div>
           
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default ManageUsers;

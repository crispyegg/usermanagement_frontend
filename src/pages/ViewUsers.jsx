


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewUsers = () => {

   const [userData,setUserData]= useState([])

   useEffect(()=>{
       axios.get(`https://usermanagement-server-v9wf.onrender.com/users`)
       .then((res)=>{
        setUserData(res.data)
       })
       .catch((err)=>{
        console.log(err);     
       })
   })

  return (
    <section className='container'>
      <h1 className='my-3 text-center'> All Users Data</h1>
      <div className='table-responsive '>
        <table className='table text-center table-bordered  table-success table-striped '>
        <thead className='text-success '>
          <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>PHONE</th>
            <th>
                EMAIL
            </th>
          </tr>
        </thead>
        <tbody>
         
               {
                userData.map((user,index)=>{
                return(         
              <tr key={index}>    
                <td className='fw-bold'>{user.firstName}</td>
                <td className='fst-italic'>{user.lastName}</td>
                <td className='fst-italic'>{user.phone}</td>
                <td className='fst-italic'>{user.email}</td>
               
               
              
              </tr>)
                })
               }
          
        
        </tbody>
      </table>
     </div>
     </section>
  )
}

export default ViewUsers
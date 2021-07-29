import React, { useState } from 'react'
import Contact from './Contact'
const AddContact = () => {
    const [name,setName] =useState('')
    const [number,setNumber] = useState('')
    const [user,setUser] = useState([])
    function submitHandler(e){
      e.preventDefault()
     setUser([...user,{id:user.length,name,number}])
    }
     return ( 
        <>
        <h1>Contact Manager App</h1>
        <form onSubmit={submitHandler}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="number" value={number}  onChange={(e)=>setNumber(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
        <Contact userList = {user}/>
          {/* <ul>
          {
            user.map((userinfo)=>{
              return(
                <>
                <li>
                 {userinfo.name}
                 <br />
                {userinfo.number}
                </li> 
                </>
              )
           })
           }
          </ul> */}
        </>
     );
}
 
export default AddContact;
import React from 'react'
const Contact = (props) => {
    console.log(props.userList)
    return ( 
        <>
       <ul>
        {
          props.userList.map(userinfo=>{
            return(
                <>
                <li key={userinfo.id}>
                    {userinfo.name}
                    {userinfo.number}
                </li>
                </>
            )
          })
        }
       </ul>
        </>
     );
}
 
export default Contact;
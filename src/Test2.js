import React, { useState } from 'react'

const Test2 = () => {
    const [data, setData] = useState("");
  return (
    <>
    <input type="text" placeholder='Enter User Name' name="username" id="userId" value="aakash" />
    {/* <input type="text" placeholder='Enter Password' name="password" id="pwd" /> */}
    <button onClick={()=> setData("Updated Data")}>Click Me</button>
    {data}
    </>
  )
}

export default Test2
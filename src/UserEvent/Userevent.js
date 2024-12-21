import React, {useState} from 'react'

const Userevent = () => {
    const [data, setData] = useState("");
  return (
    <>
    <h1>Userevent</h1>
    <p>{data}</p>
    <button onClick={()=> setData("hello")}>Click Me</button>
    </>
  )
}

export default Userevent
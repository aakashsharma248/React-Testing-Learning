import React, { useState } from 'react'

const Findby = () => {
    const [data, setData] = useState(false);
    setTimeout(()=> {
      setData(true);
    },2000)
  return (
    <>
    <div>Findby</div>
    {data ? "Data is available" : "Data is not available" }
    </>
  )
}

export default Findby
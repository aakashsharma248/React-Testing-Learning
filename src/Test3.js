import React from 'react'

const Test3 = () => {
  return (
    <>
    <div>Test3</div>
    <label htmlFor="input1">User Name1</label>
    <input type="text" defaultValue={"hello"} disabled id="input1" />
    <button aria-label={"button1"}>Start1</button>
    <button aria-label={"button2"}>Start2</button>
    <label htmlFor="input2">User Name2</label>
    <input type="text" id="input2"/>
    </>
  )
}

export default Test3
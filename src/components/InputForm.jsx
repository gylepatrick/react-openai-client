import React, { useState } from 'react'

const InputForm = ({sendMessage, loading}) => {

  const [value, setValue] = useState("")

  const handleSubmit = () => {
    if(value === "") return;
    sendMessage({sender: "user", message: value})
    setValue("")
  }


  return (
    <div className='bg-white bg-opacity-10 max-h-40 rounded-lg border mt-3 mb-3 py-4 overflow-auto relative w-auto'>
      {loading?
        <img src="./loader" className='w-8 m-auto' />
       : 
       <>
       
       <textarea className='bg-white border-0 outline-none w-10/12 text-gray-500 w-90'
        rows={1} 
        value={value}
        placeholder="Try to ask dev bot  ..."
        onChange={(e)=>setValue(e.target.value)}/>

        <button
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        onClick={handleSubmit}
        className='bg-green-500 absolute top-auto rounded-sm cursor-pointer p-2 ml-2 text-white ease-in duration-100  max-w-30 hover:scale-25 text-xs'>send</button>

  </>
}
    </div>
  )
}

export default InputForm
import React, { useContext } from 'react'
import { DataContext } from '../context/EncryptionContext'

function InputTextBox() {
    const {data,setData}=useContext(DataContext);

  return (
    <div className='textarea'>
      <label>Input</label>
      <textarea value={data} onChange={(e)=>setData((prev)=>prev=e.target.value)}></textarea>
    </div>
  )
}

export default InputTextBox

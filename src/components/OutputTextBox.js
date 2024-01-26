import React,{useContext} from 'react'
import { DataContext } from '../context/EncryptionContext'


function OutputTextBox(props) {


  return (
    <div className='textarea'>
        <label>Output</label>
        <textarea value={props.outputData}></textarea>
    </div>
  )
}

export default OutputTextBox

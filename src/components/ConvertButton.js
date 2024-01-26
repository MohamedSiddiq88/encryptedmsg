import React,{useContext, useEffect} from 'react'
import { DataContext } from '../context/EncryptionContext'

function ConvertButton(props) {

    const {data,setData} = useContext(DataContext);
    
    useEffect(()=>{
     if(data==""){
        convert();
     }   
    })


    let convert=(name)=>{
        if(name=="Encrypt"){
            let convertedData=data
        .split('')
        .map((ele)=>(ele.charCodeAt())+3)
        .map((ele)=>String.fromCharCode(ele));
    props.setOutputData(convertedData.join(""));
        }else{
            let convertedData=data
        .split('')
        .map((ele)=>(ele.charCodeAt())-3)
        .map((ele)=>String.fromCharCode(ele));
    props.setOutputData(convertedData.join(""));
        }

        
    }

  return (
    <div>
      <input type='button' className='btn btn-primary convert-button' value={props.name} onClick={()=>convert(props.name)}></input>
    </div>
  )
}

export default ConvertButton

import {useState} from 'react';
import './App.css';
import ConvertButton from './components/ConvertButton';
import InputTextBox from './components/InputTextBox';
import OutputTextBox from './components/OutputTextBox';

function App() {
  const [outputData,setOutputData]=useState("");
  return (
    <div className="container">
      <div className='row'>
        <div className='col-6'>
          <InputTextBox></InputTextBox>
        </div>
        <div className='col-6'>
          <OutputTextBox outputData={outputData} setOutputData={setOutputData}></OutputTextBox>
        </div>
      </div>
      <div className='row'>
        <div className='col text-center'>
        <ConvertButton outputData={outputData} setOutputData={setOutputData} name={"Encrypt"}></ConvertButton>
        
        <ConvertButton outputData={outputData} setOutputData={setOutputData} name={"Decrypt"}></ConvertButton>
        </div>
      </div>


    </div>
  );
}

export default App;

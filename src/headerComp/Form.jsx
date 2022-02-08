import React from 'react';
import Signupsuccess from './Signupsuccess';
import Mymodal from './Mymodal';
import {useState} from "react"

function Form() {

    const [formsubmitted, setFormissubmit] = useState(false);

    
    const submitform = () =>{
        setFormissubmit(true);
    }
  return <div>


        {!formsubmitted ? <Mymodal submitform={submitform}/> : <Signupsuccess/>}
   
  </div>;
}

export default Form;

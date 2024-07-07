import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

import './Configuration.css'
import Form1 from './Form1.jsx'
import Search_Configuration from './Search_Configuration.jsx';
import Logs from './Logs.jsx'
import Shortcodes from './Shortcodes.jsx';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Configuration() {
  const [agreed, setAgreed] = useState(false)
  const [agreed2, setAgreed2] = useState(false)

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }

  const [type2, setType2] = useState('password');
  const [icon2, setIcon2] = useState(eyeOff);

  const handleToggle2 = () => {
    if (type2==='password'){
       setIcon2(eye);
       setType2('text')
    } else {
       setIcon2(eyeOff)
       setType2('password')
    }
 }

  const[action,setAction]=useState("General");

  var disp;
 
  if(action=="General"){
    disp=<Form1/>;
    
  }

  if(action=="Search Configuration"){
    disp=<Search_Configuration/>;
  }

  if(action=="Logs"){
    disp=<Logs/>;
  }

  if(action=="Shortcodes"){
    disp=<Shortcodes/>;
  }

  return (
    <div className="px-2 py-2 sm:py-2 lg:px-2">
      
      <div className="mx-10 w-full">
        <h2 className=" text-lg font-bold tracking-tight text-gray-900 sm:text-xl">TypeSense</h2>
        
      </div>
      <hr className=' my-6'/>

      <div className='flex gap-2'>
        <button className={action=="Search Configuration"?' border-blue-500 border-2 border-b-0 p-2 ml-12':'border-2 border-b-0 p-2 ml-12'} onClick={()=>setAction("Search Configuration")}>Search Configuration</button>
        <button className={action=="General"?'border-blue-500 border-2 border-b-0 p-2':'border-2 border-b-0 p-2'} onClick={()=>setAction("General")}>General</button>
        <button className={action=="Logs"?'border-blue-500 border-2 border-b-0 p-2':'border-2 border-b-0 p-2'} onClick={()=>setAction("Logs")}>Logs</button>
        <button className={action=="Shortcodes"?'border-blue-500 border-2 border-b-0 p-2':'border-2 border-b-0 p-2'} onClick={()=>setAction("Shortcodes")}>Shortcodes</button>
      </div>

      <hr className="mb-6" />
      {disp}

    </div>
  )
}

export default Configuration;

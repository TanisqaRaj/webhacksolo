import React, { useState,  } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { updatedivide, updatemul, updatesub, updatetemp } from '../reduxslice/generalSlice'
import { useNavigate } from 'react-router-dom';

const Temp = () => {
    const navigate=useNavigate();
    const tempvar= useSelector(state=>state.general.temp)
    const[num1, setnum1]=useState(0);
    const[num2, setnum2]=useState(0);
    const dispatch=useDispatch()
    const updatetempvar=()=>{
        dispatch(updatetemp(num1+num2))
        dispatch(updatedivide(num1/num2)) 
        dispatch(updatemul(num1*num2)) 
        dispatch(updatesub(num1-num2)) 

        navigate('/temp');
    }
    

  return (
    <div className='bg-red-600 h-[100vh] w-[100vw]'>
        
<form>
    <label>input first no</label>
      <input type='text' onChange={(e)=>setnum1(Number(e.target.value))}></input>
      <br/>
      <label>input 2nd no</label>
      <input type='text' onChange={(e)=>setnum2(Number(e.target.value))}></input>
</form>
<button className='h-[20px] w-[40px] bg-red-200 border' onClick={updatetempvar}>submit</button>
      {tempvar}
      

    </div>
  )
}

export default Temp

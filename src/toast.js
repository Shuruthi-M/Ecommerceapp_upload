import React from 'react'
import { ToastContainer } from 'react-toastify';

 function toast() {
    const Notify=()=>{
        toast("Default notification !",{
            position:toast.POSITION.TOP.CENTER
        });
        toast.sucess("success!!!",{
            position:toast.POSITION.TOP.CENTER
        })
    }
  return (
    <div>
        <button className='btn' onclick={e=>Notify()}>notify</button>
        <ToastContainer/>
    </div>
  )
}

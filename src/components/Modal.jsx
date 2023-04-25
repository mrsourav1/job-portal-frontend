import React, { useState } from 'react'
import { useForm, Resolver } from 'react-hook-form';

const Modal = () => {
    const flexBetween = "flex items-center justify-cenetr";
    const [ modalOpen,setModalOpen ] = useState(false)
  return (
    <div className='h-screen w-full bg-slate-100 bg-opacity-50'>
        <div className={`${flexBetween} h-600 bg-white w-1/2 mx-auto my-auto`}>
            {/* <div>
                hello
            </div> */}
                <button onClick={setModalOpen(!modalOpen)}>X</button>
            {/* <h1>hello</h1> */}
        </div>
    </div>
  )
}

export default Modal
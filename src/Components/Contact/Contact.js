import React from 'react'
import { Contact_img } from '../../Utils/images'
import { contact_bg } from '../../Utils/images';
const Contact = () => {
  return (<>
    <div className="w-[100%] relative min-height mt-[70px]">

        <img className="object-cover w-[100%] h-[100%]" src={contact_bg}></img>

      <div className='absolute top-2 left-3'>
        <h2 className='text-[50px] font-[700] text-stroke-fill-[#fff] bg-clip-border text-stroke  text-stroke-black'>Get In Touch</h2>
        <p className='text-[18px] text-[#ffffff50] w-[60rem]'>Want to get in Touch. We would Love to hear from you.Fill the Form So That we can Reach to You</p>
      </div>
      <div className='absolute top-[8rem] left-[4rem] h-[30rem] w-[30rem]'>
        <img className='w-[100%] h-[100%] shadow-lg shadow-blue rounded-xl' src={Contact_img}></img>
      </div>

      <div className='absolute right-[10rem] top-[8rem] h-[30rem] w-[30rem] bg-[#ffffff20] rounded-xl shadow-sm shadow-gray'>
           <label className='absolute top-[3rem] left-3 text-[#ffffff50]'>First Name</label>
           <input className='absolute top-[5rem] left-3 bg-[#ffffff40] p-2 rounded-lg placeholder:text-[#d66363] text-[white] text-[16px] outline-none' type='input' placeholder='First Name' ></input>
           <label className='absolute top-[3rem] left-[15rem] text-[#ffffff50]'>Last Name</label>
           <input className='absolute top-[5rem] left-[15rem] bg-[#ffffff40] p-2 rounded-lg placeholder:text-[#d66363] text-[white] text-[16px] outline-none' type='input' placeholder='Last Name' ></input>
           <label className='absolute top-[9rem] left-3 text-[#ffffff50] '>Enter Email</label>
           <input className='absolute top-[11rem] left-3 bg-[#ffffff40] p-2 placeholder:text-[#d66363] text-[white] text-[16px] w-[27rem] rounded-lg outline-none' placeholder='abc@gmail.com' type='email'></input>
           <label className='absolute top-[15rem] left-3 text-[#ffffff50] '>Enter Message </label>
           <textarea className='absolute top-[17rem] left-3 bg-[#ffffff40] p-2 placeholder:text-[#d66363] text-[white] text-[16px] w-[27rem] rounded-lg outline-none' placeholder='abc...' ></textarea>
            <button type='button' className='bg-[#00000080] text-[white] p-3 rounded-xl top-[23rem] absolute left-[10rem] w-[10rem] hover:bg-[black] hover:text-[#ffffff50]'>Submit</button>
      </div>
   </div>
    </>
  )
}

export default Contact
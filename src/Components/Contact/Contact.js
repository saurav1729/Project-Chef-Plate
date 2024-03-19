import React from 'react'
import { Contact_img } from '../../Utils/images'
import contact_bg from '../../Utils/contact.png' 
const Contact = () => {
  return (<>
    <div className="w-screen tablet:relative h- min-height mt-[70px]">
    

        <img className="object-cover w-screen h-full" src={contact_bg}></img>

      <div className='tablet:absolute tablet:top-2 tablet:left-3'>
        <h2 className='tablet:text-[50px] font-[700] text-stroke-fill-[#fff] bg-clip-border text-stroke  text-stroke-black'>Get In Touch</h2>
        <p className='text-[18px] text-[#ffffff50] w-[60rem]'>Want to get in Touch. We would Love to hear from you.Fill the Form So That we can Reach to You</p>
      </div>
      <div className='tablet:absolute tablet:top-[8rem] tablet:left-[4rem] h-[30rem] w-[30rem]'>
        <img className='w-[100%] h-[100%] shadow-lg shadow-blue rounded-xl' src={Contact_img}></img>
      </div>

      <div className='tablet:absolute tablet:right-[10rem] tablet:top-[8rem] h-[30rem] w-[30rem] bg-[#ffffff20] rounded-xl shadow-sm shadow-gray'>
           <label className='tablet:absolute tablet:top-[3rem] tablet:left-3 text-[#ffffff50]'>First Name</label>
           <input className='tablet:absolute tablet:top-[5rem] tablet:left-3 bg-[#ffffff40] p-2 rounded-lg placeholder:text-[#d66363] text-[white] text-[16px] outline-none' type='input' placeholder='First Name' ></input>
           <label className='tablet:absolute tablet:top-[3rem] tablet:left-[15rem] text-[#ffffff50]'>Last Name</label>
           <input className='tablet:absolute tablet:top-[5rem] tablet:left-[15rem] bg-[#ffffff40] p-2 rounded-lg placeholder:text-[#d66363] text-[white] text-[16px] outline-none' type='input' placeholder='Last Name' ></input>
           <label className='tablet:absolute tablet:top-[9rem] tablet:left-3 text-[#ffffff50] '>Enter Email</label>
           <input className='tablet:absolute tablet:top-[11rem] tablet:left-3 bg-[#ffffff40] p-2 placeholder:text-[#d66363] text-[white] text-[16px] w-[27rem] rounded-lg outline-none' placeholder='abc@gmail.com' type='email'></input>
           <label className='tablet:absolute tablet:top-[15rem] tablet:left-3 text-[#ffffff50] '>Enter Message </label>
           <textarea className='tablet:absolute tablet:top-[17rem] tablet:left-3 bg-[#ffffff40] p-2 placeholder:text-[#d66363] text-[white] text-[16px] w-[27rem] rounded-lg outline-none' placeholder='abc...' ></textarea>
            <button type='button' className='bg-[#00000080] text-[white] p-3 rounded-xl top-[23rem] tablet:absolute tablet:left-[10rem] w-[10rem] hover:bg-[black] hover:text-[#ffffff50]'>Submit</button>
      </div>
   </div>
    </>
  )
}

export default Contact
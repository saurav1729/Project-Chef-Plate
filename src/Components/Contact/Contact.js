
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Contact_img } from '../../Utils/images'
import contact_bg from '../../Utils/contact.png' 
import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
 



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xn2p7nv', 'template_ndu8jce', form.current, {
        publicKey: 'PgNwFs4_IKEBIiHiv',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!'); 
            toast.success("your details has been submitted")
            form.current.reset(); 
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(()=>{},[sendEmail]);
  return (<>
  <form ref={form} onSubmit={sendEmail}>
    <div className="w-auto relative h-auto pb-5 mt-2 rounded-t-3xl tablet:rounded-none tablet:mt-[40px] bg-[#0B0D14] pt-5">
      <div className='h-auto w-[90%] mx-auto'>
        <h2 className='text-[50px] font-[700] text-stroke-fill-[#fff] bg-clip-border text-stroke  text-stroke-black'>Get In Touch</h2>
        <p className='text-[18px] text-[#ffffff50] w-9/12'>Want to get in Touch. We would Love to hear from you.Fill the Form So That we can Reach to You</p>
      </div>
      <div className='flex flex-col my-[2rem] mx-5 tablet:mx-0 gap-12 justify-around tablet:flex-row '>
      <div className=' h-auto w-[20rem] tablet:h-[25rem] tablet:w-[30rem]'>
        <img className='w-full  h-full shadow-lg shadow-blue rounded-xl' src={Contact_img}></img>
      </div>

      <div className=' w-[20rem] tablet:w-[30rem] bg-[#ffffff20] rounded-xl shadow-sm shadow-gray flex flex-col p-3'>
           <label className=' mt-4 text-[#ffffff50]'>First Name</label>
           <input className=' tablet:left-3 bg-[#ffffff40] p-2 rounded-lg placeholder:text-[#d66363] text-[white]  w-[17rem] tablet:w-[27rem] text-[16px] outline-none' type='input' name='user_name' placeholder='First Name' ></input>
           <label className='  text-[#ffffff50]'>Last Name</label>
           <input className='  bg-[#ffffff40] p-2 rounded-lg placeholder:text-[#d66363] text-[white] w-[17rem] tablet:w-[27rem] text-[16px] outline-none' type='input' placeholder='Last Name' ></input>
           <label className='  text-[#ffffff50] ' >Enter Email</label>
           <input className='  bg-[#ffffff40] p-2 placeholder:text-[#d66363] text-[white] text-[16px] w-[17rem] tablet:w-[27rem] rounded-lg outline-none' placeholder='abc@gmail.com'  name='user_email' type='email'></input>
           <label className='  text-[#ffffff50] '>Enter Message </label>
           <textarea className='  bg-[#ffffff40] p-2 placeholder:text-[#d66363] text-[white] text-[16px] w-[17rem] tablet:w-[27rem] rounded-lg outline-none' placeholder='abc...' name='message' ></textarea>
            <button type='submit' value='send' className='bg-[#00000080] text-[white] mt-2 p-3 rounded-xl  w-[10rem] hover:bg-[black] hover:text-[#ffffff50]' >Submit</button>
      </div>
      </div>
   </div>
   </form>
    </>
  )
}

export default Contact
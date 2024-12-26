'use client'
import React from 'react'

import Image from 'next/image'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'

const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
        <div className='flex justify-center items-center'>
            <ul className='space-y-4 '>
                <li className='flex items-center'>
                    <Image src={phone} alt='Phone' className='h-[110px] w-auto mr-6'/>
                    <p className='text-xl'>+91-9034828484</p>
                </li>
                <li className='flex items-center'>
                    <Image src={mail} alt='Phone' className='h-[110px] w-auto mr-6'/>
                    <p className='text-xl'>
                        saaransh1621m@gmail.com
                    </p>
                </li>
            </ul>
        </div>

        <div className='bg-white/10 p-6  rounded-xl max-w-[550px]'>
            <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let&apos;s Connect</h2>
            <p className='text-white/70 mb-6'>Send Message and let&apos;s Schedule a call!</p>
            <form action={"https://getform.io/f/bgddowea"} method='POST' className='space-y-4'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='First Name' type="text" name='name' />
                    <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name' type="text" name='name'/>
                    <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Email' type="text" name='email' />
                    <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone Number' type="text" name='Phone'/>

               
                </div>
                <textarea  className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full' placeholder='Your Message' />
                <button className='bg-orange-700 hover:bg-orange-500 text-white py-2 px-6 w-full font-semibold text-xl'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
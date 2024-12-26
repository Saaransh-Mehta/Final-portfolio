'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import cursor from '../assets/icon1.png'
import message from '../assets/icon2.png'
import profilePic from '../assets/profilepic.png' 
const Hero = () => {
    
  return (
    <>
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>

      <div className='absolute rounded-[50%] w-[3000px] h-[1300px] bg-[radial-gradient(closest-side,#000_80%,#2B1942)] top-[550px] left-[50%] -translate-x-1/2'></div>


        <div className='relative'>
            <div className='text-8xl font-bold text-center'>
                <h1 className='text-[#98B4CE]'>Hi , I am</h1>
                <h1 className='text-[#E48A57]'>Saaransh Mehta</h1>
            </div>

                <motion.div
                drag
                className="hidden md:block absolute left-[280px] top-[170px]"
                >
                  <Image src={cursor}
                  height={190}
                  alt='cursor'
                  width={190}
                  draggable={false}
                  />   
                </motion.div>
                <motion.div
                drag
                className="hidden md:block absolute right-[280px] top-[170px]"
                >
                  <Image src={message}
                  height={120}
                  alt='cursor'
                  width={130}
                  draggable={false}
                  />   
                </motion.div>
        
        <p className='text-xl w-1/2 mx-auto mt-8 text-center text-white '>
          I am a fullStack developer with a passion for creating beautiful and functional user experiences.
        </p>
        <Image
        src={profilePic}
        alt='ProfilePic'
        className='h-auto w-auto mx-auto'
        />
        </div>
    </div>
    </>
  )
}

export default Hero
'use client'
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import project1 from '../assets/project.jpg'
import project2 from '../assets/proj2.jpg'
import project3 from '../assets/proj3.png'


const projects = [
    {
        title:"CRUD Operations for Blog Application",
        description:"This is a simple blog application where you can perform CRUD operations. It is built using React, Node.js, Express, and MongoDB.",
        devstack:"Node.js, Express, MongoDB",
        link:"https://github.com/Saaransh-Mehta/blog-app-1",
        src:project1
    },
    {
        title:"Personal Portfolio",
        description:"A responsive and interactive personal portfolio website designed to showcase my skills, projects, and professional journey. Built with modern web development technologies",
        devstack:"Next Js",
        link:"#",
        src:project1
    },
    {
        title:"User Authentication using Next Js and JWT",
        description:"Created a user authentication system using Next js and created login sessions and secured routes like dashboard",
        devstack:"Next Js",
        link:"https://github.com/Saaransh-Mehta/Nextjs-auth",
        src:project1
    },
    {
        title:"Blog Application using Backend As A Service",
        description:"This is a simple blog application where you can perform CRUD operations. It is built using React and Appwrite.",
        devstack:"React, Appwrite",
        link:"https://github.com/Saaransh-Mehta/blog-app-appwrite",
        src:project1
    }

]

const Portfolio = () => {
  return (
    <>
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40' id='portfolio'>
    <h1 className='text-white text-6xl w-[320px] mx-auto font-semibold  my-12'>Selected<span className='text-orange-400 my-12'>  Projects</span></h1>
        <div className='px-6 md:px-0 py-1 md:py-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
            {
                projects.map((project,index)=>{
                    return(
                        <motion.div key={index} initial={{opacity:0,y:75}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.5,delay:0.25}}
                        className={`mt-10 flex flex-col ${index % 2 === 0 ? " md:flex-row-reverse gap-12":"  md:flex-row"}`} 
                       >
                            <div className='space-y-2 max-w-[550px]'>
                                <h1 className='text-7xl my-4 text-white/70'>{`0${index+ 1}`}</h1>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='text-lg text-white/70 break-words p-4'>{project.description}</p>
                                 <p className='text-lg text-orange-500 font-semibold break-words p-4'>{project.devstack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                    <a href={project.link } className='mr-6'>Link</a>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={project.src} alt='title' className='h-[350px] border rounded border-gray-700 w-[500px] object-cover'/>
                            </div>

                        </motion.div>
                    )
                })
            }
        </div>

    </div>
    </>
  )
}

export default Portfolio
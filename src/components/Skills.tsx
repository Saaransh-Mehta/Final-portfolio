'use client'
import React from 'react'
import { motion } from 'motion/react'
import { FaCss3, FaDatabase, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'


const Skills = () => {
    const skillsIcon = [
        {
            icon:<FaHtml5 size={140}/>, label:"HTML"
        },
        {
            icon:<FaCss3 size={140}/>, label:"CSS"
        },{
            icon:<FaReact size={140}/>, label:"React JS"
        },{
            icon :<FaJsSquare size={140}/>, label:"Javascript"
        },{
            icon:<FaNodeJs size={140}/>, label:"Node.js"
        },{
            icon:<FaDatabase size={140}/>,label:"MongoDB"
        }
    ]
  return (
<>
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32' id='skills'>
        <div className=' w-[400px] md:w-[900px] mx-auto -8 text-center text-white'>
                <h1 className='text-6xl font-bold mb-4'>What I do</h1>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 '>
                    {skillsIcon.map((skill,index)=>{
                        return(
                            <div key={index} className='flex justify-between items-center bg-white/10 p-4 rounded-xl md:h-[220px] md:w-[220px]  h-[160px] w-[160px] flex-col'>
                                {skill.icon}
                                <p className='mt-2'>{skill.label}</p>
                            </div>
                        )
                    })}
                </div>
        </div>

    </div>
</>
  )
}

export default Skills
'use client'
import Link from "next/link"
import React,{useState} from "react"
import {AiOutlineMenu , AiOutlineClose} from "react-icons/ai"
import {motion} from 'motion/react'

const navLinks = [
    {
        title: "About",
        path:"#about"
    },{
        title:"Portfolio",
        path:"#portfolio"
    },{
        title:"Skills",
        path:"#skills"
    }
]

const Navbar = ()=>{
    const [nav,setNav] = useState(false)

    const toggleNav = ()=>{
        setNav(!nav)
    }
    const closeNav = ()=>{
        setNav(false)
    }

    const menuVariants = {
        open:{
            x:0,
            transition:{
                stiffness:20,
                damping:15
            }
        },
        closed:{
            x:'-100%',
            transition:{
                stiffness:20,
                damping:15
            }

        }
    }
    return(
        <div className="text-white/70 bg-black pt-6">
            <div className="hidden  md:flex items-center px-4 py-2 mx-auto max-w-[400px] bg-black">
                <ul className="flex flex-row p-4  space-x-8">
                    {navLinks.map((link,index)=>{
                        return (<li key={index} className="">
                            <Link href={link.path}>
                            <p className="text-white">{link.title}</p>
                            </Link>
                        </li>
                        )
                    })}
                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-white font-bold text-lg cursor-pointer">Contact Me</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-250 ease-out bg-orange-400 rounded-full group-hoverw-full"></div>
                                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-250 ease-out bg-orange-600 rounded-full group-hoverw-full"></div>

                            </div>
                        </a>
                    </li>
                </ul>
            </div>

                    <div onClick={toggleNav}className="absolute md:hidden bg-black top-5 right-5 cursor-pointer rounded border-white/70 p-2 z-50">
                        {
                           nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>
                        }
                    </div>
                    
                        <motion.div
                        initial={false}

                        animate={nav ? "open" : "closed"}
                        variants={menuVariants}
                        className="fixed left-0 top-0 w-full z-40 bg-black/90"
                        >
                                <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                                    {navLinks.map((item,index)=>{
                                        return(
                                            <li key={index} className="text-white text-2xl p-4">
                                                <Link href={item.path}>
                                                    <p className="" onClick={closeNav}>{item.title}</p>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </motion.div>

        </div>
    )
}
export default Navbar
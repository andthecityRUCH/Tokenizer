"use client";
import React from 'react'
import { motion } from "motion/react";
import { GithubIcon, Linkedin, TowerControl, UserIcon, X } from 'lucide-react';


const Footer = () => {
    const iconHover = {
        whileHover: {
            scale: 1.25,
            color: "rgba(16, 185, 129, 1)", // emerald-500
            filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.6)) blur(0.5px)",
        },
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 15,
            duration: 0.3,
        },
    };
    return (
        <footer className="text-gray-600 body-font mt-10">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex text-emerald-700 title-font font-medium items-center md:justify-start justify-center ">
                    <TowerControl />
                    <span className="ml-3 text-xl text-emerald-700">Tokenizer</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Tokenizer —
                    <a href="https://x.com/BustedCarp" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@andthecityRUCH</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
                    <a
                        href="https://github.com/andthecityRUCH"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.span {...iconHover}>
                            <GithubIcon className="w-5 h-5 text-white cursor-pointer" />
                        </motion.span>
                    </a>

                    <a
                        href="https://x.com/BustedCarp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.span {...iconHover}>
                            <X className="w-5 h-5 text-white cursor-pointer" />
                        </motion.span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ruchira-0253b4362/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.span {...iconHover}>
                            <Linkedin className="w-5 h-5 text-white cursor-pointer" />
                        </motion.span>
                    </a>

                    <a
                        href="https://unstop.com/u/ruchiram66437"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.span {...iconHover}>
                            <UserIcon className="w-5 h-5 text-white cursor-pointer" />
                        </motion.span>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer

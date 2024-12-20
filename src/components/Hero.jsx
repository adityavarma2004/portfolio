import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import framer-motion
import profilePic from '../assets/kevinRushProfile.jpg'; // Your image
import { HERO_CONTENT } from '../constants'; // Your content

const Hero = () => {
    const ref = useRef(null); // Create a ref for in-view detection
    const isInView = useInView(ref, { triggerOnce: true }); // Trigger animation only once

    return (
        <div ref={ref} className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h2
                            initial={{ x: 100, opacity: 0 }} // Starts off-screen to the right
                            animate={isInView ? { x: 0, opacity: 1 } : {}} // Animates when in view
                            transition={{ duration: 0.8 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Aditya Varma
                        </motion.h2>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                        >
                            Front End Developer
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} // Starts slightly below
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 1 }}
                            className='my-2 max-w-xl py-6 font-light tracking-lighter'
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 1 }}
                        className="flex justify-center"
                    >
                        <img src={profilePic} alt="Kevin Rush" className="rounded-full" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

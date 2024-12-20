import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // Trigger when element comes into view
        variants={{
          hidden: { opacity: 0, y: 50 }, // Hidden state with offset
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1.5, ease: 'easeOut' }
          }, // Final visible state with smooth animation
        }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Trigger on scroll animation
            variants={{
              hidden: { opacity: 0, x: -300, scale: 0.8 }, // Start hidden with offset and smaller scale
              visible: { 
                opacity: 1, 
                x: 0, 
                scale: 1, 
                transition: { duration: 1.5, ease: 'easeOut' } 
              }, // Final visible state with smooth animation
            }}
          >
            <img className="rounded-2xl w-full max-w-lg" src={aboutImg} alt="about image" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 px-6 lg:px-8">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Trigger on scroll animation
            variants={{
              hidden: { opacity: 0, x: 300, scale: 0.8 }, // Start hidden with offset and smaller scale
              visible: { 
                opacity: 1, 
                x: 0, 
                scale: 1, 
                transition: { duration: 1.5, ease: 'easeOut' } 
              }, // Final visible state with smooth animation
            }}
          >
            <p className="my-2 max-w-lg py-6 text-neutral-500">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

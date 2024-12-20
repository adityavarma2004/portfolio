import { PROJECTS } from "../constants"; // Ensure the correct import for the PROJECTS array
import { motion } from "framer-motion"; // Import framer-motion
import { useEffect, useState } from "react"; // Import useEffect and useState

const Projects = () => {
  // State to track if the component is in view
  const [inView, setInView] = useState(false);

  // Variants for motion effects
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and hidden
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }, // Stagger animation between children
    },
  };

  const highlightHoverEffect = {
    hover: { scale: 1.1, transition: { duration: 0.3 } }, // Scale effect on hover
  };

  // Additional animation for the "About" section or description part
  const aboutVariants = {
    hidden: { opacity: 0, scale: 0.9 }, // Slightly smaller and hidden at first
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }, // Smooth animation for visibility and scale
    },
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById("projects-section").getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="projects-section" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Trigger animation based on inView state
        variants={staggerVariants} // Apply staggered animations
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Trigger animation based on inView state
            variants={fadeInVariants} // Apply fade-in animation with slide effect
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <motion.h6
                className="mb-2 font-semibold"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Trigger animation based on inView state
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {project.title}
              </motion.h6>
              <motion.p
                className="mb-4 text-neutral-400"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Trigger animation based on inView state
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {project.description}
              </motion.p>

              {/* About Animation (project details or description) */}
              <motion.div
                className="mt-2"
                variants={aboutVariants} // Apply custom "About" animations
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // Trigger animation based on inView state
              >
                {project.technologies .map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-black mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                    whileHover="hover" // Apply hover effect
                    variants={highlightHoverEffect} // Hover effect on technologies
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
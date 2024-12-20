import { EXPERIENCES } from "../constants"; // Ensure the correct import for the EXPERIENCES array
import { motion } from "framer-motion"; // Import framer-motion

const Experience = () => {
  // Variants for motion effects
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and hidden
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const highlightHoverEffect = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const scrollAnimationVariantsLeft = {
    hidden: { opacity: 0, x: -50 }, // Start from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const scrollAnimationVariantsRight = {
    hidden: { opacity: 0, x: 50 }, // Start from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Education</h1>
      <div className="flex flex-col space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap lg:justify-center"
            initial="hidden"
            whileInView="visible" // Trigger when the element comes into view
            viewport={{ once: true }} // Only trigger once
            variants={fadeInVariants}
          >
            <div className="w-full lg:w-1/4">
              <motion.p
                className="mb-2 text-sm text-neutral-400"
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariantsLeft} // Animate from the left
                transition={{ delay: 0.1 * index, duration: 0.6 }} // Staggered delay
              >
                {experience.year}
              </motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                className="mb-2 font-semibold"
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariantsRight} // Animate from the right
                transition={{ delay: 0.1 * index + 0.2, duration: 0.6 }} // Staggered delay
              >
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.institution}
                </span>
              </motion.h6>
              <motion.p
                className="mb-4 text-neutral-400"
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariantsLeft} // Animate from the left
                transition={{ delay: 0.1 * index + 0.3, duration: 0.6 }} // Staggered delay
              >
                {experience.description}
              </motion.p>

              {/* Check for highlights and display them if available */}
              {experience.highlights && (
                <motion.div
                  className="mt-2"
                  initial="hidden"
                  whileInView="visible"
                  variants={scrollAnimationVariantsRight} // Animate from the right
                  transition={{ delay: 0.1 * index + 0.4, duration: 0.6 }} // Staggered delay
                >
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <motion.span
                      key={highlightIndex}
                      className="bg-black mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                      whileHover="hover"
                      variants={highlightHoverEffect} // Hover effect
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
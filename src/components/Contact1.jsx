import React from 'react';
import { motion } from 'framer-motion';

const Contact1 = () => {
  const CONTACT = {
    address: "Uppal, Hyderabad, India",
    phoneNo: "+918639452764",
    email: "adiitya12345678@gmail.com"
  };

  // Variants for motion effects
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const hoverEffect = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="border-y border-neutral-900 pb-20"
    >
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        {/* Animated Contact Information */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.4 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b"
          aria-label={`Send an email to ${CONTACT.email}`}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.6 }}
          whileHover={hoverEffect.hover} // Fixed here
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact1;

import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Navbar = () => {
  // Navbar fade-in animation
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Icon hover effect (Bigger scale for icons)
  const iconVariants = {
    hover: { scale: 1.5, color: "#f4b400", transition: { duration: 0.3 } }, // Increased scale to 1.5
  };

  return (
    <motion.nav
      className="mb-20 flex items-center justify-between py-6"
      initial="hidden"
      animate="visible"
      variants={navbarVariants} // Apply fade-in and slide-up animation to the navbar
    >
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          className="mx-2 w-10"
          src={logo}
          alt="Logo"
          whileHover={{ scale: 1.1 }} // Scale the logo when the mouse hovers over it
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/adityavarmavadapalli/"
          whileHover="hover" // Apply hover effect on hover
          variants={iconVariants} // Apply hover animation to LinkedIn icon
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com"
          whileHover="hover" // Apply hover effect on hover
          variants={iconVariants} // Apply hover animation to Github icon
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://twitter.com"
          whileHover="hover" // Apply hover effect on hover
          variants={iconVariants} // Apply hover animation to Twitter icon
        >
          <FaTwitter />
        </motion.a>

        <motion.a
          href="https://www.instagram.com"
          whileHover="hover" // Apply hover effect on hover
          variants={iconVariants} // Apply hover animation to Instagram icon
        >
          <FaInstagram />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

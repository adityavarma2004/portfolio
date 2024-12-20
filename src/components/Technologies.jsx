import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaJava, FaDatabase } from "react-icons/fa";

const Technologies = () => {
  const techData = [
    { Icon: RiReactjsLine, color: "text-blue-600", percentage: 30 },
    { Icon: FaHtml5, color: "text-orange-500", percentage: 60 },
    { Icon: FaCss3Alt, color: "text-blue-400", percentage: 40 },
    { Icon: FaJs, color: "text-yellow-400", percentage: 50 },
    { Icon: FaPhp, color: "text-blue-700", percentage: 50 },
    { Icon: FaJava, color: "text-red-600", percentage: 40 },
    { Icon: FaDatabase, color: "text-gray-500", percentage: 35 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies Known</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techData.map(({ Icon, color, percentage }, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center rounded-full border-4 border-neutral-800 p-4 w-32 h-32 relative overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when element is in view
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 2, // Larger size
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker background
              transition: { duration: 0.4 },
            }}
          >
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className={`text-7xl ${color}`} />
            </motion.div>
            <motion.div
              className="absolute text-gray-100 text-lg font-bold"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, color: "rgba(255, 255, 255, 0.9)" }} // Darker percentage text
              transition={{ duration: 0.3 }}
            >
              {percentage}%
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;


import { motion } from 'framer-motion';

const WhitepaperCard = ({ paper, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClick();
  };
  
  const handleDownloadClick = (e) => {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClick();
  };

  // Animation variants
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { 
      y: -8, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hover: { 
      scale: 1.2, 
      rotate: 5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: { repeat: Infinity, repeatType: "reverse", duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="border h-[370px] bg-white rounded-lg overflow-hidden shadow-md cursor-pointer group max-w-6xl mx-auto"
      onClick={handleClick}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      {/* Image section */}
      <div className="h-35 overflow-hidden">
        <motion.img
          src={paper.image}
          alt={paper.title}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />
      </div>
      
      {/* Title and icon in one line */}
      <div className="p-4 flex items-center gap-3">
        <motion.span 
          className="text-2xl"
          variants={iconVariants}
        >
          {paper.icon}
        </motion.span>
        <motion.h3 
          className="text-base font-semibold"
          animate={{ color: "#000e54" }}
          transition={{ duration: 0.5 }}
        >
          {paper.title}
        </motion.h3>
      </div>
      
      {/* Content section */}
      <div className="p-4">
        <p className="text-gray-600 line-clamp-3 text-sm">{paper.description}</p>
        
        {/* Download button with animations */}
        <motion.div 
          className="mt-4 hidden lg:block"
          variants={buttonVariants}
        >
          <motion.button
            className="w-full py-2 bg-[#000e54] text-white rounded-md flex items-center justify-center gap-2"
            whileHover={{ backgroundColor: "rgba(0, 14, 84, 0.9)", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownloadClick}
          >
            <span>Download Now</span>
            <motion.span variants={arrowVariants}>→</motion.span>
          </motion.button>
        </motion.div>
        
        {/* Button visible on medium and small screens without hover */}
        <div className="mt-4 lg:hidden">
          <motion.button
            className="w-full py-2 bg-[#000e54] text-white rounded-md"
            whileHover={{ backgroundColor: "rgba(0, 14, 84, 0.9)", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownloadClick}
          >
            Download Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default WhitepaperCard;
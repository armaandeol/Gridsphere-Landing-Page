import { motion } from "framer-motion";
import Pointssection from "./Points";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const bannerItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const textItem = {
  hidden: { x: -30, opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.17, 0.67, 0.83, 0.67],
      delay: 0.2
    }
  }
};

const graphicItem = {
  hidden: { x: 30, opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.17, 0.67, 0.83, 0.67],
      delay: 0.4
    }
  }
};

export const Vision = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="w-full overflow-hidden pb-8"
    >
      {/* Banner Section */}
      <div className="bg-black text-white py-8">
        <h2 className="text-center text-5xl pattaya-regular">
          Our Vision
        </h2>
      </div>
      
      {/* Content Section */}
      <div className="bg-white text-black pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-[400px] gap-8">
            {/* Text Column */}
            <motion.div 
              variants={textItem}
              className="w-full lg:w-1/2 lg:pr-4"
            >
              <h1 className="text-3xl lg:text-4xl leading-relaxed pt-4 lg:pt-0">
                We aim to revolutionize the way people interact with technology, creating a seamless blend
                of <span className="font-semibold text-black">innovation</span> and <span className="font-semibold text-black">
                user experience</span> that empowers individuals and communities.
              </h1>
            </motion.div>
            
            {/* Graphic Column */}
            <motion.div 
              variants={graphicItem}
              className="w-full flex justify-start items-center lg:justify-center lg:w-1/2 lg:pl-4 lg:px-12 px-0"
            >
              <Pointssection />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
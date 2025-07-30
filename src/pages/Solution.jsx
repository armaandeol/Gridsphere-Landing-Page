import { Header } from '../sections/Header';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const Solution = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const hoverEffects = {
    lift: {
      scale: 1.03,
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    },
    glow: {
      scale: 1.02,
      boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)",
      transition: { duration: 0.3 }
    },
    rotate: {
      rotate: 2,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  // New animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <>
      <Header />
      
      <div className="bg-white">
        {/* Hero Section with enhanced animations */}
        <section className="max-w-6xl px-4 py-24 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={hoverEffects.lift}
            className="inline-block"
          >
            <motion.h1
              className="mb-6 text-5xl font-bold text-gray-900"
              animate={pulseAnimation}
            >
              Smart Farming Solutions
            </motion.h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={hoverEffects.rotate}
            className="inline-block max-w-3xl mx-auto text-2xl font-medium text-black"
          >
            Transforming agriculture with real-time sensing and AI
          </motion.p>
          
          {/* Animated decorative elements */}
          <motion.div 
            className="absolute top-0 left-0 w-20 h-20 bg-green-100 rounded-full opacity-20"
            animate={floatingAnimation}
            style={{ x: '10%', y: '20%' }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20"
            animate={floatingAnimation}
            style={{ x: '-10%', y: '30%' }}
            transition={{ duration: 5, delay: 0.5 }}
          />
        </section>
        
        {/* Problem Section with staggered animations */}
        <section className="max-w-4xl px-4 py-16 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffects.glow}
            className="p-8 bg-white border border-gray-100 shadow-lg rounded-xl"
          >
            <motion.h2 
              className="mb-6 text-3xl font-bold text-gray-800"
              whileInView={{
                scale: [1, 1.05, 1],
                transition: { duration: 0.5 }
              }}
            >
              The Problem We Saw
            </motion.h2>
            
            <motion.ul 
              className="mb-8 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Overuse or underuse of fertilizers and water",
                "Lack of real-time information",
                "Low yield due to unpredictable conditions",
                "Manual processes wasting time and money"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10,
                    borderLeft: "4px solid #10b981",
                    paddingLeft: "1rem",
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start py-2 text-lg text-gray-700 border-l-4 border-transparent"
                >
                  <motion.span 
                    className="mr-3 text-xl text-red-500"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                    whileHover={{
                      scale: 1.5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    •
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        {/* Solutions Section with enhanced animations */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl px-4 mx-auto">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  background: "linear-gradient(90deg, #f0fdf4, #ecfdf5)",
                  transition: { duration: 0.3 }
                }}
                className="inline-block p-4 mb-12 text-3xl font-bold text-center text-gray-800 rounded-lg"
              >
                Our Solutions
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="grid gap-8 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Smart Monitoring",
                  desc: "IoT sensors for real-time farm data",
                  icon: "📊"
                },
                {
                  title: "AI Predictions",
                  desc: "Soil nutrition and weather forecasting",
                  icon: "🤖"
                },
                {
                  title: "Automation",
                  desc: "Customizable irrigation systems",
                  icon: "⚙️"
                },
                {
                  title: "Dashboard",
                  desc: "Live insights on your mobile",
                  icon: "📱"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    rotate: "1deg",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    background: "linear-gradient(145deg, #ffffff, #f0fdf4)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full p-6 bg-white border border-gray-100 shadow-md cursor-pointer rounded-xl"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-16 h-16 mb-4 text-4xl bg-green-100 rounded-full"
                  >
                    {item.icon}
                  </motion.div>
                  <motion.h3 
                    className="mb-3 text-2xl font-bold text-gray-800"
                    whileHover={{ color: "#10b981" }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-700"
                    whileHover={{ x: 5 }}
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      
        <section className="max-w-6xl px-4 py-16 mx-auto">
          <motion.h2 
            className="mb-12 text-3xl font-bold text-center text-gray-800"
            whileInView={{
              textShadow: "0 0 8px rgba(16, 185, 129, 0.5)",
              transition: { duration: 0.5, repeat: 1, repeatType: "reverse" }
            }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Designed for India",
                desc: "Tailored to local conditions",
                color: "from-green-100 to-green-50"
              },
              {
                title: "Affordable",
                desc: "Accessible to all farmers",
                color: "from-blue-100 to-blue-50"
              },
              {
                title: "Real-time Data",
                desc: "Instant farm insights",
                color: "from-purple-100 to-purple-50"
              },
              {
                title: "AI Powered",
                desc: "Smart predictions",
                color: "from-yellow-100 to-yellow-50"
              },
              {
                title: "Easy to Use",
                desc: "Simple interface",
                color: "from-red-100 to-red-50"
              },
              {
                title: "24/7 Support",
                desc: "Always available",
                color: "from-indigo-100 to-indigo-50"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  zIndex: 10
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer`}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-10 h-10 mb-4 bg-white rounded-full shadow-inner"
                >
                  <motion.span 
                    className="text-lg"
                    whileHover={{ scale: 1.5 }}
                  >
                    {index + 1}
                  </motion.span>
                </motion.div>
                <motion.h3 
                  className="mb-2 text-xl font-bold text-gray-800"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-700"
                  whileHover={{ x: 5 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </section>

      
        <section className="py-20 text-white bg-green-600">
          <div className="max-w-3xl px-4 mx-auto text-center">
            <motion.h2 
              className="mb-12 text-3xl font-bold"
              whileInView={{ 
                scale: [1, 1.1, 1],
                transition: { duration: 0.5 } 
              }}
              viewport={{ once: true }}
            >
              What Farmers Say
            </motion.h2>
            
            <motion.div
              whileHover={{
                rotateY: 180,
                transition: { duration: 0.6 }
              }}
              className="w-full perspective-1000"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                className="relative flex items-center justify-center w-full h-64 p-8 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="absolute w-full backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.blockquote 
                    className="mb-6 text-xl italic"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                      transition: { duration: 3, repeat: Infinity }
                    }}
                  >
                    
                  </motion.blockquote>
                  <motion.p 
                    className="font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    
                  </motion.p>
                </motion.div>
                <motion.div 
                  className="absolute w-full backface-hidden rotate-y-180"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <motion.p 
                    className="mb-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    ★★★★★
                  </motion.p>
                  <motion.p
                    animate={floatingAnimation}
                  >
                    Verified Customer
                  </motion.p>
                  <motion.p 
                    className="mt-2 text-sm"
                    animate={floatingAnimation}
                    transition={{ delay: 0.2 }}
                  >
                    Since 2022
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

       
        <section className="px-4 py-20 text-white bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              className="mb-6 text-3xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Upgrade Your Farm?
            </motion.h2>
            
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
              animate={pulseAnimation}
            >
              <motion.button
                whileHover={{
                  background: "linear-gradient(45deg, #10b981, #3b82f6)",
                  boxShadow: "0 0 20px rgba(74, 222, 128, 0.7)"
                }}
                whileTap={{ 
                  scale: 0.95,
                  boxShadow: "0 0 10px rgba(74, 222, 128, 0.5)"
                }}
                className="relative px-10 py-4 overflow-hidden text-lg font-bold text-white bg-green-600 rounded-full shadow-lg"
              >
                <span className="relative z-10">Get Started Today</span>
                <motion.span
                  className="absolute inset-0 opacity-0 bg-gradient-to-r from-green-500 to-blue-500"
                  whileHover={{ opacity: 1 }}
                />
               
                <motion.span
                  className="absolute top-0 left-0 w-full h-full bg-white rounded-full opacity-0"
                  whileTap={{
                    scale: 2,
                    opacity: 0.2,
                    transition: { duration: 0.5 }
                  }}
                />
              </motion.button>
            </motion.div>
            
            
            <motion.div 
              className="absolute bottom-0 left-0 w-40 h-40 bg-green-400 rounded-full opacity-10"
              animate={{
                ...floatingAnimation,
                x: [0, 50, 0],
                transition: { duration: 6 }
              }}
              style={{ y: '-20%' }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-10"
              animate={{
                ...floatingAnimation,
                x: [0, -30, 0],
                transition: { duration: 5, delay: 0.5 }
              }}
              style={{ y: '-10%' }}
            />
          </div>
        </section>
      </div>
    </>
  );
};
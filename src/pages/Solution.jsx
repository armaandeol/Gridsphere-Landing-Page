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

  return (
    <>
      <Header />
      
      <div className="bg-white">
       
        <section className="max-w-6xl px-4 py-24 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={hoverEffects.lift}
            className="inline-block"
          >
            <h1 className="mb-6 text-5xl font-bold text-gray-900 ">
             
              Smart Farming Solutions
            </h1>
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
          
        </section>
        
        <section className="max-w-4xl px-4 py-16 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffects.glow}
            className="p-8 bg-white border border-gray-100 shadow-lg rounded-xl"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-800">The Problem We Saw</h2>
            <ul className="mb-8 space-y-4">
              {[
                "Overuse or underuse of fertilizers and water",
                "Lack of real-time information",
                "Low yield due to unpredictable conditions",
                "Manual processes wasting time and money"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ 
                    x: 10,
                    borderLeft: "4px solid #10b981",
                    paddingLeft: "1rem",
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start py-2 text-lg text-gray-700 border-l-4 border-transparent"
                >
                  <span className="mr-3 text-xl text-red-500">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

       
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl px-4 mx-auto">
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
            
            <div className="grid gap-8 md:grid-cols-2">
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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                    className="flex items-center justify-center w-16 h-16 mb-4 text-4xl bg-green-100 rounded-full"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       
        <section className="max-w-6xl px-4 py-16 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
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
                  className="flex items-center justify-center w-10 h-10 mb-4 bg-white rounded-full shadow-inner"
                >
                  <span className="text-lg">{index + 1}</span>
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        
        <section className="py-20 text-white bg-green-600">
          <div className="max-w-3xl px-4 mx-auto text-center">
            <h2 className="mb-12 text-3xl font-bold">What Farmers Say</h2>
            
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
                >
                  <blockquote className="mb-6 text-xl italic">
                    
                  </blockquote>
                  <p className="font-medium"></p>
                </motion.div>
                <motion.div 
                  className="absolute w-full backface-hidden rotate-y-180"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <p className="mb-4 text-lg">★★★★★</p>
                  <p>Verified Customer</p>
                  <p className="mt-2 text-sm">Since 2022</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        
        <section className="px-4 py-20 text-white bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Upgrade Your Farm?</h2>
            
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <motion.button
                whileHover={{
                  background: "linear-gradient(45deg, #10b981, #3b82f6)",
                  boxShadow: "0 0 20px rgba(74, 222, 128, 0.7)"
                }}
                className="relative px-10 py-4 overflow-hidden text-lg font-bold text-white bg-green-600 rounded-full shadow-lg"
              >
                <span className="relative z-10">Get Started Today</span>
                <motion.span
                  className="absolute inset-0 opacity-0 bg-gradient-to-r from-green-500 to-blue-500"
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};
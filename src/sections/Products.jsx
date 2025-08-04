"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { LayoutGrid } from '../components/ui/layout-grid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <UseCasesSection />
    </div>
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the highlight text effect similar to Story.jsx
      const highlights = gsap.utils.toArray('.highlight-text');
      highlights.forEach(highlight => {
        gsap.fromTo(highlight,
          { backgroundSize: "0% 100%" },
          {
            backgroundSize: "100% 100%",
            duration: 1,
            scrollTrigger: {
              trigger: highlight,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-block mb-6"
      >
        <motion.h1 
        className="text-4xl md:text-6xl font-bold text-black mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Smart Farm Solutions
      </motion.h1>
      </motion.div>
      
      
      
      <motion.p 
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        At Grid Sphere, we develop <span className="highlight-text bg-gradient-to-r from-green-200 to-blue-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">intelligent systems</span> that help farmers and agricultural institutions monitor, analyze, and act — all in real-time. Our products are built for <span className="highlight-text bg-gradient-to-r from-yellow-200 to-green-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">Indian conditions</span> and backed by cutting-edge tech.
      </motion.p>
    </motion.section>
  );
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Add parallax effect to product images similar to Story.jsx
      const images = gsap.utils.toArray('.product-image');
      images.forEach(image => {
        gsap.to(image, {
          y: -30,
          scale: 1.05,
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const products = [
    {
      title: "Smart Farm Monitoring Station",
      icon: "🌾",
      shortDesc: "Your field, under constant watch",
      longDesc: "A fixed, solar-powered IoT device that continuously tracks environmental conditions — helping you make informed, timely decisions.",
      features: [
        "Monitors air & soil temperature",
        "Tracks humidity (air, surface & depth)",
        "Measures rainfall and wind speed/direction",
        "Light intensity and solar radiation",
        "Air quality (CO₂, NH₃, smoke)",
        "Wireless data logging",
        "Solar-powered operation",
        "Cloud-based dashboard"
      ],
      image: "/assets/images/monitor_station.jpg",
      detailText: "Our Smart Farm Monitoring Station represents the cutting edge in agricultural technology. Designed specifically for Indian farming conditions, this durable, weather-resistant unit can be installed anywhere on your farm. The station creates a continuous stream of environmental data, giving you unprecedented insight into your field's microclimate and soil conditions. By analyzing this data, you can optimize irrigation schedules, anticipate pest and disease risks, and fine-tune your planting and harvesting decisions."
    },
    {
      title: "Portable Soil Health Monitor",
      icon: "🧪",
      shortDesc: "Test soil anywhere, instantly",
      longDesc: "A compact, AI-powered device that predicts NPK (Nitrogen, Phosphorus, Potassium) and moisture levels, using dielectric and NIR-based sensing.",
      features: [
        "AI-based prediction engine",
        "Real-time on-spot testing",
        "Drone-compatible design",
        "Smart data-driven fertilization planning",
        "Easy-to-use handheld device",
        "Data export for analysis"
      ],
      image: "/assets/images/soil_health_monitor.jpg",
      detailText: "The Portable Soil Health Monitor transforms how soil testing is done in India. Instead of waiting days or weeks for lab results, farmers and researchers can get immediate soil analysis right in the field. Our proprietary AI algorithms analyze sensor data to provide accurate NPK recommendations, helping reduce fertilizer waste while ensuring optimal crop nutrition. The unit's compact design allows it to be carried by hand or mounted on drones for rapid field surveys, making it perfect for both smallholder farmers and large agricultural operations."
    },
    {
      title: "Smart Irrigation System",
      icon: "💧",
      shortDesc: "Automate water. Save time. Save resources",
      longDesc: "Our intelligent irrigation control system activates pumps and valves based on live soil data, weather conditions, or user-defined schedules.",
      features: [
        "Auto-start/stop via soil moisture sensing",
        "Weather-integrated decision support",
        "Mobile + dashboard remote control",
        "Plug & play automation",
        "Water efficiency optimization",
        "Smart alerts & thresholds"
      ],
      image: "/assets/images/irrigation_system.jpg",
      detailText: "Water conservation is critical for sustainable farming, especially in regions facing drought or irregular rainfall. Our Smart Irrigation System combines sensor data with weather forecasts to make intelligent watering decisions. The system can be programmed to maintain optimal soil moisture levels automatically or controlled manually through our intuitive mobile app. By delivering precisely the right amount of water exactly when needed, farmers can reduce water usage by up to 40% while improving crop yields. The system is designed for easy installation with existing irrigation infrastructure."
    }
  ];

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    // Prevent scrolling when overlay is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeProductDetail = () => {
    setSelectedProduct(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };
  
  // Clean up effect to ensure scrolling is re-enabled if component unmounts while overlay is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section ref={sectionRef} className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
            onClick={() => openProductDetail(product)}
          />
        ))}
      </motion.div>
      
      <AnimatePresence mode="wait">
        {selectedProduct && (
          <ProductOverlay 
            product={selectedProduct} 
            onClose={closeProductDetail} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProductCard = ({ product, index, onClick }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  // Staggered animation delay based on index
  const animationDelay = index * 0.2;

  return (
    <motion.div
      ref={cardRef}
      className="cursor-pointer rounded-2xl overflow-hidden h-full bg-white border border-gray-100 shadow-md"
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          delay: animationDelay,
          duration: 0.7, 
          type: "spring", 
          stiffness: 100
        }
      } : {}}
      whileHover={{
        y: -10,
        rotate: "1deg",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(145deg, #ffffff, #f0fdf4)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-6">
        <div className="flex items-start mb-4">
          <motion.div 
            className="bg-green-100 flex items-center justify-center w-16 h-16 rounded-full"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { 
              scale: 1, 
              rotate: 0,
              transition: { 
                delay: animationDelay + 0.3,
                type: "spring",
                stiffness: 200
              }
            } : {}}
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <span className="text-3xl">{product.icon}</span>
          </motion.div>
          <div className="flex-1 ml-4">
            <motion.h3 
              className="text-xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0,
                transition: { delay: animationDelay + 0.4 }
              } : {}}
            >
              {product.title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 mt-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: 1,
                transition: { delay: animationDelay + 0.5 }
              } : {}}
            >
              {product.shortDesc}
            </motion.p>
          </div>
        </div>
        
        <motion.p 
          className="text-gray-700 mt-4 line-clamp-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { 
            opacity: 1,
            transition: { delay: animationDelay + 0.6 }
          } : {}}
        >
          {product.longDesc}
        </motion.p>
      </div>
      
      <motion.div 
        className="px-6 pb-4 text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          transition: { delay: animationDelay + 0.7 }
        } : {}}
      >
        <span className="text-green-600 font-medium text-sm flex items-center justify-end">
          View Details
          <motion.svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </motion.svg>
        </span>
      </motion.div>
    </motion.div>
  );
};

const ProductOverlay = ({ product, onClose }) => {
  // Close on escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-[#F5F5F7] dark:bg-neutral-800">
          <motion.button
            onClick={onClose}
            className="bg-gray-200 dark:bg-neutral-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
        
        <div className="p-8 md:p-14 rounded-3xl mb-4">
          {/* Keep the title centered */}
          <motion.div 
            className="text-center mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              {product.title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
              {product.shortDesc}
            </p>
          </motion.div>
          
          {/* Left-aligned image with 16:9 aspect ratio */}
          <motion.div 
            className="aspect-w-16 aspect-h-9 mb-10 overflow-hidden rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src={product.image}
              alt={`${product.title} preview`}
              className="w-full h-full object-cover product-image"
            />
          </motion.div>
          
          {/* Left-aligned product detail text */}
          <motion.p 
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans mb-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {product.detailText}
          </motion.p>
          
          {/* Left-aligned features box */}
          <motion.div 
            className="bg-white dark:bg-neutral-700 p-6 rounded-xl mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + (idx * 0.1) }}
                >
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const benefitItems = [
    "Accurate data for soil, air, and climate conditions",
    "Real-time monitoring during trials",
    "Custom API/data export for academic analysis",
    "Plug-and-play setup for student projects",
    "Easy integration with research dashboards"
  ];

  return (
    <section className="bg-neutral-50 py-16 md:py-32  border-neutral-200">
      <div className="max-w-6xl mx-auto px-4" ref={sectionRef}>
        <motion.div 
          className="bg-white rounded-2xl p-10 shadow-xl border border-neutral-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
          <motion.div 
            className="absolute -right-16 -bottom-16 w-64 h-64 bg-green-50 rounded-full opacity-20"
            animate={isInView ? {
              scale: [1, 1.2, 1],
              transition: { 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut"
              }
            } : {}}
          ></motion.div>
          
          <div className="flex items-start mb-10 relative z-10">
            <motion.div 
              className="bg-neutral-50 p-3 rounded-xl shadow-inner mr-5"
              initial={{ rotate: -90, opacity: 0 }}
              animate={isInView ? { rotate: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-3xl text-green-600">🔬</span>
            </motion.div>
            <div>
              <motion.h2 
                className="text-2xl md:text-4xl font-bold text-neutral-800"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Bridging Technology and Agricultural Research
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mt-3 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              ></motion.div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                Grid Sphere's systems are not just made for farms — they're built for experimentation, validation, and education. Our solutions are actively being used in agricultural research, pilot projects, and institutional studies across India.
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed">
                We empower scientists, professors, and students with tools that deliver accurate data, real-time monitoring, and AI-backed insights — transforming traditional research into smart research.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="font-bold text-xl text-neutral-800 mb-6 border-b border-neutral-200 pb-3">
                Key Benefits for Research
              </h3>
              <ul className="space-y-4">
                {benefitItems.map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + (idx * 0.1), duration: 0.5 }}
                  >
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center bg-green-100 rounded-full text-green-600 mr-3">✓</span>
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Add staggered animations for use cases
      const useCases = gsap.utils.toArray('.use-case-item');
      useCases.forEach((useCase, index) => {
        gsap.fromTo(useCase, 
          { 
            opacity: 0, 
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: useCase,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.15
          }
        );
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const useCases = [
    {
      id: 1,
      icon: "🧪",
      title: "Soil Health Monitoring",
      subtitle: "Agricultural University Research Plot",
      description: "Study fertilizer effects on nutrient retention and crop yield",
      outcome: "Optimized fertilizer timing/dosage through high-frequency soil testing"
    },
    {
      id: 2,
      icon: "🌦️",
      title: "Microclimate Monitoring",
      subtitle: "Semi-urban Greenhouse",
      description: "Study crop behavior in controlled vs natural environments",
      outcome: "Optimized greenhouse ventilation and watering strategies"
    },
    {
      id: 3,
      icon: "💧",
      title: "Smart Irrigation Trials",
      subtitle: "Rajasthan Field Demonstration Farm",
      description: "Reduce water usage in drought-prone areas",
      outcome: "35% water reduction without compromising crop yield"
    },
    {
      id: 4,
      icon: "🎓",
      title: "Student Agritech Projects",
      subtitle: "B.Tech Final Year Projects",
      description: "Prototype real-world IoT/AI agriculture applications",
      outcome: "Hands-on learning with real deployments and publications"
    }
  ];

  return (
    <section ref={sectionRef} className="max-w-6xl px-4 py-16 mx-auto">
      <div className="relative mb-12 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proven Use Cases
        </motion.h2>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <div 
            key={useCase.id} 
            className={`use-case-item bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer`}
          >
            <div className="flex items-start mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center w-10 h-10 mb-4 bg-white rounded-full shadow-inner mr-4"
              >
                <span className="text-lg">{index + 1}</span>
              </motion.div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">{useCase.title}</h3>
                <p className="text-gray-700 font-medium">{useCase.subtitle}</p>
              </div>
            </div>
            
            <div className="space-y-3 pl-14">
              <p className="text-gray-700">
                <span className="font-semibold">Objective:</span> {useCase.description}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Outcome:</span> {useCase.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
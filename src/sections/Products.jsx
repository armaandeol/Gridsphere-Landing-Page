"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid } from '../components/ui/layout-grid';
import soilHealth from '../assets/soil_health.jpg';
import climate from '../assets/climate.jpg';
import drip from '../assets/drip_line.jpg';
import student from '../assets/student.jpg';
import { AppleCardsCarouselDemo } from './Cards';

export { LayoutGrid as UseCases };

const ProductCard = ({ product, isExpanded, onClick }) => {
  return (
    <motion.div
      layout
      className={`cursor-pointer rounded-xl shadow-lg overflow-hidden ${
        isExpanded ? 'bg-gradient-to-br from-green-50 to-blue-50' : 'bg-white'
      }`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div layout className="p-6 flex items-start">
        <div className="bg-green-100 p-3 rounded-lg mr-4">
          <span className="text-2xl">{product.icon}</span>
        </div>
        <div>
          <motion.h3 
            layout="position"
            className="text-xl font-bold text-gray-800"
          >
            {product.title}
          </motion.h3>
          <motion.p 
            layout="position"
            className="text-gray-600 mt-2"
          >
            {product.shortDesc}
          </motion.p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 pb-6"
          >
            <div className="border-t border-gray-200 my-4 pt-4">
              <p className="text-gray-700 mb-4">{product.longDesc}</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProductsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const products = [
    {
      title: "Smart Irrigation Controller",
      icon: "💧",
      shortDesc: "Automated water management system",
      longDesc: "Our flagship product optimizes water usage by integrating real-time weather data, soil moisture sensors, and crop-specific requirements. It reduces water consumption by up to 40% while maintaining optimal crop health.",
      features: [
        "Real-time soil moisture monitoring",
        "Weather prediction integration",
        "Mobile app control",
        "Water usage analytics",
        "Multi-zone management"
      ]
    },
    {
      title: "Crop Health Monitor",
      icon: "🌱",
      shortDesc: "AI-powered plant disease detection",
      longDesc: "Using hyperspectral imaging and machine learning, this system detects plant diseases and nutrient deficiencies weeks before visible symptoms appear. Early intervention increases yield by 15-25%.",
      features: [
        "Early disease detection",
        "Nutrient deficiency analysis",
        "Growth stage tracking",
        "Yield prediction",
        "Mobile alerts"
      ]
    },
    {
      title: "Farm Automation Hub",
      icon: "🤖",
      shortDesc: "Centralized farm management system",
      longDesc: "The central nervous system of your smart farm. Integrates all sensors and equipment into a single dashboard with automated workflows and predictive analytics.",
      features: [
        "Equipment integration",
        "Automated task scheduling",
        "Predictive maintenance",
        "Energy optimization",
        "Customizable dashboards"
      ]
    }
  ];

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Products
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Innovative solutions designed to transform traditional farming into precision agriculture
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            isExpanded={expandedIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </motion.div>
    </div>
  );
};

const AnimatedHeading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Grid Sphere?
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-green-50 rounded-2xl p-6 md:p-8 border border-green-100"
      >
        <div className="flex items-start mb-4">
          <span className="text-3xl mr-3">🔬</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-left">
            Bridging Technology and Agricultural Research
          </h2>
        </div>
        
        <motion.p 
          className="text-lg text-gray-700 mb-4 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Grid Sphere's systems are not just made for farms — they're built for experimentation, validation, and education. 
          Our solutions are actively being used in agricultural research, pilot projects, and institutional studies across India.
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-700 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          We empower scientists, professors, and students with tools that deliver accurate data, real-time monitoring, 
          and AI-backed insights — transforming traditional research into smart research.
        </motion.p>
      </motion.div>
    </div>
  );
};


// Use Case Components
const UseCaseOne = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">🔬</span>
        <p className="font-bold md:text-2xl text-xl ">
          Soil Health Monitoring
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium ">Agricultural University Research Plot</p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Objective:</span> Study fertilizer effects on nutrient retention and crop yield
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Tools:</span> Portable Soil Health Monitor (NPK + Moisture)
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Outcome:</span> Optimized fertilizer timing/dosage through high-frequency soil testing
        </p>
      </div>
    </div>
  );
};

const UseCaseTwo = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">🌦️</span>
        <p className="font-bold md:text-2xl text-xl">
          Microclimate Monitoring
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium ">Semi-urban Greenhouse</p>
        <p className="font-normal text-sm">
          <span className="font-semibold">Objective:</span> Study crop behavior in controlled vs natural environments
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Tools:</span> Smart Farm Monitoring Station
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Outcome:</span> Optimized greenhouse ventilation and watering strategies
        </p>
      </div>
    </div>
  );
};

const UseCaseThree = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">💧</span>
        <p className="font-bold md:text-2xl text-xl">
          Smart Irrigation Trials
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium ">Rajasthan Field Demonstration Farm</p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Objective:</span> Reduce water usage in drought-prone areas
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Tools:</span> Smart Irrigation System + Soil Moisture Probes
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Outcome:</span> 35% water reduction without compromising crop yield
        </p>
      </div>
    </div>
  );
};

const UseCaseFour = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">🎓</span>
        <p className="font-bold md:text-2xl text-xl">
          Student Agritech Projects
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium text-gray-700">B.Tech Final Year Projects</p>
        <p className="font-normal text-sm">
          <span className="font-semibold">Objective:</span> Prototype real-world IoT/AI agriculture applications
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Tools:</span> Full monitoring suite + Cloud Dashboard
        </p>
        <p className="font-normal text-sm">
          <span className="font-semibold">Outcome:</span> Hands-on learning with real deployments and publications
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <UseCaseOne />,
    className: "md:col-span-2",
    thumbnail: soilHealth
  },
  {
    id: 2,
    content: <UseCaseTwo />,
    className: "col-span-1",
    thumbnail: climate
  },
  {
    id: 3,
    content: <UseCaseThree />,
    className: "col-span-1",
    thumbnail: drip
  },
  {
    id: 4,
    content: <UseCaseFour />,
    className: "md:col-span-2",
    thumbnail: student
  },
];

export const Products = () => {
  return (
    <>
      <ProductsSection />
      <AnimatedHeading />
      <div className="h-screen  w-full">
        <LayoutGrid cards={cards} />
      </div>
      <AppleCardsCarouselDemo />
    </>
  );
};
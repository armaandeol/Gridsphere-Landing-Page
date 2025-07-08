import { useEffect, useRef } from 'react';
import { Points } from "../constants";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Pointssection = () => {
  const sectionRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    
    gsap.set(boxRefs.current, { y: 100, opacity: 0 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(boxRefs.current, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        gsap.set(boxRefs.current, { y: 100, opacity: 0 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Points.map((item, idx) => (
          <div
            key={item.id}
            ref={el => (boxRefs.current[idx] = el)}
            className="point-box bg-white border border-gray-300 p-8 flex flex-col items-center text-center min-h-[300px] transition-all duration-700"
            style={{ borderRadius: 0, boxShadow: 'none' }}
          >
            <img 
              src={item.iconUrl} 
              alt={item.title} 
              className="w-16 h-16 object-contain mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {item.title}
            </h3>
            <p className="flex-grow text-gray-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pointssection;
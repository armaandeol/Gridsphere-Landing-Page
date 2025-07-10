import { useEffect, useRef } from 'react';
import { Points } from "../constants";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { VisionCard } from "../components/VisionCard";

const Pointssection = () => {
  const sectionRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(boxRefs.current, { opacity: 0 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(boxRefs.current, {
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power2.out',
        });
      },
      onLeaveBack: () => {
        gsap.set(boxRefs.current, { opacity: 0 });
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
            ref={(el) => (boxRefs.current[idx] = el)}
          >
            <VisionCard
              title={item.title}
              text={item.text}
              bgImage={item.imageUrl}
              hoverImage={item.backgroundurl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pointssection;
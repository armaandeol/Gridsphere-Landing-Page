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

    gsap.set(boxRefs.current, { y: 120, opacity: 0 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(boxRefs.current, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: {
            each: 0.6,
            from: 0,
          },
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.set(boxRefs.current, { y: 120, opacity: 0 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
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

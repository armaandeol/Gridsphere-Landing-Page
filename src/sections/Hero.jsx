import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%', // Extended scroll distance for multiple stages
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Initial state - everything hidden
      gsap.set([headingRef.current, subheadingRef.current, buttonsRef.current], {
        opacity: -10,
        y: 100
      });

      // Stage 1: Show heading (0% to 33% of scroll)
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'expo.out'
      })
      // Small pause to keep heading visible alone
      .to({}, { duration: 0.2 })
      
      // Stage 2: Show subheading (33% to 66% of scroll)
      .to(subheadingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'expo.out'
      })
      // Small pause to keep both heading and subheading visible
      .to({}, { duration: 0.2 })
      
      // Stage 3: Show buttons (66% to 100% of scroll)
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'back.out(1.4)'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden -mt-24"
    >
      {/* Full-screen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src="/assets/fields.webm"
      >
        Your browser does not support the video tag.
      </video>
     
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-8 px-6 lg:px-12 pt-32">
          <div className="max-w-5xl">
            
            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="taviraj-medium text-2xl md:text-3xl xl:text-5xl xl:pt-12
                         font-bold text-white drop-shadow-2xl mb-3 lg:mb-10 xl:mb-12
                         leading-tight"
            >
              Empowering Farmers with Smart Technology
            </h1>

            {/* Subheading */}
            <p
              ref={subheadingRef}
              className="parastoo-hero text-xl md:text-2xl xl:text-4xl
                         text-white/90 drop-shadow-lg mb-10 lg:mb-16
                         font-medium leading-relaxed max-w-4xl"
            >
              At Grid Sphere, we're transforming agriculture by integrating cutting-edge IoT and data-driven tools. From soil to cloud, we make farming smarter, more sustainable, and more profitable.
            </p>

            {/* Call to Action Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/products"
                className="bg-green-600 hover:bg-green-700 text-white font-bold 
                               py-4 px-10 md:py-5 md:px-12 
                               rounded-full text-xl md:text-2xl
                               transition-all duration-300 transform hover:scale-105
                               shadow-lg hover:shadow-xl backdrop-blur-sm
                               border border-green-500/30 inline-block text-center w-full sm:w-auto">
                Explore Solutions
              </Link>
              
              <Link 
                to="/contact"
                className="bg-transparent hover:bg-white/10 text-white font-bold 
                               py-4 px-10 md:py-5 md:px-12 
                               rounded-full text-xl md:text-2xl
                               transition-all duration-300 transform hover:scale-105
                               border-2 border-white/70 hover:border-white
                               shadow-lg hover:shadow-xl backdrop-blur-sm text-center w-full sm:w-auto">
                Let's Talk
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextPressure from '../components/TextPressure';

gsap.registerPlugin(ScrollTrigger);

export const Story = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const techSectionRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate story sections
            const sections = gsap.utils.toArray('.story-section');
            sections.forEach((section, index) => {
                gsap.fromTo(section, 
                    { 
                        opacity: 0, 
                        y: 100,
                        scale: 0.9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Animate images with parallax effect
            const images = gsap.utils.toArray('.story-image');
            images.forEach(image => {
                gsap.to(image, {
                    y: -50,
                    scrollTrigger: {
                        trigger: image,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            });

            // Animate highlight text
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

            // Floating animation for tech icons
            const techIcons = gsap.utils.toArray('.tech-icon');
            techIcons.forEach((icon, index) => {
                gsap.to(icon, {
                    y: -20,
                    rotation: 360,
                    duration: 3 + index * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut"
                });
            });

            // New animation for the tech comparison sections
            const techSections = gsap.utils.toArray('.tech-comparison-item');
            
            // Create a timeline for each tech section
            techSections.forEach((section, index) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        end: "bottom 30%",
                        toggleActions: "play none none reverse",
                    }
                });
                
                // Animate the image
                tl.fromTo(
                    section.querySelector('.tech-image'),
                    { 
                        opacity: 0, 
                        x: -100,
                        scale: 0.8
                    },
                    { 
                        opacity: 1, 
                        x: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    }
                );
                
                // Animate the heading
                tl.fromTo(
                    section.querySelector('.tech-heading'),
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                    "-=0.4"
                );
                
                // Animate the description
                tl.fromTo(
                    section.querySelector('.tech-description'),
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                    "-=0.3"
                );
            });

            // Add parallax effect to tech images
            techSections.forEach(section => {
                gsap.to(section.querySelector('.tech-image'), {
                    y: -30,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        
        <section ref={containerRef} className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 story-section">
                    <div className="relative h-32 sm:h-48 md:h-[300px]">
                        <TextPressure
                            text="Our Story"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#000000"
                            minFontSize={36}
                        />
                    </div>
                    <p className="taviraj-regular text-xl font-semibold text-gray-700 max-w-2xl mx-auto">
                        From Curiosity to Cultivation — How GridSphere Was Born
                    </p>
                </div>

                {/* Section 1: The Simple Thought */}
                <div className="story-section mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-gray-800">It all started with a simple thought</h3>
                            <div className="text-2xl font-bold mb-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 border-green-500">
                                <span className="taviraj-medium highlight-text bg-gradient-to-r from-yellow-200 to-yellow-300 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
                                    "In a world full of smart devices and AI, why is farming still based on guesswork?"
                                </span>
                            </div>
                        </div>
                        <div className="relative">
                            <div 
                                className="relative rounded-lg overflow-hidden shadow-2xl"
                                style={{ maxWidth: '500px', height: '350px' }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img 
                                    src="/assets/images/sow.webp" 
                                    alt="Ducks in a pond"
                                    className="story-image w-full h-full object-cover"
                                    style={{ maxWidth: '500px', height: '400px' }}
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: The Contrast - Redesigned */}
                <div className="story-section mb-20" ref={techSectionRef}>
                    <h3 className="text-3xl font-bold mb-12 text-center">Technology is Everywhere, Except...</h3>
                    
                    {/* Factory Section */}
                    <div className="tech-comparison-item flex flex-col md:flex-row items-center mb-24 gap-8">
                        <div className="tech-image-container w-full md:w-1/2">
                            <div className="rounded-lg overflow-hidden shadow-xl h-full" style={{ maxHeight: '350px' }}>
                                <video 
                                    src="/assets/Factories.webm" 
                                    autoPlay
                                    loop
                                    muted
                                    className="tech-image w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-8">
                            <h4 className="tech-heading text-2xl font-bold mb-3 text-blue-700">Factories</h4>
                            <p className="taviraj-regular tech-description text-xl text-gray-700">
                                Modern factories rely on smart automation, predictive maintenance, and data-driven 
                                optimization to maximize efficiency. Every machine and process is connected, 
                                monitored, and constantly improved.
                            </p>
                        </div>
                    </div>
                    
                    {/* Homes Section */}
                    <div className="tech-comparison-item flex flex-col md:flex-row items-center mb-24 gap-8">
                        <div className="tech-image-container w-full md:w-1/2">
                            <div className="rounded-lg overflow-hidden shadow-xl h-full" style={{ maxHeight: '350px' }}>
                                <video 
                                    src="/assets/Homes.webm" 
                                    autoPlay
                                    loop
                                    muted
                                    className="tech-image w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-8">
                            <h4 className="tech-heading text-2xl font-bold mb-3 text-green-700">Homes</h4>
                            <p className="taviraj-regular tech-description text-xl text-gray-700">
                                Our homes have transformed with AI assistants, smart thermostats, and connected 
                                devices that learn our preferences. They adapt to our lifestyles, save energy, 
                                and make daily routines effortless.
                            </p>
                        </div>
                    </div>
                    
                    {/* Cars Section */}
                    <div className="tech-comparison-item flex flex-col md:flex-row items-center mb-24 gap-8">
                        <div className="tech-image-container w-full md:w-1/2">
                            <div className="rounded-lg overflow-hidden shadow-xl h-full" style={{ maxHeight: '350px' }}>
                                <video 
                                    src="/assets/Cars.webm" 
                                    autoPlay
                                    loop
                                    muted
                                    className="tech-image w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-8">
                            <h4 className="tech-heading text-2xl font-bold mb-3 text-red-700">Cars</h4>
                            <p className="taviraj-regular tech-description text-xl text-gray-700">
                                Modern vehicles are rolling computers with self-driving capabilities, 
                                accident prevention systems, and continuous over-the-air updates. 
                                They're safer, smarter, and more efficient than ever before.
                            </p>
                        </div>
                    </div>
                    
                    {/* Farming Contrast */}
                    <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-inner">
                        <p className="text-xl text-gray-700 mb-4">But the fields that grow our food?</p>
                        <p className="text-2xl font-bold text-red-600 mb-4">Still waiting for that revolution.</p>
                        <div className="w-24 h-1 bg-red-500 mx-auto"></div>
                    </div>
                </div>

                {/* Section 3: The Opportunity */}
                <div className="story-section mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img 
                                src="/assets/images/team_meeting.png" 
                                alt="team_meeting"
                                className="story-image rounded-lg shadow-2xl w-full"
                            />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-gray-800">We didn't see this as a problem.</h3>
                            <p className="text-2xl font-semibold mb-6">
                                <span className="highlight-text bg-gradient-to-r from-green-200 to-blue-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
                                    We saw it as a chance to make a difference.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: The Journey */}
                <div className="story-section mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-10 text-gray-800">The Journey Begins</h3>
                        <div className="max-w-4xl mx-auto">
                            <img 
                                src="/assets/images/journey.jpg" 
                                alt="journey" 
                                className="story-image rounded-lg shadow-2xl w-full mb-8"
                            />
                            <p className="text-xl text-gray-700 mb-6">
                                What began as a college project quickly turned into something bigger — a purpose.
                            </p>
                            <div className="text-2xl font-bold text-blue-600 p-6 bg-blue-50 rounded-lg">
                                <span className="highlight-text bg-gradient-to-r from-yellow-200 to-orange-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
                                    We were driven by one goal: Make farming smarter, simpler, and accessible to every farmer — not just the big players.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Grid Sphere Birth */}
                <div className="story-section mb-4">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold mb-14 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            That's how Grid Sphere came to life.
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div className="relative">
                                <img 
                                    src="/assets/images/grid_team.jpg" 
                                    alt="Grid Sphere Team" 
                                    className="story-image rounded-lg shadow-2xl w-full"
                                />
                            </div>
                            <div className="text-left">
                                <p className="text-xl text-gray-700 mb-4">
                                    <span className="highlight-text bg-gradient-to-r from-purple-200 to-pink-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
                                        Blending tech with empathy,
                                    </span>
                                </p>
                                <p className="text-xl text-gray-700 mb-8">
                                    <span className="highlight-text bg-gradient-to-r from-green-200 to-teal-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
                                        and innovation with real-world impact.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
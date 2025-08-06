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
        
        <section ref={containerRef} className="py-20 overflow-hidden text-gray-800 bg-gradient-to-b from-white to-gray-50">
            <div className="container max-w-6xl px-4 mx-auto">
                {/* Header */}
                <div className="mb-16 text-center story-section">
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
                    <p className="max-w-2xl mx-auto text-xl font-semibold text-gray-700 taviraj-regular">
                        From Curiosity to Cultivation — How GridSphere Was Born
                    </p>
                </div>

                {/* Section 1: The Simple Thought */}
                <div className="mb-20 story-section">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="mb-6 text-3xl font-bold text-gray-800">It all started with a simple thought</h3>
                           <div className="p-6 mb-8 text-2xl font-bold border-l-4 border-green-500 rounded-lg bg-gradient-to-r from-blue-50 to-green-50">
    <span className="taviraj-medium highlight-text bg-gradient-to-r from-yellow-200 to-yellow-300 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
        "In a world full of smart devices and AI, why is farming still based on guesswork?"
    </span>
    <div className="mt-4">
        <span className=" text-justify taviraj-medium highlight-text text-lg font-normal bg-gradient-to-r from-yellow-200 to-yellow-300 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
            At Gridsphere, we are redefining the future of agriculture through data-driven, technology-focused, and passionate innovation. We specialize in developing smart farming solutions that empower farmers, rural and agri-businesses with real-time insights and automation tools.
        </span>
    </div>
</div>
                        </div>
                        <div className="relative">
                            <div 
                                className="relative overflow-hidden rounded-lg shadow-2xl"
                                style={{ maxWidth: '500px', height: '350px' }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img 
                                    src="/assets/images/sow.webp" 
                                    alt="Ducks in a pond"
                                    className="object-cover w-full h-full story-image"
                                    style={{ maxWidth: '500px', height: '400px' }}
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: The Contrast - Redesigned */}
                <div className="mb-20 story-section" ref={techSectionRef}>
                    <h3 className="mb-12 text-3xl font-bold text-center">The Heart of Gridsphere</h3>
                    
                    {/* Factory Section */}
                    <div className="flex flex-col items-center gap-8 mb-24 tech-comparison-item md:flex-row">
                        <div className="w-full tech-image-container md:w-1/2">
                            <div className="h-full overflow-hidden rounded-lg shadow-xl" style={{ maxHeight: '350px' }}>
                                <video 
                                    src="/assets/Factories.webm" 
                                    autoPlay
                                    loop
                                    muted
                                    className="object-cover w-full h-full tech-image"
                                />
                            </div>
                        </div>
                        <div className="w-full pl-0 md:w-1/2 md:pl-8">
                            <h4 className="mb-3 text-2xl font-bold text-blue-700 tech-heading">Our Misssion</h4>
                            <p className="text-xl text-justify text-gray-700 taviraj-regular tech-description">
                                To simplify and optimize farming through cost-effective, intelligent solutions that drive sustainability, productivity and informed decision making.
                            </p>
                        </div>
                    </div>
                    
                    {/* Homes Section */}
                    <div className="flex flex-col items-center gap-8 mb-24 tech-comparison-item md:flex-row">
                        <div className="w-full tech-image-container md:w-1/2">
                            <div className="h-full overflow-hidden rounded-lg shadow-xl" style={{ maxHeight: '350px' }}>
                                <video 
                                    src="/assets/Homes.webm" 
                                    autoPlay
                                    loop
                                    muted
                                    className="object-cover w-full h-full tech-image"
                                />
                            </div>
                        </div>
                        <div className="w-full pl-0 md:w-1/2 md:pl-8">
                            <h4 className="mb-3 text-2xl font-bold text-green-700 tech-heading">Our Vision</h4>
                            <p className="text-xl text-justify text-gray-700 taviraj-regular tech-description">
                                To become global leader in smart agriculture by delivering intelligent, sustainable and accessible agri-tech solutions that transform the way the world farms – empowering every field with data, precision and innovation.
                            </p>
                        </div>
                    </div>
                    
                    {/* Cars Section */}
                    <div className="flex flex-col items-center gap-8 mb-24 tech-comparison-item md:flex-row">
                        <div className="w-full tech-image-container md:w-1/2">
                            <div className="h-full overflow-hidden rounded-lg shadow-xl" style={{ maxHeight: '350px' }}>
                                <video 
                                    src="/assets/Cars.webm" 
                                    autoPlay
                                    loop
                                    muted
                                    className="object-cover w-full h-full tech-image"
                                />
                            </div>
                        </div>
                        <div className="w-full pl-0 md:w-1/2 md:pl-8">
                            <h4 className="mb-3 text-2xl font-bold text-red-700 tech-heading">What we do</h4>
                            <p className="text-xl text-justify text-gray-700 taviraj-regular tech-description">
                               We design and deploy advanced IoT based agriculture systems, AI-powered analytics,
and custom built sensors that provide detailed data about weather, soil health, air quality and crop environments. Whether monitoring a single field or automating a command farm, our tools offer unmatched precision and control.
                            </p>
                        </div>
                    </div>
                    
                    {/* Farming Contrast */}
                    <div className="p-8 mt-16 text-center shadow-inner bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl">
                        <p className="mb-4 text-xl text-gray-700">But the fields that grow our food?</p>
                        <p className="mb-4 text-2xl font-bold text-red-600">Still waiting for that revolution.</p>
                        <div className="w-24 h-1 mx-auto bg-red-500"></div>
                    </div>
                </div>

                {/* Section 3: The Opportunity */}
                <div className="mb-20 story-section">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="relative">
                            <img 
                                src="/assets/images/team_meeting.png" 
                                alt="team_meeting"
                                className="w-full rounded-lg shadow-2xl story-image"
                            />
                        </div>
                        <div>
                            <h3 className="mb-6 text-3xl font-bold text-gray-800">We didn't see this as a problem.</h3>
                            <p className="mb-6 text-2xl font-semibold">
                                <span className="highlight-text bg-gradient-to-r from-green-200 to-blue-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
                                    We saw it as a chance to make a difference.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: The Journey */}
                <div className="mb-20 story-section">
                    <div className="mb-12 text-center">
                        <h3 className="mb-10 text-3xl font-bold text-gray-800">The Journey Begins</h3>
                        <div className="max-w-4xl mx-auto">
                            <img 
                                src="/assets/images/journey.jpg" 
                                alt="journey" 
                                className="w-full mb-8 rounded-lg shadow-2xl story-image"
                            />
                            <p className="mb-6 text-xl text-gray-700">
                              We’re more than just a technology company—we’re building the future of agriculture.
                            </p>
                            <div className="p-6 text-2xl font-bold text-blue-600 rounded-lg bg-blue-50">
                                <span className="highlight-text bg-gradient-to-r from-yellow-200 to-orange-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
                                    We were driven by one goal: Make farming smarter, simpler, and accessible to every farmer — not just the big players.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Grid Sphere Birth */}
                <div className="mb-4 story-section">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-transparent mb-14 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
                            That's how Grid Sphere came to life.
                        </h3>
                        <div className="grid items-center max-w-5xl gap-12 mx-auto md:grid-cols-2">
                            <div className="relative">
                                <img 
                                    src="/assets/images/grid_team.jpg" 
                                    alt="Grid Sphere Team" 
                                    className="w-full rounded-lg shadow-2xl story-image"
                                />
                            </div>
                            <div className="text-left">
                                <p className="mb-4 text-xl text-gray-700">
                                    <span className="highlight-text bg-gradient-to-r from-purple-200 to-pink-200 bg-no-repeat bg-left-bottom bg-[length:0%_100%] transition-all duration-1000">
                                        Blending tech with empathy,
                                    </span>
                                </p>
                                <p className="mb-8 text-xl text-gray-700">
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
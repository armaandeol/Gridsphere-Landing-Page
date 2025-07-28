"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ansul Singh",
    title: "CTO at InnovateHub",
    initials: "MC",
    review:
      "Outstanding performance and reliability. We've seen a 40% improvement in our metrics since implementation.",
  },
  {
    name: "Emily Roberts",
    title: "Design Lead at CreativeSpace",
    initials: "ER",
    review:
      "The user experience is intuitive and delightful. Our team was productive from day one.",
  },
  {
    name: "Lisa Park",
    title: "Marketing Manager at GrowthLab",
    initials: "LP",
    review:
      "Simple yet powerful. The integration process was smooth, and we're already seeing positive results.",
  },
  {
    name: "Rajesh Verma",
    title: "Product Manager at TechCorp",
    initials: "RV",
    review:
      "This platform has exceeded our expectations. The support team is top-notch!",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-6 mx-auto transition-all duration-500 ease-in-out group hover:scale-105">
    <div className="flex items-center justify-between mb-2">
      <div className="flex gap-1 text-yellow-400">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400" />
          ))}
      </div>
      <span className="text-gray-400 text-xl font-bold">”</span>
    </div>
    <p className="text-sm text-gray-700 mb-4 transition-all duration-500 group-hover:blur-none blur-[2px] opacity-80 group-hover:opacity-100">
      "{testimonial.review}"
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-700">
        {testimonial.initials}
      </div>
      <div className="text-sm text-left">
        <p className="font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-gray-500">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 px-4 md:px-8 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900">
        What Our Customers Say
      </h2>
      <p className="text-gray-600 mt-2 mb-10">
        Don’t just take our word for it. Here’s what real customers have to say
        about their experience.
      </p>

      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        <div className="flex justify-center gap-10">
          <motion.div
            className="flex flex-col gap-6"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`left-${i}`}
                className="transition-all duration-1000 ease-in-out"
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            animate={{ y: ["-50%", "0%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`right-${i}`}
                className="transition-all duration-1000 ease-in-out"
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
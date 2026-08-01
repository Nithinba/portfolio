import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechVision Corp",
      content:
        "Working with Alex was transformative for our business. The analytics platform they built increased our operational efficiency by 45% and provided insights we never knew we needed. Exceptional technical skills combined with business acumen.",
      rating: 5,
      avatar: "SM",
    },
    {
      name: "David Chen",
      role: "CTO, InnovateLab",
      content:
        "Alex's ability to architect scalable solutions is unmatched. They took our struggling legacy system and modernized it into a high-performance application that handles 10x our previous traffic. A true technical leader.",
      rating: 5,
      avatar: "DC",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, StartupX",
      content:
        "The level of craftsmanship in Alex's work is remarkable. Not only did they deliver on time, but they also provided valuable insights that shaped our product strategy. They're a problem solver, not just a coder.",
      rating: 5,
      avatar: "ER",
    },
    {
      name: "Michael Thompson",
      role: "Founder, FinTech Solutions",
      content:
        "Alex built our entire platform from the ground up. Their expertise in security and compliance was crucial for our success. We couldn't have asked for a better partner in bringing our vision to life.",
      rating: 5,
      avatar: "MT",
    },
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6">
            Don't just take my word for it - here's what leaders say about working with me
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 border border-white/10">
              <Quote className="w-12 h-12 text-purple-400 mb-6" />

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white">
                    {testimonials[activeIndex].avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {Array.from({ length: testimonials[activeIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-blue-500 to-purple-600"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

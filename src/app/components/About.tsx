import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Code, Coffee, Zap } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Code, value: "5+", label: "Major Projects" },
    { icon: Award, value: "AI/ML", label: "Specialization" },
    { icon: Coffee, value: "500+", label: "Coding Hours" },
    { icon: Zap, value: "100%", label: "Dedication" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
                <h3 className="text-white mb-4">Driven by Innovation</h3>
                <p className="text-gray-400 mb-4">
                  I am a highly driven and technically curious engineering student with a strong passion for Artificial Intelligence, Robotics, Embedded Systems, and Cybersecurity. I consistently push myself beyond academic requirements by building real-world, hardware-software integrated projects that address practical problems such as child safety, surveillance intelligence, and smart automation.
                </p>
                <p className="text-gray-400 mb-4">
                  I possess a problem-solver mindset with the ability to break down complex systems into logical, implementable modules. My work reflects a balance between theoretical understanding and hands-on execution, ranging from Arduino and Raspberry Pi-based robotics to AI models involving YOLO object detection, face recognition, and cloud-connected systems.
                </p>
                <p className="text-gray-400 mb-4">
                  Despite a hectic schedule, I remain disciplined, resilient, and focused on long-term growth. I am not satisfied with ordinary projects—I aim for national-level impact, originality, and scalability. My ultimate goal is to become a top-tier AI/ML Engineer and Innovator, capable of building systems that are intelligent, ethical, secure, and socially beneficial.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-sm">
                    <span>🎓</span>
                    <span>B.Tech IT Student — PSG Tech</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {[
              { label: "AI & Machine Learning", value: 92 },
              { label: "Embedded Systems", value: 90 },
              { label: "Problem Solving", value: 95 },
              { label: "Innovation & Research", value: 93 },
            ].map((skill, index) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.label}</span>
                  <span className="text-purple-400">{skill.value}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.value}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-white/10 text-center">
                <Icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <div className="text-white mb-1">{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
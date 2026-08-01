import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      role: "B.Tech — Information Technology",
      company: "PSG College of Technology (PSG Tech)",
      period: "Currently Pursuing",
      description:
        "Currently pursuing B.Tech in Information Technology at one of India's premier technical institutions, PSG Tech. Deepening expertise in software engineering, AI/ML, data structures, and system design while applying knowledge to build impactful real-world projects.",
      achievements: [
        "Advancing skills in AI, ML, and full-stack development",
        "Building projects that bridge software and hardware domains",
        "Applying theoretical knowledge to practical engineering challenges",
      ],
      badge: "Current",
      badgeColor: "from-green-400 to-emerald-500",
      glowColor: "from-green-500/20 to-emerald-600/20",
      icon: GraduationCap,
    },
    {
      role: "Diploma in Engineering",
      company: "PSG Polytechnic College",
      period: "Completed",
      description:
        "Pursued diploma education with a focus on practical engineering applications, robotics, and embedded systems. Actively engaged in hands-on projects integrating AI, machine learning, and hardware-software development.",
      achievements: [
        "Developed AI-enabled child monitoring robot",
        "Implemented YOLO v11 object detection system",
        "Created face recognition system with deep learning",
      ],
      badge: null,
      badgeColor: "",
      glowColor: "from-blue-500/10 to-purple-600/10",
      icon: GraduationCap,
    },
    {
      role: "Higher Secondary Education",
      company: "Sri Gopal Naidu Higher Secondary School",
      period: "Completed",
      description:
        "Completed foundational education with strong emphasis on science and mathematics. Developed early interest in technology, programming, and innovation that led to pursuing engineering.",
      achievements: [
        "Built foundation in core sciences",
        "Developed problem-solving skills",
        "Gained initial programming experience",
      ],
      badge: null,
      badgeColor: "",
      glowColor: "from-blue-500/10 to-purple-600/10",
      icon: GraduationCap,
    },
  ];


  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Educational Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A track record of delivering exceptional results and driving innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-5 w-6 h-6 rounded-full bg-gradient-to-r ${index === 0 ? "from-green-400 to-emerald-500 shadow-lg shadow-green-500/50" : "from-blue-500 to-purple-600"} border-4 border-black hidden md:flex items-center justify-center`}>
                  {index === 0 && <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>}
                </div>

                <div className="md:ml-20">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.glowColor} rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                    <div className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border ${index === 0 ? "border-green-400/30" : "border-white/10"}`}>
                      <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-white">{exp.role}</h3>
                            {exp.badge && (
                              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.badgeColor} text-black`}>
                                {exp.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 mb-2">
                            <GraduationCap className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400 text-sm">{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4">{exp.description}</p>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                            className="flex items-center gap-2 text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"></div>
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, color: "from-yellow-500 to-orange-500" },
        { name: "Java", level: 85, color: "from-red-500 to-orange-600" },
        { name: "C", level: 88, color: "from-blue-500 to-indigo-500" },
        { name: "SQL", level: 82, color: "from-cyan-500 to-blue-500" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 92, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Responsive Design", level: 88, color: "from-purple-500 to-pink-500" },
      ],
    },
    {
      title: "AI & Embedded Systems",
      skills: [
        { name: "Machine Learning", level: 92, color: "from-green-500 to-emerald-500" },
        { name: "Raspberry Pi", level: 90, color: "from-pink-500 to-rose-500" },
        { name: "Arduino", level: 88, color: "from-teal-500 to-cyan-500" },
        { name: "IoT & Cloud", level: 85, color: "from-indigo-500 to-purple-500" },
      ],
    },
    {
      title: "Tools & Operating Systems",
      skills: [
        { name: "Ubuntu/Linux", level: 90, color: "from-orange-500 to-red-600" },
        { name: "Windows", level: 88, color: "from-blue-500 to-indigo-500" },
        { name: "Photoshop", level: 85, color: "from-blue-600 to-cyan-600" },
        { name: "Premiere Pro", level: 82, color: "from-purple-500 to-violet-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive skill set honed through years of hands-on experience
            and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-white mb-6">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const globalIndex = categoryIndex * 4 + skillIndex;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredIndex(globalIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredIndex === globalIndex ? 1 : 0.7,
                            }}
                            className="text-purple-400"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1.5,
                              delay: 0.3 + globalIndex * 0.05,
                              type: "spring",
                              stiffness: 50,
                            }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <motion.div
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 bg-white/30"
                            />
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
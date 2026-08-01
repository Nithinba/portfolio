import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Enabled Child Monitoring Robot",
      description:
        "Designed an AI-enabled child monitoring and smart teaching robot ensuring child safety through remote web interface. Raspberry Pi Zero 2 W handles AI-based interactions while Arduino Uno manages precise motor control for smooth, safe movement.",
      image: "https://images.unsplash.com/photo-1762500825366-ba34b0c5352e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGNoaWxkJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NjcxNzA3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "Embedded C", "Raspberry Pi", "Arduino", "IoT", "Cloud Services"],
      featured: true,
    },
    {
      title: "Face Recognition System",
      description:
        "Developed a standalone face recognition system using deep learning and computer vision to accurately identify individuals from images and live video streams. Applicable to security systems, attendance management, and access control.",
      image: "https://images.unsplash.com/photo-1690162396384-6741ab2f33bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwcmVjb2duaXRpb24lMjBBSXxlbnwxfHx8fDE3NjcxNzA3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
      featured: true,
    },
    {
      title: "YOLO v11 Object Detection System",
      description:
        "Implemented a real-time object detection system using YOLO v11 capable of detecting and classifying multiple objects simultaneously. Optimized for high speed and accuracy, suitable for smart surveillance and robotics applications.",
      image: "https://images.unsplash.com/photo-1554936970-ce06538caf54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYmplY3QlMjBkZXRlY3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNjcxNzA3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "YOLO v11", "OpenCV", "Deep Learning", "Edge AI"],
      featured: false,
    },
    {
      title: "Netflix Clone",
      description:
        "Developed a Netflix-inspired static web application with responsive homepage, navigation bar, banner section, and movie rows with hover effects. Demonstrates strong understanding of core frontend fundamentals and clean UI structuring.",
      image: "https://images.unsplash.com/photo-1760404699867-bdf4f2b19fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwc3RyZWFtaW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NzA5MjAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      featured: false,
    },
    {
      title: "Disney+ Hotstar Clone",
      description:
        "Created a Disney+ Hotstar-style static web application focusing on accurate UI replication and smooth user interaction. Features content sections for movies, series, and sports with hover-based effects and dynamic UI behavior.",
      image: "https://images.unsplash.com/photo-1761044590816-5180b35e99eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBzZXJ2aWNlJTIwZGVzaWdufGVufDF8fHx8MTc2NzE3MDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML5", "CSS3", "JavaScript", "UI Design"],
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Transforming ideas into reality through innovative solutions that make an impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <motion.div
                animate={{
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-white/10"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm">
                      <Sparkles className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-yellow-400">Featured</span>
                    </div>
                  </div>
                )}

                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
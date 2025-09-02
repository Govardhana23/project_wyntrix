import React from 'react';
import { Code, Smartphone, Globe, Cpu, Database, Zap, CheckCircle, ArrowRight, Monitor } from 'lucide-react';

const tools = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "AWS", img: "/aws.png" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe CC", img: "/adobe_cc.png" }, 
  { name: "Premiere Pro", img: "/prem-pro.png" }, 
  { name: "After Effects", img: "/after-effects.png" },
  { name: "Photoshop", img: "/adobe_ps.png" },
  { name: "Blender", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
];

const handleStartYourProject = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I'm interested in starting a new project and would like to collaborate with your team.\n\n" +
    "Here are some details about my project:\n" +
    "• Project Type: [e.g., Web development, Branding, Creative support, Digital marketing, etc.]\n" +
    "• Brief Description: [Describe your idea or requirements]\n" +
    "• Key Objectives: [What do you hope to achieve?]\n" +
    "• Timeline: [Preferred start date, important deadlines]\n" +
    "• Budget: [Estimated or available budget]\n\n" +
    "Additional Information:\n" +
    "• Organization/Individual: [Your name or business]\n" +
    "• Contact Details: [Optional—email or phone]\n" +
    "• Special Requirements: [Any unique needs, tools, or platforms?]\n\n" +
    "Please let me know how we can proceed. I'm excited to get started! 🚀"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const handleRequestPortfolio = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I'm interested in exploring your creative capabilities and would like to view your full portfolio.\n\n" +
    "Please share recent samples of your work, case studies, and any standout projects, especially in the areas of:\n" +
    "• Graphic Design\n" +
    "• Social Media Creatives\n" +
    "• Video Editing/Production\n" +
    "• Branding\n" +
    "• Other (please specify)\n\n" +
    "It would be great if you could also share a link or PDF, or recommend highlights tailored to my industry/interest.\n\n" +
    "Looking forward to being inspired by your creative work! ✨"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const TechSolutions = () => {
  const techServices = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      projects: "50+ Projects"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      technologies: ["React Native", "Flutter", "Firebase", "API Integration"],
      projects: "25+ Apps"
    },
    {
      icon: Monitor,
      title: "Media Production",
      description: "Video editing, motion graphics, and multimedia content creation",
      technologies: ["After Effects", "Premiere Pro", "Photoshop", "3D Animation"],
      projects: "100+ Videos"
    },
    {
      icon: Database,
      title: "Project Management",
      description: "End-to-end project development and technical consulting",
      technologies: ["Agile", "DevOps", "Cloud Deployment", "Quality Assurance"],
      projects: "75+ Projects"
    }
  ];

  const portfolioProjects = [
    {
      title: "College Event Management System",
      category: "Web Application",
      description: "Complete event management platform with registration, payment, and analytics",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["User Registration", "Payment Gateway", "Analytics Dashboard", "Mobile Responsive"]
    },
    {
      title: "Student Network Mobile App",
      category: "Mobile Application",
      description: "Social networking app connecting students across multiple colleges",
      technologies: ["React Native", "Firebase", "Push Notifications"],
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Real-time Chat", "Event Discovery", "Profile Management", "Cross-platform"]
    },
    {
      title: "Promotional Video Campaign",
      category: "Media Production",
      description: "High-impact promotional videos for college symposiums and events",
      technologies: ["After Effects", "Premiere Pro", "Motion Graphics"],
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Motion Graphics", "Sound Design", "Color Grading", "Multi-format Export"]
    }
  ];

  const developmentProcess = [
    { phase: "Discovery", description: "Understanding requirements and project scope" },
    { phase: "Design", description: "UI/UX design and technical architecture planning" },
    { phase: "Development", description: "Agile development with regular updates" },
    { phase: "Testing", description: "Comprehensive testing and quality assurance" },
    { phase: "Deployment", description: "Launch and ongoing support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Code className="w-4 h-4 mr-2" />
              Tech Solutions & Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bringing Ideas to{' '}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From web development to mobile apps, media production to project management - 
              we provide comprehensive technical solutions for the modern digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.technologies.map((tech, idx) => (
                    <div key={idx} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-blue-600 font-medium">{service.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent projects that showcase our technical expertise 
              and innovative approach to problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mr-1">
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach that ensures quality, efficiency, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600">
              Cutting-edge technologies and tools to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
              <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
              <img
                  src={tool.img}
                  alt={tool.name}
                  className="mx-auto mb-2 w-10 h-10 object-contain"
              />
              <div className="text-gray-900 font-medium text-sm">{tool.name}</div>
          </div>
        ))}
        </div>

          {/*<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "MongoDB", "React Native", "Flutter", "Firebase",
              "Python", "JavaScript", "TypeScript", "AWS", "Docker", "Git",
              "Figma", "Adobe CC", "Premiere Pro", "After Effects", "Photoshop", "Blender"
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-gray-900 font-medium">{tech}</div>
              </div>
            ))}
          </div>*/}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's turn your ideas into reality with our comprehensive tech solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleStartYourProject} className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-gray-50 transition-colors">
              Start Your Project
            </button>
            <button onClick={handleRequestPortfolio} className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-white hover:text-purple-600 transition-colors">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechSolutions;
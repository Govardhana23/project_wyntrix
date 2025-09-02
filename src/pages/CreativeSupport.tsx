import React from 'react';
import { Palette, Camera, Video, Pen, Layers, Sparkles, CheckCircle, ArrowRight, Image } from 'lucide-react';

const tools = [
  { name: "Adobe Photoshop", img: "/adobe_ps.png" },
  { name: "Adobe Illustrator", img: "/illustrator.png" },
  { name: "Adobe After Effects", img: "/after-effects.png" },
  { name: "Adobe Premiere Pro", img: "/prem-pro.png" },
  { name: "Figma", img: "/figma.png" },
  { name: "Canva Pro", img: "/canva.png" },
  { name: "Blender", img: "/blender.png" },
  { name: "Cinema 4D", img: "/cinema4d.png" },
  { name: "DaVinci Resolve", img: "/davinci.png" },
  { name: "Sketch", img: "/sketch.png" },
  { name: "InDesign", img: "/indesign.png" },
  { name: "Lightroom", img: "/lightroom.png" },
];


const handleRequestCreativeSupport = () => {
  // Create a WhatsApp message for custom creative support requests
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I need custom creative support for my project/event. Here are my detailed requirements:\n\n" +
    "🎨 Creative Support Needed:\n" +
    "• Type of Service: [Graphic design/Social media content/Video editing/Branding/Other]\n" +
    "• Project Description: [Brief overview of your project or campaign]\n" +
    "• Key Objectives: [Goals you want the creatives to achieve]\n" +
    "• Design Style: [Modern, minimal, vibrant, corporate, etc.]\n" +
    "• Brand Guidelines: [Share colors, fonts, branding links if any]\n\n" +
    "📅 Project Details:\n" +
    "• Deliverables Needed: [List of required assets (e.g., posters, reels, banners, etc.)]\n" +
    "• Deadline: [Preferred delivery date]\n" +
    "• Usage: [Where/how these assets will be used]\n\n" +
    "💡 Additional Context:\n" +
    "• Organization/Event: [Your institution/company name]\n" +
    "• Audience: [Who is this for?]\n" +
    "• Budget: [Available budget, if any]\n" +
    "• Special Notes: [Any unique requirements or ideas]\n\n" +
    "Please help me with creative solutions tailored to these needs!\n\n" +
    "Looking forward to your creative magic! ✨"
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


const CreativeSupport = () => {
  const creativeServices = [
    {
      icon: Palette,
      title: "Brand Design & Identity",
      description: "Complete brand identity creation from concept to execution",
      services: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"]
    },
    {
      icon: Image,
      title: "Graphic Design",
      description: "Eye-catching visuals for all your marketing and event needs",
      services: ["Posters", "Brochures", "Social Media Graphics", "Banners"]
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video content from concept to final edit",
      services: ["Event Coverage", "Promotional Videos", "Motion Graphics", "Animation"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and creating visual stories",
      services: ["Event Photography", "Portrait Sessions", "Product Photography", "Campus Shoots"]
    },
    {
      icon: Pen,
      title: "Content Creation",
      description: "Engaging content that resonates with your audience",
      services: ["Copywriting", "Social Media Content", "Blog Posts", "Marketing Copy"]
    },
    {
      icon: Layers,
      title: "Digital Art & Illustration",
      description: "Custom illustrations and digital artwork",
      services: ["Character Design", "Infographics", "Digital Illustrations", "Icon Design"]
    }
  ];

  const portfolioItems = [
    {
      category: "Brand Identity",
      title: "College Symposium Branding",
      description: "Complete brand identity for technical symposium including logo, posters, and digital assets",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Logo Design", "Brand Guidelines", "Print Design"]
    },
    {
      category: "Video Production",
      title: "Event Promotional Campaign",
      description: "High-impact promotional video series for college cultural festival",
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Motion Graphics", "Video Editing", "Sound Design"]
    },
    {
      category: "Social Media",
      title: "Instagram Campaign Design",
      description: "Cohesive social media design system for student organization",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Social Media", "Content Strategy", "Visual Identity"]
    },
    {
      category: "Photography",
      title: "Campus Event Documentation",
      description: "Professional event photography and documentation for college symposium",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Event Photography", "Portrait", "Documentary"]
    }
  ];

  const creativeProcess = [
    { step: "Brief", description: "Understanding your vision and requirements" },
    { step: "Concept", description: "Developing creative concepts and ideas" },
    { step: "Design", description: "Creating initial designs and prototypes" },
    { step: "Refine", description: "Iterating based on feedback" },
    { step: "Deliver", description: "Final delivery and ongoing support" }
  ];

  const achievements = [
    { number: "500+", label: "Creative Projects", description: "Completed successfully" },
    { number: "100+", label: "Brand Identities", description: "Created from scratch" },
    { number: "1000+", label: "Design Assets", description: "Delivered to clients" },
    { number: "50+", label: "Video Projects", description: "Produced and edited" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Creative & Design Support
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bringing Your{' '}
              <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Creative Vision
              </span>{' '}
              to Life
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From brand identity to video production, we provide comprehensive creative solutions 
              that make your ideas stand out and leave a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Creative Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to execution, we provide end-to-end creative solutions 
              that bring your ideas to life with professional quality and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.services.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Creative Portfolio Showcase
            </h2>
            <p className="text-lg text-gray-600">
              Explore our recent creative projects and see how we've helped bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Creative Process
            </h2>
            <p className="text-lg text-gray-600">
              A collaborative approach that ensures your vision is perfectly realized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {creativeProcess.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.step}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Tools & Software
            </h2>
            <p className="text-lg text-gray-600">
              Industry-standard tools to deliver professional-quality creative work.
            </p>
          </div>
          </div>
            
<div className="px-6 md:px-12 lg:px-20">
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
</div>

          {/*<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", 
              "Adobe Premiere Pro", "Figma", "Canva Pro",
              "Blender", "Cinema 4D", "DaVinci Resolve", 
              "Sketch", "InDesign", "Lightroom"
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <img 
                  src={`https://via.placeholder.com/40?text=${tool.charAt(0)}`}
                  alt={tool}
                  className="mx-auto mb-2"
                />
                <div className="text-gray-900 font-medium text-sm">{tool}</div>
              </div>
            ))}
          </div>
        </div>*/}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Bring Your Creative Vision to Life?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's collaborate to create something amazing that stands out and makes an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <button onClick={handleRequestCreativeSupport} className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-gray-50 transition-colors">
              Start Creative Project
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

export default CreativeSupport;
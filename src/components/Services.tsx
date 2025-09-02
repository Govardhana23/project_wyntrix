import React from 'react';
import { Calendar, Megaphone, Users, Globe, Code, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Promotions & Sponsorship Support",
      description: "Comprehensive event promotion strategies and sponsorship acquisition to make your college events successful and impactful.",
      features: ["Event Marketing", "Sponsor Outreach", "Promotion Campaigns", "Event Analytics"],
      link: "/services/event-promotions"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing & Branding",
      description: "Strategic digital marketing solutions tailored for educational institutions and student organizations.",
      features: ["Social Media Marketing", "Brand Development", "Content Strategy", "Digital Campaigns"],
      link: "/services/digital-marketing"
    },
    {
      icon: Award,
      title: "Judges, Speakers & Guests for Events",
      description: "Connect with industry experts, accomplished speakers, and qualified judges for your academic and cultural events.",
      features: ["Speaker Bureau", "Judge Panel", "Industry Experts", "Guest Coordination"],
      link: "/services/speaker-bureau"
    },
    {
      icon: Users,
      title: "Student Community & Network Growth",
      description: "Build and expand your student network through our platform connecting 15,000+ students across Tamil Nadu.",
      features: ["Community Building", "Network Expansion", "Peer Connections", "Collaboration Tools"],
      link: "/services/community-building"
    },
    {
      icon: Code,
      title: "Tech Solutions: Web, App, Media & Projects",
      description: "End-to-end technical solutions including web development, mobile apps, media production, and project management.",
      features: ["Web Development", "Mobile Apps", "Media Production", "Project Management"],
      link: "/services/tech-solutions"
    },
    {
      icon: Globe,
      title: "Creative & Tech Support",
      description: "Comprehensive creative and technical support to bring your ideas to life with professional quality output.",
      features: ["Creative Design", "Technical Consulting", "Content Creation", "Digital Solutions"],
      link: "/services/creative-support"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Our Core Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions for Student Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From event management to digital marketing, we provide end-to-end solutions 
            designed specifically for the student community and educational ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-purple-100"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Student Experience?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of students who are already part of the WYNTRIX community.
            </p>
            <a 
              href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
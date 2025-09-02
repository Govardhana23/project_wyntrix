import React from 'react';
import { ArrowRight, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-yellow-50 via-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Student-Powered Platform
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src="/wyntrix-logo.jpg" 
                    alt="WYNTRIX Logo" 
                    className="h-16 w-auto"
                  />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      WYNTRIX
                    </span>
                  </h1>
                </div>
                <div className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                  <div>Empowering Students</div>
                  <div className="text-purple-600">Elevating Events</div>
                  <div className="text-blue-600">Expanding Networks</div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                A student-powered digital marketing & event intelligence platform connecting 
                15,000+ students across Tamil Nadu through tech, creativity, and collaboration.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Institutions Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">₹2L+</div>
                <div className="text-sm text-gray-600">Sponsorships</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services/event-promotions"
                className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group"
              >
                <Users className="mr-2 w-5 h-5" />
                Join Community
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Students collaborating" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Live Events</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Event Planning</span>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-purple-200/20 to-blue-200/20 rounded-2xl -z-10 transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
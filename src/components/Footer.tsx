import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/wyntrix-logo.jpg" 
                alt="WYNTRIX Logo" 
                className="w-16 h-16 rounded-full mr-4"/>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                WYNTRIX
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering students, elevating events, and expanding networks across Tamil Nadu. 
              Join 15,000+ students in our growing community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/wyntrix_official/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/wyntrix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/event-promotions" className="text-gray-300 hover:text-white transition-colors">Event Promotions</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/speaker-bureau" className="text-gray-300 hover:text-white transition-colors">Speaker Bureau</Link></li>
              <li><Link to="/services/community-building" className="text-gray-300 hover:text-white transition-colors">Community Building</Link></li>
              <li><Link to="/services/tech-solutions" className="text-gray-300 hover:text-white transition-colors">Tech Solutions</Link></li>
              <li><Link to="/services/creative-support" className="text-gray-300 hover:text-white transition-colors">Creative Support</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/about-wyntrix" className="text-gray-300 hover:text-white transition-colors">About WYNTRIX</Link></li>
              <li><Link to="/student-network" className="text-gray-300 hover:text-white transition-colors">Student Network</Link></li>
              <li><Link to="/success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/join-us" className="text-gray-300 hover:text-white transition-colors">Join Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">wyntrixofficial@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+91 63816 35513</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">@wyntrix_official</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 WYNTRIX. All rights reserved. Empowering students across Tamil Nadu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Student Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
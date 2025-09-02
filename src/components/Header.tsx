import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = React.useState(false);
  const location = useLocation();

  const servicesLinks = [
    { name: 'Event Promotions', path: '/services/event-promotions' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Speaker Bureau', path: '/services/speaker-bureau' },
    { name: 'Community Building', path: '/services/community-building' },
    { name: 'Tech Solutions', path: '/services/tech-solutions' },
    { name: 'Creative Support', path: '/services/creative-support' }
  ];

  const communityLinks = [
    { name: 'About WYNTRIX', path: '/about-wyntrix' },
    { name: 'Student Network', path: '/student-network' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Events', path: '/events' },
    { name: 'Join Us', path: '/join-us' }
  ];

  // Handle dropdown visibility with proper timing
  const handleServicesEnter = () => {
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    setTimeout(() => setIsServicesOpen(false), 1000);
  };

  const handleCommunityEnter = () => {
    setIsCommunityOpen(true);
  };

  const handleCommunityLeave = () => {
    setTimeout(() => setIsCommunityOpen(false), 1000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/wyntrix-logo.jpg" 
                alt="WYNTRIX Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                WYNTRIX
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-purple-600' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                {servicesLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Community Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleCommunityEnter}
              onMouseLeave={handleCommunityLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Community
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${
                  isCommunityOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                {communityLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setIsCommunityOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <a 
              href="#contact" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200"
            >
              Join Community
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {servicesLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block py-1 text-sm text-gray-600 hover:text-purple-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Community */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Community</div>
                <div className="pl-4 space-y-1">
                  {communityLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block py-1 text-sm text-gray-600 hover:text-purple-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <a 
                href="#contact" 
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              <div className="px-3 py-2">
                <a 
                  href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
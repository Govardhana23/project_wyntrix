import React from 'react';
import { Calendar, MapPin, Users, Clock, Star, ArrowRight, Filter, Search } from 'lucide-react';

const handleSubmitYourEvent = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I would like to submit my event for promotion/support.\n\n" +
    "Here are the details of my event:\n" +
    "• Event Name: [Enter event title]\n" +
    "• Date(s) & Time: [When is your event?]\n" +
    "• Venue/Platform: [Physical location or online platform]\n" +
    "• Organizing Institution/Organization: [Your college, club, etc.]\n" +
    "• Description: [Short summary about the event]\n" +
    "• Target Audience: [Who is this for?]\n" +
    "• Key Activities: [Talks, workshops, competitions, etc.]\n" +
    "• Registration Link (if any): [Paste link]\n" +
    "• Special Requirements or Support Needed: [Promotion, speakers, partnerships, etc.]\n\n" +
    "Contact Information:\n" +
    "• Name: [Your name]\n" +
    "• Email/Mobile: [How can we reach you?]\n\n" +
    "Looking forward to having WYNTRIX help amplify our event! 🎉"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const Events = () => {
  
  const pastEvents = [
    {
      title: "SYCON'25 Conference",
      college: "SSN College of Engineering",
      date: "April 2025",
      participants: "1000+",
      achievement: "Panel Jury Participation",
      image: "/ssn-college-recognition/ssn-pic-2.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Agni Tech Symposium",
      college: "Agni College of Technology",
      date: "April 2025",
      participants: "500+",
      achievement: "Guest of Honor & Prize Distribution",
      image: "/agni-college-recognition/agni-pic-1.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Lavaza 2k25",
      college: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
      date: "March 2025",
      participants: "200+",
      achievement: "Marketing Partner & Viral Campaign",
      image: "/lavaza.png?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const eventStats = [
    { number: "500+", label: "Events Supported", description: "Across Tamil Nadu" },
    { number: "50+", label: "Partner Colleges", description: "Active collaborations" },
    { number: "100K+", label: "Total Participants", description: "Cumulative reach" },
    { number: "₹2L+", label: "Sponsorships", description: "Secured for events" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Events & Collaborations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Student Events
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest events, symposiums, and competitions happening 
              across Tamil Nadu's leading educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


    
      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Event Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Successful events where WYNTRIX played a key role in promotion and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-purple-600 font-medium mb-2">{event.college}</p>
                  <p className="text-gray-600 text-sm mb-3">{event.date}</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="text-green-800 font-semibold text-sm mb-1">Our Role:</div>
                    <div className="text-green-700 text-sm">{event.achievement}</div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{event.participants} Participants</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Promotion Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Want to Promote Your Event?
            </h2>
            <p className="text-lg text-gray-600">
              Let WYNTRIX help you reach 15,000+ students and make your event a success.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Event Promotion Services
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">15K+ student outreach across Tamil Nadu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Social media promotion and viral campaigns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Sponsorship acquisition support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">Event branding and creative design</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <button className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center mx-auto group">
                  Promote Your Event
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Latest Events
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our community to never miss an exciting event or opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-gray-50 transition-colors">
              Join Event Updates
            </button></a>
            <button onClick={handleSubmitYourEvent} className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-white hover:text-purple-600 transition-colors">
              Submit Your Event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
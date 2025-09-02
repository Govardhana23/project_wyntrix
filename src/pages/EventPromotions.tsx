import React from 'react';
import { Calendar, Megaphone, Users, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';

const EventPromotions = () => {
  const handleViewPortfolio = () => {
    // Create a WhatsApp message for portfolio inquiry
    const message = encodeURIComponent(
      "Hi WYNTRIX Team! 👋\n\n" +
      "I'd like to view your Event Promotion portfolio and case studies. Could you please share:\n\n" +
      "📁 Recent event promotion campaigns\n" +
      "📊 Success metrics and results\n" +
      "🎯 Case studies from similar events\n" +
      "📸 Event photos and promotional materials\n" +
      "💼 Client testimonials and feedback\n\n" +
      "This will help me understand your capabilities better for my upcoming event.\n\n" +
      "Thank you! 🚀"
    );
    
    const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleStartPromotion = () => {
    // Create a WhatsApp message with event promotion inquiry
    const message = encodeURIComponent(
      "Hi WYNTRIX Team! 👋\n\n" +
      "I'm interested in your Event Promotion services. Here are my details:\n\n" +
      "🎯 Event Type: [Please specify - Technical Symposium/Cultural Festival/Workshop/Competition]\n" +
      "🏫 Institution: [Your college/organization name]\n" +
      "📅 Event Date: [Planned date]\n" +
      "👥 Expected Participants: [Approximate number]\n" +
      "💰 Budget Range: [Your budget for promotion]\n" +
      "📋 Special Requirements: [Any specific needs]\n\n" +
      "Please help me create a successful event promotion strategy!\n\n" +
      "Looking forward to working with you! 🚀"
    );
    
    const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    {
      icon: Megaphone,
      title: "Event Marketing Campaigns",
      description: "Comprehensive marketing strategies across digital platforms to maximize event visibility and attendance."
    },
    {
      icon: Users,
      title: "15K+ Student Outreach",
      description: "Direct access to our network of 15,000+ active students across Tamil Nadu through WhatsApp communities."
    },
    {
      icon: TrendingUp,
      title: "Sponsorship Acquisition",
      description: "Proven track record of securing ₹2L+ in sponsorships for college events and symposiums."
    },
    {
      icon: Award,
      title: "100+ Stall Connections",
      description: "Instant deployment of exhibition stalls and vendor connections across Tamil Nadu."
    }
  ];

  const services = [
    "Event branding and poster design",
    "Social media promotion campaigns",
    "WhatsApp community outreach",
    "Sponsorship proposal creation",
    "Vendor and stall coordination",
    "Event website development",
    "Registration management systems",
    "Live event coverage and documentation"
  ];

  const successStories = [
    {
      college: "SSN College",
      event: "SYCON'25 Conference",
      result: "1000+ attendees, industry recognition",
      image: "/ssn-college-recognition/ssn-pic-2.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      college: "Agni College of Technology",
      event: "Technical Symposium",
      result: "500+ participants, ₹50K sponsorship",
      image: "/agni-college-recognition/agni-pic-1.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      college: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
      event: "Lavaza 2k25 Cultural Festival",
      result: "200+ participants, viral social media",
      image: "/lavaza.png?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Event Promotions & Marketing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Make Your Events{' '}
              <span className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Unforgettable
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From symposiums to cultural festivals, we provide end-to-end event promotion 
              services that guarantee maximum reach, engagement, and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Event Promotion Ecosystem
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just promote events - we create comprehensive marketing ecosystems 
                that ensure your event reaches the right audience and achieves maximum impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleStartPromotion}
                className="mt-8 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center group hover:scale-105 active:scale-95"
              >
                Start Your Event Promotion
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Event promotion" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">₹2L+</div>
                  <div className="text-sm text-gray-600">Sponsorships Secured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from real events - see how we've helped colleges across Tamil Nadu 
              create memorable and successful events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={story.image} 
                  alt={story.event}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.college}</h3>
                  <p className="text-purple-600 font-medium mb-2">{story.event}</p>
                  <p className="text-gray-600 text-sm mb-4">{story.result}</p>
                  <div className="flex items-center text-sm text-green-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Successful Event
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Promote Your Next Event?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 50+ institutions that trust WYNTRIX for their event promotion needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartPromotion}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors hover:scale-105 active:scale-95"
            >
              Get Free Consultation
            </button>
            <button 
              onClick={handleViewPortfolio}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-purple-600 transition-colors hover:scale-105 active:scale-95"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPromotions;
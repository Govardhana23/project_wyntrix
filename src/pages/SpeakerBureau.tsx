import React from 'react';
import { Mic, Users, Award, Star, CheckCircle, ArrowRight, GraduationCap, Briefcase } from 'lucide-react';

const SpeakerBureau = () => {
  const handleBookSpeaker = (speakerName?: string, speakerTitle?: string, expertise?: string) => {
    // Create a WhatsApp message for speaker booking inquiry
    const message = encodeURIComponent(
      "Hi WYNTRIX Team! 👋\n\n" +
      "I'm interested in booking a speaker through your Speaker Bureau. Here are my event details:\n\n" +
      (speakerName ? `🎯 Preferred Speaker: ${speakerName} (${speakerTitle})\n` : "🎯 Speaker Type: [Please specify your preference]\n") +
      (expertise ? `📚 Expertise Area: ${expertise}\n` : "📚 Topic/Expertise: [Your preferred topic]\n") +
      "🏫 Institution/Organization: [Your organization name]\n" +
      "🎪 Event Type: [Technical Symposium/Cultural Festival/Workshop/Conference]\n" +
      "📅 Event Date: [Planned date]\n" +
      "⏰ Duration: [Expected speaking duration]\n" +
      "👥 Expected Audience: [Number of participants]\n" +
      "📍 Venue: [Event location]\n" +
      "💰 Budget Range: [Your budget for speaker]\n" +
      "📋 Special Requirements: [Any specific needs]\n" +
      "🎯 Event Theme: [Main theme/focus of your event]\n\n" +
      "Please help me find the perfect speaker for my event!\n\n" +
      "Looking forward to working with you! 🚀"
    );
    
    const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFindPerfectSpeaker = () => {
    // Create a WhatsApp message for general speaker inquiry
    const message = encodeURIComponent(
      "Hi WYNTRIX Team! 👋\n\n" +
      "I need help finding the perfect speaker for my event. Here are my requirements:\n\n" +
      "🎪 Event Details:\n" +
      "• Event Type: [Technical/Cultural/Workshop/Conference]\n" +
      "• Event Theme: [Main focus/theme]\n" +
      "• Date: [Planned date]\n" +
      "• Duration: [Event duration]\n" +
      "• Venue: [Location]\n\n" +
      "👥 Audience Information:\n" +
      "• Size: [Expected participants]\n" +
      "• Demographics: [Student level/background]\n" +
      "• Interests: [Key interests/subjects]\n\n" +
      "🎯 Speaker Requirements:\n" +
      "• Expertise: [Preferred expertise area]\n" +
      "• Speaker Type: [Industry Leader/Academic/Motivational]\n" +
      "• Experience Level: [Preference for speaker experience]\n\n" +
      "💰 Budget: [Your budget range]\n" +
      "🏫 Organization: [Your institution/organization]\n\n" +
      "Please recommend suitable speakers from your network!\n\n" +
      "Thank you! 🌟"
    );
    
    const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBrowseSpeakers = () => {
    // Create a WhatsApp message for speaker catalog request
    const message = encodeURIComponent(
      "Hi WYNTRIX Team! 👋\n\n" +
      "I'd like to browse your complete speaker catalog. Could you please share:\n\n" +
      "📁 Speaker Portfolio:\n" +
      "• Complete speaker profiles\n" +
      "• Expertise areas and specializations\n" +
      "• Speaking experience and credentials\n" +
      "• Previous event testimonials\n" +
      "• Availability and booking rates\n\n" +
      "🎯 My Event Context:\n" +
      "• Event Type: [Please specify]\n" +
      "• Expected Date: [Approximate timeframe]\n" +
      "• Audience Size: [Expected participants]\n" +
      "• Budget Range: [Your budget]\n" +
      "• Preferred Topics: [Areas of interest]\n\n" +
      "This will help me make an informed decision for my event.\n\n" +
      "Thank you for your assistance! 🚀"
    );
    
    const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleRequestCustomMatch = () => {
    // Create a WhatsApp message for custom speaker matching
    const message = encodeURIComponent(
      "Hi WYNTRIX Team! 👋\n\n" +
      "I need a custom speaker match for my specific event requirements:\n\n" +
      "🎯 Specific Requirements:\n" +
      "• Unique Topic: [Very specific subject/theme]\n" +
      "• Special Expertise: [Niche area of knowledge]\n" +
      "• Industry Focus: [Specific industry/sector]\n" +
      "• Speaking Style: [Preferred presentation style]\n" +
      "• Language: [Preferred language]\n\n" +
      "🎪 Event Specifications:\n" +
      "• Event Nature: [Highly specific event type]\n" +
      "• Audience Profile: [Detailed audience description]\n" +
      "• Expected Outcome: [What we want to achieve]\n" +
      "• Duration: [Speaking time required]\n" +
      "• Format: [Keynote/Panel/Workshop/Interactive]\n\n" +
      "💼 Additional Context:\n" +
      "• Organization: [Your institution/company]\n" +
      "• Event Date: [Planned date]\n" +
      "• Budget: [Available budget]\n" +
      "• Special Needs: [Any unique requirements]\n\n" +
      "Please help me find a speaker who perfectly matches these specific needs!\n\n" +
      "Looking forward to your expert recommendations! 🌟"
    );
    
    const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const speakerCategories = [
    {
      icon: GraduationCap,
      title: "Academic Experts",
      description: "Renowned professors and researchers from top institutions",
      specialties: ["Research Methodology", "Technical Innovation", "Academic Excellence", "Industry Insights"]
    },
    {
      icon: Briefcase,
      title: "Industry Leaders",
      description: "C-level executives and successful entrepreneurs",
      specialties: ["Business Strategy", "Leadership", "Entrepreneurship", "Market Trends"]
    },
    {
      icon: Award,
      title: "Technical Judges",
      description: "Expert evaluators for hackathons and technical competitions",
      specialties: ["Code Review", "Innovation Assessment", "Technical Evaluation", "Project Judging"]
    },
    {
      icon: Star,
      title: "Motivational Speakers",
      description: "Inspiring personalities for student motivation and career guidance",
      specialties: ["Career Guidance", "Personal Development", "Success Stories", "Life Skills"]
    }
  ];

  const featuredSpeakers = [
    {
      name: "Raganadhan P",
      title: "Founder of R Protocols",
      expertise: "Ethical Hacker and Bug Bunty Hunter",
      events: "50+ Events",
      rating: 4.9,
      image: "/1745059492086.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Vinish Sivasankaran",
      title: "Cloud Engineer at Sify Technologies , Founder of Agri Connect",
      expertise: "Cloud Computing and Agriculture Tech",
      events: "75+ Events",
      rating: 4.8,
      image: "/Vinish_Sivasankaran.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Siva Satya",
      title: "Founder of Altruisty Innovation Private Limited",
      expertise: "Product Development and Innovation",
      events: "100+ Events",
      rating: 5.0,
      image: "/Siva_satya.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Tharun varshan U",
      title: "Founder of Wyntrix",
      expertise: "Digtal Marketing and Entrepreneurship",
      events: "60+ Events",
      rating: 4.7,
      image: "/Tharun_varshan_U.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const eventTypes = [
    "Technical Symposiums",
    "Cultural Festivals", 
    "Hackathons & Competitions",
    "Career Guidance Sessions",
    "Industry Conferences",
    "Workshop Facilitation",
    "Panel Discussions",
    "Keynote Presentations"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
              <Mic className="w-4 h-4 mr-2" />
              Speaker Bureau & Expert Network
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect with{' '}
              <span className="bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industry Experts
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access our curated network of speakers, judges, and industry experts 
              to elevate your events and provide valuable insights to your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakerCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="space-y-1">
                  {category.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Speakers & Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet some of our top-rated speakers who have inspired thousands of students 
              across Tamil Nadu's leading institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{speaker.title}</p>
                  <p className="text-gray-600 text-sm">{speaker.expertise}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Events Conducted:</span>
                    <span className="font-semibold text-gray-900">{speaker.events}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(speaker.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-sm font-semibold text-gray-900 ml-1">{speaker.rating}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleBookSpeaker(speaker.name, speaker.title, speaker.expertise)}
                  className="w-full mt-6 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Book Speaker
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perfect Speakers for Every Event Type
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're organizing a technical symposium, cultural festival, or career guidance session, 
                we have the right experts to make your event memorable and impactful.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventTypes.map((eventType, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{eventType}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleFindPerfectSpeaker}
                className="mt-8 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center group"
              >
                Find Perfect Speaker
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Speaker at event" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Expert Speakers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Speaker Booking Process
            </h2>
            <p className="text-lg text-gray-600">
              From inquiry to event day, we make speaker booking seamless and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Tell Us Your Needs", description: "Share your event details, audience, and speaker requirements." },
              { step: "02", title: "Get Speaker Recommendations", description: "Receive curated speaker profiles matching your criteria." },
              { step: "03", title: "Confirm & Coordinate", description: "Finalize speaker selection and handle all logistics." },
              { step: "04", title: "Event Success", description: "Enjoy a successful event with our expert speaker." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need the Perfect Speaker for Your Event?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with industry experts who can inspire, educate, and engage your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button 
              onClick={handleRequestCustomMatch}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-gray-50 transition-colors"
            >
              Request Custom Match
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakerBureau;
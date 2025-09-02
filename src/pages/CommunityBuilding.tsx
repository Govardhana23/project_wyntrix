import React from 'react';
import { Users, MessageCircle, Network, Heart, TrendingUp, CheckCircle, ArrowRight, Globe } from 'lucide-react';

const handleLearnMoreCommunity = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I'm interested in learning more about the WYNTRIX community.\n\n" +
    "Could you please share more details about:\n" +
    "• How to become a member\n" +
    "• The benefits of joining\n" +
    "• Upcoming events and activities\n" +
    "• Community guidelines or expectations\n" +
    "• Success stories or interesting highlights\n\n" +
    "I would love to know how I can get involved and contribute. Looking forward to your response! 🙌"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const CommunityBuilding = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: "15K+ Active Students",
      description: "Connected across 50+ institutions in Tamil Nadu",
      stats: "Growing by 500+ students monthly"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Communities",
      description: "Dedicated groups for each college and interest area",
      stats: "100+ active communities"
    },
    {
      icon: Network,
      title: "Cross-College Networking",
      description: "Breaking silos between institutions for collaboration",
      stats: "1000+ inter-college connections"
    },
    {
      icon: Globe,
      title: "Digital Ecosystem",
      description: "Comprehensive platform for student engagement",
      stats: "24/7 community support"
    }
  ];

  const communityBenefits = [
    "Access to exclusive events and workshops",
    "Networking opportunities with peers",
    "Industry mentorship programs",
    "Internship and job opportunity sharing",
    "Collaborative project opportunities",
    "Skill development workshops",
    "Career guidance sessions",
    "Technical knowledge sharing"
  ];

  const successMetrics = [
    { number: "15K+", label: "Active Members", description: "Engaged students" },
    { number: "50+", label: "Partner Colleges", description: "Across Tamil Nadu" },
    { number: "500+", label: "Events Organized", description: "Community-driven" },
    { number: "₹2L+", label: "Opportunities Created", description: "Value for students" }
  ];

  const testimonials = [
    {
      name: "Naveen",
      college: "Jerusalem college of Engineering",
      quote: "WYNTRIX community helped me connect with like-minded students and land my dream internship.",
      image: "/Naveen.png?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mitesh",
      college: "Sri Sairam Engineering",
      quote: "The networking opportunities and mentorship I received through WYNTRIX were invaluable.",
      image: "/MITESH.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ashiqkeen",
      college: "Sri Sairam Institute of Technology",
      quote: "Being part of WYNTRIX opened doors to collaborations and projects I never imagined.",
      image: "/ASHIQKEEN.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Keerthana",
      college: "Rajalakshmi Institute of Technology",
      quote: "WYNTRIX's community support and resources helped me excel in my academics and career.",
      image: "/keerthana.jpg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Community Building & Network Growth
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building Tamil Nadu's{' '}
              <span className="bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Largest Student Network
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect, collaborate, and grow with 15,000+ students across Tamil Nadu. 
              Join a community that's redefining student networking and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                <div className="text-xs text-purple-600 font-medium">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Impact & Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real numbers that showcase the power of our student community and 
              the opportunities we've created together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{metric.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What Our Community Offers
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                More than just networking - we provide a comprehensive ecosystem 
                for student growth, learning, and opportunity creation.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {communityBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <a 
                  href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center mt-6 text-purple-600 hover:text-purple-800 transition-colors"
                >
              <button className="mt-8 bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center group">
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </a>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Student community" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Growing</div>
                  <div className="text-sm text-gray-600">Every Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Students Say About Our Community
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real students who've benefited from being part of WYNTRIX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-purple-600 font-medium">{testimonial.college}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Join Our Community
            </h2>
            <p className="text-lg text-gray-600">
              Getting started is simple - join thousands of students already part of our network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Join WhatsApp Group", description: "Click the link and introduce yourself to the community." },
              { step: "02", title: "Complete Profile", description: "Share your college, interests, and what you're looking for." },
              { step: "03", title: "Start Networking", description: "Connect with peers, join events, and explore opportunities." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Tamil Nadu's Largest Student Network?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with 15,000+ students, access exclusive opportunities, and grow your network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 hover:scale-105 active:scale-95 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Join WhatsApp Community
            </a>
            <a 
                  href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
            <button onClick={handleLearnMoreCommunity} className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-white hover:text-purple-600 transition-colors">
              Learn More About Community
            </button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityBuilding;
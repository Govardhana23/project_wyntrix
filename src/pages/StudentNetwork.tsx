import React from 'react';
import { Users, MessageCircle, Network, GraduationCap, TrendingUp, CheckCircle, ArrowRight, Globe, Heart } from 'lucide-react';

const handleLearnMoreNetwork = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I'm interested in learning more about the WYNTRIX student network.\n\n" +
    "Could you please share details about:\n" +
    "• The reach and size of the network\n" +
    "• How to join or partner with the network\n" +
    "• Key collaborations, institutions, or organizations involved\n" +
    "• Opportunities and benefits for students and educators\n" +
    "• Recent achievements or success stories\n\n" +
    "I'd appreciate any additional insights on how being part of the network can add value. Looking forward to your response! 🌐"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const StudentNetwork = () => {
  const networkStats = [
    { number: "15K+", label: "Active Students", description: "Across Tamil Nadu" },
    { number: "50+", label: "Partner Colleges", description: "Leading institutions" },
    { number: "100+", label: "WhatsApp Groups", description: "College-specific communities" },
    { number: "24/7", label: "Community Support", description: "Always available" }
  ];

  const colleges = [
    "SSN College of Engineering",
    "Sri Sairam Engineering College", 
    "Sri Sairam Institute of Technology",
    "Panimalar Engineering College",
    "St. Joseph's College",
    "Loyola College",
    "AMJ Jain College",
    "Vel Tech University",
    "Hindustan Institute of Technology",
    "SIMATS University",
    "SRM Institute of Science and Technology",
    "Agni College of Technology",
    "Jeppiaar Engineering College",
    "Dhanalakshmi College of Engineering",
    "Jerusalem College of Engineering",
    "RMD Engineering College",
    "Rajalakshmi Engineering College"
  ];

  const networkBenefits = [
    {
      icon: Users,
      title: "Peer Connections",
      description: "Connect with like-minded students from your college and beyond",
      features: ["Cross-college networking", "Study groups", "Project collaborations", "Friendship building"]
    },
    {
      icon: GraduationCap,
      title: "Academic Support",
      description: "Get help with studies, projects, and academic challenges",
      features: ["Study materials sharing", "Doubt clearing sessions", "Project guidance", "Exam preparation"]
    },
    {
      icon: TrendingUp,
      title: "Career Opportunities",
      description: "Access internships, jobs, and career guidance from the community",
      features: ["Internship alerts", "Job referrals", "Resume reviews", "Interview preparation"]
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description: "Develop skills, confidence, and leadership through community engagement",
      features: ["Leadership opportunities", "Skill workshops", "Mentorship programs", "Personal development"]
    }
  ];

  const communityFeatures = [
    "College-specific WhatsApp groups for targeted communication",
    "Inter-college collaboration opportunities",
    "Event notifications and updates",
    "Academic resource sharing",
    "Industry mentorship programs",
    "Skill development workshops",
    "Career guidance sessions",
    "Networking events and meetups"
  ];

  const testimonials = [
    {
      name: "Naveen",
      college: "Jerusalem College of Engineering",
      year: "3rd Year CSE",
      quote: "Through WYNTRIX network, I found my internship and made friends across different colleges. It's amazing!",
      image: "/Naveen.png?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mitesh",
      college: "Sri Sairam Engineering College",
      year: "2nd Year ECE",
      quote: "The community support helped me with my project and connected me with seniors who guided me.",
      image: "MITESH.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ashiqkeen",
      college: "Sri Sairam Institute of Technology",
      year: "Final Year IT",
      quote: "WYNTRIX network opened doors to opportunities I never knew existed. Grateful for this community!",
      image: "/ASHIQKEEN.jpg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Network className="w-4 h-4 mr-2" />
              Student Network & Community
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tamil Nadu's{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Largest Student Network
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with 15,000+ students across 50+ institutions. Build friendships, 
              collaborate on projects, and grow together in Tamil Nadu's most vibrant student community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Our Student Network?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              More than just connections - we provide a comprehensive ecosystem 
              for student growth, learning, and opportunity creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {networkBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-600 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Colleges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Colleges & Institutions
            </h2>
            <p className="text-lg text-gray-600">
              Students from these leading institutions are already part of our network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colleges.map((college, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">{college}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Network Offers
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A comprehensive platform designed to support every aspect of your student journey, 
                from academics to career development and personal growth.
              </p>
              
              <div className="space-y-4">
                {communityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-gradient-to-r from-blue-500 via-purple-600 to-green-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center group">
                Join Our Network
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Student network" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Growing</div>
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
              What Students Say About Our Network
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real students who've benefited from being part of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-purple-600 font-medium text-sm">{testimonial.college}</p>
                  <p className="text-gray-500 text-sm">{testimonial.year}</p>
                </div>
                <p className="text-gray-600 italic text-center">"{testimonial.quote}"</p>
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
              How to Join Our Network
            </h2>
            <p className="text-lg text-gray-600">
              Getting started is simple - join thousands of students already part of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Join WhatsApp Group", description: "Click the link and introduce yourself to the community." },
              { step: "02", title: "Find Your College Group", description: "Connect with students from your specific institution." },
              { step: "03", title: "Start Networking", description: "Engage, collaborate, and grow with the community." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect with 15,000+ Students?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join Tamil Nadu's largest and most active student network today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors hover:scale-105 active:scale-95 inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Join WhatsApp Network
            </a>
            <button onClick={handleLearnMoreNetwork} className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:scale-105 active:scale-95 hover:text-purple-600 transition-colors">
              Learn More About Network
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentNetwork;
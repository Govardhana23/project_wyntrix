import React from 'react';
import { Users, Award, TrendingUp, Heart, Star, CheckCircle, ArrowRight, Target } from 'lucide-react';

const handlePartnerWithUs = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I'm interested in partnering with WYNTRIX and would like to discuss potential collaboration opportunities.\n\n" +
    "Here are a few details about our organization:\n" +
    "• Name of Organization/Individual: [Your institution/company/name]\n" +
    "• Organization Type: [Educational Institution, Startup, Corporate, NGO, etc.]\n" +
    "• Nature of Partnership Sought: [Events, Campaigns, Workshops, Sponsorships, Recruitment, etc.]\n" +
    "• Objectives: [What do you aim to achieve through this partnership?]\n" +
    "• Previous Collaboration Experience (if any): [Details, if any]\n" +
    "• Timeline/Key Dates: [Preferred start date, deadlines]\n\n" +
    "Additional Information:\n" +
    "• Contact Person: [Name & role]\n" +
    "• Email & Phone: [Preferred contact details]\n" +
    "• Special Requirements or Ideas: [Anything specific?]\n\n" +
    "Looking forward to exploring ways we can collaborate and create value together! 🚀"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const AboutWyntrix = () => {
  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "WYNTRIX was founded with a vision to transform student networking and event management across Tamil Nadu."
    },
    {
      year: "2024",
      title: "Rapid Growth",
      description: "Expanded to 15,000+ students across 50+ institutions, becoming Tamil Nadu's largest student network."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Founder honored as Student Entrepreneur of the Year by SSN College and invited as panel jury."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding services and building the next generation of student-powered digital solutions."
    }
  ];

  const coreValues = [
    {
      icon: Users,
      title: "Community First",
      description: "Every decision we make prioritizes the student community and their growth."
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We're passionate about empowering students and creating meaningful opportunities."
    },
    {
      icon: TrendingUp,
      title: "Innovation Focus",
      description: "Constantly innovating to provide better solutions and experiences."
    },
    {
      icon: Target,
      title: "Impact Oriented",
      description: "Measuring success by the positive impact we create in students' lives."
    }
  ];

  const achievements = [
    { metric: "15K+", label: "Active Students", description: "Connected across Tamil Nadu" },
    { metric: "50+", label: "Partner Institutions", description: "Trusted by colleges" },
    { metric: "₹2L+", label: "Sponsorships Secured", description: "For student events" },
    { metric: "500+", label: "Events Supported", description: "Successful collaborations" }
  ];

  const teamHighlights = [
    {
      role: "Founder & CEO",
      name: "Tharun Varshan",
      achievement: "Student Entrepreneur of the Year - SSN College",
      description: "Visionary leader who started WYNTRIX to bridge the gap between students and opportunities.",
      image: "/ceo-logo.jpg"
    },
    {
      role: "Student Community",
      name: "15,000+ Active Members",
      achievement: "Largest Student Network in Tamil Nadu",
      description: "Passionate students driving change and creating opportunities across institutions.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              About WYNTRIX
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More Than a Platform —{' '}
              <span className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                It's a Movement
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded by passionate students, WYNTRIX is redefining how college events, 
              student communities, and industry collaborations come together across Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.metric}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  What started as a small initiative to promote college events has evolved into 
                  Tamil Nadu's largest student-powered digital platform. WYNTRIX was born from 
                  the vision of connecting students, empowering communities, and creating 
                  opportunities that matter.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From our first college symposium promotion to building a network of 15,000+ 
                  students across 50+ institutions, we've remained true to our core mission: 
                  empowering students through technology, creativity, and collaboration.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, WYNTRIX stands as a testament to what passionate students can achieve 
                  when they come together with a shared vision of growth and impact.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="WYNTRIX story" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">2023</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey & Milestones
            </h2>
            <p className="text-lg text-gray-600">
              Key moments that shaped WYNTRIX into what it is today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 via-purple-600 to-blue-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-purple-600 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at WYNTRIX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership & Community
            </h2>
            <p className="text-lg text-gray-600">
              Meet the people behind WYNTRIX's success and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamHighlights.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-purple-600 font-medium mb-1">{member.role}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-3 mb-4">
                      <div className="text-yellow-800 font-semibold text-sm">{member.achievement}</div>
                    </div>
                    <p className="text-gray-600">{member.description}</p>
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
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 15,000+ students who are already part of the WYNTRIX movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
                href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-gray-50 transition-colors">
              Join Our Community
            </button>
            </a>
            <button onClick={handlePartnerWithUs} className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-white hover:text-purple-600 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutWyntrix;
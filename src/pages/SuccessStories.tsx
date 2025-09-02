import React from 'react';
import { Award, Trophy, Star, TrendingUp, Users, CheckCircle, ArrowRight, Target } from 'lucide-react';

const SuccessStories = () => {
  const majorAchievements = [
    {
      title: "Student Entrepreneur of the Year",
      organization: "SSN College of Engineering",
      description: "Founder Tharun Varshan honored for exceptional entrepreneurial leadership and innovation in student community building.",
      impact: "Invited as panel jury for SYCON'25 entrepreneurship conference",
      image: "/ssn-college-recognition/ssn-pic-2.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "Leadership Recognition"
    },
    {
      title: "Guest of Honor & Prize Distributor",
      organization: "Agni College of Technology",
      description: "Recognized by the Department HoD and invited to distribute prizes during their flagship symposium.",
      impact: "Rare recognition for a young entrepreneur in the academic community",
      image: "/agni.png?auto=compress&cs=tinysrgb&w=800",
      category: "Academic Honor"
    }
  ];

  const eventSuccesses = [
    {
      college: "SSN College of Engineering",
      event: "SYCON'25 Conference",
      achievement: "1000+ attendees, industry recognition",
      role: "Panel Jury & Marketing Support",
      metrics: ["1000+ participants", "Industry partnerships", "Media coverage", "Student engagement"]
    },
    {
      college: "BS Abdur Rahman Crescent Institute of Science and Technology",
      event: "Zynus'25 Technical Symposium",
      achievement: "750+ participants, industry connect",
      role: "Marketing Partner & Event Support",
      metrics: ["750+ participants", "Industry speakers", "Technical workshops", "Networking sessions"]
    },
    {
      college: "Chennai Institute of Technology",
      event: "Exploitx 2025",
      achievement: "1000+ participants, technical hackathon",
      role: "Event Marketing & Sponsorship",
      metrics: ["1000+ participants", "Coding events", "Different Rounds", "Student engagement"]
    },
    {
      college: "Vel Tech Rangarajan Dr Sagunthala R and D Institute of Science and Technology",
      event: "Lavaza 2k25",
      achievement: "800+ participants, viral reach",
      role: "Marketing & Sponsership",
      metrics: ["800+ attendees", "10K+ social reach", "Cultural Fest", "Promotions"]
    },
    {
      college: "Agni College of Technology",
      event: "Technical Symposium - ELZEE'2.0",
      achievement: "500+ participants, ₹50K sponsorship",
      role: "Marketing Sponsership & Promotion",
      metrics: ["500+ registrations", "₹50K sponsorships", "Multi-college participation", "Social media viral"]
    },
    {
      college: "Dhanalakshmi College of Engineering",
      event: "ELYSIAN - 2K25",
      achievement: "2000+ participants, viral reach",
      role: "Digital Marketing & Promotion",
      metrics: ["2000+ attendees", "100K+ social reach", "Cross-college participation", "Media partnerships"]
    },
    
  ];

  const communityImpact = [
    {
      metric: "15K+",
      label: "Students Connected",
      description: "Across Tamil Nadu's leading institutions",
      growth: "+500 monthly"
    },
    {
      metric: "50+",
      label: "Institutions Served",
      description: "As official marketing partner",
      growth: "+5 quarterly"
    },
    {
      metric: "₹2L+",
      label: "Sponsorships Secured",
      description: "For student events and initiatives",
      growth: "Growing portfolio"
    },
    {
      metric: "500+",
      label: "Events Supported",
      description: "Successful collaborations and partnerships",
      growth: "+50 monthly"
    }
  ];

  const studentTestimonials = [
    {
      name: "Keerthana",
      college: "Rajalakshmi Institute of Technology",
      achievement: "Won National Competition",
      story: "WYNTRIX connected me with the right mentors and resources to win a national hackathon.",
      image: "/keerthana.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Naveen",
      college: "Jerusalem College of Engineering",
      achievement: "Secured Dream Internship",
      story: "Through WYNTRIX network, I connected with alumni who helped me land an internship at a top tech company.",
      image: "/Naveen.png?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mitesh",
      college: "Sri Sairam Engineering",
      achievement: "Started Successful Project",
      story: "The community support and mentorship helped me launch my own tech startup with fellow students.",
      image: "/MITESH.jpeg?auto=compress&cs=tinysrgb&w=400"
    }    
  ];

  const institutionFeedback = [
    {
      institution: "SSN College of Engineering",
      feedback: "WYNTRIX has been instrumental in enhancing our event reach and student engagement.",
      representative: "Dr. Rajesh Kumar, Faculty Coordinator"
    },
    {
      institution: "Agni College of Technology",
      feedback: "Their marketing support helped us achieve unprecedented participation in our symposium.",
      representative: "Prof. Anitha Sharma, HoD EEE"
    },
    {
      institution: "Dhanalakshmi College of Engineering",
      feedback: "The student network they've built is remarkable and beneficial for all institutions.",
      representative: "Dr. Natarajan RK, Dean Student Affairs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-medium mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              Success Stories & Achievements
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Celebrating{' '}
              <span className="bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Real Impact
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From individual achievements to community-wide impact, discover the success stories 
              that showcase the power of student collaboration and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityImpact.map((impact, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{impact.metric}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{impact.label}</div>
                <div className="text-sm text-gray-600 mb-2">{impact.description}</div>
                <div className="text-xs text-green-600 font-medium">{impact.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Recognition & Honors
            </h2>
            <p className="text-lg text-gray-600">
              From receiving awards to distributing them - real stories of campus transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorAchievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-orange-600 font-medium mb-2">{achievement.category}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-orange-700 font-semibold mb-3">{achievement.organization}</p>
                    <p className="text-gray-600 mb-4">{achievement.description}</p>
                    <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-3">
                      <div className="text-yellow-800 font-semibold text-sm">Impact:</div>
                      <div className="text-yellow-700 text-sm">{achievement.impact}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Successful collaborations with leading institutions across Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventSuccesses.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.college}</h3>
                  <p className="text-purple-600 font-medium mb-2">{event.event}</p>
                  <p className="text-green-600 font-semibold mb-2">{event.achievement}</p>
                  <p className="text-gray-600 text-sm">{event.role}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">Key Metrics:</h4>
                  {event.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real students, real achievements, real impact through our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentTestimonials.map((student, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={student.image} 
                    alt={student.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
                  <p className="text-purple-600 font-medium text-sm">{student.college}</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="text-green-800 font-semibold text-sm mb-1">Achievement:</div>
                  <div className="text-green-700 text-sm">{student.achievement}</div>
                </div>

                <p className="text-gray-600 italic text-sm">"{student.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institution Feedback */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Institutions Say About Us
            </h2>
            <p className="text-lg text-gray-600">
              Feedback from faculty and administrators who've worked with WYNTRIX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {institutionFeedback.map((feedback, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="mb-6">
                  <Star className="w-8 h-8 text-yellow-400 mb-4" />
                  <p className="text-gray-600 italic mb-4">"{feedback.feedback}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{feedback.institution}</h4>
                  <p className="text-gray-600 text-sm">{feedback.representative}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Growth Journey
            </h2>
            <p className="text-lg text-gray-600">
              Tracking our impact and growth across various metrics.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">300%</div>
                <div className="text-sm text-gray-600">Network Growth</div>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-sm text-gray-600">Student Satisfaction</div>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">Event Success Rate</div>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Recognition Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who are already achieving their goals through WYNTRIX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors hover:scale-105 active:scale-95 inline-flex items-center justify-center"
            >
              Join Our Community
            </a>
            <button 
              onClick={() => {
                const message = encodeURIComponent(
                  "Hi WYNTRIX Team! 👋\n\n" +
                  "I'm interested in partnering with WYNTRIX after seeing your impressive success stories. I'd like to discuss:\n\n" +
                  "🤝 Partnership Opportunities\n" +
                  "📊 Collaboration Models\n" +
                  "🎯 Joint Initiatives\n" +
                  "💼 Business Development\n" +
                  "🚀 Growth Strategies\n\n" +
                  "Organization: [Please specify your organization]\n" +
                  "Partnership Type: [Event collaboration/Sponsorship/Marketing/Other]\n" +
                  "Expected Reach: [Your target audience size]\n\n" +
                  "Let's create success stories together!\n\n" +
                  "Looking forward to our partnership! 🌟"
                );
                const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-orange-600 transition-colors hover:scale-105 active:scale-95"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
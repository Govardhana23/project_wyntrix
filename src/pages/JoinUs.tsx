import React from 'react';
import { Users, MessageCircle, Heart, Star, CheckCircle, ArrowRight, Gift, Target, Zap } from 'lucide-react';

const handleLearnMoreBenefits = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I'm interested in learning more about the benefits of being part of the WYNTRIX community.\n\n" +
    "Could you please share information about:\n" +
    "• What exclusive opportunities and resources are available to members\n" +
    "• Professional and personal growth benefits\n" +
    "• Networking or collaboration prospects\n" +
    "• Access to events, workshops, or mentorship programs\n" +
    "• Any other unique perks of joining\n\n" +
    "I'm eager to understand how WYNTRIX can help me grow and connect with like-minded individuals. Looking forward to your response! 🌟"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const handleLearnMore = (plan:any) => {
  let message = `Hi WYNTRIX Team! 👋\n\nI'm interested in learning more about the *${plan}* plan.\n\nCould you please share more details?\n\nLooking forward to your response! 🙌`;

  const whatsappUrl = `https://wa.me/916381635513?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};


const JoinUs = () => {
  const membershipBenefits = [
    {
      icon: Users,
      title: "Instant Network Access",
      description: "Connect with 15,000+ students across 50+ institutions in Tamil Nadu",
      features: ["College-specific groups", "Cross-institution networking", "Alumni connections", "Industry mentors"]
    },
    {
      icon: Target,
      title: "Exclusive Opportunities",
      description: "Get first access to internships, jobs, events, and collaboration opportunities",
      features: ["Early event notifications", "Exclusive job postings", "Internship alerts", "Project collaborations"]
    },
    {
      icon: Zap,
      title: "Skill Development",
      description: "Access workshops, mentorship programs, and skill-building resources",
      features: ["Free workshops", "Mentorship programs", "Skill assessments", "Career guidance"]
    },
    {
      icon: Gift,
      title: "Community Perks",
      description: "Enjoy special discounts, free resources, and community-exclusive benefits",
      features: ["Event discounts", "Free resources", "Priority support", "Recognition programs"]
    }
  ];

  const membershipTiers = [
    {
      name: "Community Member",
      price: "Free",
      description: "Perfect for students just getting started",
      features: [
        "Access to WhatsApp communities",
        "Event notifications",
        "Basic networking opportunities",
        "Monthly newsletters",
        "Community support"
      ],
      popular: false,
      buttonText: "Join Free",
      buttonStyle: "bg-gray-600 hover:bg-gray-700"
    },
    {
      name: "Active Member",
      price: "₹99/month",
      description: "For students who want to maximize opportunities",
      features: [
        "Everything in Community Member",
        "Priority event access",
        "Exclusive workshops",
        "Mentorship matching",
        "Resume review services",
        "Job referral network"
      ],
      popular: true,
      buttonText: "Upgrade Now",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
    },
    {
      name: "Premium Member",
      price: "₹199/month",
      description: "For ambitious students and leaders",
      features: [
        "Everything in Active Member",
        "1-on-1 career coaching",
        "Leadership opportunities",
        "Startup incubation support",
        "Industry connections",
        "Personal branding support"
      ],
      popular: false,
      buttonText: "Go Premium",
      buttonStyle: "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
    }
  ];

  const joinSteps = [
    {
      step: "01",
      title: "Join WhatsApp Community",
      description: "Click the link and introduce yourself to our vibrant community of students."
    },
    {
      step: "02",
      title: "Complete Your Profile",
      description: "Share your college, interests, and goals to get personalized opportunities."
    },
    {
      step: "03",
      title: "Start Networking",
      description: "Connect with peers, join events, and explore the endless possibilities."
    },
    {
      step: "04",
      title: "Grow Together",
      description: "Collaborate, learn, and achieve your goals with community support."
    }
  ];

  const testimonials = [
    {
      name: "Mitesh",
      college: "Sri Sairam Engineering College",
      quote: "The mentorship and opportunities I received through WYNTRIX accelerated my career growth significantly.",
      image: "MITESH.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Started successful startup"
    },
    {
      name: "Naveen",
      college: "Jerusalem College of Engineering",
      quote: "Joining WYNTRIX was the best decision I made in college. The network helped me land my dream internship!",
      image: "Naveen.png?auto=compress&cs=tinysrgb&w=400",
      achievement: "Secured internship at top tech company"
    },
    {
      name: "Ashiqkeen",
      college: "Sri Sairam Institute of Technology",
      quote: "WYNTRIX community is like a family. The support and connections I've made here are invaluable.",
      image: "ASHIQKEEN.jpg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Won national hackathon"
    }
  ];

  const communityStats = [
    { number: "15K+", label: "Active Members", description: "Growing daily" },
    { number: "50+", label: "Partner Colleges", description: "Across Tamil Nadu" },
    { number: "500+", label: "Success Stories", description: "And counting" },
    { number: "24/7", label: "Community Support", description: "Always available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Join the WYNTRIX Community
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to{' '}
              <span className="bg-gradient-to-r from-purple-500 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Success Starts Here
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join 15,000+ students across Tamil Nadu who are building their future through 
              meaningful connections, opportunities, and collaborative growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join WYNTRIX?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the incredible benefits and opportunities waiting for you 
              in Tamil Nadu's largest student community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-blue-600 to-green-600 rounded-xl flex items-center justify-center mb-6">
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

      {/* Membership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Membership Level
            </h2>
            <p className="text-lg text-gray-600">
              Start free and upgrade as you grow. Every level offers incredible value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                    onClick={() => handleLearnMore(tier.name)} // 🔑 send plan name dynamically
                    className={`w-full text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 ${tier.buttonStyle}`}
                >
                    {tier.buttonText}
                </button>

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
              Getting started is simple and takes less than 5 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {joinSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-lg text-gray-600">
              Real students, real achievements, real impact through WYNTRIX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-purple-600 font-medium text-sm">{testimonial.college}</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="text-green-800 font-semibold text-sm mb-1">Achievement:</div>
                  <div className="text-green-700 text-sm">{testimonial.achievement}</div>
                </div>

                <p className="text-gray-600 italic text-center">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Student Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 15,000+ students who are already building their future through WYNTRIX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/HmiQKqbIZOv4Tm6DeLZJdA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Join WhatsApp Community
            </a>

            <button onClick={handleLearnMoreBenefits} className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-white hover:text-purple-600 transition-colors">
              Learn More About Benefits
            </button>
          </div>
          
          <div className="mt-8 text-white/80 text-sm">
            <p>✨ Free to join • No hidden fees • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
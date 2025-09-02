import React from 'react';
import { Users, GraduationCap, DollarSign, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const WhyUs = () => {
  const stats = [
    {
      icon: Users,
      number: "15K+",
      label: "Active Students",
      description: "Connected across Tamil Nadu"
    },
    {
      icon: GraduationCap,
      number: "50+",
      label: "Institutions Served",
      description: "Trusted by colleges"
    },
    {
      icon: DollarSign,
      number: "₹2L+",
      label: "Sponsorships Secured",
      description: "For student events"
    },
    {
      icon: Zap,
      number: "100%",
      label: "Creative & Tech Support",
      description: "End-to-end solutions"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Student-Centric Platform",
      description: "Built specifically for students, understanding their unique needs and challenges in the academic environment."
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Successfully connected thousands of students and facilitated numerous successful events across Tamil Nadu."
    },
    {
      icon: Users,
      title: "Strong Network",
      description: "Access to a vast network of students, colleges, industry professionals, and potential sponsors."
    },
    {
      icon: Zap,
      title: "Tech-Driven Approach",
      description: "Leveraging cutting-edge technology to provide innovative solutions for modern student challenges."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Why Choose WYNTRIX
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join a platform that's already making a significant impact in the student community 
            across Tamil Nadu with proven results and growing success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why Students Choose{' '}
                <span className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  WYNTRIX
                </span>
              </h3>
              <p className="text-lg text-gray-600">
                We're not just another platform - we're a community-driven ecosystem 
                designed to empower students and elevate their academic and professional journey.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Student success" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating Success Card */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">Success</div>
                <div className="text-sm text-gray-600">Student-Driven Growth</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-2xl -z-10 transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
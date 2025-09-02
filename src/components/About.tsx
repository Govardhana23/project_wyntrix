import React from 'react';
import { Users, Zap, Heart, Award, Trophy, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            About WYNTRIX
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            More Than a Brand —{' '}
            <span className="bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              It's a Movement
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded by passionate students, WYNTRIX is redefining how college events, student communities, 
            and industry collaborations come together. We blend creativity, strategy, and technology to 
            make every event and opportunity impactful.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Student community" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">15K+</div>
                  <div className="text-sm text-gray-600">Connected Students</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs">
              <div className="flex items-center space-x-3">
                <Trophy className="w-8 h-8 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Institutions Served</div>
                </div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-purple-200/20 to-blue-200/20 rounded-2xl -z-10 transform -rotate-3"></div>
          </div>

          {/* Right Content - Our Journey */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Journey
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small initiative has now grown into a student-powered powerhouse. 
                From promoting our first college symposium to building a network of 15,000+ students 
                across Tamil Nadu, WYNTRIX has proudly served 50+ institutions as their official 
                marketing partner — and we're just getting started.
              </p>
            </div>

            {/* Journey Milestones */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">From Idea to Impact</h4>
                  <p className="text-gray-600">Started with a vision to transform campus events and grew into Tamil Nadu's largest student network.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Building Communities</h4>
                  <p className="text-gray-600">Connected thousands of students and created lasting partnerships with educational institutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">100+ Stall Connections</h4>
                  <p className="text-gray-600">Instant deployment of exhibition stalls and vendor connections across Tamil Nadu.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Recognition & Growth</h4>
                  <p className="text-gray-600">Achieved significant milestones including ₹2L+ in sponsorships and industry recognition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Community First</h4>
              <p className="text-gray-600 text-sm">Empowering students through collaboration and meaningful connections</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Creativity & Innovation</h4>
              <p className="text-gray-600 text-sm">Every project is a canvas for creative expression and innovation</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Reliability & Impact</h4>
              <p className="text-gray-600 text-sm">From ₹2L sponsorships to massive outreach with measurable results</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Growth Mindset</h4>
              <p className="text-gray-600 text-sm">Learning, evolving, and scaling with every opportunity</p>
            </div>
          </div>
        </div>

        {/* Leadership Recognition Section */}
        <div className="bg-gradient-to-r from-yellow-50 via-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Leadership Recognition
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Student Leadership in Action
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From receiving awards to distributing them — real stories of campus transformation 
              through leadership and entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">SSN College Recognition</h4>
                  <p className="text-gray-600 mb-3">
                    Our founder, Tharun Varshan, was honored as the <strong>Student Entrepreneur of the Year </strong> by SSN College and invited as a panel jury for their prestigious Entrepreneurship Conference. In addition to this prestigious accolade, Tharun was invited to serve as a panel jury member at SSN College’s renowned Entrepreneurship Conference.
                  </p>
                  <div className="text-sm text-purple-600 font-medium">Student Entrepreneur of the Year</div>
                </div>
              </div>

              {/* SSN College SYCON'25 Image Gallery */}
              <div className="mt-6">
                <h5 className="text-lg font-bold text-gray-900 mb-4">SYCON'25 - Panel Jury Experience</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img 
                      src="/ssn-college-recognition/ssn-pic-1.jpg" 
                      alt="SYCON'25 Studentpreneurs Panel"
                      className="w-full h-30 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img 
                      src="/ssn-college-recognition/ssn-pic-2.jpg" 
                      alt="From Classroom to Boardroom Panel Discussion"
                      className="w-full h-30 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img 
                      src="/ssn-college-recognition/ssn-pic-3.jpg" 
                      alt="Tharun Varshan as Panel Jury"
                      className="w-full h-30 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img 
                      src="/ssn-college-recognition/ssn-pic-4.jpg" 
                      alt="SYCON'25 Audience Engagement"
                      className="w-full h-30 object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <p className="text-gray-600 text-sm italic">
                    "From Classroom to Boardroom" - SYCON'25 Entrepreneurship Conference
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Agni College Honor</h4>
                  <p className="text-gray-600 mb-3">
                    Honored by Agni College of Technology, receiving a momento from the Department HoD 
                    and invited to distribute prizes during their flagship symposium — a rare recognition at such a young age.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">Guest of Honor & Prize Distributor</div>
                </div>
              </div>

              {/* Agni College Honor Image Gallery */}
              <div className="mt-6">
                <h5 className="text-lg font-bold text-gray-900 mb-4">Prize Distribution Ceremony</h5>
                <div className="grid grid-cols-1 gap-3">
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img 
                      src="/agni-college-recognition/agni-pic-1.jpeg" 
                      alt="Receiving momento from Department HoD"
                      className="w-full h-50 object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                        src="/agni-college-recognition/agni-pic-2.jpg" 
                        alt="Prize distribution to students"
                        className="w-full h-30 object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                        src="/agni-college-recognition/agni-pic-3.jpg" 
                        alt="Group photo with winners"
                        className="w-full h-30 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <p className="text-gray-600 text-sm italic">
                    Agni College of Technology - Department of Electrical and Electronics Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
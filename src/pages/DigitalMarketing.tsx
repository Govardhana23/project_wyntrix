import React, { useState } from 'react';
import { Smartphone, Globe, TrendingUp, Target, BarChart, Users, CheckCircle, ArrowRight, X, Calendar, Eye, Heart, Share2, MessageCircle } from 'lucide-react';

const DigitalMarketing = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  
const handleRequestDigitalMarketingAudit = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I would like to request a Digital Marketing Audit for my brand/business.\n\n" +
    "Here are my details:\n" +
    "• Business/Organization Name: [Your name]\n" +
    "• Website or Social Media Links: [Paste here]\n" +
    "• Platforms to Audit: [Facebook/Instagram/LinkedIn/YouTube/Google/etc.]\n" +
    "• Primary Objectives: [Brand awareness, lead generation, conversions, etc.]\n" +
    "• Target Audience: [Who do you want to reach?]\n" +
    "• Current Challenges: [e.g., low engagement, high ad costs, inconsistent branding]\n" +
    "• Monthly Marketing Budget: [Approximate value]\n\n" +
    "Any other information you'd like us to know: [Add here]\n\n" +
    "Looking forward to your expert insights and recommendations! 📈"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const handleRequestPortfolio = () => {
  const message = encodeURIComponent(
    "Hi WYNTRIX Team! 👋\n\n" +
    "I'm interested in exploring your creative capabilities and would like to view your full portfolio.\n\n" +
    "Please share recent samples of your work, case studies, and any standout projects, especially in the areas of:\n" +
    "• Graphic Design\n" +
    "• Social Media Creatives\n" +
    "• Video Editing/Production\n" +
    "• Branding\n" +
    "• Other (please specify)\n\n" +
    "It would be great if you could also share a link or PDF, or recommend highlights tailored to my industry/interest.\n\n" +
    "Looking forward to being inspired by your creative work! ✨"
  );

  const whatsappUrl = `https://wa.me/916381635513?text=${message}`;
  window.open(whatsappUrl, '_blank');
};


  const services = [
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Strategic content creation and management across Instagram, LinkedIn, and WhatsApp communities.",
      features: ["Content Strategy", "Community Management", "Engagement Analytics", "Viral Campaigns"]
    },
    {
      icon: Globe,
      title: "Brand Development",
      description: "Complete brand identity creation from logos to comprehensive brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Positioning"]
    },
    {
      icon: Target,
      title: "Digital Campaigns",
      description: "Targeted marketing campaigns designed specifically for the student demographic.",
      features: ["Campaign Strategy", "Audience Targeting", "Performance Tracking", "ROI Optimization"]
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your digital presence and marketing effectiveness.",
      features: ["Performance Analytics", "Audience Insights", "Growth Metrics", "Competitive Analysis"]
    }
  ];

  const achievements = [
    { metric: "15K+", label: "Students Reached", description: "Across Tamil Nadu" },
    { metric: "50+", label: "Brands Promoted", description: "Successful campaigns" },
    { metric: "300%", label: "Average Growth", description: "In engagement rates" },
    { metric: "₹2L+", label: "Value Generated", description: "For client events" }
  ];

  const caseStudies = [
    {
      id: "viral-campaign",
      title: "College Event Viral Campaign",
      client: "Technical Symposium",
      result: "500K+ reach, 2000+ registrations",
      strategy: "Multi-platform content strategy with student influencer partnerships",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "6 weeks",
      budget: "₹25,000",
      platforms: ["Instagram", "LinkedIn", "WhatsApp", "Facebook"],
      metrics: {
        reach: "500K+",
        engagement: "45K+",
        registrations: "2000+",
        roi: "800%"
      }
    },
    {
      id: "brand-awareness",
      title: "Brand Awareness Campaign",
      client: "Educational Institution",
      result: "10K+ new followers, 400% engagement boost",
      strategy: "Targeted content creation and community building approach",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12 weeks",
      budget: "₹40,000",
      platforms: ["Instagram", "LinkedIn", "YouTube", "WhatsApp"],
      metrics: {
        followers: "10K+",
        engagement: "400%",
        reach: "250K+",
        leads: "150+"
      }
    }
  ];

  const detailedCaseStudies = {
    "viral-campaign": {
      title: "Technical Symposium Viral Campaign",
      subtitle: "How we achieved 500K+ reach and 2000+ registrations in 6 weeks",
      overview: "A comprehensive digital marketing campaign for a major technical symposium that needed to attract students from across Tamil Nadu. The challenge was to create buzz, drive registrations, and establish the event as a must-attend technical gathering.",
      challenge: "The client needed to promote their technical symposium to engineering students across Tamil Nadu with limited budget and tight timeline. Previous events had struggled with low attendance and poor social media engagement.",
      solution: "We developed a multi-platform content strategy focusing on student influencer partnerships, viral content creation, and targeted community outreach through our 15K+ student network.",
      timeline: [
        { week: "Week 1-2", activity: "Strategy Development & Influencer Outreach", details: "Identified key student influencers, developed content calendar, created brand guidelines" },
        { week: "Week 3-4", activity: "Content Creation & Campaign Launch", details: "Produced viral videos, designed promotional materials, launched across all platforms" },
        { week: "Week 5-6", activity: "Amplification & Registration Drive", details: "Intensive promotion through WhatsApp communities, influencer collaborations, final push" }
      ],
      strategy: [
        { title: "Student Influencer Network", description: "Partnered with 25+ student influencers across different colleges to create authentic content and drive peer-to-peer promotion." },
        { title: "Viral Content Creation", description: "Developed shareable content including memes, countdown posts, behind-the-scenes videos, and interactive stories." },
        { title: "Community Amplification", description: "Leveraged our 15K+ WhatsApp community network for direct outreach and word-of-mouth marketing." },
        { title: "Cross-Platform Synergy", description: "Coordinated campaigns across Instagram, LinkedIn, Facebook, and WhatsApp for maximum reach and engagement." }
      ],
      results: [
        { metric: "Total Reach", value: "500K+", description: "Organic reach across all platforms" },
        { metric: "Engagement Rate", value: "8.5%", description: "Above industry average of 3-4%" },
        { metric: "Event Registrations", value: "2000+", description: "300% increase from previous year" },
        { metric: "Cost Per Registration", value: "₹12.5", description: "85% lower than industry average" },
        { metric: "Social Media Followers", value: "+5K", description: "New followers gained during campaign" },
        { metric: "WhatsApp Community Growth", value: "+1.2K", description: "New members added to communities" }
      ],
      content: [
        { type: "Video Content", count: "15 videos", description: "Including promotional videos, student testimonials, and event teasers" },
        { type: "Social Media Posts", count: "120+ posts", description: "Across all platforms with consistent branding and messaging" },
        { type: "Influencer Collaborations", count: "25 partnerships", description: "Student influencers from different colleges and departments" },
        { type: "WhatsApp Campaigns", count: "50+ communities", description: "Direct outreach to targeted student groups" }
      ],
      testimonial: {
        quote: "WYNTRIX transformed our event promotion completely. The viral campaign they created not only exceeded our registration targets but also established our symposium as the premier technical event in the region.",
        author: "Dr. Rajesh Kumar",
        position: "Event Coordinator, Technical Symposium"
      }
    },
    "brand-awareness": {
      title: "Educational Institution Brand Building",
      subtitle: "Building a strong digital presence with 10K+ followers and 400% engagement growth",
      overview: "A comprehensive brand awareness campaign for an educational institution looking to establish a strong digital presence and attract prospective students. The goal was to showcase the institution's values, achievements, and student life.",
      challenge: "The institution had minimal social media presence, low brand awareness among target students, and struggled to communicate their unique value proposition effectively in the digital space.",
      solution: "We developed a comprehensive brand strategy focusing on authentic storytelling, student-generated content, and community building to create a strong, recognizable brand presence.",
      timeline: [
        { week: "Week 1-3", activity: "Brand Strategy & Content Planning", details: "Developed brand voice, visual identity, content pillars, and comprehensive content calendar" },
        { week: "Week 4-8", activity: "Content Creation & Community Building", details: "Produced high-quality content, launched engagement campaigns, built follower base" },
        { week: "Week 9-12", activity: "Optimization & Scale", details: "Analyzed performance, optimized content strategy, scaled successful campaigns" }
      ],
      strategy: [
        { title: "Brand Positioning", description: "Established clear brand voice and visual identity that resonated with target student demographic." },
        { title: "Content Pillars", description: "Created four main content themes: Academic Excellence, Student Life, Industry Connections, and Campus Culture." },
        { title: "Student-Generated Content", description: "Encouraged students to share their experiences, creating authentic and relatable content." },
        { title: "Community Engagement", description: "Built active communities around shared interests and academic pursuits." }
      ],
      results: [
        { metric: "Follower Growth", value: "10K+", description: "New followers across all platforms" },
        { metric: "Engagement Rate", value: "400%", description: "Increase from baseline engagement" },
        { metric: "Brand Reach", value: "250K+", description: "Monthly reach across all content" },
        { metric: "Lead Generation", value: "150+", description: "Qualified inquiries from prospective students" },
        { metric: "Content Engagement", value: "25K+", description: "Average monthly interactions" },
        { metric: "Community Growth", value: "+2K", description: "New members in branded communities" }
      ],
      content: [
        { type: "Brand Content", count: "80+ posts", description: "Showcasing institution values, achievements, and unique selling points" },
        { type: "Student Stories", count: "30 features", description: "Highlighting student achievements, experiences, and testimonials" },
        { type: "Campus Life Content", count: "50+ posts", description: "Behind-the-scenes content showing authentic campus culture" },
        { type: "Educational Content", count: "40+ posts", description: "Valuable content related to courses, career guidance, and industry insights" }
      ],
      testimonial: {
        quote: "The brand transformation WYNTRIX delivered exceeded our expectations. Our digital presence now truly reflects our institution's values and has significantly improved our ability to connect with prospective students.",
        author: "Prof. Anitha Sharma",
        position: "Marketing Head, Educational Institution"
      }
    }
  };

  const openCaseStudy = (caseStudyId: string) => {
    setSelectedCaseStudy(caseStudyId);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
    document.body.style.overflow = 'unset';
  };

  const currentCaseStudy = selectedCaseStudy ? detailedCaseStudies[selectedCaseStudy as keyof typeof detailedCaseStudies] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Digital Marketing & Branding
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Amplify Your{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic digital marketing solutions tailored for educational institutions 
              and student organizations. Build your brand, engage your audience, and drive results.
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From social media strategy to brand development, we provide end-to-end 
              digital marketing solutions designed for the education sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Marketing Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real campaigns, real results - see how we've helped organizations grow their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-purple-600 font-medium mb-4">{study.client}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="text-green-800 font-semibold mb-1">Results Achieved:</div>
                    <div className="text-green-700">{study.result}</div>
                  </div>
                  <p className="text-gray-600 mb-6">{study.strategy}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.platforms.map((platform, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                        {platform}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => openCaseStudy(study.id)}
                    className="text-purple-600 font-medium hover:text-purple-700 flex items-center group hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to digital marketing that delivers consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Planning", description: "Comprehensive analysis and strategic planning tailored to your goals." },
              { step: "02", title: "Content Creation", description: "Engaging content that resonates with your target audience." },
              { step: "03", title: "Campaign Execution", description: "Multi-platform campaign deployment with real-time monitoring." },
              { step: "04", title: "Analytics & Optimization", description: "Continuous optimization based on performance data and insights." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a digital marketing strategy that drives real results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleRequestDigitalMarketingAudit} className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 hover:bg-gray-50 transition-colors">
              Get Digital Marketing Audit
            </button>
            <button onClick={handleRequestPortfolio} className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:scale-105 active:scale-95 hover:text-purple-600 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && currentCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentCaseStudy.title}</h2>
                <p className="text-purple-600 font-medium">{currentCaseStudy.subtitle}</p>
              </div>
              <button 
                onClick={closeCaseStudy}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Campaign Overview</h3>
                <p className="text-gray-600 leading-relaxed">{currentCaseStudy.overview}</p>
              </section>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{currentCaseStudy.challenge}</p>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{currentCaseStudy.solution}</p>
                </section>
              </div>

              {/* Timeline */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Campaign Timeline</h3>
                <div className="space-y-4">
                  {currentCaseStudy.timeline.map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{phase.week}: {phase.activity}</h4>
                        <p className="text-gray-600 text-sm">{phase.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Strategy */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Strategic Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentCaseStudy.strategy.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Results */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Campaign Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCaseStudy.results.map((result, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-green-800 mb-2">{result.value}</div>
                      <div className="font-semibold text-gray-900 mb-1">{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.description}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Content Breakdown */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Content & Deliverables</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentCaseStudy.content.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-blue-50 rounded-lg p-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{item.count.split(' ')[0]}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.type}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonial */}
              <section className="bg-purple-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Client Testimonial</h3>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "{currentCaseStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{currentCaseStudy.testimonial.author}</div>
                    <div className="text-purple-600 text-sm">{currentCaseStudy.testimonial.position}</div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
                <p className="mb-6">Let's discuss how we can help you achieve similar results for your organization.</p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  Start Your Campaign
                </button>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalMarketing;
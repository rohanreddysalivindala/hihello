import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Leaf, Award, CheckCircle, Star } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const OurCommitment: React.FC = () => {
  const statistics = [
    {
      icon: Users,
      percentage: "39%",
      description: "of consumers switched brands due to a lack of sustainable packaging",
      color: "blue"
    },
    {
      icon: TrendingUp,
      percentage: "43%",
      description: "are willing to pay more for eco-friendly packaging",
      color: "green"
    },
    {
      icon: Leaf,
      percentage: "78%",
      description: "dislike plastic packaging due to environmental harm",
      color: "red"
    },
    {
      icon: Star,
      percentage: "90%",
      description: "of Gen Z said sustainable packaging influences their purchases",
      color: "purple"
    }
  ];

  const certifications = [
    {
      title: "Closed Loop Partners Grant",
      status: "Pursuing",
      description: "Working with the leading circular economy investor to scale our impact",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "U.S. Composting Council Certification",
      status: "In Progress",
      description: "Ensuring our products meet the highest composting standards",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "USDA BioPreferred Program",
      status: "Applying",
      description: "Federal recognition for bio-based content and sustainability",
      image: "https://images.pexels.com/photos/3735778/pexels-photo-3735778.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Green Business Certification",
      status: "Pursuing",
      description: "Third-party verification of our environmental practices",
      image: "https://images.pexels.com/photos/3693055/pexels-photo-3693055.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText
              text="Our Commitment"
              className="text-5xl md:text-6xl font-black text-black mb-8"
            />
            <AnimatedText
              text="Building trust through transparency, backed by data and verified by experts"
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-bold"
              delay={0.5}
            />
          </motion.div>
        </div>
      </section>

      {/* Market Demand Statistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <AnimatedText
              text="Sustainability by the Numbers"
              className="text-4xl md:text-5xl font-black text-black mb-8"
            />
            <AnimatedText
              text="Consumer demand for sustainable packaging is not a trend – it's a fundamental shift"
              className="text-xl text-gray-600 max-w-3xl mx-auto text-bold"
              delay={0.3}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateZ: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                transition={{ duration: 1, delay: index * 0.2, type: "spring", bounce: 0.5 }}
                viewport={{ once: true }}
                className="group relative perspective-container"
              >
                <div className="transparent-card premium-shadow rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200 text-center transform-card protruding-image">
                    initial={{ opacity: 0, scale: 0.3, rotateY: 180, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                  </div>
                      duration: 1.2, 
                      delay: index * 0.3,
                    initial={{ scale: 0 }}
                      bounce: 0.4
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    className={`text-4xl md:text-5xl font-black text-${stat.color}-600 mb-4`}

{stat && (
  <motion.div>
    <div>
      <div>{stat.percentage}</div>
      <p className="text-gray-700 font-bold leading-tight">
        {stat.description}
      </p>
    </div>
  </motion.div>
)}



          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="transparent-card premium-shadow rounded-2xl p-12 max-w-4xl mx-auto border border-green-200">
              <h3 className="text-2xl md:text-3xl font-black text-black mb-6">The Market is Ready</h3>
              <p className="text-lg text-gray-700 text-bold leading-relaxed">
                These aren't just statistics – they represent millions of consumers actively seeking sustainable alternatives. 
                Desmos Green meets this demand with a solution that doesn't compromise on performance while 
                delivering measurable environmental benefits.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Grants */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <AnimatedText
              text="Certifications & Recognition"
              className="text-4xl md:text-5xl font-black text-black mb-8"
            />
            <AnimatedText
              text="Building credibility through rigorous third-party validation and industry partnerships"
              className="text-xl text-gray-600 max-w-3xl mx-auto text-bold"
              delay={0.3}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: index * 0.25, type: "spring", stiffness: 70 }}
                viewport={{ once: true }}
                className="group perspective-container"
              >
                <div className="transparent-card premium-shadow rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 transform-card protruding-image">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-black ${
                        cert.status === 'Pursuing' ? 'bg-blue-500 text-white' :
                        cert.status === 'In Progress' ? 'bg-amber-500 text-white' :
                        cert.status === 'Applying' ? 'bg-purple-500 text-white' :
                        'bg-green-500 text-white'
                      }`}>
                        {cert.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-xl font-black text-black">{cert.title}</h3>
                    </div>
                    <p className="text-gray-700 text-bold leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-green-600 rounded-2xl p-12 text-white text-center premium-shadow">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="h-12 w-12 text-green-300 mr-4" />
                <h3 className="text-3xl md:text-4xl font-black">Integrity First</h3>
              </div>
              <p className="text-lg text-bold leading-relaxed max-w-3xl mx-auto">
                We believe transparency builds trust. Every claim we make is backed by rigorous testing, 
                third-party validation, and scientific evidence. Our pursuit of certifications isn't just 
                about credentials – it's about ensuring our solution delivers the environmental impact we promise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Commitment */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              <AnimatedText
                text="Our Promise to the Future"
                className="text-4xl md:text-5xl font-black mb-12"
              />
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Continuous Innovation",
                  description: "Relentlessly improving our technology to maximize environmental impact while maintaining superior performance."
                },
                {
                  title: "Transparent Reporting",
                  description: "Publishing regular impact reports with verified data on environmental benefits and biodegradation rates."
                },
                {
                  title: "Partnerships",
                  description: "Working with industry leaders, environmental organizations, and research institutions to scale sustainable solutions."
                }
              ].map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: "spring",
                    bounce: 0.3
                  }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 premium-shadow"
                >
                  <h4 className="text-xl font-black mb-4 text-green-300">{commitment.title}</h4>
                  <p className="text-white/90 text-bold leading-relaxed">{commitment.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurCommitment;
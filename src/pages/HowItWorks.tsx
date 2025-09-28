import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Sprout, ChevronRight, Droplets, Scaling as Seedling } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Bio-Based Foundation",
      subtitle: "PLA Coating & Cellulose Base",
      description: "We start with a biodegradable cellulose base derived from plant fibers, then apply a thin coating of PLA (Polylactic Acid) made from corn starch. This combination provides the barrier properties needed for protection while ensuring complete biodegradability.",
      icon: Leaf,
      image: "/bio-based foundation.jpg",
      color: "green"
    },
    {
      id: 2,
      title: "Biochar Integration",
      subtitle: "Strength from Agricultural Waste",
      description: "We incorporate biochar – a charcoal-like material made from agricultural waste – which significantly strengthens the bubble wrap while creating a nutrient-rich medium. When ground into fine powder and mixed with our base materials, biochar enhances both durability and soil enrichment properties.",
      icon: Recycle,
      image: "/biochar integration.jpg",
      color: "amber"
    },
    {
      id: 3,
      title: "Nutrient Enhancement",
      subtitle: "Providing a safe Foundation",
      description: "Organic Fertilizers are mixed inside the bubble wrap, infused with nitrogen to lay a safe foundation for the growth of plant",
      icon: Droplets,
      image: "/nutrient enhancement.jpg",
      color: "blue"
    },
    {
      id: 4,
      title: "Life Transformation",
      subtitle: "From Waste to Wonder",
      description: "Once planted in soil, our Bloomwrap begins its remarkable transformation. Within 30-60 days, the biodegradable materials break down completely while embedded seeds germinate and grow into thriving plants. What was once packaging waste becomes a living contribution to your garden, creating oxygen, sequestering carbon, and providing habitat for beneficial insects.",
      icon: Seedling,
      image: "/life trandformation.jpg",
      color: "green"
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
              text="How It Works"
              className="text-5xl md:text-6xl font-black text-black mb-8"
            />
            <AnimatedText
              text="The revolutionary Bloomwrap technology turning packaging waste into plant life"
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-bold"
              delay={0.5}
            />
          </motion.div>
        </div>
      </section>

      {/* Technology Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: index * 0.3, type: "spring", stiffness: 60 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-8">
                    <div className={`bg-${step.color}-100 p-4 rounded-full mr-6`}>
                      <step.icon className={`h-10 w-10 text-${step.color}-600`} />
                    </div>
                    <div>
                      <div className={`text-sm font-black text-${step.color}-600 tracking-wide uppercase mb-2`}>
                        Step {step.id}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-black">
                        {step.title}
                      </h2>
                      <p className={`text-lg font-black text-${step.color}-700 mt-2`}>
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 text-bold leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Technical Details */}
                  <div className={`transparent-card border-l-4 border-${step.color}-500 premium-shadow rounded-2xl p-8`}>
                    <h3 className="text-xl font-black text-black mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {step.id === 1 && (
                        <>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                            PLA provides excellent barrier properties and flexibility
                          </li>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                            Cellulose base offers structural integrity and biodegradability
                          </li>
                        </>
                      )}
                      {step.id === 2 && (
                        <>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-amber-500 mr-2" />
                            Enhanced structural strength
                          </li>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-amber-500 mr-2" />
                            Carbon sequestration
                          </li>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-amber-500 mr-2" />
                            Soil enrichment properties
                          </li>
                        </>
                      )}
                      {step.id === 3 && (
                        <>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                            Safe nutrient foundation for plant growth
                          </li>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                            Nitrogen-infused organic fertilizers
                          </li>
                        </>
                      )}
                      {step.id === 4 && (
                        <>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                            Complete biodegradation within 30-60 days
                          </li>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                            Seeds germinate into thriving plant life
                          </li>
                          <li className="flex items-center text-gray-700 text-bold">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                            Creates measurable environmental benefits
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>

                <div className={`relative perspective-container ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.08, rotateY: 5, rotateX: -5 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative overflow-hidden rounded-2xl protruding-image transform-card"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-96 object-cover premium-shadow"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${step.color}-900/30 to-transparent`}></div>
                  </motion.div>

                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 -left-4 bg-${step.color}-500 text-white w-16 h-16 rounded-full flex items-center justify-center premium-shadow`}>
                    <span className="text-2xl font-black">{step.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Appeal Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-16">
              <AnimatedText
                text="Revolutionary Technology"
                className="text-4xl md:text-5xl font-black text-black mb-8"
              />
              
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 text-left">
                <div className="bg-white rounded-2xl p-8 premium-shadow border-l-4 border-green-500">
                  <h3 className="text-2xl font-black text-black mb-4 flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    Breakthrough Innovation
                  </h3>
                  <p className="text-gray-700 text-bold leading-relaxed">
                    Our proprietary Bloomwrap biotechnology seamlessly integrates biodegradable polymers with embedded seeds, 
                    creating the world's first packaging that actively contributes to environmental restoration.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 premium-shadow border-l-4 border-blue-500">
                  <h3 className="text-2xl font-black text-black mb-4 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Recycle className="h-6 w-6 text-blue-600" />
                    </div>
                    Proven Performance
                  </h3>
                  <p className="text-gray-700 text-bold leading-relaxed">
                    Rigorous testing confirms our Bloomwrap solution matches traditional bubble wrap's protective capabilities 
                    while achieving complete biodegradation within 90 days under standard composting conditions.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white premium-shadow">
                  <h3 className="text-2xl font-black mb-6">Measurable Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-green-100 text-bold">Carbon Sequestration</span>
                      <span className="text-2xl font-black">+15%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-100 text-bold">Biodegradation Rate</span>
                      <span className="text-2xl font-black">30-60 Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-100 text-bold">Plastic Waste Reduction</span>
                      <span className="text-2xl font-black">100%</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 premium-shadow">
                  <Sprout className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 border border-green-200">
              <h3 className="text-3xl font-black text-black mb-6">The Future of Packaging</h3>
              
              <p className="text-xl text-green-700 font-black mb-6">
                "We're not just solving a packaging problem – we're creating measurable environmental 
                benefits that businesses and consumers can see, feel, and grow."
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-green-600 mb-2">Zero</div>
                  <p className="text-gray-700 text-bold">Plastic Waste</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-600 mb-2">100%</div>
                  <p className="text-gray-700 text-bold">Biodegradable</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-600 mb-2">∞</div>
                  <p className="text-gray-700 text-bold">Environmental Impact</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
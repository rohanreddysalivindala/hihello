import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Recycle, Sprout, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Plants growing from soil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-8">
              <Sprout className="h-5 w-5 text-green-300 mr-2" />
              <span className="text-white text-bold text-sm tracking-wide">Revolutionary Sustainable Packaging</span>
            </div>
            
        <AnimatedText
  text="Protect Your Package,"
  className="text-5xl md:text-7xl font-black text-white mb-2 leading-tight text-shadow"
  delay={0.5}
/>
<AnimatedText
  text="Plant The Future."
  className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight text-shadow"
  delay={1}
/>
            
            <AnimatedText
              text="Transforming e-commerce packaging from a plastic plague into greenery."
              className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto text-bold"
              delay={1.2}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/how-it-works"
              className="group bg-white text-green-700 px-8 py-4 rounded-full font-black text-lg hover:bg-green-50 transition-all duration-300 premium-shadow hover:shadow-3xl transform hover:-translate-y-1 flex items-center"
            >
              Explore Our Product
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/about"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-black text-lg hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center"
            >
              Learn Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-1 h-16 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-white rounded-full"
              animate={{ height: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Emotional Connection Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <AnimatedText
  text="From Plastic Waste to Living Gardens"
  className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight whitespace-nowrap"
/>
              
              <div className="space-y-6 text-lg text-gray-700 text-bold">
                <p>
                  Imagine the profound satisfaction of knowing that your everyday purchase doesn't contribute to the growing mountain of plastic waste. Instead, it becomes the foundation for new life.
                </p>
                
                <p>
                  Every package you receive wrapped in our plantable bubble wrap carries the seed of transformation – literally. What was once destined for a landfill becomes a thriving plant in your garden, a living testament to your commitment to our planet.
                </p>
                
                <p className="text-green-600 font-black text-xl">
                  Feel the joy of planting hope. Experience the relief of responsibility fulfilled.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center mt-8 bg-green-600 text-white px-8 py-4 rounded-full font-black hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 premium-shadow"
              >
                Discover the Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative perspective-container"
            >
              <div className="relative">
                {/* Landfill to Garden Transformation */}
                <div className="grid grid-cols-1 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                    className="relative overflow-hidden rounded-2xl premium-shadow transform hover:shadow-3xl transition-all duration-500 protruding-image transform-card"
                  >
                    <img
                      src="https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Plastic waste pollution"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-white font-black text-xl mb-2">The Problem We Face</h3>
                        <p className="text-gray-200 text-bold">Mountains of plastic waste choking our planet</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -2 }}
                    className="relative overflow-hidden rounded-2xl premium-shadow transform hover:shadow-3xl transition-all duration-500 protruding-image transform-card"
                  >
                    <img
                      src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Green plants growing"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-white font-black text-xl mb-2">The Solution We Provide</h3>
                        <p className="text-green-100 text-bold">New life sprouting from sustainable packaging</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Transformation Arrow */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 premium-shadow border-4 border-green-500"
                >
                  <ArrowRight className="h-8 w-8 text-green-600 rotate-90" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
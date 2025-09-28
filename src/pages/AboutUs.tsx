import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Lightbulb, Target, AlertTriangle } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const AboutUs: React.FC = () => {
  const plasticStats = [
    {
      icon: Globe,
      stat: "8.3 Billion",
      description: "Tons of plastic produced since the 1950s",
      image: "https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Target,
      stat: "400 Years",
      description: "Time for plastic bubble wrap to decompose",
      image: "https://images.pexels.com/photos/3737552/pexels-photo-3737552.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: AlertTriangle,
      stat: "14 Million",
      description: "Tons of plastic enter oceans annually",
      image: "https://images.pexels.com/photos/1029302/pexels-photo-1029302.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText
              text="Our Story"
              className="text-5xl md:text-6xl font-black text-black mb-8"
            />
            <AnimatedText
              text="Born from the urgent need to transform how we think about packaging waste"
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-bold"
              delay={0.5}
            />
          </motion.div>
        </div>
      </section>

      {/* Our Why Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.5, type: "spring", damping: 20 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-black">Why We Started</h2>
              </div>

              <div className="space-y-6 text-lg text-gray-700 text-bold">
                <p>
                  Every day, millions of packages arrive at doorsteps wrapped in plastic bubble wrap that will outlive us all. We watched as the convenience of online shopping created an environmental crisis that demanded immediate action.
                </p>
                <p>
                  We envisioned a world where every delivered package could contribute to healing our planet instead of harming it.
                </p>
                <p className="text-green-600 font-black text-xl">
                  At Desmos, we didn't just want to reduce harm – we wanted to create positive environmental impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="relative perspective-container"
            >
              <div className="transform-card protruding-image">
                <img
                  src="/why we starrted.jpg"
                  alt="Environmental research team"
                  className="rounded-2xl premium-shadow w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Plastic Plague Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <AnimatedText
              text="The Plastic Plague"
              className="text-4xl md:text-5xl font-black mb-8 text-white"
            />
            <AnimatedText
              text="The shocking reality of e-commerce packaging waste"
              className="text-xl text-gray-600 max-w-3xl mx-auto text-bold italic"
              delay={0.3}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plasticStats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: index * 0.3, type: "spring", stiffness: 80 }}
                viewport={{ once: true }}
                className="relative group perspective-container"
              >
                <div className="relative overflow-hidden rounded-2xl transform-card protruding-image">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="bg-red-500 p-3 rounded-full w-fit mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-red-400 mb-2">{item.stat}</h3>
                    <p className="text-white text-bold">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

      {/* Landfill to Garden Transformation */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  viewport={{ once: true }}
  className="text-center"
>
  <div className="transparent-card premium-border rounded-2xl p-12 max-w-6xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-black text-red-400 mb-8">
      The Devastating Impact
    </h3>

    {/* Row 1: Image (left) + Text (right) */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative group perspective-container">
        <div className="landfill-transition protruding-image transform-card relative">
          <img
            src="https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Plastic waste landfill"
            className="w-full h-64 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-red-900/30 rounded-xl"></div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-black">
              Current Reality
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-black text-dark green">From Despair...</h4>
        <p className="text-black leading-relaxed">
          Millions of tons of plastic packaging waste accumulate in landfills and oceans,
          taking centuries to decompose while releasing harmful toxins into our environment.
        </p>
      </div>
    </div>

    {/* Divider / transition */}
    <div className="my-12 flex justify-center">
      <div className="bg-gradient-to-r from-red-500 to-green-500 h-1 w-32 rounded-full relative">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-0 h-0 border-l-4 border-l-green-500 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
      </div>
    </div>

    {/* Row 2: Text (left) + Image (right) */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-4 md:order-2">
        <h4 className="text-xl font-black text-dark chocolate-300">...To Delight</h4>
        <p className="text-gray-800 leading-relaxed">
          Experience the profound joy of transformation as your packaging becomes
          thriving plant life, contributing to a greener, more sustainable future.
        </p>
      </div>

      <div className="relative group perspective-container md:order-1">
        <div className="protruding-image transform-card relative">
          <img
            src="/to delight.jpg"
            alt="Thriving plant life"
            className="w-full h-64 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-green-900/20 rounded-xl"></div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-black">
              Our Solution
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</motion.div>

        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Happy people with plants"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-emerald-50/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              <AnimatedText
                text="The Joy of Transformation"
                className="text-4xl md:text-5xl font-black text-black mb-8"
              />
              <AnimatedText
                text="Experience the profound satisfaction of turning waste into life"
                className="text-xl text-gray-600 max-w-3xl mx-auto text-bold"
                delay={0.3}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center relative z-10"
          >
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-black mb-4">Feel the Joy</h3>
                  <p className="text-lg text-gray-700 text-bold">
                    Imagine the profound satisfaction of knowing that your everyday purchase doesn't contribute to the growing mountain of plastic waste. Instead, it becomes the foundation for new life.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-black mb-4">Experience the Relief</h3>
                  <p className="text-lg text-gray-700 text-bold">
                    Every package you receive wrapped in our plantable bubble wrap carries the seed of transformation – literally. What was once destined for a landfill becomes a thriving plant in your garden.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-black mb-4">Plant Hope</h3>
                  <p className="text-lg text-gray-700 text-bold">
                    Feel the joy of planting hope. Experience the relief of responsibility fulfilled. This isn't just about reducing waste – it's about creating life and nurturing growth with Bloomwrap.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative perspective-container"
            >
              <div className="relative transform-card protruding-image">
                <img
                  src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Plants growing from soil"
                  className="rounded-2xl premium-shadow w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-green-500 text-white p-4 rounded-full premium-shadow animate-pulse-slow">
                  <span className="text-sm font-black">100% Biodegradable</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
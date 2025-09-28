import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, Building, User } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div>
            <AnimatedText
              text="Contact Us"
              className="text-5xl md:text-6xl font-black text-black mb-8"
            />
            <AnimatedText
              text="Ready to transform your packaging into a force for environmental good?"
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-bold"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="lg:sticky lg:top-32"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                    Let's Plant the Future Together
                  </h2>
                  <p className="text-lg text-gray-700 text-bold leading-relaxed mb-8">
                    Whether you're a business looking to transform your packaging, a journalist seeking insights, 
                    or simply curious about our sustainable solution, we're here to help you discover how 
                    Desmos Green's Bloomwrap can revolutionize your environmental impact.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Building className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black">Business Inquiries</h3>
                      <p className="text-gray-600 text-bold">Partnership opportunities, bulk orders, custom solutions</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black">Press & Media</h3>
                      <p className="text-gray-600 text-bold">Interviews, press releases, sustainability stories</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <User className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black">General Questions</h3>
                      <p className="text-gray-600 text-bold">Product information, sustainability details</p>
                    </div>
                  </div>
                </div>

                {/* Emotional Appeal */}
                <div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-green-500"
                >
                  <h3 className="text-xl font-black text-black mb-4">
                    Join the Packaging Revolution
                  </h3>
                  <p className="text-gray-700 text-bold leading-relaxed">
                    Every conversation we have is a step toward a world where packaging contributes to 
                    environmental healing rather than harm. Reach out today and be part of the transformation 
                    from plastic waste to thriving plant life.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* Email Contact */}
            <div>
              <div className="transparent-card premium-shadow rounded-2xl p-12 text-center">
                <div className="bg-green-100 p-6 rounded-full w-fit mx-auto mb-8">
                  <Mail className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-black mb-6">Get In Touch</h3>
                <p className="text-lg text-gray-700 text-bold mb-8">
                  Ready to transform your packaging into a force for environmental good? 
                  Reach out to us directly.
                </p>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <p className="text-sm font-black text-green-700 mb-2">Email Us At</p>
                  <a 
                    href="mailto:desmosgreen@gmail.com"
                    className="text-2xl font-black text-green-600 hover:text-green-700 transition-colors duration-300"
                  >
                    desmosgreen@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
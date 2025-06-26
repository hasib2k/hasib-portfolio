import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Hasib Ahmed',
  description: 'Get in touch with Hasib Ahmed for software development opportunities, collaborations, or just to say hello.'
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{backgroundColor: '#104F8F'}}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you want to work together or just say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm based in Bangladesh and available for both remote and on-site opportunities. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a 
                href="mailto:hasibahmed.ig@gmail.com"
                className="flex items-center gap-6 p-6 rounded-xl transition-colors group hover:opacity-90"
                style={{backgroundColor: '#B7C9E2'}}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor: '#104F8F'}}>
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Email</h3>
                  <p className="font-medium" style={{color: '#104F8F'}}>hasibahmed.ig@gmail.com</p>
                  <p className="text-sm" style={{color: '#104F8F'}}>Best way to reach me</p>
                </div>
              </a>

              <a 
                href="tel:+918910171611"
                className="flex items-center gap-6 p-6 rounded-xl transition-colors group hover:opacity-90"
                style={{backgroundColor: '#B7C9E2'}}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor: '#104F8F'}}>
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Phone</h3>
                  <p className="font-medium" style={{color: '#104F8F'}}>+880 170 6776 711</p>
                  <p className="text-sm" style={{color: '#104F8F'}}>Available 9 AM - 8 PM </p>
                </div>
              </a>

              <a 
                href="https://t.me/hasib_ig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 rounded-xl transition-colors group hover:opacity-90"
                style={{backgroundColor: '#B7C9E2'}}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor: '#104F8F'}}>
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Telegram</h3>
                  <p className="font-medium" style={{color: '#104F8F'}}>@hasib_ig</p>
                  <p className="text-sm" style={{color: '#104F8F'}}>Quick messaging</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 bg-orange-50 rounded-xl">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-orange-600 font-medium">Bangladesh</p>
                  <p className="text-gray-600 text-sm">Open to remote work worldwide</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Current Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Available for new projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Interested in freelance work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h2>
              <div className="w-16 h-1 mx-auto" style={{backgroundColor: '#104F8F'}}></div>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="freelance-project">Freelance Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Budget (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-plus">$25,000+</option>
                  <option value="ongoing">Ongoing/Salary Position</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                I'll get back to you within 24-48 hours.
              </p>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 mx-auto mb-6" style={{backgroundColor: '#104F8F'}}></div>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#104F8F'}}></div>
                  What is your typical response time?
                </h3>
                <p className="text-gray-600">
                  I usually respond to emails within 24-48 hours. For urgent matters, 
                  feel free to call or send a message on Telegram.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Do you work with international clients?
                </h3>
                <p className="text-gray-600">
                  Yes! I work with clients worldwide and am comfortable with different 
                  time zones. I'm flexible with meeting schedules.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  What types of projects do you take on?
                </h3>
                <p className="text-gray-600">
                  I specialize in web development projects including React/Next.js applications, 
                  full-stack solutions, and custom web platforms.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  What is your availability?
                </h3>
                <p className="text-gray-600">
                  I'm currently available for new projects and can start immediately. 
                  I'm open to both short-term and long-term engagements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-600">
                  Yes, I offer maintenance and support packages for all projects. 
                  I believe in building long-term relationships with my clients.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Can you work with my existing team?
                </h3>
                <p className="text-gray-600">
                  Absolutely! I enjoy collaborating with teams and can adapt to 
                  your existing workflows and development processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

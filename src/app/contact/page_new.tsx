import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Hasib Ahmed',
  description: 'Get in touch with Hasib Ahmed for software development opportunities, collaborations, or just to say hello.'
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#104F8F'}}>
              Get In <span style={{color: '#104F8F'}}>Touch</span>
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#104F8F'}}></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you want to work together or just say hello, I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  I&apos;m based in Bangladesh and available for both remote and on-site opportunities. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a 
                  href="mailto:hasibahmed.ig@gmail.com"
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Email</h3>
                    <p className="font-medium text-gray-700">hasibahmed.ig@gmail.com</p>
                    <p className="text-sm text-gray-500">Best way to reach me</p>
                  </div>
                </a>

                <a 
                  href="tel:+8801706776711"
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Phone</h3>
                    <p className="font-medium text-gray-700">+880 170 6776 711</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 8 PM</p>
                  </div>
                </a>

                <a 
                  href="https://t.me/hasib_ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Telegram</h3>
                    <p className="font-medium text-gray-700">@hasib_ig</p>
                    <p className="text-sm text-gray-500">Quick messaging</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-xl">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Location</h3>
                    <p className="font-medium text-gray-700">Bangladesh</p>
                    <p className="text-sm text-gray-500">Open to remote work worldwide</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" style={{color: '#104F8F'}} />
                  Current Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="px-3 py-1 text-sm font-medium rounded-lg" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                      Available for Projects
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Response Time</span>
                    <span className="text-gray-700 font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Timezone</span>
                    <span className="text-gray-700 font-medium">GMT+6 (Bangladesh)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6" style={{color: '#104F8F'}}>Send a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
                  style={{backgroundColor: '#104F8F'}}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#104F8F'}}>
              Frequently Asked <span style={{color: '#104F8F'}}>Questions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>
                  What services do you offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I specialize in full-stack web development using modern technologies like React, Next.js, Node.js, 
                  and TypeScript. I also provide API development, database design, and consultation services.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>
                  What&apos;s your typical project timeline?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Project timelines vary based on complexity and requirements. Small projects typically take 2-4 weeks, 
                  while larger applications can take 2-6 months. I&apos;ll provide a detailed timeline after discussing your needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>
                  Do you work with international clients?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! I work with clients worldwide and am comfortable with remote collaboration. I&apos;m flexible 
                  with meeting times to accommodate different time zones.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>
                  How do you handle project communication?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe in transparent communication throughout the project. I provide regular updates, 
                  use project management tools, and am available for calls/meetings as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

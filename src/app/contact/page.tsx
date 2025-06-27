'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react'

// FAQ Item Component with smooth dropdown
function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}) {
  return (
    <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300" style={{borderColor: '#B7C9E2'}}>
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between focus:outline-none rounded-2xl transition-all duration-200"
      >
        <h3 className="text-xl font-semibold" style={{color: '#104F8F'}}>
          {question}
        </h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 transition-transform duration-300" style={{color: '#104F8F'}} />
          ) : (
            <ChevronDown className="w-6 h-6 transition-transform duration-300" style={{color: '#104F8F'}} />
          )}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6">
          <div className="w-full h-px mb-4" style={{backgroundColor: '#B7C9E2', opacity: 0.3}}></div>
          <p className="leading-relaxed" style={{color: '#104F8F'}}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What QA and frontend services do you offer?",
      answer: "I specialize in comprehensive software quality assurance including manual testing, automated testing, API testing, and performance testing. Additionally, I provide frontend development services using React, JavaScript, and modern web technologies with thorough testing coverage."
    },
    {
      question: "What's your typical testing and development timeline?",
      answer: "Testing timelines vary based on project complexity. Simple applications typically require 1-2 weeks for comprehensive testing, while larger applications may need 3-8 weeks. Frontend development projects usually take 2-6 weeks depending on requirements and testing coverage."
    },
    {
      question: "Do you work with international clients for QA projects?",
      answer: "Yes! I work with clients worldwide and am experienced in remote QA collaboration. I'm flexible with meeting times to accommodate different time zones and can adapt to various testing methodologies and reporting requirements."
    },
    {
      question: "How do you handle QA reporting and communication?",
      answer: "I believe in transparent communication throughout the QA process. I provide detailed bug reports, testing progress updates, use industry-standard tools like JIRA for tracking, and am available for regular standups and review meetings as needed."
    }
  ]

  const handleFAQToggle = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

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
            <p className="text-xl max-w-3xl mx-auto mt-6 leading-relaxed" style={{color: '#104F8F'}}>
              I&apos;m always interested in new QA opportunities and exciting frontend projects. 
              Whether you need quality assurance expertise or frontend development, I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{color: '#104F8F'}}>Let&apos;s Connect</h2>
                <p className="text-lg mb-8 leading-relaxed" style={{color: '#104F8F'}}>
                  I&apos;m based in Bangladesh and available for both remote and on-site QA and frontend development opportunities. 
                  Feel free to reach out through any of the channels below for testing or development projects.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a 
                  href="mailto:hasibahmed.ig@gmail.com"
                  className="flex items-center gap-6 p-6 rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{borderColor: '#B7C9E2'}}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Email</h3>
                    <p className="font-medium" style={{color: '#104F8F'}}>hasibahmed.ig@gmail.com</p>
                    <p className="text-sm" style={{color: '#104F8F'}}>Best way to reach me</p>
                  </div>
                </a>

                <a 
                  href="tel:+8801706776711"
                  className="flex items-center gap-6 p-6 rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{borderColor: '#B7C9E2'}}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Phone</h3>
                    <p className="font-medium" style={{color: '#104F8F'}}>+880 170 6776 711</p>
                    <p className="text-sm" style={{color: '#104F8F'}}>Available 9 AM - 8 PM</p>
                  </div>
                </a>

                <a 
                  href="https://t.me/hasib_ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{borderColor: '#B7C9E2'}}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Telegram</h3>
                    <p className="font-medium" style={{color: '#104F8F'}}>@hasib_ig</p>
                    <p className="text-sm" style={{color: '#104F8F'}}>Quick messaging</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Location</h3>
                    <p className="font-medium" style={{color: '#104F8F'}}>Bangladesh</p>
                    <p className="text-sm" style={{color: '#104F8F'}}>Open to remote work worldwide</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-6" style={{borderColor: '#B7C9E2'}}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{color: '#104F8F'}}>
                  <Clock className="w-5 h-5" style={{color: '#104F8F'}} />
                  Current Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span style={{color: '#104F8F'}}>Status</span>
                    <span className="px-3 py-1 text-sm font-medium rounded-lg" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                      Available for Projects
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: '#104F8F'}}>Response Time</span>
                    <span className="font-medium" style={{color: '#104F8F'}}>Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: '#104F8F'}}>Timezone</span>
                    <span className="font-medium" style={{color: '#104F8F'}}>GMT+6 (Bangladesh)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8" style={{borderColor: '#B7C9E2'}}>
              <h2 className="text-3xl font-bold mb-6" style={{color: '#104F8F'}}>Send a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: '#104F8F'}}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors"
                      style={{borderColor: '#B7C9E2', color: '#104F8F'}}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: '#104F8F'}}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors"
                      style={{borderColor: '#B7C9E2', color: '#104F8F'}}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{color: '#104F8F'}}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors"
                    style={{borderColor: '#B7C9E2', color: '#104F8F'}}
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: '#104F8F'}}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors resize-none"
                    style={{borderColor: '#B7C9E2', color: '#104F8F'}}
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
            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQIndex === index}
                  onToggle={() => handleFAQToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

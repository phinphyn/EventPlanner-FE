"use client"
import { motion } from "framer-motion"

function CallToAction() {
  return (
    <section className="py-16">
      <motion.div
        className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="md:flex">
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Plan Your Event?</h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to schedule a tour of Gazer Diamond Palace and start planning your unforgettable event
              with our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-orange-600 font-medium rounded-md hover:bg-gray-100 transition-colors text-center"
              >
                Contact Us
              </a>
              <a
                href="/tour"
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors text-center"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/images/venue-interior.jpg"
              alt="Gazer Diamond Palace Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default CallToAction;
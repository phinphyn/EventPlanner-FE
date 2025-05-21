"use client"
import { motion } from "framer-motion"

 function OurStory() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <div className="w-20 h-1 bg-orange-500 mb-8"></div>

          <p className="text-gray-700 mb-6">
            Founded in 2015, Gazer Diamond Palace began with a simple vision: to create a space where life's most
            precious moments could be celebrated in elegance and style. What started as a small family-owned venue has
            grown into one of the region's premier event destinations.
          </p>

          <p className="text-gray-700 mb-6">
            Our journey began when the Gazer family transformed their historic property into a venue that could host
            everything from intimate gatherings to grand celebrations. With careful restoration and modern amenities, we
            preserved the building's classic charm while creating a versatile space for contemporary events.
          </p>

          <p className="text-gray-700">
            Today, Gazer Diamond Palace stands as a testament to our commitment to excellence, having hosted thousands
            of weddings, corporate events, and special celebrations that have become cherished memories for our clients
            and their guests.
          </p>
        </motion.div>

        <motion.div
          className="relative h-[500px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/images/our-story.jpg" alt="Gazer Diamond Palace History" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-white text-lg font-medium">Est. 2015</p>
            <p className="text-white/80">A Legacy of Celebration</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default OurStory;
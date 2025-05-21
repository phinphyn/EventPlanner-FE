"use client"
import { motion } from "framer-motion"

function OurServices() {
  const services = [
    {
      title: "Weddings",
      description:
        "From intimate ceremonies to grand celebrations, our wedding packages are designed to create the perfect day for every couple.",
      image: "/images/wedding-service.jpg",
    },
    {
      title: "Corporate Events",
      description:
        "Impress clients and motivate teams with our professional corporate event spaces and comprehensive business services.",
      image: "/images/corporate-service.jpg",
    },
    {
      title: "Social Gatherings",
      description:
        "Celebrate life's milestones in style, from birthday parties and anniversaries to family reunions and holiday celebrations.",
      image: "/images/social-service.jpg",
    },
    {
      title: "Conferences",
      description:
        "State-of-the-art facilities and technical support for conferences, seminars, and workshops of all sizes.",
      image: "/images/conference-service.jpg",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
        <motion.p
          className="text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Gazer Diamond Palace, we offer a comprehensive range of event services tailored to meet your specific
          needs. Our versatile spaces and experienced team can accommodate events of all types and sizes.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg h-80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
              <button className="mt-4 w-fit text-white font-medium flex items-center gap-2 group-hover:text-orange-300 transition-colors">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <a
          href="/services"
          className="inline-block px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
        >
          View All Services
        </a>
      </motion.div>
    </section>
  )
}

export default OurServices;
"use client"
import { motion } from "framer-motion"

function OurTeam() {
  const teamMembers = [
    {
      name: "Alexandra Reynolds",
      role: "Event Director",
      bio: "With over 15 years in luxury event planning, Alexandra brings creativity and precision to every celebration.",
      image: "/images/team-director.jpg",
    },
    {
      name: "Marcus Chen",
      role: "Executive Chef",
      bio: "A culinary innovator with international training, Marcus creates unforgettable dining experiences for our guests.",
      image: "/images/team-chef.jpg",
    },
    {
      name: "Sophia Williams",
      role: "Design Coordinator",
      bio: "Sophia transforms spaces with her keen eye for aesthetics and attention to the smallest details.",
      image: "/images/team-designer.jpg",
    },
    {
      name: "James Thompson",
      role: "Client Relations Manager",
      bio: "James ensures every client receives personalized attention and exceptional service throughout their journey with us.",
      image: "/images/team-manager.jpg",
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
          Meet Our Team
        </motion.h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
        <motion.p
          className="text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our dedicated team of professionals works tirelessly to ensure every event at Gazer Diamond Palace exceeds
          expectations. With diverse expertise and a shared commitment to excellence, we're here to make your vision a
          reality.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-80 overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-orange-500 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Behind these key team members is a full staff of dedicated professionals including event coordinators,
          culinary specialists, service staff, and technical experts who work together to create seamless, memorable
          events.
        </p>
        <a
          href="/team"
          className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-500 hover:text-white transition-colors"
        >
          Meet the Full Team
        </a>
      </motion.div>
    </section>
  )
}
export default OurTeam;
"use client"
import { motion } from "framer-motion"

function OurCuisine() {
  const cuisineTypes = [
    {
      name: "International",
      description: "A diverse selection of global flavors crafted with authentic techniques and ingredients.",
      image: "/images/international-cuisine.jpg",
    },
    {
      name: "Local Specialties",
      description: "Celebrating regional flavors and traditional recipes with a modern twist.",
      image: "/images/local-cuisine.jpg",
    },
    {
      name: "Vegetarian & Vegan",
      description: "Creative plant-based options that delight even the most discerning palates.",
      image: "/images/vegetarian-cuisine.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Exquisite Cuisine
          </motion.h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our culinary team creates memorable dining experiences with fresh, seasonal ingredients and artistic
            presentation. From elegant plated dinners to interactive food stations, we customize menus to match your
            event's style and your guests' preferences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cuisineTypes.map((cuisine, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={cuisine.image || "/placeholder.svg"}
                  alt={cuisine.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{cuisine.name}</h3>
                <p className="text-gray-600">{cuisine.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Customized Menus</h3>
              <p className="text-gray-700 mb-6">
                Our executive chef works closely with you to create a personalized menu that reflects your taste and
                complements your event theme. From dietary restrictions to cultural preferences, we ensure every guest
                enjoys an exceptional dining experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Seasonal and locally-sourced ingredients</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Accommodations for dietary restrictions</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Signature cocktails and beverage packages</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Menu tasting sessions for event planning</span>
                </li>
              </ul>
            </div>
            <div className="h-80 rounded-lg overflow-hidden">
              <img src="/images/chef-cooking.jpg" alt="Chef preparing food" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default OurCuisine;
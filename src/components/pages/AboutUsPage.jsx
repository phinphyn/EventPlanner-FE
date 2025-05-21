"use client"
import { motion } from "framer-motion"
import OurStory from "../AboutUsPage/OurStory"
import Experience from "../AboutUsPage/Experience"
import OurServices from "../AboutUsPage/OurServices"
import OurCuisine from "../AboutUsPage/OurCuisine"
import OurTeam from "../AboutUsPage/OurTeam"
import Testimonials from "../AboutUsPage/Testimonials"
import CallToAction from "../AboutUsPage/CallToAction"
import Layout from "../layout/Layout"

function AboutUsPage() {
  return (
    <div>
        <Layout>
        <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-hero.jpg"
            alt="Gazer Diamond Palace Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Gazer Diamond Palace
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Memorable Moments Come to Life
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <OurStory />
        <Experience />
        <OurServices />
        <OurCuisine />
        <OurTeam />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
    </Layout>
</div>
  )
}

export default AboutUsPage;
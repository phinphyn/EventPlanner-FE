import React from "react";
import { Button } from "@/components/ui/button";

function HeroSection() {
    return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
     style={{
     backgroundImage: 'url("/images/venue-interior.jpg")',
    backgroundSize: "cover",
     backgroundColor: "#9e9e9e", // Fallback color
}}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold max-w-5xl mx-auto leading-tight">
          Elegant Events at Gazer Diamond Palace
        </h1>

        <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
          The perfect venue for weddings, corporate events, and celebrations
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg" className="text-lg font-medium">
            Explore Venue
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg font-medium bg-transparent border-white text-white hover:bg-white/20"
          >
            Book a Tour
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col items-end">
        <div className="bg-orange-500 text-white p-3 rounded-full mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <span className="text-white font-medium">02923 684 999</span>
      </div>
    </section>
  )
}
export default HeroSection;

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function HomeBody() {
  const events = [
    {
      title: "Weddings",
      image: "/images/wedding.jpg",
      description:
        "Create unforgettable memories in our stunning venue with customizable packages for your special day.",
    },
    {
      title: "Corporate Events",
      image: "/images/corporate.jpg",
      description: "Impress your clients and team with our state-of-the-art facilities and professional services.",
    },
    {
      title: "Social Celebrations",
      image: "/images/celebration.jpg",
      description:
        "From birthdays to anniversaries, our venue provides the perfect backdrop for your milestone celebrations.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exceptional Events for Every Occasion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the perfect setting for your next event at Gazer Diamond Palace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                {/* Replace with actual images in production */}
                <div className="relative h-full w-full">
                  <img
                    src={`/placeholder.svg?height=300&width=500`}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link to={`/services#${event.title.toLowerCase().replace(" ", "-")}`}>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services">
            <Button variant="primary" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeBody;
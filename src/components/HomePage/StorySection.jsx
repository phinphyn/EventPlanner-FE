function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            {/* Replace with actual image in production */}
            <div className="relative h-full w-full">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Gazer Diamond Palace History"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2025, Gazer Diamond Palace was born from a vision to create the most elegant and versatile
                event venue in the city. Our founder, inspired by classical architecture and modern luxury, designed a
                space that would become synonymous with unforgettable celebrations.
              </p>
              <p>
                What began as a dream has evolved into the premier destination for weddings, corporate gatherings, and
                social events. Our commitment to excellence and attention to detail has earned us a reputation as the
                venue of choice for those seeking an extraordinary experience.
              </p>
              <p>
                Today, Gazer Diamond Palace stands as a testament to timeless elegance and contemporary service. Our
                dedicated team continues to uphold the values upon which we were founded: exceptional quality,
                personalized service, and creating moments that last a lifetime.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center border-2 border-white">
                  <span className="text-orange-500 font-bold">JD</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center border-2 border-white">
                  <span className="text-orange-500 font-bold">MK</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center border-2 border-white">
                  <span className="text-orange-500 font-bold">AL</span>
                </div>
              </div>
              <p className="text-gray-600">Our leadership team with over 30 years of combined experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection;
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO</div>
        <nav>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Your Vision, Our Craft</h1>
        <p className="text-xl mb-8">We bring stories to life through video production</p>
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold">
          Get Started
        </button>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold mb-10">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative aspect-video">
              <Image
                src={`/placeholder.svg?height=200&width=300`}
                alt={`Project ${item}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={`/placeholder.svg?height=160&width=160`}
                  alt={`Team Member ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-400">Video Producer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Pre-Production', 'Production', 'Post-Production'].map((service) => (
            <div key={service} className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{service}</h3>
              <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="text-yellow-500 flex items-center">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Name" className="bg-gray-800 rounded-lg px-4 py-2" />
            <input type="email" placeholder="Email" className="bg-gray-800 rounded-lg px-4 py-2" />
          </div>
          <textarea placeholder="Message" rows={6} className="w-full bg-gray-800 rounded-lg px-4 py-2 mb-6"></textarea>
          <button type="submit" className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-6 text-center text-gray-400">
        <p>&copy; 2024 Your Video Production Company. All rights reserved.</p>
      </footer>
    </div>
  )
}
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Golfer",
    content:
      "The elite fitness training program transformed my game. I've never felt stronger or more confident on the course.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a5HP1MSY03NaVKN8xmJ2lkRRf8eBGr.png",
  },
  {
    name: "Emily Davis",
    role: "Amateur Golfer",
    content:
      "I've seen incredible improvements in my swing power and overall endurance. This program is a game-changer!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xD2SayTNrvf6jCTTEOYiJA8ZDrOV4W.png",
  },
  {
    name: "Lisa Thompson",
    role: "Golf Instructor",
    content:
      "As a golf instructor, I highly recommend this program to all my students. The results speak for themselves.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LhQApnMrGHJ1HUjynYFeDjKJEGs3CU.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="container py-24 relative bg-gray-50">
      <motion.div
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-gray-900">
          Success Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
          Hear from our clients who have transformed their game through our elite fitness programs
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <blockquote className="text-gray-700 mb-4">"{testimonial.content}"</blockquote>
                <div className="mt-auto">
                  <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


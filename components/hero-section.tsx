import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container relative py-24 md:py-32 bg-white">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-lg bg-[#008080]/10 px-3 py-1 text-sm text-[#008080]">
            🏆 Trusted by Professional Athletes
            <Star className="ml-1 h-3 w-3 fill-current text-[#008080]" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
            Transform Your Game Through <span className="text-[#008080] block">Elite Fitness Training</span>
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl">
            Unlock your full potential with our specialized golf fitness programs. Enhance power, flexibility, and
            precision in your game.
          </p>
          <motion.div
            className="flex flex-col gap-4 min-[400px]:flex-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="bg-[#008080] hover:bg-[#006666] text-white">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="group">
              View Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <div className="mt-8 flex items-center gap-6 text-sm">
            {" "}
            {/* Updated gap */}
            <div className="flex -space-x-4">
              {" "}
              {/* Updated space-x */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a5HP1MSY03NaVKN8xmJ2lkRRf8eBGr.png"
                alt="Client 1"
                className="inline-block h-12 w-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xD2SayTNrvf6jCTTEOYiJA8ZDrOV4W.png"
                alt="Client 2"
                className="inline-block h-12 w-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LhQApnMrGHJ1HUjynYFeDjKJEGs3CU.png"
                alt="Client 3"
                className="inline-block h-12 w-12 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="font-medium text-gray-700">
              Join <span className="text-[#008080]">200+</span> athletes who transformed their game
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative lg:ml-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yiPAAtnnMN5Mo7NsW0AI0Cqx6ZMTOo.png"
              alt="Golf fitness training"
              className="rounded-lg object-cover shadow-xl"
              width={600}
              height={400}
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="font-medium text-gray-800">5.0 Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


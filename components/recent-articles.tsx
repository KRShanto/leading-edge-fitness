"use client"

import React, { useRef, useEffect } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Creating Super Speed in Golf",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6fmBdghadf93ArVIhRpinW90XuZGim.png",
  },
  {
    title: "Improve Your Swing Speed and Your Golf Game",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZVVATSRbNJ6nCEkt9b6i7ok0fZKIfi.png",
  },
  {
    title: "What Goes Into A Great Functional Workout",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kXGM9uEQLltClfsYkfVRx0Thu7TwbC.png",
  },
  {
    title: "Starting A New Routine In The New Year!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VsOULuuhRpOOQynYyyU2Ru1ngv4n7x.png",
  },
  {
    title: "Best Season To Train For Golf",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F04pHwXFAnL97jxxeWJC9ghXxcdJEU.png",
  },
  {
    title: "How Can I Improve My Hip Turn?",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJoSC4MQlTc3sEm6gN1W3vl2bd34WO.png",
  },
  {
    title: "Creating Upper and Lower Body Separation Improves Distance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i8QARDI7kYvb7ZCmZUGdtVAKgaDMIm.png",
  },
  {
    title: "Bigger Swings and Healthier Shoulders Make Golf More Fun",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eXmEsj9O09pBaEaFIFtVzgHvxIZsrH.png",
  },
  {
    title: "Stretching For Better Golf",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZMRTKR5mJfK69iaL2jv1ayzMBWEbQI.png",
  },
  {
    title: "Why Does My Back Hurt When I Play Golf?",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AavwfKGIDhQZKueHCfSgJcMuSCVQHX.png",
  },
]

export function RecentArticles() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const slideWidth = 320 // width + gap
  const visibleSlides = 4

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(autoScroll)
  }, []) // Removed currentIndex from dependencies

  const nextSlide = () => {
    if (currentIndex < articles.length - visibleSlides) {
      setCurrentIndex((prev) => prev + 1)
      controls.start({ x: -(currentIndex + 1) * slideWidth })
    } else {
      setCurrentIndex(0)
      controls.start({ x: 0 })
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      controls.start({ x: -(currentIndex - 1) * slideWidth })
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#008080]">Recent Articles</h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[#008080]/10 hover:bg-[#008080]/20 transition-colors"
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="w-5 h-5 text-[#008080]" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[#008080]/10 hover:bg-[#008080]/20 transition-colors"
              disabled={currentIndex === articles.length - visibleSlides}
            >
              <ArrowRight className="w-5 h-5 text-[#008080]" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={containerRef}
            animate={controls}
            style={{ x }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 hover:text-[#008080] transition-colors">
                    {article.title}
                  </h3>
                  <button className="mt-3 text-sm font-medium text-[#008080] hover:underline">Read More →</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(articles.length / visibleSlides) }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / visibleSlides) === idx ? "bg-[#008080]" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentIndex(idx * visibleSlides)
                controls.start({ x: -(idx * visibleSlides) * slideWidth })
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


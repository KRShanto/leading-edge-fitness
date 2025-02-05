import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="border-t bg-muted/50">
      <div className="container py-24">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Ready to Transform Your Game?</h2>
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mt-6">
            Join our program today and experience the difference that professional golf fitness training can make.
          </p>
          <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg" className="font-bold">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


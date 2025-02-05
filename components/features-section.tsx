import { motion } from "framer-motion"
import { GlobeIcon as GolfBall, Dumbbell, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Golf-Specific Training",
    description: "Customized programs focusing on rotational power, stability, and swing mechanics.",
    icon: GolfBall,
  },
  {
    title: "Performance Analysis",
    description: "Advanced screening and assessment to identify areas for improvement.",
    icon: Activity,
  },
  {
    title: "Strength & Conditioning",
    description: "Build the physical foundation needed for a powerful, consistent game.",
    icon: Dumbbell,
  },
]

export function FeaturesSection() {
  return (
    <section className="container py-24">
      <div className="mx-auto text-center md:max-w-[58rem]">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Elevate Your Performance</h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mt-6">
          Our comprehensive approach combines cutting-edge fitness science with golf-specific training methods.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


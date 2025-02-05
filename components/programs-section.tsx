"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Zap, Activity } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    title: "Golf Fitness",
    description: "Master your swing with power and precision",
    icon: Trophy,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-77TBgxMhfw7PYykGiR4l5K8kPQ10fw.png",
    details: [
      "Customized training plans for golfers",
      "Focus on core strength and rotational power",
      "Improve flexibility and balance for better swing mechanics",
      "Injury prevention techniques specific to golf",
    ],
  },
  {
    title: "Hockey Fitness",
    description: "Dominate the ice with speed and strength",
    icon: Zap,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-byLPl33ZXvEPSCI0qV2CGzcy2Tz1Ga.png",
    details: [
      "High-intensity interval training for on-ice endurance",
      "Strength training for powerful skating and shooting",
      "Agility drills to enhance quick direction changes",
      "Off-season conditioning to maintain peak performance",
    ],
  },
  {
    title: "Other Programs",
    description: "Customized training for peak performance",
    icon: Activity,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JzdbcVRWIxG00hAze1IoNOqBncV5ry.png",
    details: [
      "Personalized fitness plans for various sports",
      "Nutrition guidance to support your training goals",
      "Mental conditioning for improved focus and resilience",
      "Regular progress tracking and program adjustments",
    ],
  },
];

export function ProgramsSection() {
  return (
    <section className="container py-24 relative bg-white">
      <motion.div
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-gray-900">
          Elite Training Programs
        </h2>
        <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
          Choose your path to excellence with our specialized fitness programs
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#008080]/10 group-hover:bg-[#008080]/20 transition-colors">
                  <program.icon className="h-6 w-6 text-[#008080]" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="aspect-video w-full rounded-lg object-cover transition-transform group-hover:scale-105"
                  width={400}
                  height={225}
                />
                <p className="text-gray-600">{program.description}</p>
                <ul className="space-y-2">
                  {program.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-[#008080]" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

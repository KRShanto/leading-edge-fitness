import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { RecentArticles } from "@/components/recent-articles"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProgramsSection />
        <RecentArticles />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}


import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Brands } from "@/components/brands"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Brands />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}

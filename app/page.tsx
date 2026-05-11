//import ShiftingCountdown from '../components/CountDown'
import Hero from '@/components/Hero'
import ContentSection from '@/components/ContentSection'
import NavBar from "@/components/NavBar"  

export default function Home() {
  return (
    <>
      <NavBar />
      <main className=" w-full pt-8 md:pt-16 lg:pt-32 py-8 md:py-16 lg:py-32 px-4 md:px-8 lg:px-16">
        
        <section className="mt-8">
          <Hero />
        </section>
        <section>
          <ContentSection />
        </section>
        {/* <section>
          <ShiftingCountdown />
        </section> */}
        
      </main>
    </>
  )
}

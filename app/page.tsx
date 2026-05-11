//import ShiftingCountdown from '../components/CountDown'
import Hero from '@/components/Hero'
import ContentSection from '@/components/ContentSection'
import NavBar from "@/components/NavBar"  

export default function Home() {
  return (
    <>
      
        
        <section className="mt-8">
          <Hero />
        </section>
        <section>
          <ContentSection />
        </section>
        {/* <section>
          <ShiftingCountdown />
        </section> */}
        
      
    </>
  )
}

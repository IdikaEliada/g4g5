//import ShiftingCountdown from '../components/CountDown'
import Hero from '@/components/Hero'
import ContentSection from '@/components/ContentSection'

export default function Home() {
  return (
    <>
      <main className=" w-full py-8 md:py-16 lg:py-32 px-4 md:px-8 lg:px-16">

        <section>
          <Hero />
        </section>
        <section>
          {/* <ContentSection /> */}
        </section>
        {/* <section>
          <ShiftingCountdown />
        </section> */}
      </main>
    </>
  )
}

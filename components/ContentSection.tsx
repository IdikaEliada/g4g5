import Image from "next/image"
import { TextAnimate } from "./ui/text-animate"
import Link from "next/dist/client/link"
import { Marquee3D, MarqueeDemo } from "@/components/Marque"
import { GFGBento } from "@/components/GFGBento"
import TeamSection from "./Judges";

const ContentSection = () => {
  return (
    <>
      <section className="py-4 md:py-8 lg:py-16">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 ">
            <h2 className="mb-4 text-2xl md:3xl lg:text-4xl text-wrap-balance break-keep hyphens-none tracking-wide lg:tracking-normal font-extrabold text-gray-900 dark:text-white font-heading">
              <TextAnimate animation="slideLeft" by="character" className="break-keep hyphens-none break-normal">
                Are You Ready To Make The Leap?
              </TextAnimate>
            </h2>
            <p className="mb-4">
              This is not just another competition — it&apos;s your quantum leap from potential to power.
            </p>
            <p className="mb-4">
              GFG 5.0 brings together the brightest minds across Nigeria to compete, create, and claim their place among the next generation of industry leaders.
            </p>
            <Link
              href="/register"
              className="inline-flex font-accent py-4 items-center font-medium text-primary-600 hover:text-primary-800 "
            >
              Register
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] gap-4 mt-8">
            {/* <div className="relative w-full aspect-3/4">
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-full aspect-3/4 mt-4 lg:mt-10">
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
              fill
              className="object-cover rounded-lg"
            />
          </div> */}
            <div className="lg:hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <MarqueeDemo />
            </div>
            <div className="hidden lg:block mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <Marquee3D />
            </div>

          </div>
        </div>
      </section>
      <section className="pb-4 md:pb-8 lg:pb-16 flex justify-center items-center">
        <div className='max-w-7xl flex items-center'>
          <GFGBento />
        </div>
      </section>
      <section className="pb-4 md:pb-8 lg:pb-16 flex justify-center items-center">
        <div className='max-w-7xl flex items-center'>
          <TeamSection />
        </div>
      </section>
      <section className="pb-4 md:pb-8 lg:pb-16">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 ">
            <h2 className="mb-4 text-2xl md:3xl lg:text-4xl text-wrap-balance break-keep hyphens-none tracking-wide lg:tracking-normal font-extrabold text-gray-900 dark:text-white font-heading">
              <TextAnimate animation="slideLeft" by="character" className="break-keep hyphens-none break-normal">
                How To Contest
              </TextAnimate>
            </h2>
            <p className="mb-4">
              Register, Contest and Win a fair share of the ₦500k reward.
            </p>
            <p className="mb-4">
              Showcase your skills across multiple categories and compete for glory:
            </p>
      
            {/* Debate */}
            <Link href="/register" className="inline-flex font-accent py-2 items-center font-bold text-primary-600 hover:text-primary-800">
              Debate
            </Link>
            <p className="mb-4">
              Argue for or against motions on leadership, tech, and innovation — solo or in pairs. Timed rounds, sharp rebuttals, and a judge panel that rewards logic, delivery, and poise.
            </p>
      
            {/* Spoken Word */}
            <Link href="/register" className="inline-flex font-accent py-2 items-center font-bold text-primary-600 hover:text-primary-800">
              Spoken Word
            </Link>
            <p className="mb-4">
              Deliver a 3–5 minute original piece on leadership and transformation. Judged on creativity, emotional impact, and how powerfully you embody the Quantum Leap theme.
            </p>
      
            {/* Essay Writing */}
            <Link href="/register" className="inline-flex font-accent py-2 items-center font-bold text-primary-600 hover:text-primary-800">
              Essay Writing
            </Link>
            <p className="mb-4">
              Submit a 1,000–1,500 word essay on innovation and industry leadership. Stand out with original thinking, solid research, and clear structure. Top entries may be published.
            </p>
      
            {/* Quiz */}
            <Link href="/register" className="inline-flex font-accent py-2 items-center font-bold text-primary-600 hover:text-primary-800">
              Quiz
            </Link>
            <p className="mb-4">
              Fast-paced, buzzer-style rounds covering general knowledge, current affairs, tech, and entrepreneurship. Outlast every round to become the ultimate champion.
            </p>
      
            {/* Content Creation */}
            <Link href="/register" className="inline-flex font-accent py-2 items-center font-bold text-primary-600 hover:text-primary-800">
              Content Creation
            </Link>
            <p className="mb-4">
              Create a short-form video or carousel post that captures "From Potential to Power." Judged on creativity, production quality, and message clarity. Submit before the deadline.
            </p>
      
            {/* Pitch */}
            <Link href="/register" className="inline-flex font-accent py-2 items-center font-bold text-primary-600 hover:text-primary-800">
              Pitch — Business & Tech
            </Link>
            <p className="mb-4">
              Got a business idea or a tech solution? Pitch it in 5 minutes to a panel of investors and mentors, then field 3 minutes of Q&A. Business and Tech pitches are judged separately — two tracks, two sets of winners.
            </p>
          </div>

          <div className="mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] gap-4 mt-8">
            {/* <div className="relative w-full aspect-3/4">
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-full aspect-3/4 mt-4 lg:mt-10">
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
              fill
              className="object-cover rounded-lg"
            />
          </div> */}
            <div className="lg:hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <MarqueeDemo />
            </div>
            <div className="hidden lg:block mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <Marquee3D />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ContentSection
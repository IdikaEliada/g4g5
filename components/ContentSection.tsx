import Image from "next/image"
import { TextAnimate } from "./ui/text-animate"
import Link from "next/dist/client/link"
import { Marquee3D, MarqueeDemo } from "@/components/Marque"
import { GFGBento } from "@/components/GFGBento"

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
      <section>
        <GFGBento />
      </section>
    </>
  )
}

export default ContentSection
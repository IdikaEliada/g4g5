"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TextAnimate } from "./ui/text-animate";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials: {
    facebook?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Odey Simeon",
    role: "CEO OTP media",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    bio: "Odey Simeon is the CEO of OTP Media with over 15 years of experience in digital media and communications. He has led multiple award-winning campaigns across West Africa and brings a sharp editorial eye to the judging panel.",
    socials: { facebook: "#", twitter: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Helene Engels",
    role: "CTO/Co-founder",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png",
    bio: "Helene Engels is a seasoned technologist and co-founder of a leading tech startup. She specializes in scalable systems architecture and has been a key figure in driving innovation in the African tech ecosystem.",
    socials: { facebook: "#", twitter: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Jese Leos",
    role: "SEO & Marketing",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    bio: "Jese Leos is a digital growth strategist who has helped scale over 30 companies through organic search and performance marketing. His work spans e-commerce, SaaS, and media sectors.",
    socials: { facebook: "#", twitter: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Joseph Mcfall",
    role: "Sales",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    bio: "Joseph Mcfall is a high-performance sales leader with a track record of building revenue teams from the ground up. He mentors emerging entrepreneurs on customer acquisition and business development.",
    socials: { facebook: "#", twitter: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Lana Byrd",
    role: "Web Designer",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    bio: "Lana Byrd is an award-winning web designer known for creating immersive digital experiences. Her design philosophy blends accessibility with bold visual storytelling.",
    socials: { facebook: "#", twitter: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Leslie Livingston",
    role: "Graphic Designer",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png",
    bio: "Leslie Livingston is a graphic designer whose work has been featured in international publications and brand campaigns. She brings a keen aesthetic sensibility to evaluating creative submissions.",
    socials: { facebook: "#", twitter: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Michael Gough",
    role: "React Developer",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    bio: "Michael Gough is a senior React developer and open-source contributor with deep expertise in frontend architecture. He actively mentors junior developers and contributes to the developer community.",
    socials: { facebook: "#", twitter: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Neil Sims",
    role: "Vue.js Developer",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png",
    bio: "Neil Sims is a Vue.js developer and technical educator who has built production applications for clients across Europe and Africa. He is passionate about bridging the skills gap in web development.",
    socials: { facebook: "#", twitter: "#", github: "#", dribbble: "#" },
  },
];

// --- Icon components unchanged (FacebookIcon, TwitterIcon, GitHubIcon, DribbbleIcon) ---
// (keep your existing icon components here)

interface JudgeModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

function JudgeModal({ member, onClose }: JudgeModalProps) {
  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-zinc-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            key="sheet"
            className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-3xl bg-zinc-50 border-t border-zinc-100"
            style={{ height: "75dvh" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-2 shrink-0">
              <div className="w-10 h-1 rounded-full bg-zinc-400" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 pb-8 pt-2">
              <div className="flex flex-col items-center ">
                <div className="flex">
                  <Image
                    src={member.avatar}
                    alt={`${member.name} Avatar`}
                    width={96}
                    height={96}
                    className="rounded-full mb-4 ring-2 ring-yellow-400"
                  />
                  <h2 className="text-2xl font-bold font-heading text-black mb-1">
                    {member.name}
                  </h2>
                  <span className="text-yellow-400 text-sm font-medium mb-6">
                    {member.role}
                  </span>
                </div>
                <p className="text-zinc-700 text-base leading-7 max-w-lg">
                  {member.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface TeamCardProps {
  member: TeamMember;
  onReadMore: (member: TeamMember) => void;
}

function TeamCard({ member, onReadMore }: TeamCardProps) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <Image
        className="mx-auto mb-4 rounded-full"
        src={member.avatar}
        alt={`${member.name} Avatar`}
        width={144}
        height={144}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {member.name}
      </h3>
      <p className="mb-3">{member.role}</p>
      <button
        onClick={() => onReadMore(member)}
        className="text-sm text-yellow-500 hover:text-yellow-400 font-medium underline underline-offset-4 transition-colors"
      >
        Read More
      </button>
    </div>
  );
}

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section>
      <div className="py-8 px-4 max-w-7xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-zinc-950 font-heading">
            <TypingAnimation showCursor={false} startOnView>
              Meet The Judges
            </TypingAnimation>
          </h2>
          <div className="font-light flex items-center justify-center text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="max-w-lg text-lg md:text-2xl line-clamp-3 leading-8 text-zinc-950 px-4 md:px-0"
            >
              Seasoned professionals and industry leaders who will evaluate your brilliance and crown the champions of The Quantum Leap.
            </TextAnimate>
          </div>
        </div>

        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              onReadMore={setSelectedMember}
            />
          ))}
        </div>
      </div>

      <JudgeModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
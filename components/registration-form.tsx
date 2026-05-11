"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";
import { ChevronRight, Loader2, CheckCircle2 } from "lucide-react";

type FormData = {
  teamName: string;
  category: string;
  institution: string;
  captain: string;
  email: string;
  phone: string;
  members: string;
  projectTitle: string;
  abstract: string;
  agreeToTerms: boolean;
};

const CATEGORIES = [
  "Software Engineering",
  "Hardware & Embedded Systems",
  "AI & Machine Learning",
  "UI/UX & Design",
  "Robotics",
  "Other",
];

const INITIAL: FormData = {
  teamName: "",
  category: "",
  institution: "",
  captain: "",
  email: "",
  phone: "",
  members: "",
  projectTitle: "",
  abstract: "",
  agreeToTerms: false,
};

const steps = [
  { id: 1, label: "Team Info" },
  { id: 2, label: "Project" },
  { id: 3, label: "Confirm" },
];

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState < FormData > (INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState < Partial < Record < keyof FormData, string >>> ({});
  
  const set = (field: keyof FormData, value: string | boolean) =>
    setData((prev) => ({ ...prev, [field]: value }));
  
  const validateStep = (s: number): boolean => {
    const errs: typeof errors = {};
    if (s === 1) {
      if (!data.teamName.trim()) errs.teamName = "Team name is required";
      if (!data.category) errs.category = "Select a category";
      if (!data.institution.trim()) errs.institution = "Institution is required";
      if (!data.captain.trim()) errs.captain = "Captain name is required";
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errs.email = "Valid email required";
      if (!data.phone.trim()) errs.phone = "Phone number is required";
    }
    if (s === 2) {
      if (!data.projectTitle.trim()) errs.projectTitle = "Project title is required";
      if (!data.abstract.trim() || data.abstract.trim().length < 30)
        errs.abstract = "Abstract must be at least 30 characters";
    }
    if (s === 3) {
      if (!data.agreeToTerms) errs.agreeToTerms = "You must agree to the terms";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  
  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 3));
  };
  const back = () => setStep((s) => Math.max(s - 1, 1));
  
  const submit = async () => {
    if (!validateStep(3)) return;
    setSubmitting(true);
    // TODO: replace with your actual API call
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 text-center max-w-md"
      >
        <CheckCircle2 className="size-16 text-yellow-400" strokeWidth={1.5} />
        <h2 className="font-heading text-3xl font-bold text-yellow-400">
          Registration Received!
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Thank you, <span className="text-white font-medium">{data.captain}</span>. Your
          team <span className="text-white font-medium">"{data.teamName}"</span> has been
          registered. Check <span className="text-yellow-400">{data.email}</span> for a
          confirmation.
        </p>
      </motion.div>
    );
  }
  
  return (
    <div className="w-full max-w-lg">
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-yellow-400 text-xs uppercase tracking-widest font-medium mb-2">
          Going for Gold 5.0
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
          The Quantum Leap
        </h1>
        <p className="text-zinc-400 text-sm mt-1">From Potential to Power</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-center gap-0 mb-10">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={twMerge(
                  "size-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors duration-300",
                  step > s.id
                    ? "bg-yellow-400 border-yellow-400 text-zinc-900"
                    : step === s.id
                    ? "border-yellow-400 text-yellow-400 bg-transparent"
                    : "border-zinc-700 text-zinc-600 bg-transparent"
                )}
              >
                {step > s.id ? "✓" : s.id}
              </div>
              <span
                className={twMerge(
                  "text-[10px] font-medium transition-colors duration-300",
                  step >= s.id ? "text-zinc-300" : "text-zinc-600"
                )}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={twMerge(
                  "h-px w-16 mb-4 transition-colors duration-500",
                  step > s.id ? "bg-yellow-400" : "bg-zinc-700"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="bg-zinc-800/60 border border-zinc-700/60 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <StepOne key="s1" data={data} errors={errors} set={set} />
          )}
          {step === 2 && (
            <StepTwo key="s2" data={data} errors={errors} set={set} />
          )}
          {step === 3 && (
            <StepThree key="s3" data={data} errors={errors} set={set} />
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8 gap-3">
          {step > 1 ? (
            <button
              onClick={back}
              className="px-5 py-2.5 rounded-xl text-sm text-zinc-400 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={next}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-yellow-400 text-zinc-900 hover:bg-yellow-300 transition-colors"
            >
              Continue <ChevronRight className="size-4" />
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={submitting}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-yellow-400 text-zinc-900 hover:bg-yellow-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>Submit Registration</>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
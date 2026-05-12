"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";
import { ChevronRight, Loader2, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  category: string;
  faculty: string;
  department: string;
  phone: string;
  paymentRef: string;
  agreeToTerms: boolean;
};

const CATEGORIES = [
  "Essay Writing",
  "Debates",
  "Spoken Words",
  "Quizzes",
  "Content Creation",
  "Business Pitch / Tech Startup"
];

const INITIAL: FormData = {
  name: "",
  category: "",
  faculty: "",
  department: "",
  phone: "",
  paymentRef: "",
  agreeToTerms: false,
};

const ACCOUNT = {
  numbers: "9051419261",
  name: "IDIKA PATRICK IBIAM",
  bank: "Palm pay",
};

const OPAY_DEEP_LINK = (amount: number) =>
  `opay://transfer?accountNumber=${ACCOUNT.numbers}&bankCode=100033&amount=${amount}`; // TODO: verify format

const getAmount = (category: string) =>
  category === "Business Pitch / Tech Startup" ? 3000 : 2500;

const steps = [
  { id: 1, label: "Personal Info" },
  { id: 2, label: "Payment" },
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
      if (!data.name.trim()) errs.name = "Full name is required";
      if (!data.category) errs.category = "Select a category";
      if (!data.faculty.trim()) errs.faculty = "Faculty is required";
      if (!data.department.trim()) errs.department = "Department is required";
      if (!data.phone.trim()) errs.phone = "Phone number is required";
    }
    if (s === 2) {
      if (!data.paymentRef.trim() || data.paymentRef.trim().length < 6)
        errs.paymentRef = "Enter a valid transaction reference";
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
        <CheckCircle2 className="size-16 text-primary-400" strokeWidth={1.5} />
        <h2 className="font-heading text-3xl font-bold text-primary-400">
          Registration Received!
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Thank you, <span className="text-white font-medium">{data.department}</span>. Your
          team <span className="text-white font-medium">"{data.name}"</span> has been
          registered. Check <span className="text-primary-400">Your WhatsApp</span> for a
          confirmation.
        </p>
      </motion.div>
    );
  }
  
  return (
    <div className="w-full max-w-lg">
      {/* Header */}
      <div className="mb-8 text-center">
        
        <h3 className="font-accent text-xl md:text-4xl font-bold text-black leading-tight">
          Register, Participate and Win
        </h3>
        <h1 className="font-heading pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl md:text-9xl lg:text-12xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
          ₦500K
        </h1>
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
                    ? "bg-primary-400 border-primary-400 text-zinc-900"
                    : step === s.id
                    ? "border-primary-400 text-primary-400 bg-transparent"
                    : "border-zinc-700 text-zinc-600 bg-transparent"
                )}
              >
                {step > s.id ? "✓" : s.id}
              </div>
              <span
                className={twMerge(
                  "text-[10px] font-medium transition-colors duration-300",
                  step >= s.id ? "text-zinc-500" : "text-zinc-800"
                )}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={twMerge(
                  "h-px w-16 mb-4 transition-colors duration-500",
                  step > s.id ? "bg-primary-400" : "bg-zinc-700"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="bg-zinc-100/60 border border-zinc-300/60 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
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
              className="px-5 py-2.5 rounded-xl text-sm text-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={next}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-primary-900 text-slate-100 hover:bg-primary-300 transition-colors"
            >
              Continue <ChevronRight className="size-4" />
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={submitting}
              className="font-accent flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-primary-900 text-slate-100 hover:bg-primary-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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

// ─── Step Components 

type StepProps = {
  data: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  set: (field: keyof FormData, value: string | boolean) => void;
};

function StepMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-5"
    >
      {children}
    </motion.div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-zinc-600 uppercase tracking-wide">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

const inputCls =
  "w-full bg-zinc-100/80 border border-zinc-300 rounded-xl px-4 py-2.5 text-sm text-black placeholder:text-zinc-800 focus:outline-none focus:border-primary-600/60 focus:ring-1 focus:ring-primary-400/30 transition-colors";

function StepOne({ data, errors, set }: StepProps) {
  return (
    <StepMotion>
      <Field label="Full Name" error={errors.name}>
        <input
          className={inputCls}
          placeholder="Enter full name"
          value={data.name}
          onChange={(e) => set("name", e.target.value)}
        />
      </Field>
      <Field label="Competition Category" error={errors.category}>
        <select
          className={twMerge(inputCls, "bg-zinc-900")}
          value={data.category}
          onChange={(e) => set("category", e.target.value)}
        >
          <option value="">Select a category…</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field label="Faculty" error={errors.faculty}>
        <input
          className={inputCls}
          placeholder="Select Faculty"
          value={data.faculty}
          onChange={(e) => set("faculty", e.target.value)}
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Department" error={errors.department}>
          <input
            className={inputCls}
            placeholder="eg. Software Engineering"
            value={data.department}
            onChange={(e) => set("department", e.target.value)}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            className={inputCls}
            placeholder="preferably whatsapp contact"
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </Field>
      </div>
      
      
    </StepMotion>
  );
}

// function StepTwo({ data, errors, set }: StepProps) {
//   return (
//     <StepMotion>
//       <Field label="Pay with Opay" error={errors.projectTitle}>
//         <input
//           className={inputCls}
//           placeholder="Give your project a name"
//           value={data.projectTitle}
//           onChange={(e) => set("projectTitle", e.target.value)}
//         />
//       </Field>
//       <Field label="Other payment methods" error={errors.abstract}>
//         <textarea
//           className={twMerge(inputCls, "resize-none min-h-36")}
//           placeholder="Describe what you're building and why it matters (min 30 chars)…"
//           value={data.abstract}
//           onChange={(e) => set("abstract", e.target.value)}
//         />
//         <p className="text-[11px] text-zinc-600 text-right">
//           {data.abstract.trim().length} chars
//         </p>
//       </Field>
//     </StepMotion>
//   );
// }

function StepTwo({ data, errors, set }: StepProps) {
  const [showOther, setShowOther] = useState(false);
  const [copied, setCopied] = useState(false);
  const amount = getAmount(data.category);
  
  const copyAccount = () => {
    navigator.clipboard.writeText(ACCOUNT.numbers);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <StepMotion>
      {/* Amount badge */}
      <div className="flex items-center justify-between rounded-xl bg-zinc-900 border border-zinc-700/60 px-4 py-3">
        <span className="text-xs text-zinc-400 uppercase tracking-wide">
          Registration Fee
        </span>
        <span className="font-heading text-xl font-bold text-primary-400">
          ₦{amount.toLocaleString()}
        </span>
      </div>

      {/* Account details card */}
      <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/60 px-4 py-4 flex flex-col gap-2 text-sm">
        <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">
          Pay to
        </p>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Bank</span>
          <span className="text-white font-medium">{ACCOUNT.bank}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Account Name</span>
          <span className="text-white font-medium">{ACCOUNT.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Account Number</span>
          <div className="flex items-center gap-2">
            <span className="text-white font-mono font-semibold">
              {ACCOUNT.numbers}
            </span>
            <button
              onClick={copyAccount}
              className="text-[10px] px-2 py-0.5 rounded-md border border-zinc-600 text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      {/* Primary CTA — OPay */}
      <a
        href={OPAY_DEEP_LINK(amount)}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#00B050] hover:bg-[#009940] text-white font-semibold text-sm transition-colors"
      >
        {/* OPay green */}
        Pay ₦{amount.toLocaleString()} with OPay
      </a>

      {/* Other methods toggle */}
      <button
        onClick={() => setShowOther((v) => !v)}
        className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mx-auto"
      >
        <ChevronRight
          className={twMerge(
            "size-3.5 transition-transform duration-200",
            showOther && "rotate-90"
          )}
        />
        {showOther ? "Hide" : "Other payment methods"}
      </button>

      <AnimatePresence>
        {showOther && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 px-4 py-3 text-xs text-zinc-400 leading-relaxed space-y-1.5">
              <p className="text-zinc-300 font-medium text-sm mb-2">
                Other ways to pay
              </p>
              <p>
                1. Open your bank app (GTB, Access, UBA, Kuda, etc.)
              </p>
              <p>2. Transfer ₦{amount.toLocaleString()} to the Zenith account above</p>
              <p>
                3. Use <span className="text-white">GFG5-[YourName]</span> as
                narration if possible
              </p>
              <p>4. Copy your transaction reference and paste below</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reference input */}
      <Field label="Transaction Reference" error={errors.paymentRef}>
        <input
          className={inputCls}
          placeholder="e.g. FBN2405121234ABCD"
          value={data.paymentRef}
          onChange={(e) => set("paymentRef", e.target.value)}
        />
        <p className="text-[11px] text-zinc-500">
          Found in your bank app under transaction details
        </p>
      </Field>
    </StepMotion>
  );
}

function StepThree({ data, errors, set }: StepProps) {
  const rows: [string, string][] = [
      ["Name", data.name],
      ["Category", data.category],
      ["Faculty", data.faculty],
      ["Department", data.department],
      ["Phone", data.phone],
      ["Txn Ref", data.paymentRef],
    ];

  return (
    <StepMotion>
      <h3 className="text-sm font-semibold text-zinc-700 mb-1">
        Review your details
      </h3>
      <div className="rounded-xl bg-background border border-zinc-300/50 divide-y divide-zinc-300/40 text-sm overflow-hidden">
        {rows.map(([label, value]) => (
          <div key={label} className="flex gap-3 px-4 py-2.5">
            <span className="text-zinc-500 w-24 shrink-0">{label}</span>
            <span className="text-zinc-200 truncate">{value}</span>
          </div>
        ))}
      </div>

      {data.abstract && (
        <div className="rounded-xl bg-zinc-100/60 border border-zinc-700/50 px-4 py-3 text-sm">
          <p className="text-zinc-500 text-xs mb-1 uppercase tracking-wide">Abstract</p>
          <p className="text-zinc-700 leading-relaxed">{data.abstract}</p>
        </div>
      )}

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={data.agreeToTerms}
          onChange={(e) => set("agreeToTerms", e.target.checked)}
          className="mt-0.5 accent-primary-600 size-4"
        />
        <span className="text-xs text-zinc-400 leading-relaxed">
          I confirm that the information provided is accurate and I agree to the GFG 5.0
          participation terms and code of conduct.
        </span>
      </label>
      {errors.agreeToTerms && (
        <p className="text-xs text-red-400 -mt-3">{errors.agreeToTerms}</p>
      )}
    </StepMotion>
  );
}
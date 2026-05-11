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
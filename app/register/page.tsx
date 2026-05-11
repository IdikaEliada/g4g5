import type { Metadata } from "next";
import RegistrationForm from "@/components/registration-form";

export const metadata: Metadata = {
  title: "Register — Going for Gold 5.0",
  description:
    "Win ₦500K plus other prices.You stand a chance to win a share of the reward by registering for the Going for Gold 5.0: The Quantum Leap — From Potential to Power.",
};

export default function RegisterPage() {
  return (
    <>
      <section className="mt-8">
        <h1>Under Construction</h1>
        <RegistrationForm />
      </section>
    </>
  );
}
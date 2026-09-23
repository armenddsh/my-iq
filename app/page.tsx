import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

export default function HomePage() {
  return (
    <div className="space-y-8 text-center">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          myIQ
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          A free, no-signup IQ test with instant results.
        </p>
      </section>

      <AdSlot />

      <section className="rounded-2xl bg-[var(--color-card)] p-6 shadow-sm text-left">
        <h2 className="mb-4 text-2xl font-semibold text-center">
          What to expect
        </h2>
        <ul className="mx-auto max-w-md space-y-2 text-[var(--color-muted)]">
          <li>30 multiple-choice questions</li>
          <li>20-minute enforced timer</li>
          <li>Logic, pattern, and verbal/spatial categories</li>
          <li>Immediate score and answer explanations</li>
          <li>No account, no payment, no data collection</li>
        </ul>
      </section>

      <Link
        href="/test"
        className="inline-block rounded-xl bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-[var(--color-primary-foreground)] transition hover:bg-blue-700"
      >
        Start Test
      </Link>

      <p className="text-sm text-[var(--color-muted)]">
        Results are shown immediately after submission. No signup or payment is
        required.
      </p>
    </div>
  );
}

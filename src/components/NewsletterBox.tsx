"use client"

import { useRef, useState } from "react";

export function NewsletterBox() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef.current?.value;
    if (!email) return;
    window.open(
      `https://samuelolaegbe.substack.com/subscribe?email=${encodeURIComponent(email)}`,
      "_blank"
    );
    setSubmitted(true);
    if (emailRef.current) emailRef.current.value = "";
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section className="max-w-lg mx-auto mt-16 mb-0 px-4">
      <div className="
        border border-neutral-200 dark:border-neutral-700
        rounded-xl
        bg-white dark:bg-neutral-900
        p-4 md:p-6
        flex flex-col items-center
      ">
        <form
          onSubmit={handleSubmit}
          className="flex w-full gap-2"
          aria-label="Subscribe to newsletter"
        >
          <input
            ref={emailRef}
            type="email"
            required
            placeholder="Your email"
            className="
              flex-1 px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-700
              bg-neutral-100 dark:bg-neutral-800
              text-slate-900 dark:text-white
              placeholder:text-neutral-400
              focus:ring-2 focus:ring-primary focus:outline-none transition
              text-sm
            "
            autoComplete="email"
            aria-label="Your email"
          />
          <button
            type="submit"
            className="
              px-4 py-2 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900
              font-semibold text-sm transition hover:opacity-90
              disabled:opacity-60
            "
            disabled={submitted}
          >
            {submitted ? "Subscribed" : "Subscribe"}
          </button>
        </form>
        <span className="block mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          {submitted
            ? "Check your inbox to confirm!"
            : "No spam. Unsubscribe anytime."}
        </span>
      </div>
    </section>
  );
}

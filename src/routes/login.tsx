import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";

export const Route = createFileRoute("/login")({
  validateSearch: z.object({ role: z.enum(["client", "employee"]).catch("client") }),
  head: () => ({
    meta: [
      { title: "Account login | WebHelp Pakistan" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { role } = Route.useSearch();
  return <LoginForm key={role} role={role} />;
}

function LoginForm({ role }: { role: "client" | "employee" }) {
  const [message, setMessage] = useState("");
  const title = role === "employee" ? "Employee login" : "Client login";
  const fieldClass = "mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Sign-in is currently unavailable. Please contact WebHelp for account access.");
  }

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:py-24">
      <div className="w-full max-w-md rounded-3xl border border-border bg-secondary/40 p-6 shadow-xl backdrop-blur-xl sm:p-9">
        <div className="mb-8 grid grid-cols-2 gap-2 rounded-full border border-border p-1">
          {(["client", "employee"] as const).map((accountRole) => (
            <Link
              key={accountRole}
              to="/login"
              search={{ role: accountRole }}
              aria-current={role === accountRole ? "page" : undefined}
              className={`rounded-full px-3 py-2.5 text-center text-sm font-semibold transition-colors ${role === accountRole ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {accountRole === "client" ? "Client" : "Employee"}
            </Link>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Welcome back. Enter your account details below.</p>
        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <div>
            <label htmlFor="login-email" className="text-sm font-medium">Email address</label>
            <input id="login-email" name="email" type="email" autoComplete="username" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="login-password" className="text-sm font-medium">Password</label>
            <input id="login-password" name="password" type="password" autoComplete="current-password" required className={fieldClass} />
          </div>
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Log in</button>
          {message && <p role="status" className="text-sm leading-6 text-muted-foreground">{message}</p>}
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">Need help accessing your account? <Link to="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">Contact us</Link></p>
      </div>
    </section>
  );
}

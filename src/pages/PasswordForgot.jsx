export default function PasswordForgot() {
  return (
    <section className="section-wrap py-8">
      <div className="soft-card mx-auto max-w-2xl rounded-[2.4rem] p-8 md:p-10">
        <span className="section-kicker">Reset access</span>
        <h1 className="h1-title mt-6 text-4xl text-slate-900 md:text-5xl">
          Forgot your password?
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Enter your email and choose a new password to get back into your
          account.
        </p>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Email
          </label>
          <input type="email" placeholder="Email" className="field" required />

          <label className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            New password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="field"
            required
          />

          <label className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="field"
            required
          />

          <button className="flower-button mt-2 w-full sm:w-fit" type="submit">
            Save new password
          </button>
        </form>
      </div>
    </section>
  );
}

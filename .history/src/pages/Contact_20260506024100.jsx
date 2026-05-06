export default function Contact() {
  return (
    <section className="section-wrap py-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="page-banner rounded-[2.4rem] p-8 md:p-10">
          <span className="section-kicker">Contact</span>
          <h1 className="h1-title mt-6 text-5xl text-slate-900">
            Let's plan the perfect bouquet.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reach out for gifting questions, event styling, delivery support, or
            custom floral requests.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl bg-white/82 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Call
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                (+20) 01007705000
              </p>
            </div>
            <div className="rounded-3xl bg-white/82 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Hours
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                Daily, 10am to 10pm
              </p>
            </div>
          </div>
        </div>

        <div className="soft-card rounded-[2.4rem] p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            Send a message
          </h2>
          <p className="mt-3 text-slate-600">
            We usually reply quickly during opening hours.
          </p>
          <form
            className="mt-8 flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your name" className="field" />
            <input type="email" placeholder="Your email" className="field" />
            <textarea
              placeholder="Tell us what you need"
              className="field min-h-36 resize-y"
            ></textarea>
            <button className="flower-button w-full sm:w-fit" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

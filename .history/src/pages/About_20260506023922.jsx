export default function About() {
  const highlights = [
    { label: "Established", value: "1986" },
    { label: "Daily hours", value: "10am-10pm" },
    { label: "Focus", value: "Gift-ready florals" },
  ];

  return (
    <section className="section-wrap py-8">
      <div className="page-banner rounded-[2.4rem] p-8 md:p-12">
        <span className="section-kicker">About us</span>
        <h1 className="h1-title mt-6 text-5xl text-slate-900 md:text-6xl">
          A flower shop built around meaningful gifting.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Flower Shop is a warm, design-led destination for beautiful bouquets
          crafted with care. Our mission is simple: help people celebrate,
          comfort, and connect through flowers that feel special the moment they
          arrive.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-3xl bg-white/82 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="soft-card rounded-4xl p-8">
          <h2 className="text-3xl font-semibold text-slate-900">Our story</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Established in 1986, Flower Power emerged as one of Egypt's early
            floral design houses, known for expressive arrangements and polished
            presentation. Over the years, that experience has shaped the way we
            style everyday bouquets, weddings, events, and premium gifts.
          </p>
        </article>

        <article className="soft-card rounded-4xl p-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            What matters
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We care about freshness, visual harmony, reliable service, and the
            emotional weight a bouquet can carry. Whether you are sending love,
            gratitude, or a thoughtful apology, we design for the feeling behind
            the flowers.
          </p>
        </article>
      </div>
    </section>
  );
}

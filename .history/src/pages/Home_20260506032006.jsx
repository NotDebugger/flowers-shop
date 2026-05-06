import { Link } from "react-router-dom";
import { useContext } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import flowerHero from "../imgs/flower4.jpg";
import { ProductsContext } from "../contexts/ProductsContext";

export default function Home() {
  const products = useContext(ProductsContext);
  const highlights = [
    {
      title: "Hand-tied arrangements",
      copy: "Every bouquet is layered for texture, movement, and a premium unboxing feel.",
    },
    {
      title: "Same-day gifting",
      copy: "Fast local delivery makes last-minute surprises feel beautifully planned.",
    },
    {
      title: "Thoughtful finishing touches",
      copy: "Add notes, elegant wrapping, and calm, dependable service from checkout to doorstep.",
    },
  ];

  return (
    <>
      <section className="section-wrap">
        <div className="relative min-h-144 overflow-hidden rounded-[2.5rem] md:min-h-168">
          <img
            src={flowerHero}
            alt="Luxury bouquet styling"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(31,52,42,0.82),rgba(31,52,42,0.45),rgba(31,52,42,0.1))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,213,220,0.42),transparent_34%)]" />

          <div className="relative z-10 flex min-h-144 items-end p-5 md:min-h-168 md:items-center md:p-12 lg:p-16">
            <div className="soft-card fade-up max-w-2xl rounded-4xl p-7 md:p-10">
              <span className="section-kicker">Same-day delivery in Cairo</span>
              <h1 className="h1-title mt-6 text-5xl leading-tight text-slate-900 md:text-6xl">
                Flowers that turn kind gestures into unforgettable moments.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                Discover romantic stems, joyful bouquets, and artful wrapping
                designed to make every order feel elevated from the very first
                click.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/shop" className="flower-button">
                  Shop bouquets
                </Link>
                <Link to="/about" className="flower-button-secondary">
                  Our story
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.4rem] bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-slate-900">
                    {products.length}+
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    curated floral arrangements
                  </p>
                </div>
                <div className="rounded-[1.4rem] bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-slate-900">
                    10am-10pm
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    daily support for orders and gifting help
                  </p>
                </div>
                <div className="rounded-[1.4rem] bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-slate-900">
                    Gift-ready
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    wrapping, notes, and premium presentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-18">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="soft-card fade-up rounded-[1.8rem] p-6"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-(--rose-deep)">
                Why shoppers stay
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <FeaturedProducts />
    </>
  );
}

import { Link } from "react-router-dom";
import visaCard from "../imgs/visa.png";
import masterCard from "../imgs/card.png";
import americanExpress from "../imgs/american-express.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-wrap pb-8 pt-6">
      <div className="soft-card rounded-[2.4rem] p-6 md:p-10">
        <div className="grid gap-8 border-b border-(--line) pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="section-kicker">Stay in bloom</span>
            <h2 className="h1-title mt-5 text-4xl text-slate-900 md:text-5xl">
              Join the newsletter for seasonal drops, gifting ideas, and offers.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              We send thoughtful updates, not clutter. Expect bouquet launches,
              restocks, and occasional perks worth opening.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="field"
            />
            <button className="flower-button whitespace-nowrap" type="submit">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-(--rose-deep)">
              Flowers Shop
            </p>
            <h3 className="family mt-3 text-4xl text-(--accent)">
              Flowers Shop
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Beautiful bouquets, graceful gifting, and dependable local
              delivery across Egypt.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Visit</h4>
            <p className="mt-4 leading-8 text-slate-600">
              Open daily from 10am to 10pm
              <br />
              Call us: (+20) 01007705000
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Explore</h4>
            <div className="mt-4 flex flex-col gap-3 text-slate-600">
              <Link to="/shop" className="transition hover:text-(--accent)">
                Shop
              </Link>
              <Link to="/about" className="transition hover:text-(--accent)">
                About us
              </Link>
              <Link to="/contact" className="transition hover:text-(--accent)">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Follow</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-(--surface-muted) text-slate-700 transition hover:bg-white hover:text-(--accent)"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 320 512"
                  width="18px"
                  fill="currentColor"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-(--surface-muted) text-slate-700 transition hover:bg-white hover:text-(--accent)"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 448 512"
                  width="18px"
                  fill="currentColor"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.7-66.7-35.6-92.6s-57.3-33.9-92.6-35.6C283.7 34.1 164.3 34.1 129.6 35.3 94.3 37 62.9 45 37 70.9S3.1 128.2 1.4 163.5C.1 198.2.1 317.6 1.4 352.3 3.1 387.6 11.1 419 37 444.9s57.3 33.9 92.6 35.6c34.7 1.3 154.1 1.3 188.8 0 35.3-1.7 66.7-9.7 92.6-35.6s33.9-57.3 35.6-92.6c1.3-34.7 1.3-154.1 0-188.8zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.1 9-132.2 9s-102.9 2.6-132.2-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.1-9-132.2s-2.6-102.9 9-132.2c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.1-9 132.2-9s102.9-2.6 132.2 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.1 9 132.2s2.7 102.9-9 132.2z" />
                </svg>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <img src={visaCard} alt="Visa" className="h-10 w-auto" />
              <img src={masterCard} alt="Mastercard" className="h-8 w-auto" />
              <img
                src={americanExpress}
                alt="American Express"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-(--line) pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>(c) {year} Flowers Shop. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/about" className="transition hover:text-(--accent)">
              About us
            </Link>
            <Link to="/contact" className="transition hover:text-(--accent)">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

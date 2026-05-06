import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section-wrap py-12">
      <div className="soft-card mx-auto max-w-2xl rounded-[2.4rem] p-8 text-center md:p-12">
        <span className="section-kicker">404</span>
        <h1 className="h1-title mt-6 text-5xl text-slate-900 md:text-6xl">
          The flowers made it, but this page did not.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="flower-button">
            Back home
          </Link>
          <Link to="/shop" className="flower-button-secondary">
            Browse flowers
          </Link>
        </div>
      </div>
    </section>
  );
}

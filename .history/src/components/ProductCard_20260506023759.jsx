import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ p, onAdd }) {
  const navigate = useNavigate();
  const { isInCart } = useCart();
  const added = isInCart(p.id);
  const price = Number(p.price).toLocaleString();

  return (
    <article className="soft-card group flex h-full flex-col rounded-[1.8rem] p-4 text-lg transition duration-300 hover:-translate-y-1.5">
      <div className="relative overflow-hidden rounded-[1.4rem] bg-(--surface-muted)">
        <img
          src={p.image}
          alt={p.name}
          className="h-64 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-105"
          onClick={() => navigate(`/products/${p.id}`)}
        />
        <button
          onClick={() => navigate(`/products/${p.id}`)}
          className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent) transition hover:bg-white"
        >
          View
        </button>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-(--rose-deep)">
              Fresh pick
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {p.name}
            </h2>
          </div>
          <span className="rounded-full bg-(--surface-muted) px-3 py-1 text-sm font-semibold text-slate-700">
            EGP {price}
          </span>
        </div>

        <p className="product-copy mt-4 text-sm leading-7 text-slate-600">
          {p.description}
        </p>

        <Link
          to={`/products/${p.id}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--accent) transition hover:text-(--accent-dark)"
        >
          View details
          <span aria-hidden="true">-&gt;</span>
        </Link>

        <div className="mt-auto">
          <AddToCartButton added={added} onAdd={onAdd} product={p} />
        </div>
      </div>
    </article>
  );
}

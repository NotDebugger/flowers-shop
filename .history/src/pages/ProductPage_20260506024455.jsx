import { useParams, Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import NotFound from "./NotFound";
import { useContext, useMemo, useState } from "react";
import { ProductsContext } from "../contexts/productsContext";
import RelatedProducts from "../components/RelatedProducts";
import AddToCartButton from "../components/AddToCartButton";

export default function ProductPage() {
  const { id } = useParams();
  const products = useContext(ProductsContext);
  const product = useMemo(
    () => products?.find((p) => String(p.id) === String(id)),
    [products, id],
  );
  const [count, setCount] = useState(1);
  const { addToCart, isInCart } = useCart();
  const added = product ? isInCart(product.id) : false;
  const perks = [
    "Gift-ready wrapping included",
    "Delivery support from 10am to 10pm",
    "Fresh styling prepared by hand",
  ];

  const increase = () => setCount((value) => value + 1);
  const decrease = () => setCount((value) => Math.max(1, value - 1));

  if (!product) {
    return <NotFound />;
  }

  const price = Number(product.price).toLocaleString();

  return (
    <>
      <section className="section-wrap py-8">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/" className="transition hover:text-(--accent)">
            Home
          </Link>
          <span className="mx-2 text-xs">&gt;</span>
          <Link to="/shop" className="transition hover:text-(--accent)">
            Shop
          </Link>
          <span className="mx-2 text-xs">&gt;</span>
          <span className="text-slate-700">{product.name}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="soft-card rounded-[2.2rem] p-4 md:p-6">
            <div className="overflow-hidden rounded-[1.8rem] bg-(--surface-muted)">
              <img
                src={product.image}
                className="w-full object-cover"
                alt={product.name}
              />
            </div>
          </div>

          <div className="soft-card rounded-[2.2rem] p-7 md:p-10">
            <span className="section-kicker">Signature arrangement</span>
            <h1 className="h1-title mt-6 text-4xl text-slate-900 md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="text-3xl font-semibold text-slate-900">
                EGP {price}
              </p>
              <span className="rounded-full bg-(--accent-soft) px-4 py-2 text-sm font-semibold text-(--accent)">
                Premium gift wrapping included
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Quantity
              </span>
              <div className="flex items-center rounded-full border border-(--line) bg-white p-1 shadow-sm">
                <button
                  onClick={decrease}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-slate-700 transition hover:bg-(--surface-muted)"
                >
                  -
                </button>
                <span className="w-10 text-center text-lg font-semibold text-slate-900">
                  {count}
                </span>
                <button
                  onClick={increase}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-slate-700 transition hover:bg-(--surface-muted)"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6">
              <AddToCartButton
                added={added}
                onAdd={addToCart}
                product={product}
                count={count}
              />
            </div>

            <div className="mt-8 grid gap-3">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 text-sm text-slate-600"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-(--accent-soft) text-(--accent)">
                    OK
                  </span>
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--accent) transition hover:text-(--accent-dark)"
            >
              <span aria-hidden="true">&lt;-</span>
              Back to the shop
            </Link>
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
    </>
  );
}

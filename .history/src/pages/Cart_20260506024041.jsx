import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useMemo, useState } from "react";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const subtotal = (item) => Number(item.price) * (item.count || 1);
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + subtotal(item), 0),
    [cart],
  );
  const itemCount = useMemo(
    () => cart.reduce((sum, item) => sum + (item.count || 1), 0),
    [cart],
  );
  const delivery = cart.length ? 80 : 0;
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <section className="section-wrap py-12">
        <div className="soft-card mx-auto max-w-2xl rounded-[2.3rem] p-8 text-center md:p-12">
          <span className="section-kicker">Order Confirmed</span>
          <h1 className="h1-title mt-6 text-4xl text-slate-900 md:text-5xl">
            Your flowers are officially on the way.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Thank you for shopping with us. We have cleared the cart and saved
            the good mood.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/shop" className="flower-button">
              Keep browsing
            </Link>
            <Link to="/" className="flower-button-secondary">
              Back home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-wrap py-8">
        <div className="page-banner rounded-[2.3rem] px-6 py-10 md:px-10">
          <h1 className="h1-title text-5xl text-slate-900 md:text-6xl">
            Your cart
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Review your stems, adjust quantities, and finish checkout when the
            arrangement feels just right.
          </p>
        </div>
      </section>

      <section className="section-wrap pb-20">
        {cart.length === 0 ? (
          <div className="soft-card mx-auto max-w-2xl rounded-[2.3rem] p-8 text-center md:p-12">
            <span className="section-kicker">Cart Empty</span>
            <h2 className="h1-title mt-6 text-4xl text-slate-900">
              No flowers in the bag yet.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Explore the collection and add a bouquet you would love to send or
              receive.
            </p>
            <Link to="/shop" className="flower-button mt-8">
              Start shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="soft-card flex flex-col gap-5 rounded-[1.8rem] p-4 md:flex-row md:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-full cursor-pointer rounded-[1.2rem] object-cover md:w-28"
                    onClick={() => navigate(`/products/${item.id}`)}
                  />

                  <div className="flex-1">
                    <h2
                      className="cursor-pointer text-2xl font-semibold text-slate-900"
                      onClick={() => navigate(`/products/${item.id}`)}
                    >
                      {item.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      EGP {Number(item.price).toLocaleString()} each
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-(--surface-muted) text-lg text-slate-700"
                      >
                        -
                      </button>
                      <div className="w-8 text-center text-lg font-semibold text-slate-900">
                        {item.count || 1}
                      </div>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-(--surface-muted) text-lg text-slate-700"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-sm font-semibold text-rose-700 transition hover:text-rose-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                      Subtotal
                    </p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                      EGP {subtotal(item).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="soft-card h-fit rounded-4xl p-6 lg:sticky lg:top-32">
              <span className="section-kicker">Order Summary</span>
              <div className="mt-6 space-y-4 text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Items</span>
                  <span className="font-semibold text-slate-900">
                    {itemCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    EGP {total.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold text-slate-900">
                    EGP {delivery.toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-(--line) pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-slate-900">
                      Total
                    </span>
                    <span className="text-2xl font-semibold text-slate-900">
                      EGP {(total + delivery).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="flower-button mt-8 w-full"
                onClick={handlePlaceOrder}
              >
                Place your order
              </button>
              <button
                className="flower-button-secondary mt-3 w-full"
                onClick={clearCart}
              >
                Clear cart
              </button>
              <Link
                to="/shop"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-(--accent) transition hover:text-(--accent-dark)"
              >
                Continue shopping
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}

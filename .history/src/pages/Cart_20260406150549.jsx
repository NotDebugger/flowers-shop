import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: (item.count || 1) + 1 } : item,
      ),
    );
  };
  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, (item.count || 1) - 1) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = (item) => item.price * (item.count || 1);
  const total = cart.reduce((s, item) => s + subtotal(item), 0);
  const navigate = useNavigate();

  return (
    <>
      <div className="py-24 bg-gray-50">
        <div className="p-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 outfit text-gray-500">
            Your Cart
          </h1>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 mb-4 bg-white shadow p-4 rounded-xl"
                  >
                    <img
                      src={item.image}
                      className="w-24 rounded-lg object-cover cursor-pointer"
                      onClick={() => navigate(`/product/${item.id}`)}
                    />

                    <div className="flex-1">
                      <h2
                        className="text-xl font-semibold cursor-pointer"
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        {item.name}
                      </h2>
                      <p className="text-gray-600">EGP {item.price}</p>

                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() => decrease(item.id)}
                          className="px-3 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <div className="px-4 py-1 rounded text-lg">
                          {item.count || 1}
                        </div>
                        <button
                          onClick={() => increase(item.id)}
                          className="px-3 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-6 text-sm text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">EGP {subtotal(item)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white p-4 rounded-xl shadow flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Total</p>
                  <p className="text-2xl font-bold">EGP {total}</p>
                </div>

                <div>
                  <button
                    className="px-6 py-2 rounded bg-gray-500 text-white hover:bg-gray-100 hover:text-gray-500 duration-200"
                    onClick={() => setCart([])}
                  >
                    Place Your Order
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

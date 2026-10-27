import { useState } from "react";
import { Link } from "react-router";
function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cappuccino",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      price: 4.5,
      quantity: 1,
    },
    {
      id: 2,
      name: "Blueberry Muffin",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
      price: 3.5,
      quantity: 1,
    },
  ]);
  return (
    <main className="w-full h-[70vh] mx-auto px-4 py-4">
      <div className="w-full overflow-x-auto rounded-xl border border-light-coffee bg-white shadow-sm">
        <div className="mx-auto my-5 max-w-6xl">
          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-4xl text-expresso font-bold font-lora leading-tight md:text-5xl">
              Your Cart
            </h1>
            <p className="mt-2 font-inter text-sm">
              Review your selections before checking out.
            </p>
          </div>

          {/* Cart Content */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Cart Items Table */}
            <section className="min-w-0 lg:col-span-2">
              <div className="overflow-x-auto rounded-xl border border-light-coffee bg-white shadow-sm">
                <table className="w-full min-w-[600px] border-collapse text-left">
                  <thead className="bg-light-coffee">
                    <tr>
                      <th className="px-5 py-4 font-inter text-sm font-bold text-expresso">
                        Item
                      </th>
                      <th className="px-5 py-4 font-inter text-sm font-bold text-expresso">
                        Price
                      </th>
                      <th className="px-5 py-4 font-inter text-sm font-bold text-expresso">
                        Quantity
                      </th>
                      <th className="px-5 py-4 font-inter text-sm font-bold text-expresso">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-light-coffee/50">
                    {cartItems.map((item) => (
                      <tr
                        key={item.id}
                        className="transition-colors hover:bg-cream/50"
                      >
                        {/* Product */}
                        <td className="px-5 py-5">
                          <div className="flex min-w-[180px] items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-16 w-16 shrink-0 rounded-lg object-cover"
                            />
                            <span className="font-inter text-sm font-semibold text-expresso">
                              {item.name}
                            </span>
                          </div>
                        </td>

                        {/* Price */}
                        <td className="whitespace-nowrap px-5 py-5 font-inter text-sm text-stone-700">
                          ${item.price.toFixed(2)}
                        </td>

                        {/* Quantity Controls — layout only */}
                        <td className="px-5 py-5">
                          <div className="inline-flex items-center rounded-lg border border-light-coffee">
                            <button
                              type="button"
                              className="px-3 py-2 text-expresso transition hover:bg-cream"
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              −
                            </button>

                            <span className="min-w-9 px-2 py-2 text-center font-inter text-sm">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              className="px-3 py-2 text-expresso transition hover:bg-cream"
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              +
                            </button>
                          </div>
                        </td>

                        {/* Line Total and Remove */}
                        <td className="whitespace-nowrap px-5 py-5">
                          <div className="flex items-center gap-3">
                            <span className="font-inter text-sm font-bold text-expresso">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                              className="rounded-md px-2 py-1 text-lg text-stone-400 transition hover:bg-red-50 hover:text-red-600"
                            >
                              ×
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Continue Shopping */}
              <Link
                to="/menu"
                className="mt-5 inline-flex items-center gap-2 font-inter text-sm font-semibold text-expresso underline-offset-4 transition hover:text-caramel hover:underline"
              >
                ← Continue Shopping
              </Link>
            </section>

            {/* Order Summary */}
            <aside className="rounded-xl border border-light-coffee bg-white p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="border-b border-light-coffee pb-4 font-lora text-2xl font-bold text-expresso">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4 font-inter text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="font-semibold text-expresso">$0.00</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-stone-600">Tax</span>
                  <span className="font-semibold text-expresso">$0.00</span>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-light-coffee pt-4">
                  <span className="font-bold text-expresso">Total</span>
                  <span className="font-bold text-expresso">$0.00</span>
                </div>
              </div>

              <button className="bg-expresso text-lg font-inter text-cream p-2 my-2 rounded-md w-full cursor-pointer transition-all duration-300 ease-out hover:bg-light-coffee hover:text-dark-brown md:text-2xl my-4">
                Proceed to Checkout
              </button>

              <p className="mt-3 text-center font-inter text-xs text-stone-500">
                Taxes and final costs are for demonstration only.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
function Checkout({ clearCart }) {
  const navigate = useNavigate();
  const initialFormData = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        setOrderPlaced(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [orderPlaced]);

  function handlePlaceOrder(e) {
    e.preventDefault();

    //clear checkout form
    setOrderPlaced(true);
    setFormData(initialFormData);
    setPaymentMethod("");
    //clear cart
    clearCart();
    //navigate tu menu
    setTimeout(() => {
      navigate("/menu");
    }, 3000);
  }

  return (
    <main className="w-full h-auto mx-auto px-4 py-4">
      <div className="mb-8">
        <h1 className="text-2xl text-expresso font-bold font-lora leading-tight md:text-3xl">
          Checkout
        </h1>
        {orderPlaced && (
          <div className="bg-green-100 border border-green-400 text-green-800 p-4 rounded-lg my-4">
            <h2 className="text-xl font-bold">Order Placed Successfully!</h2>
            <p>Thank you for your order. We appreciate your business!</p>
          </div>
        )}
        <form
          onSubmit={handlePlaceOrder}
          className="overflow-x-auto bg-white shadow-sm"
        >
          <h2 className="text-xl text-expresso font-bold font-lora leading-tight md:text-2xl">
            Contact Information
          </h2>
          <div>
            <label
              className="font-inter text-sm font-bold text-expresso"
              htmlFor="full-name"
            >
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-expresso focus:border-expresso text-sm transition-all"
              type="text"
              id="full-name"
              name="name"
              placeholder="Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label
              className="font-inter text-sm font-bold text-expresso"
              htmlFor="user-email"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-expresso focus:border-expresso text-sm transition-all"
              type="email"
              id="user-email"
              name="email"
              placeholder="Youremail@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <h2 className="text-xl text-expresso font-bold font-lora leading-tight md:text-2xl">
            Shipping Address
          </h2>

          <div>
            <label
              className="font-inter text-sm font-bold text-expresso"
              htmlFor="address"
            >
              Address Line 1
            </label>
            <input
              className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-expresso focus:border-expresso text-sm transition-all"
              type="text"
              id="address"
              name="address"
              placeholder="123 Main St"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              className="font-inter text-sm font-bold text-expresso"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-expresso focus:border-expresso text-sm transition-all"
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div>
              <label
                className="font-inter text-sm font-bold text-expresso"
                htmlFor="state-name"
              >
                State
              </label>
              <input
                className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-expresso focus:border-expresso text-sm transition-all"
                type="text"
                id="state-name"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                className="font-inter text-sm font-bold text-expresso"
                htmlFor="zip-code"
              >
                ZIP Code
              </label>
              <input
                className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-expresso focus:border-expresso text-sm transition-all"
                type="text"
                id="zip-code"
                name="zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={(e) =>
                  setFormData({ ...formData, zip: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl text-expresso font-bold font-lora leading-tight mt-4 md:text-2xl">
              Payment Method
            </h2>
            <div>
              <input
                type="radio"
                id="credit-debit"
                name="credit-debit"
                value="credit_card"
                checked={paymentMethod === "credit_card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="ml-2 text-sm" htmlFor="credit-debit">
                Credit/ Debit Card
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="apple"
                name="apple_pay"
                value="apple_value"
                checked={paymentMethod === "apple_pay"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="ml-2 text-sm" htmlFor="apple">
                Apple Pay
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-expresso text-lg font-inter text-cream p-2 my-2 rounded-md w-full cursor-pointer transition-all duration-300 ease-out hover:bg-light-coffee hover:text-dark-brown md:text-2xl my-4"
          >
            Place Order
          </button>
        </form>
      </div>
    </main>
  );
}
export default Checkout;

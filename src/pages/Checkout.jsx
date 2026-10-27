function Checkout() {
  return (
    <main className="w-full h-auto mx-auto px-4 py-4">
      <div className="mb-8">
        <h1 className="text-2xl text-expresso font-bold font-lora leading-tight md:text-3xl">
          Checkout
        </h1>
        <form
          action="/submit-form"
          method="POST"
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
              required
            />
          </div>
          <div className="flex flex-col gap-2">
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
              />
              <label className="ml-2 text-sm" htmlFor="apple">
                Apple Pay
              </label>
            </div>
          </div>
          <button className="bg-expresso text-lg font-inter text-cream p-2 my-2 rounded-md w-full cursor-pointer transition-all duration-300 ease-out hover:bg-light-coffee hover:text-dark-brown md:text-2xl my-4">
            Place Order
          </button>
        </form>
      </div>
    </main>
  );
}
export default Checkout;

function Checkout() {
  return (
    <main className="w-full h-[70vh] mx-auto px-4 py-4">
      <div className="mb-8">
        <h1 className="text-4xl text-expresso font-bold font-lora leading-tight md:text-5xl">
          Checkout
        </h1>
        <h2 className="text-xl text-expresso font-bold font-lora leading-tight md:text-5xl">
          Contact Information
        </h2>
        <form
          action="/submit-form"
          method="POST"
          className="overflow-x-auto bg-white shadow-sm"
        >
          <div>
            <label
              className="font-inter text-sm font-bold text-expresso"
              for="full-name"
            >
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
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
              for="user-email"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
              type="email"
              id="user-email"
              name="email"
              placeholder="Youremail@example.com"
              required
            />
          </div>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-xl text-expresso font-bold font-lora leading-tight md:text-5xl">
          Shipping Address
        </h2>
        <form>
          <div>
            <label
              className="font-inter text-sm font-bold text-expresso"
              for="address"
            >
              Address Line 1
            </label>
            <input
              className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
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
              for="city"
            >
              City
            </label>
            <input
              className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
              type="text"
              id="city"
              name="city"
              placeholder="City"
              required
            />
          </div>
          <div className="flex flex-cols gap-2">
            <div>
              <label
                className="font-inter text-sm font-bold text-expresso"
                for="state-name"
              >
                State
              </label>
              <input
                className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
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
                for="zip-code"
              >
                ZIP Code
              </label>
              <input
                className="w-full px-4 py-2 my-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
                type="text"
                id="zip-code"
                name="zip"
                placeholder="Zip Code"
                required
              />
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

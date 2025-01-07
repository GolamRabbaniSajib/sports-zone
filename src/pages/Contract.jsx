const Contract = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold text-center pt-36 mb-6">
          Contract Agreement
        </h1>
        <p className="text-lg mb-4">
          By accessing or using Sports Zone, you agree to the following terms
          and conditions:
        </p>
        <div className="space-y-4">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. General Terms</h2>
            <p>
              These Terms and Conditions apply to all visitors, users, and
              others who wish to access or use Sports Zone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Purchases and Transactions
            </h2>
            <p>
              When you make a purchase through Sports Zone, you agree to provide
              accurate and current payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. User Responsibilities
            </h2>
            <p>
              As a user of Sports Zone, you are responsible for all activities
              that occur under your account and ensure the security of your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Limitation of Liability
            </h2>
            <p>
              We are not liable for any damages or losses that may occur due to
              the use of our site or its content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Changes to the Terms
            </h2>
            <p>
              Sports Zone reserves the right to modify these terms at any time.
              Changes will be effective immediately after they are posted.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-blue-400 to-teal-400   text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Accept Terms
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contract;

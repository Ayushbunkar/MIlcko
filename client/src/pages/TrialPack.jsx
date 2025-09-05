import React from "react";
import bottleImage from "../assets/images/leftmilkbottle.png";
import Footer from "../components/Footer";

const TrialPack = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "+91",
    email: "",
    deliveryAddress: "",
    packType: "A2 Cow Milk",
  });

  const [addressLength, setAddressLength] = React.useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "deliveryAddress") setAddressLength(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Check the console for the data.");
    console.log("Trial Pack Form Data:", formData);
  };

  return (
    <>
      <div className="bg-[#FFFBF3]  md:max-h-[90vh]">
        <main className="w-full">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-3">
              Taste The <span className="text-yellow-600">Difference!</span>
            </h1>
            <p className="text-gray-600 mt-3 md:px-50 text-xs sm:text-lg md:text-xl leading-relaxed">
              Try our Trial Pack—a convenient way to experience the quality and
              taste of our A2 Cow Milk and A2 Buffalo Milk, before making it a
              part of your daily routine. Because your first impression matters
              to us.
            </p>
          </div>

          <div className="grid md:flex justify-between">
            {/* Bottle always on the left */}
            <div className="h-full">
              <img
                src={bottleImage}
                alt="Trial Pack Bottle"
                className="w-110 object-contain"
                draggable={false}
              />
            </div>

            {/* Form */}
            <div className="mt-1  m-3 md:m-3 md:px-60">
              <div className="bg-white/90  md:p-6 pt-2 p-4 rounded-2xl shadow-lg shadow-amber-300 border border-amber-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4">
                  Get Your Trial Pack!
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onChange={handleChange}
                      value={formData.firstName}
                      className="w-full p-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={handleChange}
                      value={formData.lastName}
                      className="w-full p-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div className="flex items-center border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-yellow-400 overflow-hidden">
                    <select
                      name="countryCode"
                      onChange={handleChange}
                      value={formData.countryCode}
                      className="bg-transparent p-2 text-sm border-r border-gray-300 focus:outline-none pl-4"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      value={formData.phone}
                      className="w-full p-2 bg-transparent border-none focus:ring-0 text-sm"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full p-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-yellow-400"
                    required
                  />

                  <div className="relative">
                    <textarea
                      name="deliveryAddress"
                      placeholder="Delivery Address"
                      rows="3"
                      maxLength="150"
                      onChange={handleChange}
                      value={formData.deliveryAddress}
                      className="w-full p-2 border border-gray-300 rounded-2xl text-sm focus:ring-2 focus:ring-yellow-400 resize-none"
                      required
                    ></textarea>
                    <span className="absolute bottom-2 right-3 text-xs text-gray-400">
                      {addressLength}/150
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Select Trial Pack Type
                    </p>
                    <div className="md:flex flex-wrap items-center gap-4">
                      {["A2 Cow Milk", "A2 Buffalo Milk", "Both"].map(
                        (type) => (
                          <label
                            key={type}
                            className="flex items-center cursor-pointer text-sm"
                          >
                            <input
                              type="radio"
                              name="packType"
                              value={type}
                              checked={formData.packType === type}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                                formData.packType === type
                                  ? "border-yellow-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.packType === type && (
                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                              )}
                            </span>
                            {type}
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white font-bold py-2.5 rounded-full hover:bg-black transition-colors duration-300"
                  >
                    Submit
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    By submitting, you agree to our{" "}
                    <strong className="font-medium text-gray-700">
                      Terms & Conditions
                    </strong>{" "}
                    and{" "}
                    <strong className="font-medium text-gray-700">
                      Privacy Policy
                    </strong>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default TrialPack;

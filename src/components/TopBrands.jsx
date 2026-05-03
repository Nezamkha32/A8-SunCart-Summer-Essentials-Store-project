const TopBrands = () => {
  const brands = [
    "SunShade",
    "CoolBreeze",
    "AquaSkin",
    "BeachVibe",
  ];

  return (
    <section className="max-w-6xl mx-auto my-2 px-4 pb-16">

      <h2  className="text-2xl font-bold my-5">
        Top Brands
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-t-amber-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
          >
            <div className="p-6 text-center">

              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-linear-to-r from-orange-400 to-pink-500 text-white font-bold text-lg">
                {brand.charAt(0)}
              </div>

              <h3 className="text-lg font-semibold mb-2">{brand}</h3>

              <p className="text-gray-500 text-sm">
                Premium summer essentials
              </p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default TopBrands;
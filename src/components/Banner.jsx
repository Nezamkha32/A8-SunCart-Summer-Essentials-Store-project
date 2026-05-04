import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className=" relative h-[50vh] md:h-[65vh] lg:h-[75vh] w-full rounded-xl overflow-hidden shadow-2xl">

      <div
        className="w-full h-48 sm:h-64 md:h-80 lg:h-100 object-cover rounded-lg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/JRwmJG8r/summer-2.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-blue-500">
            Summer Sale <span className="text-pink-400">50% OFF</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Hot deals on sunglasses, outfits, skincare and more.
            Stay cool and stylish this summer.
          </p>

          <div className="flex gap-4">

            <Link href="/all-photos">
              <Button className="px-4 sm:px-6 sm:py-3 text-sm sm:text-base bg-linear-to-r from-pink-500 via-purple-500 to-red-500 text-white font-semibold py-2 hover:scale-105 transition">
                Explore
              </Button>
            </Link>

            <Link href="/shop">
              <Button
                variant="bordered"
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-linear-to-r from-pink-500 via-purple-500 to-red-500 text-white font-semibold hover:scale-105 transition"
              >
                Shop Now
              </Button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
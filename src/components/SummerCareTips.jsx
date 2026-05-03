import { Droplets, Sun, Shirt } from "lucide-react";
import { Button, Card, Chip, Separator } from "@heroui/react";

const SummerCareTips = () => {
  return (
    <section className="bg-base-200 py-14">
      <div className="max-w-6xl mx-auto px-4">

        <h2  className="text-2xl font-bold my-5">
          Summer Care Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <Card className="border rounded-xl">
          <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <div className="flex justify-center mb-4 text-blue-500">
              <Droplets size={36} />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Stay Hydrated
            </h3>

            <p className="text-gray-500">
              Drink plenty of water and avoid sugary drinks during peak heat.
            </p>
          </div>
          </Card>

          {/* Card 2 */}
          <Card className="border rounded-x1">
          <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <div className="flex justify-center mb-4 text-yellow-500">
              <Sun size={36} />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Use Sunscreen
            </h3>

            <p className="text-gray-500">
              Apply SPF 30+ sunscreen before going outside to protect your skin.
            </p>
          </div>
          </Card>

          {/* Card 3 */}
          <Card className="border rounded-x1">
          <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <div className="flex justify-center mb-4 text-pink-500">
              <Shirt size={36} />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Light Clothing
            </h3>

            <p className="text-gray-500">
              Wear breathable, light-colored clothes to stay cool and comfortable.
            </p>
          </div>
          </Card>



        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;
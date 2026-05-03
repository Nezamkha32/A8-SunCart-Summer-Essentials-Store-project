import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

const PhotoDetailsPage = async ({ params }) => {

  const { id } = await params;

const res = await fetch('https://a8-sun-cart-summer-essentials-store-lyart.vercel.app/data.json');

if (!res.ok) {
  throw new Error("Failed to load photos");
}

const text = await res.text();

let photos = [];

try {
  photos = JSON.parse(text);
} catch (err) {
  console.log("Invalid JSON response:", text);
}
  const photo = photos.find((p) => p.id == id);

  if (!photo) {
    return notFound();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/login?callbackUrl=/all-photos/${id}`);
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">
      <div className="relative w-full h-105">
        <Image
          src={photo.image}
          alt={photo.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{photo.name}</h1>
        <p className="text-gray-500 mt-1">{photo.brand}</p>

        <p className="text-2xl font-semibold text-orange-500 mt-3">
          ${photo.price}
        </p>

        <p className="mt-4 text-gray-600">{photo.description}</p>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Features</h3>

          <ul className="list-disc ml-5 space-y-1">
            {photo.features?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <p className="mt-4 font-medium">Stock: {photo.stock}</p>

        <button className="mt-6 px-6 py-2 rounded-full bg-black text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
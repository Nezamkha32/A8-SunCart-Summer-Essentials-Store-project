import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
    const res = await fetch('https://a8-sun-cart-summer-essentials-store-lyart.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 3)




    return (
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-2xl font-bold my-5">Popular Products</h1>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
            </div>
        </div>
    );
};

export default TopGenerations;
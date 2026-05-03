import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async ({searchParams}) => {
    const {category} = await searchParams;
    console.log(category)

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


    const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos


    return (
        <div>
            <h1 className="text-2xl font-bold m-4">All Photos</h1>
            <Category/>
            <div className="grid grid-cols-4 gap-5">
                {filteredPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}/>)}
            </div>

            
        </div>
    );
};

export default AllPhotosPage;
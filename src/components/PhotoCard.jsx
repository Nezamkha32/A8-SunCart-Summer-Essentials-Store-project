import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const PhotoCard = ({photo}) => {
    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
            <Image
                src={photo.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.name}
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
                />

                <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
            </div>
            <div>
                <h2 className="font-medium">{photo.name}</h2>
            </div>
        <div className="card-body">
        <p className="text-sm text-gray-500">{photo.brand}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-orange-500">
            ${photo.price}
          </span>

          <span className="text-sm">⭐ {photo.rating}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {photo.description}
        </p>
      </div>

           <div className="flex gap-5">
             <div className="flex items-center gap-2">
            </div>
            <Separator orientation="vertical"/>
            <div className="flex items-center gap-2">
            </div>
           </div>

     <Link href={`/all-photos/${photo.id}`}>      <Button variant="outline" className={'w-full'}>View Details</Button></Link>
            
        </Card>
    );
};

export default PhotoCard;

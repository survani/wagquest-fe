import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStore } from "../../state/useStore";
import { useEffect } from "react";

interface AttractionProps {
  attraction?: {
    id: number;
    name: string;
    description: string;
    slug: string;
    location: {
      city: string;
      state: string;
    };
    rating: number;
    images: string[];
  };
}

const AttractionCard = () => {
  const { fetchAttractions, attractions } = useStore();
  const router = useRouter();

  useEffect(() => {
    fetchAttractions();
  }, [fetchAttractions]);

  const handleRoute = (slug: string) => {
    router.push(`/attraction/${slug}`);
  };

  return (
    <>
      {attractions.length > 0 ? (
        attractions.map((attraction: AttractionProps["attraction"]) => (
          <Card
            key={attraction?.id}
            onClick={() => handleRoute(attraction?.slug ?? "")}
            className="w-full border-none shadow-md rounded-lg overflow-hidden"
          >
            <CardHeader className="p-0">
              <figure className="relative">
                <div className="flex items-center justify-center">
                  <Image
                    src={attraction?.images[0] || ""}
                    alt={attraction?.name || ""}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded shadow">
                  <span className="text-sm font-bold">
                    &#9733; {attraction?.rating}
                  </span>
                </div>
              </figure>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="font-bold text-lg mb-2">
                {attraction?.name}
              </CardTitle>
              <address className="text-gray-600 text-sm">
                {`${attraction?.location.city}, ${attraction?.location.state}`}
              </address>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No attractions found.</p>
      )}
    </>
  );
};

export default AttractionCard;
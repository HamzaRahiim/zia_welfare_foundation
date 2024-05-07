"use client";
import image1 from "@/images/images1.webp";
import image2 from "@/images/images2.webp";
import image3 from "@/images/images3.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const Carosel = () => {
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 })]}>
      <CarouselContent>
        <CarouselItem>
          <Image
            src={image1}
            alt="imagesSliding"
            className="h-96 md:h-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center max-w-screen-sm space-y-4 hover:cursor-pointer">
            <h1 className="text-white text-3xl md:text-5xl font-medium">
              Helping Helpless
            </h1>
            <p className="text-sm text-white">
              Join Us to Help Together and save the World, Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Veniam delectus
              repellendus neque aperiam animi?{" "}
            </p>
            <button className="text-white px-4 py-2 rounded-lg border border-amber-700 hover:text-amber-200 hover:bg-amber-700 duration-500 hover:scale-105">
              <Link href="/about">Discover More</Link>
            </button>
          </div>
        </CarouselItem>
        <CarouselItem>
          <Image
            src={image2}
            alt="imagesSliding"
            className="h-96 md:h-[500px]"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={image3}
            alt="imagesSliding"
            className="h-96 md:h-[500px]"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default Carosel;

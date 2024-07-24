"use client";
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
import CaroselType from "@/type";
const Carosel = ({ data }: { data: CaroselType[] }) => {
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 })]}>
      <CarouselContent>
        {data.map((data, key) => (
          <CarouselItem className="relative" key={key}>
            <Image
              src={data.mainImage}
              width={1300}
              height={500}
              alt="imagesSliding"
              className="h-96 md:h-[500px]"
            />
            <div className="caroselPost">
              <h1 className="caroselMain">{data.title}</h1>
              <p className="caroselParag">{data.description}</p>
              <button className="caroselButt">
                <Link href="/about">Discover More</Link>
              </button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default Carosel;

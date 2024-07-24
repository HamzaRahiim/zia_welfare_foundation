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
import { getCaroselData } from "@/lib/carosel_data";
import CaroselType from "@/type";
import { useEffect, useState } from "react";
const Carosel = () => {
  const [data, setData] = useState<CaroselType[]>([]);

  const fetchData = async () => {
    try {
      const data: CaroselType[] = await getCaroselData();
      setData(data);
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    }
  };

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

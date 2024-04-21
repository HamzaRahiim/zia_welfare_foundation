import Hero from "@/components/sections/Hero";
import Media from "@/components/sections/Media";
import Services from "@/components/sections/Services";
import Target from "@/components/sections/Target";

export default function Home() {
  return (
    <main className="flex flex-col space-y-4 md:space-y-0 wrapper">
      {/* hero section */}
      <div className="max-w-screen-lg mx-auto">
        <Hero />
      </div>
      {/* target section */}
      <div className="md:order-first">
        <Target />
      </div>
      {/* service section  */}
      <Services />
      {/* media section  */}
      <Media />
    </main>
  );
}

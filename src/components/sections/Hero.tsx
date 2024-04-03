import Image from "next/image";
import Button from "../shared/Button";
import poor1 from "@/images/poor1.jpg";
import poor2 from "@/images/poor2.jpeg";
import poor3 from "@/images/poor3.jpeg";

const Hero = () => {
  return (
    <section className="flex md:flex-row heroSection flex-col">
      {/* left side  */}
      <div className="flex-1 mt-4 pl-2 md:order-first">
        {/* heading  */}
        <span className="text-3xl hidden md:grid font-serif">
          Welcome to{" "}
          <h1 className="py-2 font-semibold">ZIA WELFARE FOUNDATION</h1>
        </span>
        {/* paragraph  */}
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet. <br className="hidden md:grid" />
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        {/* button  */}
        <div className="buttonContainer">
          <button>
            <Button
              text={`Explore More ->`}
              link="/about"
              css="border border-slate-500"
            />
          </button>
          <div className="flex mt-10 justify-around">
            <button>
              <Button
                text="Donate Us"
                link="/contact"
                css="bg-red-500 buttonStyle"
              />
            </button>
            <button>
              <Button
                text="Sponser Us"
                link="/contact"
                css="bg-blue-500 buttonStyle"
              />
            </button>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div className="rightParent">
        {/* Container for the left and right images */}
        <div className="leftChild">
          {/* Left image */}
          <div className="-left-14 imageHide">
            <Image src={poor3} alt="Logo" className="sideImages" />
          </div>
          <span className="smTitle">
            Welcome to{" "}
            <h1 className="py-2 font-semibold">ZIA WELFARE FOUNDATION</h1>
          </span>
          {/* Right image */}
          <div className="-right-14 imageHide">
            <Image src={poor2} alt="Logo" className="sideImages" />
          </div>
        </div>
        {/* Separate container for the bottom image to allow it to overflow */}
        <div className="bottomImage">
          <Image
            src={poor1}
            alt="Logo"
            className="rounded-md md:w-2/3 md:h-56 w-60 h-44"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;

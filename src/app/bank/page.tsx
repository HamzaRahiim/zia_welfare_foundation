import Image from "next/image";
import bank from "@/images/bank.png";
import AboutComp from "@/components/sections/About";

const Bank = () => {
  return (
    <main className="wrapperSmall grid md:grid-cols-2 grid-cols-1 gap-4 mb-6">
      {/* left side for text  */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center pt-8 text-amber-500">
          Show You Care. <br />
          Change Thier World.
        </h1>
        <p className="text-sm text-center">Zia Welfare Foundation</p>
        <ul className="hidden mt-8 md:grid">
          <AboutComp
            accountNumber={123454}
            accountTitle="ZIA khan"
            mainHeading="Donate US through Bank"
            IBAN={1111111}
            bank="Meezan Bank"
          />
        </ul>
      </div>
      {/* right side for image  */}
      <div className="flex justify-center items-center mt-4 h-60 md:h-[270px]">
        <Image
          src={bank}
          alt="Image for Bank Page"
          className="rounded-t-full max-w-60 h-full"
        />
      </div>
      {/* bottom for bank details  */}
      <div className="md:col-span-2 flex md:flex-row flex-col justify-around items-center gap-y-4 md:gap-y-0">
        <ul className="md:hidden mt-8">
          <AboutComp
            accountNumber={123454}
            accountTitle="ZIA khan"
            mainHeading="Donate US through Bank"
            IBAN={1111111}
            bank="Meezan Bank"
          />
        </ul>
        <ul>
          <AboutComp
            accountNumber={222222}
            mainHeading="Donate US through EasyPaisa"
            accountTitle="Zia Khan"
            bgColor="bg-green-500"
          />
        </ul>
        <ul>
          <AboutComp
            accountNumber={3333333}
            mainHeading="Donate US through JazzCash"
            accountTitle="Zia khan"
            bgColor="bg-red-500"
          />
        </ul>
      </div>
    </main>
  );
};
export default Bank;

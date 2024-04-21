import Carosel from "@/components/shared/Carosel";

const Target = () => {
  return (
    <section className="">
      {/* headline  */}
      <div className="mb-0 md:mb-0">
        <h1 className="bg-lime-400 text-2xl font-serif tracking-widest h-16 flex justify-center items-center text-blue-800 md:hidden">
          WHAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do
        </h1>
      </div>
      {/* sliding part  */}
      <Carosel />
    </section>
  );
};
export default Target;

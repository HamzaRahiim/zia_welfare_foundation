import CopyButton from "../shared/CopyButton";
import BankData from "@/type";
const AboutComp = ({
  accountNumber,
  accountTitle,
  IBAN,
  bank,
  mainHeading,
  bgColor = "bg-blue-500",
}: BankData) => {
  let data = {
    accountNumber: accountNumber,
    accountTitle: accountTitle,
    IBAN: IBAN,
    bank: bank,
  };
  let dataString = JSON.stringify(data);

  return (
    <div className="hover:cursor-pointer overflow-visible relative group w-[250px] h-32 shadow-lg shadow-black rounded-md">
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 text-white bg-opacity-90 transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-bottom rounded-md ${bgColor}`}
      >
        <ul className="text-center flex flex-col items-center justify-center h-full hover:cursor-pointer relative">
          <div className="absolute top-2 right-3">
            <CopyButton textToCopy={dataString} />
          </div>
          {bank == null ? null : <li>Bank: {bank}</li>}
          <li>Account Number: {accountNumber}</li>
          {IBAN == null ? null : <li>IBAN: {IBAN}</li>}
          <li>Account Title: {accountTitle}</li>
        </ul>
        {/* copy to clipboard  */}
      </div>
      {/* default text  */}
      <h1 className="text-2xl font-mono max-w-32 mx-auto text-center pt-4">
        {mainHeading}
      </h1>
    </div>
  );
};

export default AboutComp;

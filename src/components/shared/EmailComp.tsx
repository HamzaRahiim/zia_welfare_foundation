import { getEmailData } from "@/lib/emailData";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const EmailComp = async () => {
  const data = await getEmailData();
  console.log(data);
  return (
    <div className="mainProp">
      <Link href={"mailto:hamzarahim836@gmail.com"}>
        <h1 className="email">
          <CiMail /> <span className="hidden md:flex">{data.email}</span>
          <span className="md:hidden">{data.emailMob}</span>
        </h1>
      </Link>
      <Link href={"whatsapp://send?phone=+923150311920"}>
        <p className="number">
          <CiPhone />{" "}
          <span className="hidden md:flex">{`(+92) ${data.phone}`}</span>
          <span className="md:hidden">{`${data.phoneMob}`}</span>
        </p>
      </Link>
    </div>
  );
};
export default EmailComp;

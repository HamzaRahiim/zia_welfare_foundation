import { getEmailData } from "@/lib/emailData";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import EmailType from "@/type";
const EmailComp = async () => {
  const data: EmailType = await getEmailData();
  return (
    <div className="mainProp">
      <Link href={`mailto:${data.email}`}>
        <h1 className="email">
          <CiMail /> <span className="hidden md:flex">{data.email}</span>
          <span className="md:hidden">{data.emailMob}</span>
        </h1>
      </Link>
      <Link href={`whatsapp://send?phone=+92${data.phone}`}>
        <p className="number">
          <CiPhone />{" "}
          <span className="hidden md:flex">{`(+92) ${data.phone}`}</span>
          <span className="md:hidden">{data.phoneMob}</span>
        </p>
      </Link>
    </div>
  );
};
export default EmailComp;

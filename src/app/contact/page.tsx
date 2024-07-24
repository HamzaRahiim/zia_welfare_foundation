import Link from "next/link";
import { CiMail, CiPhone } from "react-icons/ci";
import ProfileForm from "@/components/sections/ContactForm";
import { getEmailData } from "@/lib/emailData";
import EmailType from "@/type";

export const revalidate = 172800;

const Contact = async () => {
  const emailData: EmailType = await getEmailData();
  return (
    <main className="max-w-screen-md mx-auto flex flex-col md:flex-row md:my-12 mb-12 gap-y-4">
      {/* left side text  */}
      <section className="max-w-screen-md mx-auto flex flex-col md:flex-row my-12 gap-y-4">
        {/* /I want to add space between the words GET IN Touch  */}
        <div className="md:ml-12">
          <h3 className="text-lg mb-4">GET IN TOUCH</h3>
          <h1 className="text-green-400 text-3xl font-semibold">Share Your</h1>
          <h3 className="text-3xl font-semibold">Ideas To Us</h3>
          <p className="max-w-64 text-sm mt-2">
            Contact us for questions, technical assistance, or collaboration
            opportunities via the contact information provided.
          </p>
          <div className="hidden mt-12 h-20 md:flex flex-col gap-y-3">
            <Link href={`whatsapp://send?phone=+92${emailData.phone}`}>
              <h1 className="flex gap-x-4">
                <p className="border rounded-full p-1 bg-green-400">
                  <CiPhone className="bg-green-400" />
                </p>
                <span className="hover:text-green-400">
                  {`(+92) ${emailData.phone}`}
                </span>
              </h1>
            </Link>
            <Link href={`mailto:${emailData.email}`}>
              <h1 className="flex gap-x-4">
                <p className="border rounded-full p-1 bg-green-400">
                  <CiMail className="bg-green-400" />
                </p>
                <span className="hover:text-green-400">{emailData.email}</span>
              </h1>
            </Link>
          </div>
        </div>
      </section>
      {/* right side form  */}
      <section className="flex-1">
        <ProfileForm />
      </section>
    </main>
  );
};
export default Contact;

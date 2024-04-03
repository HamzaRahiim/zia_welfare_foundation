import Link from "next/link";

const Button = ({
  text,
  link,
  target,
  css,
}: {
  text: string;
  link: string;
  target?: string;
  css?: string;
}) => {
  return (
    <Link
      href={link}
      className={`${css} px-4 py-3 rounded-md font-medium`}
      target={target}
    >
      {text}
    </Link>
  );
};
export default Button;

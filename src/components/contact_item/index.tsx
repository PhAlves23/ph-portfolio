import Link from "next/link";
import path from "path";
import { IconType } from "react-icons";

interface ContactItemProps {
  title: string;
  description: string;
  icon: IconType;
  path: string;
}

export const ContactItem = ({
  title,
  description,
  icon: Icon,
  path,
}: ContactItemProps) => {
  return (
    <Link
      href={path ? path : ""}
      target="_blank"
      // className="w-full flex justify-start items-center gap-5 mb-5"
    >
      <div className="w-12 h-12 rounded-xl bg-yellow-100/50 flex justify-center items-center">
        <Icon size={24} className="text-yellow-400" />
      </div>
      {/* <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-neutral-300">{description}</p>
      </div> */}
    </Link>
  );
};

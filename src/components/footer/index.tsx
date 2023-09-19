import { headerLinks, socialLinks } from "@/mocks";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="container-custom p-5 xl:px-0 border-t border-t-neutral-700">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <Image
            src="/logo.svg"
            width={113}
            height={43}
            alt="Logo image"
            className="mb-5 lg:mb-0"
          />
          <nav>
            <ul className="grid grid-cols-3 lg:flex justify-center items-center gap-5">
              {headerLinks.map(({ id, label, path }) => (
                <li key={id}>
                  <a href={path}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center">
          <p>&copy; Paulo Alves</p>

          <div className="flex gap-5">
            {socialLinks.map(({ id, label, icon: Icon, path }) => (
              <a
                key={id}
                href={path}
                target="_blank"
                title={label}
                className="bg-neutral-700 p-2 rounded-full"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) => {
  return (
    <div className="bg-neutral-800 py-14 px-10 text-center flex flex-col justify-center items-center rounded-2xl">
      <div className="w-12 h-12 rounded-xl bg-yellow-100/50 flex justify-center items-center mb-5">
        <Icon size={24} className="text-yellow-400" />
      </div>
      <h3 className="mb-3 font-medium text-2xl">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

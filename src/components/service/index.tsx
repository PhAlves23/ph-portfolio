import { FaPaintBrush } from "react-icons/fa";
import { ServiceCard } from "../cards/service_card";
import { serviceItems } from "@/mocks";

export const Service = () => {
  return (
    <section>
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 container-custom py-10 px-5 xl:py-20 xl:px-0">
        {Array.isArray(serviceItems) &&
          serviceItems.length > 0 &&
          serviceItems.map(({ id, icon, title, description }) => {
            return (
              <ServiceCard
                key={id}
                icon={icon}
                title={title}
                description={description}
              />
            );
          })}
      </div>
    </section>
  );
};

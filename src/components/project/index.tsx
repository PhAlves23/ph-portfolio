import { projectsItems } from "@/mocks";
import { ProjectCard } from "../cards/project_card";
import { SectionTitle } from "../section_title";

export const Project = () => {
  return (
    <section id="projects">
      <div className="w-full container-custom py-10 px-5 xl:py-20 xl:px-0">
        <SectionTitle title="Projetos" subtitle="Alguns dos meus projetos">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat
            totam harum natus illum inventore dolorum consectetur veritatis
            sint, adipisci nesciunt hic iure nostrum unde. Tempore labore a
            inventore eligendi?
          </p>
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {Array.isArray(projectsItems) &&
            projectsItems.length > 0 &&
            projectsItems.map(({ id, title, image, description, tools }) => {
              return (
                <ProjectCard
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  description={description}
                  tools={tools}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

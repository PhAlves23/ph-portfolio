import { Button } from "../button";
import { ContactItem } from "../contact_item";
import { InputDefault } from "../inputs/input_default";
import { FiMail } from "react-icons/fi";
import { SiLinkedin, SiInstagram, SiGithub, SiDiscord } from "react-icons/si";
import { SectionTitle } from "../section_title";

export const Contact = () => {
  const contactItems = [
    // {
    //   id: 1,
    //   icon: FiMail,
    //   title: "E-mail",
    //   description: "ph23.alves@gmail.com",
    //   path: "mailto:ph23.alves@gmail.com",
    // },

    {
      id: 2,
      icon: SiInstagram,
      title: "Instagram",
      description: "@ph.alves.dev",
      path: "https://www.instagram.com/ph.alves.dev/",
    },
    {
      id: 3,
      icon: SiLinkedin,
      title: "Linkedin",
      description: "ph-alves",
      path: "https://www.linkedin.com/in/ph-alves/",
    },
    {
      id: 4,
      icon: SiGithub,
      title: "GitHub",
      description: "PhAlves23",
      path: "https://github.com/PhAlves23",
    },
  ];

  return (
    <section className="w-full lg:flex-row gap-10 lg:gap-16 container-custom py-10 px-5 xl:py-20 xl:px-0 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div className="order-2 lg:order-1">
          <InputDefault
            label="Nome"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
          />

          <InputDefault
            label="E-mail"
            id="email"
            name="email"
            placeholder="Digite o seu e-mail"
          />

          <div className="mb-5">
            <label htmlFor="message" className="label-style">
              Mensagem
            </label>
            <textarea
              cols={30}
              rows={10}
              className="textarea-style resize-none"
              placeholder="Digite a sua mensagem"
            ></textarea>
          </div>

          <Button text="Enviar mensagem" variant="primary" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionTitle
            title="Contato"
            subtitle="Entre em contato!"
            isHalf={false}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
              eligendi, molestias accusamus deserunt beatae atque quaerat
              doloribus omnis cupiditate debitis reiciendis quam quod
              consequatur repellat mollitia. Consequatur distinctio at
              necessitatibus.
            </p>
          </SectionTitle>

          <div className="flex gap-5">
            {Array.isArray(contactItems) &&
              contactItems.length > 0 &&
              contactItems.map(({ id, icon, title, description, path }) => {
                return (
                  <ContactItem
                    key={id}
                    icon={icon}
                    title={title}
                    description={description}
                    path={path}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

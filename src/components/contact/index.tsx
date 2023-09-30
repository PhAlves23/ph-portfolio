"use client";
import { Button } from "../button";
import { ContactItem } from "../contact_item";
import { InputDefault } from "../inputs/input_default";
import { SectionTitle } from "../section_title";
import { contactItems } from "@/mocks";
import { useState } from "react";
// import sendEmail from "@/utils/send_email";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    console.log(name, email, message);
    // await sendEmail(name, email, message);
  };

  return (
    <section
      id="contact"
      className="w-full lg:flex-row gap-10 lg:gap-16 container-custom py-10 px-5 xl:py-20 xl:px-0 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div className="order-2 lg:order-1">
          <InputDefault
            label="Nome"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />

          <InputDefault
            label="E-mail"
            id="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mb-5">
            <label htmlFor="message" className="label-style">
              Mensagem
            </label>
            <textarea
              cols={30}
              rows={5}
              className="textarea-style resize-none"
              placeholder="Digite a sua mensagem"
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <Button
            text="Enviar mensagem"
            variant="primary"
            onClick={handleSubmit}
          />
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

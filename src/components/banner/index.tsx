"use client";
import Image from "next/image";
import { Button } from "../button";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  return (
    <section className="w-full container-custom py-10 px-5 lg:py-10 lg:px-0">
      {/* <Image src="/banner.svg" width={370} height={420} alt="Banner image" /> */}
      <div className="w-full h-full lg:h-screen flex flex-col items-center max-w-3xl my-0 mx-auto">
        <Image
          src="/banner.svg"
          width={200}
          height={220}
          alt="Banner image"
          className="mb-10"
        />
        <div className="text-center text-3xl lg:text-6xl font-medium mb-8">
          <Typewriter
            words={["Opaa, eae Ph aqui!"]}
            loop={500}
            cursor={true}
            cursorColor="#DFA81A"
            cursorBlinking={false}
            cursorStyle="⚡"
            typeSpeed={90}
            delaySpeed={5000}
            deleteSpeed={100}
          />
        </div>

        <p className="text-sm text-center mb-12 max-w-md">
          Desenvolvedor FullStack Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quae iusto ad aliquid corporis obcaecati magni
          debitis minus exercitationem.
        </p>

        <div className="flex justify-center items-center gap-5">
          <Button type="button" text="Dowload CV" variant="primary" />
          <Button type="button" text="Entrar em contato" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import { SectionTitle } from "../section_title";

export const About = () => {
  return (
    <section
      id="about"
      className="container-custom py-10 px-5 xl:py-20 xl:px-0"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
        <div className="flex flex-col gap-3 mb-5">
          <h2 className="uppercase text-sm font-light">Sobre mim</h2>
          <h3 className="uppercase text-2xl font-semibold text-yellow-400">
            Paulo Henrique Andrade Alves
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            possimus. Voluptatem totam dolorum deserunt ut maiores hic
            temporibus quisquam unde, vitae sed, perferendis optio, Eligendi
            fuga sit perferendis rem tempora optio consequatur est cum
            laudantium nesciunt alias sapiente? Excepturi, consequuntur
            repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            facilis praesentium nesciunt eveniet similique! Eligendi fuga sit
            perferendis rem tempora optio consequatur est cum laudantium
            distinctio esse, eum repudiandae illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi
            nemo id, aliquam non veniam deserunt quae perspiciatis provident
            quasi voluptate. Eaque distinctio laborum ipsa fugit? Adipisci
            perspiciatis recusandae natus?
          </p>
        </div>
        <Image
          src="https://placehold.co/500x600/png"
          width={500}
          height={600}
          alt="About image"
          className="rounded-2xl w-full"
        />
      </div>
    </section>
  );
};

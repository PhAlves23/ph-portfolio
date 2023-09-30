"use client";

import Image from "next/image";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tools: any[] | undefined;
}

export const ProjectCard = ({
  id,
  title,
  description,
  image,
  tools,
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <Image
        src={image ? image : ""}
        width={384}
        height={300}
        alt="Project image"
        className="rounded-t-2xl w-full"
      />

      <div className="bg-neutral-800 rounded-b-2xl px-5 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
          <Link href={`/projeto_detalhe/${id}`} title="Ver mais">
            <motion.div
              whileTap={{ scale: 0.85 }}
              className="bg-neutral-700 p-3 lg:p-5 rounded-full"
            >
              <FiEye size={28} />
            </motion.div>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {tools &&
            tools.map(({ id, name, path: Path }) => {
              return (
                <div key={id}>
                  <Path size={26} className="ml-2" title={name} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

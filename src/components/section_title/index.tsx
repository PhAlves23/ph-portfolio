interface SectionTitleProps {
  title: string;
  subtitle: string;
  isHalf?: boolean;
  children: React.ReactNode;
}

export const SectionTitle = ({
  title,
  subtitle,
  isHalf = true,
  children,
}: SectionTitleProps) => {
  return (
    <div
      className={`flex flex-col gap-3 justify-between mb-5 ${
        isHalf ? "lg:w-1/2" : ""
      }`}
    >
      <h2 className="uppercase text-sm font-light">{title}</h2>
      <h3 className="uppercase text-2xl font-semibold text-yellow-400">
        {subtitle}
      </h3>
      {children}
    </div>
  );
};

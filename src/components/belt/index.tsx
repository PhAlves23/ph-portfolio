import Image from "next/image";

export const Belt = () => {
  const beltItems = [
    {
      id: 1,
      label: "Front-end",
    },
    {
      id: 2,
      label: "Back-end",
    },
    {
      id: 3,
      label: "Mobile",
    },
    {
      id: 4,
      label: "DevOps",
    },
    {
      id: 5,
      label: "UX/UI",
    },
    {
      id: 6,
      label: "QA",
    },
  ];
  return (
    <div>
      {beltItems.map(({ id, label }) => (
        <span key={id} className="flex">
          {label}
        </span>
      ))}
    </div>
  );
};

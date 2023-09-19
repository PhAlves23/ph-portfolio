import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
  text: string;
  icon?: ReactNode;
}

const variantStyle = {
  base: "py-3 px-6 border rounded-lg font-medium",
  default: "bg-black text-white",
  primary: "bg-yellow-500 text-black border-yellow-500",
  secondary: "text-white border-gray-300",
  hasIcon: "flex justify-center items-center gap-5",
};

export const Button = ({ variant = "default", text, icon }: Props) => {
  return (
    <button
      className={clsx(
        variantStyle.base,
        icon && variantStyle.hasIcon,
        variantStyle[variant]
      )}
    >
      {icon}
      {text}
    </button>
  );
};

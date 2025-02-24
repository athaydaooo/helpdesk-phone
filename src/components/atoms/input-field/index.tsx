"use client";

import { clsx } from "clsx";
import * as React from "react";

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(
        className,
        "overflow-hidden p-2.5 w-full text-xs md:text-base text-left rounded-xl bg-slate-100 shadow-[0px_4px_7px_rgba(0,0,0,0.25)]"
      )}
    />
  );
};

"use client";

import { clsx } from "clsx";
import * as React from "react";

interface InputNumberFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  max?: number;
  min?: number;
}

export const InputNumberField: React.FC<InputNumberFieldProps> = ({
  placeholder,
  value,
  onChange,
  className = "",
  max = 10,
  min = 0,
}) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(
        className,
        "overflow-hidden p-2.5 w-full text-xs md:text-base text-left rounded-xl bg-slate-100 shadow-[0px_4px_7px_rgba(0,0,0,0.25)]"
      )}
      min={min}
      max={max}
    />
  );
};

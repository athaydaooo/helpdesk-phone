"use client";

import { FieldNames } from "@/components/organisms/phone-form";
import { clsx } from "clsx";
import * as React from "react";
import { ImageWrapper } from "../image-wrapper";

interface InputNumberFieldProps {
  name: FieldNames;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validateField: (field: FieldNames) => void;
  className?: string;
  max?: number;
  min?: number;
  onInfoHover?: () => void;
}

export const InputNumberField: React.FC<InputNumberFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
  validateField,
  className = "",
  max = 10,
  min = 0,
}) => {
  return (
    <div
      className={clsx(
        className,
        "flex flex-row overflow-hidden p-2.5 w-full text-xs md:text-base text-left rounded-xl bg-slate-100"
      )}
    >
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => validateField(name)}
        min={min}
        max={max}
        className="bg-transparent w-full [&::-webkit-inner-spin-button]:appearance-none"
      />
      <ImageWrapper imageUrl="/INFO.png" alt="info icon" className="w-[2em]" />
    </div>
  );
};

"use client";

import { FieldNames } from "@/components/organisms/phone-form";
import { clsx } from "clsx";
import * as React from "react";

interface InputNumberFieldProps {
  name: FieldNames;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validateField: (field: FieldNames) => void;
  className?: string;
  max?: number;
  min?: number;
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
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => validateField(name)}
      className={clsx(
        className,
        "overflow-hidden p-2.5 w-full text-xs md:text-base text-left rounded-xl bg-slate-100"
      )}
      min={min}
      max={max}
    />
  );
};

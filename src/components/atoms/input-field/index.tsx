"use client";

import { FieldNames } from "@/components/organisms/phone-form";
import { clsx } from "clsx";
import * as React from "react";

interface InputFieldProps {
  name: FieldNames;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validateField: (field: FieldNames) => void;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
  validateField,
  className = "",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => {
        validateField(name);
      }}
      className={clsx(
        className,
        "overflow-hidden p-2.5 w-full text-xs md:text-base text-left rounded-xl bg-slate-100"
      )}
    />
  );
};

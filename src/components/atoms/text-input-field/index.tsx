"use client";

import { FieldNames } from "@/components/organisms/phone-form";
import clsx from "clsx";
import * as React from "react";

interface TextInputFieldProps {
  name: FieldNames;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  validateField: (field: FieldNames) => void;
  className?: string;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  name,
  value,
  placeholder,
  onChange,
  validateField,
  className = "",
}) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => validateField(name)}
      className={clsx(
        className,
        "overflow-hidden w-full px-2 pt-2.5 pb-20 text-xs md:text-base rounded-2xl bg-slate-100 min-h-[50px] shadow-[0px_4px_7px_rgba(0,0,0,0.25)] resize-none"
      )}
    />
  );
};

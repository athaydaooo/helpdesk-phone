"use client";

import * as React from "react";

interface TextInputFieldProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="overflow-hidden w-full px-2 pt-2.5 pb-20 text-xs md:text-base rounded-2xl bg-slate-100 min-h-[50px] shadow-[0px_4px_7px_rgba(0,0,0,0.25)] resize-none"
    />
  );
};

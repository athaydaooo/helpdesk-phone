"use client";

import * as React from "react";
import Image from "next/image";

interface PhoneFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneField: React.FC<PhoneFieldProps> = ({ value, onChange }) => {
  return (
    <div className="flex justify-between p-2.5 text-center rounded-2xl bg-slate-100 shadow-[0px_4px_7px_rgba(0,0,0,0.25)] w-full">
      <div className="flex gap-1.5 items-center h-full">
        <span className="self-stretch my-auto text-xs">+55</span>
        <input
          type="tel"
          placeholder="Whatsapp com DDD"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent text-xs text-black outline-none"
        />
      </div>
      <Image
        src="/whatsapp-gray.png"
        width={12}
        height={12}
        alt=""
        className="object-contain aspect-square"
      />
    </div>
  );
};

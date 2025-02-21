"use client";

import { InputField } from "@/components/atoms/input-field";
import * as React from "react";

interface DualFieldProps {
  ramalValue: string;
  internalRamalValue: string;
  onRamalChange: (value: string) => void;
  onInternalRamalChange: (value: string) => void;
}

export const DualInputField: React.FC<DualFieldProps> = ({
  ramalValue,
  internalRamalValue,
  onRamalChange,
  onInternalRamalChange,
}) => {
  return (
    <div className="flex gap-1.5 justify-between text-center w-full">
      <InputField
        placeholder="Ramal"
        value={ramalValue}
        onChange={onRamalChange}
        className="flex-1"
      />
      <InputField
        placeholder="Ramal interno"
        value={internalRamalValue}
        onChange={onInternalRamalChange}
        className="flex-1"
      />
    </div>
  );
};

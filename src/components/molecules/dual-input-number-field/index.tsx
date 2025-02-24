"use client";

import { InputNumberField } from "@/components/atoms/input-number-field";
import * as React from "react";

interface DualInputNumberProps {
  ramalValue: string;
  internalRamalValue: string;
  onRamalChange: (value: string) => void;
  onInternalRamalChange: (value: string) => void;
  maxLength?: number;
}

export const DualInputNumberField: React.FC<DualInputNumberProps> = ({
  ramalValue,
  internalRamalValue,
  onRamalChange,
  onInternalRamalChange,
  maxLength,
}) => {
  return (
    <div className="flex gap-1.5 justify-between text-center w-full">
      <InputNumberField
        placeholder="Ramal"
        value={ramalValue}
        onChange={onRamalChange}
        className="flex-1"
        max={maxLength}
      />
      <InputNumberField
        placeholder="Ramal interno"
        value={internalRamalValue}
        onChange={onInternalRamalChange}
        className="flex-1"
        max={maxLength}
      />
    </div>
  );
};

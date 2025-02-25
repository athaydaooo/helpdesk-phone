"use client";

import { InputNumberField } from "@/components/atoms/input-number-field";
import clsx from "clsx";
import * as React from "react";

interface DualInputNumberProps {
  ramalValue: string;
  internalRamalValue: string;
  onRamalChange: (value: string) => void;
  onInternalRamalChange: (value: string) => void;
  maxLength?: number;
  ramalClassName?: string;
  internalRamalClassName?: string;
}

export const DualInputNumberField: React.FC<DualInputNumberProps> = ({
  ramalValue,
  internalRamalValue,
  onRamalChange,
  onInternalRamalChange,
  maxLength,
  ramalClassName,
  internalRamalClassName,
}) => {
  return (
    <div className="flex gap-1.5 justify-between text-center w-full">
      <InputNumberField
        placeholder="Ramal"
        value={ramalValue}
        onChange={onRamalChange}
        className={clsx("flex-1", ramalClassName)}
        max={maxLength}
      />
      <InputNumberField
        placeholder="Ramal interno"
        value={internalRamalValue}
        onChange={onInternalRamalChange}
        className={clsx("flex-1", internalRamalClassName)}
        max={maxLength}
      />
    </div>
  );
};

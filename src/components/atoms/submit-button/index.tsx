"use client";

import * as React from "react";

export const SubmitButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="overflow-hidden px-4 py-2.5 text-xs text-center text-white whitespace-nowrap bg-blue-guaruja rounded-2xl shadow-[0px_4px_7px_rgba(0,0,0,0.25)] w-[120px]"
    >
      ENVIAR
    </button>
  );
};

"use client";

import * as React from "react";
import "./style.css";

interface SubmitButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <>
      <button
        id="btn"
        className="w-fit h-fit flex justify-center items-center py-2 px-6 text-base text-white bg-blue-guaruja"
        onClick={() => {
          document.getElementById("btnText")!.innerHTML = "ENVIADO";
          document.getElementById("btn")!.classList.add("active");
          onClick();
        }}
      >
        <p id="btnText">ENVIAR</p>
        <div className="check-box !w-[28%] !h-full"></div>
      </button>
    </>
  );
};

/*

 <button
      onClick={onClick}
      className="flex flex-row gap-2 justify-center items-center overflow-hidden px-4 py-2.5 text-center text-white whitespace-nowrap bg-blue-guaruja rounded-2xl shadow-[0px_4px_7px_rgba(0,0,0,0.25)] w-[120px]"
    >
      <LoadingSpinner
        className={isLoading ? "block" : "hidden"}
        heightClass="h-4"
        widhtClass="w-4"
      />
      <h1 className="text-xs">ENVIAR</h1>
    </button>
  */

import * as React from "react";
import Image from "next/image";

export const FormHeader: React.FC = () => {
  return (
    <header className="flex w-full text-center justify-center flex-col">
      <div className="relative w-[50%] max-w-full aspect-[1.22] self-center">
        <Image
          src="/guaruja-logo.png"
          layout="fill"
          objectFit="contain"
          alt="Support form logo"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-[#02579C]">
          Precisa de apoio com o seu telefone?
        </h1>
        <p className="mt-5 text-xs text-[#807B7C]">
          Ao submeter esse formulário nossa equipe irá analisar e retornar o
          mais breve possível via Whatsapp.
        </p>
      </div>
    </header>
  );
};

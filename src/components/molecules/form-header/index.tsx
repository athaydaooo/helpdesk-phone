import * as React from "react";

export const FormHeader: React.FC = () => {
  return (
    <header className="flex w-full text-center md:text-left justify-center flex-col px-4">
      <h1 className="text-2xl md:text-4xl text-[#02579C]">
        Precisa de apoio com o seu telefone?
      </h1>
      <p className="mt-5 text-xs md:text-lg text-[#807B7C]">
        Ao submeter esse formulário nossa equipe irá analisar e retornar o mais
        breve possível via Whatsapp.
      </p>
    </header>
  );
};

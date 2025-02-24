"use client";

import { ImageWrapper } from "@/components/atoms/image-wrapper";
import { InputField } from "@/components/atoms/input-field";
import { PhoneField } from "@/components/atoms/phone-field";
import { SubmitButton } from "@/components/atoms/submit-button";
import { TextInputField } from "@/components/atoms/text-input-field";
import { DualInputNumberField } from "@/components/molecules/dual-input-number-field";
import { FormHeader } from "@/components/molecules/form-header";
import * as React from "react";

export const Form: React.FC = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [ramal, setRamal] = React.useState("");
  const [setor, setSetor] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = async () => {
    try {
      // Handle form submission
      const formData = { name, phone, ramal, setor, description };
      console.log(formData);
      // Add API call here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center font-semibold rounded-2xl shadow-xl max-w-[350px] md:max-w-[60em] text-blue-guaruja bg-white my-20 px-6 py-11 w-fit h-fit">
      <div className="flex flex-col w-fit">
        <ImageWrapper
          className="block md:hidden w-[50%] mb-6"
          imageUrl="/PMG-V-BLUE.png"
          alt="Logo da prefeitura do Guarujá"
        />

        <FormHeader />

        <section className="p-4 mt-5 w-full text-[#807B7C] rounded-2xl">
          <InputField
            placeholder="Digite seu primeiro nome"
            value={name}
            onChange={setName}
          />

          <div className="mt-4">
            <PhoneField value={phone} onChange={setPhone} />
          </div>

          <div className="mt-4">
            <DualInputNumberField
              ramalValue={ramal}
              internalRamalValue={setor}
              onRamalChange={setRamal}
              onInternalRamalChange={setSetor}
              maxLength={9999}
            />
          </div>

          <div className="mt-4">
            <TextInputField
              value={description}
              onChange={setDescription}
              placeholder="Oque você precisa?"
            />
          </div>
        </section>

        <div className="flex justify-center mt-5">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
      <div className="hidden md:flex md:flex-col">
        <ImageWrapper
          className="w-[80%]"
          imageUrl="/PMG-V-BLUE.png"
          alt="Logo da prefeitura do Guarujá"
        />
      </div>
    </div>
  );
};

export default Form;

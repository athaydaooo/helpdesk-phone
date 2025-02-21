"use client";

import { InputField } from "@/components/atoms/input-field";
import { PhoneField } from "@/components/atoms/phone-field";
import { SubmitButton } from "@/components/atoms/submit-button";
import { TextInputField } from "@/components/atoms/text-input-field";
import { DualInputField } from "@/components/molecules/dual-input-field";
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
    <div className="flex flex-col justify-center items-center px-6 py-11 font-semibold bg-white rounded-2xl shadow-xl max-w-[350px] text-blue-guaruja w-fit h-fit">
      <FormHeader />

      <section className="p-4 mt-5 w-full text-[#807B7C] rounded-2xl ">
        <InputField
          placeholder="Digite seu primeiro nome"
          value={name}
          onChange={setName}
        />

        <div className="mt-4">
          <PhoneField value={phone} onChange={setPhone} />
        </div>

        <div className="mt-4">
          <DualInputField
            ramalValue={ramal}
            internalRamalValue={setor}
            onRamalChange={setRamal}
            onInternalRamalChange={setSetor}
          />
        </div>

        <div className="mt-4">
          <TextInputField value={description} onChange={setDescription} />
        </div>
      </section>

      <div className="flex justify-center mt-5">
        <SubmitButton onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Form;

"use client";

import { ImageWrapper } from "@/components/atoms/image-wrapper";
import { InputField } from "@/components/atoms/input-field";
import { PhoneField } from "@/components/atoms/phone-field";
import { SubmitButton } from "@/components/atoms/submit-button";
import { TextInputField } from "@/components/atoms/text-input-field";
import { DualInputNumberField } from "@/components/molecules/dual-input-number-field";
import { FormHeader } from "@/components/molecules/form-header";
import * as React from "react";

import "./style.css";

export interface FormContent {
  name: string;
  phone: string;
  ramal: number;
  internalRamal: number;
  description: string;
}

export enum FieldNames {
  name = "name",
  phone = "phone",
  ramal = "ramal",
  internalRamal = "internalRamal",
  description = "description",
}

export const Form: React.FC = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [ramal, setRamal] = React.useState("");
  const [internalRamal, setInternalRamal] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [invalidFields, setInvalidFields] = React.useState<FieldNames[]>([]);
  const [disableSubmitButton, setDisableSubmitButton] =
    React.useState<boolean>(false);

  const validateForm = (): boolean => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const ramalRegex = /^\d{4}$/;

    const newInvalidFields: FieldNames[] = [];

    if (!name || !nameRegex.test(name)) newInvalidFields.push(FieldNames.name);

    if (!phone || !phoneRegex.test(phone))
      newInvalidFields.push(FieldNames.phone);

    if (!ramal || !ramalRegex.test(ramal))
      newInvalidFields.push(FieldNames.ramal);

    if (!internalRamal || !ramalRegex.test(internalRamal))
      newInvalidFields.push(FieldNames.internalRamal);

    if (!description) newInvalidFields.push(FieldNames.description);

    setInvalidFields(newInvalidFields);

    return newInvalidFields.length === 0;
  };

  const handleSubmit = async () => {
    if (!(await validateForm())) {
      const formButton = document.getElementById("formButton");

      if (formButton) {
        formButton.classList.remove("shake"); // Remove a classe
        void formButton.offsetWidth; // Força um reflow para reiniciar a animação
        formButton.classList.add("shake"); // Adiciona novamente para rodar a animação
      }

      return;
    }

    const formData: FormContent = {
      name,
      phone,
      ramal: parseInt(ramal),
      internalRamal: parseInt(internalRamal),
      description,
    };

    const res = await fetch("/api/submit/phone-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    await res.json();

    document.getElementById("btnText")!.innerHTML = "ENVIADO";
    document.getElementById("btn")!.classList.add("active");
    setDisableSubmitButton(true);
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

        <section className="p-4 mt-5 w-full text-[#807B7C] rounded-xl">
          <InputField
            placeholder="Digite seu primeiro nome"
            value={name}
            onChange={setName}
            className={
              invalidFields.includes(FieldNames.name)
                ? "invalid-field"
                : "btnnn"
            }
          />

          <div className="mt-4">
            <PhoneField
              className={
                invalidFields.includes(FieldNames.phone) ? "invalid-field" : ""
              }
              value={phone}
              onChange={setPhone}
            />
          </div>

          <div className="mt-4">
            <DualInputNumberField
              ramalValue={ramal}
              internalRamalValue={internalRamal}
              ramalClassName={
                invalidFields.includes(FieldNames.ramal) ? "invalid-field" : ""
              }
              onRamalChange={setRamal}
              onInternalRamalChange={setInternalRamal}
              internalRamalClassName={
                invalidFields.includes(FieldNames.internalRamal)
                  ? "invalid-field"
                  : ""
              }
              maxLength={9999}
            />
          </div>

          <div className="mt-4">
            <TextInputField
              value={description}
              onChange={setDescription}
              placeholder="Oque você precisa?"
              className={
                invalidFields.includes(FieldNames.description)
                  ? "invalid-field"
                  : ""
              }
            />
          </div>
        </section>

        <div id="formButton" className="flex justify-center mt-5">
          <SubmitButton
            isDisabled={disableSubmitButton}
            onClick={handleSubmit}
          />
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

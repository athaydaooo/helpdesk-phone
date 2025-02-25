"use client";

import * as React from "react";
import { ImageWrapper } from "@/components/atoms/image-wrapper";
import { InputField } from "@/components/atoms/input-field";
import { PhoneField } from "@/components/atoms/phone-field";
import { SubmitButton } from "@/components/atoms/submit-button";
import { TextInputField } from "@/components/atoms/text-input-field";
import { FormHeader } from "@/components/molecules/form-header";
import { InputNumberField } from "@/components/atoms/input-number-field";
import { getInvalidFieldClass } from "@/helpers/get-invalid-field-class";
import { PhoneFormData } from "@/types/domain/phone-form";
import clsx from "clsx";

import "./style.css";

export enum FieldNames {
  name = "name",
  phone = "phone",
  ramal = "ramal",
  internalRamal = "internalRamal",
  description = "description",
}

export const PhoneForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [ramal, setRamal] = React.useState("");
  const [internalRamal, setInternalRamal] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [invalidFields, setInvalidFields] = React.useState<FieldNames[]>([]);
  const [disableSubmitButton, setDisableSubmitButton] =
    React.useState<boolean>(false);

  const validateForm = (): boolean => {
    const fields: FieldNames[] = [
      FieldNames.name,
      FieldNames.phone,
      FieldNames.ramal,
      FieldNames.internalRamal,
      FieldNames.description,
    ];

    const newInvalidFields: FieldNames[] = [];

    fields.forEach((field) => {
      if (!validateField(field)) {
        newInvalidFields.push(field);
      }
    });

    setInvalidFields(newInvalidFields); // Atualiza o estado com os campos inválidos encontrados

    return newInvalidFields.length === 0; // Verifica a lista local ao invés do estado global
  };

  const validateField = (field: FieldNames): boolean => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const ramalRegex = /^\d{4}$/;

    let isValid = true;

    switch (field) {
      case FieldNames.name:
        isValid = nameRegex.test(name);
        break;
      case FieldNames.phone:
        isValid = phoneRegex.test(phone);
        break;
      case FieldNames.ramal:
        isValid = ramalRegex.test(ramal);
        break;
      case FieldNames.internalRamal:
        isValid = ramalRegex.test(internalRamal);
        break;
      case FieldNames.description:
        isValid = description.trim().length > 0;
        break;
      default:
        return true;
    }

    setInvalidFields((prev) => {
      const newInvalidFields = prev.filter((f) => f !== field);
      if (!isValid) newInvalidFields.push(field);
      return newInvalidFields;
    });

    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      const formButton = document.getElementById("formButton");

      if (formButton) {
        formButton.classList.remove("shake"); // Remove a classe
        void formButton.offsetWidth; // Força um reflow para reiniciar a animação
        formButton.classList.add("shake"); // Adiciona novamente para rodar a animação
      }

      return;
    }

    const res = await fetch("/api/submit/phone-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        ramal: parseInt(ramal),
        internalRamal: parseInt(internalRamal),
        description,
      } as PhoneFormData),
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
            name={FieldNames.name}
            placeholder="Digite seu primeiro nome"
            value={name}
            onChange={setName}
            validateField={validateField}
            className={getInvalidFieldClass(invalidFields, FieldNames.name)}
          />

          <div className="mt-4">
            <PhoneField
              name={FieldNames.phone}
              validateField={validateField}
              className={getInvalidFieldClass(invalidFields, FieldNames.phone)}
              value={phone}
              onChange={setPhone}
            />
          </div>

          <div className="mt-4">
            <div className="flex gap-1.5 justify-between text-center w-full">
              <InputNumberField
                name={FieldNames.ramal}
                validateField={validateField}
                placeholder="Ramal"
                value={ramal}
                onChange={setRamal}
                className={clsx(
                  "flex-1",
                  getInvalidFieldClass(invalidFields, FieldNames.ramal)
                )}
              />
              <InputNumberField
                name={FieldNames.internalRamal}
                validateField={validateField}
                placeholder="Ramal interno"
                value={internalRamal}
                onChange={setInternalRamal}
                className={clsx(
                  "flex-1",
                  getInvalidFieldClass(invalidFields, FieldNames.internalRamal)
                )}
              />
            </div>
          </div>

          <div className="mt-4">
            <TextInputField
              name={FieldNames.description}
              validateField={validateField}
              value={description}
              onChange={setDescription}
              placeholder="Oque você precisa?"
              className={getInvalidFieldClass(
                invalidFields,
                FieldNames.description
              )}
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

export default PhoneForm;

import { FieldNames } from "@/components/organisms/phone-form";

export function getInvalidFieldClass(
  invalidFields: FieldNames[],
  fieldName: FieldNames
): string {
  return invalidFields.includes(fieldName) ? "invalid-field" : "";
}

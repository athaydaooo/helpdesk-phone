import { FormContent } from "@/components/organisms/form";
import { EmailTemplate } from "@/types/domain/email-template";

export function getEmailTemplate(formContent: FormContent): EmailTemplate {
  const phoneNumber = formContent.phone.replace(/\D/g, "");

  const emailTemplate = {
    subject: `Atendimento - Ramal: ${formContent.ramal} Ramal Interno: ${formContent.internalRamal}`,
    text: `
Olá,

Você recebeu uma nova solicitação de atendimento.

Detalhes do formulário:
- Nome: ${formContent.name}
- Telefone: ${formContent.phone}
- Link direto WhatsApp: https://wa.me/55${phoneNumber}
- Ramal: ${formContent.ramal}
- Ramal Interno: ${formContent.internalRamal}
- Mensagem: ${formContent.description}

Atenciosamente,
Helpdesk Automatico
`,
  };

  return emailTemplate;
}

import FormSubmitService from "@/services/fom-submit-service";
import { AppResponse } from "@/utils/app-response";
import logger from "@/utils/logger";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, ramal, internalRamal, description } = body;

    if (
      !name ||
      !phone ||
      !ramal ||
      !internalRamal ||
      !description ||
      typeof name !== "string" ||
      typeof phone !== "string" ||
      typeof ramal !== "number" ||
      typeof internalRamal !== "number" ||
      typeof description !== "string"
    ) {
      return AppResponse.createResponse({
        status: 400,
        message: "Formulário preenchido incorretamente.",
      });
    }

    const formSubmitService = new FormSubmitService();
    await formSubmitService.submitPhone({
      name,
      phone,
      ramal,
      internalRamal,
      description,
    });

    return AppResponse.createResponse({
      status: 200,
      message: "Formulário enviado com sucesso.",
    });
  } catch (e) {
    logger.error(e);
    return AppResponse.createErrorResponse(e);
  }
}

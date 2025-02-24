import { AppError } from "@/errors";

export interface AppResponseOptions {
  message: string;
  status: number;
}

class AppResponse {
  static createResponse(options: AppResponseOptions) {
    return new Response(
      JSON.stringify({
        status: options.status === 200 ? true : false,
        message: options.message,
      }),
      {
        status: options.status,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  static createErrorResponse(error: AppError | unknown) {
    return new Response(
      JSON.stringify({
        status: false,
        message:
          error instanceof AppError ? error.message : "Internal Server Error",
      }),
      {
        status: error instanceof AppError ? error.statusCode : 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export { AppResponse };

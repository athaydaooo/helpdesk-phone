import { AppError } from ".";

export const MDEAMON_SENDEMAIL_ERROR = new AppError(
  "Error trying to send email using MDeamon.",
  500,
  "MDEAMON.SEND_ERROR"
);

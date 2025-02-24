import { MDEAMON_SENDEMAIL_ERROR } from "@/errors/mdeamon";
import nodemailer from "nodemailer";
import logger from "./logger";

class MdeamonClient {
  private transporter: nodemailer.Transporter;
  private host: string;
  private port: number;
  private username: string;
  private secure?: boolean;

  constructor(host: string, port: number, username: string, password: string) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure: this.secure || false,
      auth: {
        user: username,
        pass: password,
      },
    });
  }

  async sendMail(
    to: string,
    subject: string,
    text: string,
    html?: string
  ): Promise<void> {
    const mailOptions = {
      from: `${this.username}`,
      to,
      subject,
      text,
      html,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      logger.error("Error sending email:", error);
      throw MDEAMON_SENDEMAIL_ERROR;
    }
  }
  getHost(): string {
    return this.host;
  }

  setHost(host: string): void {
    this.host = host;
  }

  getPort(): number {
    return this.port;
  }

  setPort(port: number): void {
    this.port = port;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
  }
}

export default MdeamonClient;

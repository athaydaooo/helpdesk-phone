import { FormContent } from "@/components/organisms/form";
import config from "@/utils/config";
import logger from "@/utils/logger";
import MdeamonClient from "@/utils/mdeamon-client";
import { getEmailTemplate } from "@/utils/phone-helpdesk-email-template";

class FormSubmitService {
  private mdeamonClient: MdeamonClient;

  constructor() {
    this.mdeamonClient = new MdeamonClient(
      config.mdeamonHost,
      config.mdeamonPort,
      config.mdeamonUsername,
      config.mdeamonPassword
    );
  }

  async submitPhone(formContent: FormContent): Promise<void> {
    try {
      const emailTemplate = getEmailTemplate(formContent);
      await this.mdeamonClient.sendMail(
        config.helpdeskEmail,
        emailTemplate.subject,
        emailTemplate.text
      );
    } catch (error) {
      logger.error("Error sending email:", error);
      throw error;
    }
  }
}

export default FormSubmitService;

import * as dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  mdeamonPort: number;
  mdeamonHost: string;
  mdeamonUsername: string;
  mdeamonPassword: string;
  helpdeskEmail: string;
}

const config: EnvConfig = {
  mdeamonPort: process.env.MDEAMON_PORT
    ? parseInt(process.env.MDEAMON_PORT)
    : 25,
  mdeamonHost: process.env.MDEAMON_HOST || "",
  mdeamonUsername: process.env.MDEAMON_USERNAME || "",
  mdeamonPassword: process.env.MDEAMON_PASSWORD || "",
  helpdeskEmail: process.env.HELPDESK_EMAIL || "",
};

export default config;

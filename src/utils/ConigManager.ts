const apiUrl = import.meta.env.VITE_API_URL as string;
const env = import.meta.env.VITE_ENV as string;

export const ConfigManager = {
  apiUrl,
  env,
};

export const getAPIUrl = (): string => {
  return `https://api.${process.env.ENV_MODE}.${process.env.API_URL}`;
};

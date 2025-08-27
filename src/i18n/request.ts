import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "fr";

  return {
    locale,
    messages: {
      ...(await import(`../../messages/${locale}/home.json`)).default,
      // ...(await import(`../../messages/${locale}/about.json`)).default,
    },
  };
});

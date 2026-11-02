export const apiKey = "32020143a4354158a7e13eb07fe880ac";
//export const apiUrl = "https://newsapi.org/v2/";
export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://news-api-proxy.up.railway.app/news/v2/"
    : "https://newsapi.org/v2/";
export const dbUrl = "";

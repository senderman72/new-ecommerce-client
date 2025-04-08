export const getGoogleSearch = async (query: string) => {
  const key = import.meta.env.VITE_GOOGLE_KEY;
  const cx = import.meta.env.VITE_SEARCH_ENGINE_ID;

  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        query
      )}&key=${key}&cx=${cx}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch {
    console.log("Kunde inte hitta data");
  }
};

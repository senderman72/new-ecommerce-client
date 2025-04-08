export const getGoogleSearch = async (query: string) => {
  try {
    // const response = await fetch(
    //   `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_SEARCH_ENGINE_ID}&q=${query}`
    // );
    const data = await response.json();
    return data;
  } catch {
    console.log("Kunde inte hitta data");
  }
};

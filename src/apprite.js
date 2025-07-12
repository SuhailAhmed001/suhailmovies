import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

const databases = new Databases(client);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// ✅ Function to update search count
export const updateSearchCount = async (query, movie) => {
  try {
    await databases.createDocument(DATABASE_ID, COLLECTION_ID, "unique()", {
      title: movie.title,
      poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      language: movie.original_language,
      popularity: movie.popularity,
      searched_query: query,
    });
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};

// ✅ Function to get trending movies from Appwrite
export const getTrendingMovies = async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

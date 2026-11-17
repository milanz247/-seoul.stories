/** Server-side TMDB adapter. The sample catalog in src/data can be swapped for these helpers. */
const BASE_URL = "https://api.themoviedb.org/3";
export type TMDBShow = { id: number; name: string; original_name: string; overview: string; first_air_date?: string; vote_average: number; poster_path: string | null; backdrop_path: string | null; genre_ids?: number[] };
type TMDBList = { results: TMDBShow[] };
async function tmdbFetch<T>(path: string): Promise<T> { const apiKey = process.env.TMDB_API_KEY; if (!apiKey) throw new Error("TMDB_API_KEY is not configured"); const response = await fetch(`${BASE_URL}${path}`, { headers: { Authorization: `Bearer ${apiKey}`, Accept: "application/json" }, next: { revalidate: 3600 } }); if (!response.ok) throw new Error(`TMDB request failed: ${response.status}`); return response.json() as Promise<T>; }
export async function searchTMDBShows(query: string) { return tmdbFetch<TMDBList>(`/search/tv?query=${encodeURIComponent(query)}&language=en-US`); }
export async function getTMDBShow(id: number) { return tmdbFetch<TMDBShow & { number_of_episodes: number; genres: { id: number; name: string }[] }>(`/tv/${id}?language=en-US`); }
export function tmdbImage(path: string | null, size: "w500" | "w1280" = "w500") { return path ? `https://image.tmdb.org/t/p/${size}${path}` : null; }

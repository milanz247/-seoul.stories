import images from "./images.json";
export type Genre = "Romance" | "Thriller" | "Historical" | "Fantasy" | "Comedy" | "Medical" | "School" | "Crime";

export type Drama = {
  id: number;
  slug: string;
  title: string;
  koreanTitle: string;
  year: number;
  episodes: number;
  rating: number;
  genres: Genre[];
  summary: string;
  cast: string[];
  posterUrl: string;
  backdropUrl: string;
};

const art = (slug: string) => images[slug as keyof typeof images];

export const dramas: Drama[] = [
  { id: 1, slug: "queen-of-tears", title: "Queen of Tears", koreanTitle: "눈물의 여왕", year: 2024, episodes: 16, rating: 9.1, genres: ["Romance", "Comedy"], summary: "A department store heiress and her husband rediscover their love when an unexpected crisis turns their carefully ordered lives upside down.", cast: ["kim-soo-hyun", "kim-ji-won"], ...art("queen-of-tears") },
  { id: 2, slug: "crash-landing-on-you", title: "Crash Landing on You", koreanTitle: "사랑의 불시착", year: 2019, episodes: 16, rating: 9.2, genres: ["Romance", "Comedy"], summary: "A paragliding accident lands a South Korean heiress across the border, where an army officer quietly helps her find a way home.", cast: ["hyun-bin", "son-ye-jin"], ...art("crash-landing-on-you") },
  { id: 3, slug: "goblin", title: "Guardian: The Lonely and Great God", koreanTitle: "도깨비", year: 2016, episodes: 16, rating: 9.0, genres: ["Fantasy", "Romance"], summary: "An immortal guardian searches for the one person who can end his long life, only to discover a love that makes eternity feel too short.", cast: ["gong-yoo", "kim-go-eun"], ...art("goblin") },
  { id: 4, slug: "twenty-five-twenty-one", title: "Twenty-Five Twenty-One", koreanTitle: "스물다섯 스물하나", year: 2022, episodes: 16, rating: 8.9, genres: ["Romance", "School"], summary: "Amid a national financial crisis, a determined young fencer and a student rebuilding his life meet at a crossroads of youth.", cast: ["kim-tae-ri", "nam-joo-hyuk"], ...art("twenty-five-twenty-one") },
  { id: 5, slug: "extraordinary-attorney-woo", title: "Extraordinary Attorney Woo", koreanTitle: "이상한 변호사 우영우", year: 2022, episodes: 16, rating: 9.0, genres: ["Comedy", "Romance"], summary: "A brilliant rookie attorney navigates courtroom puzzles, new friendships and the everyday challenges of life at a major law firm.", cast: ["park-eun-bin", "kang-tae-oh"], ...art("extraordinary-attorney-woo") },
  { id: 6, slug: "the-glory", title: "The Glory", koreanTitle: "더 글로리", year: 2022, episodes: 16, rating: 8.8, genres: ["Thriller", "Crime"], summary: "Years after devastating school violence, a woman methodically returns to the lives of those responsible to carry out her revenge.", cast: ["song-hye-kyo", "lee-do-hyun"], ...art("the-glory") },
  { id: 7, slug: "moving", title: "Moving", koreanTitle: "무빙", year: 2023, episodes: 20, rating: 9.1, genres: ["Fantasy", "Thriller", "School"], summary: "Teenagers with extraordinary abilities and the parents protecting them face a dangerous secret from the past.", cast: ["ryu-seung-ryong", "han-hyo-joo"], ...art("moving") },
  { id: 8, slug: "hospital-playlist", title: "Hospital Playlist", koreanTitle: "슬기로운 의사생활", year: 2020, episodes: 12, rating: 9.3, genres: ["Medical", "Comedy"], summary: "Five doctors who have been friends since medical school share the small victories and difficult moments of life inside a hospital.", cast: ["jo-jung-suk", "jeon-mi-do"], ...art("hospital-playlist") },
  { id: 9, slug: "mr-sunshine", title: "Mr. Sunshine", koreanTitle: "미스터 션샤인", year: 2018, episodes: 24, rating: 9.0, genres: ["Historical", "Romance"], summary: "Returning to Korea in the early 1900s, a U.S. Marine officer meets an aristocrat secretly fighting for her country's future.", cast: ["lee-byung-hun", "kim-tae-ri"], ...art("mr-sunshine") },
  { id: 10, slug: "when-life-gives-you-tangerines", title: "When Life Gives You Tangerines", koreanTitle: "폭싹 속았수다", year: 2025, episodes: 16, rating: 9.4, genres: ["Romance", "Historical"], summary: "On Jeju Island, a spirited dreamer and her steadfast companion weave a lifetime of love through changing seasons and generations.", cast: ["iu", "park-bo-gum"], ...art("when-life-gives-you-tangerines") },
  { id: 11, slug: "lovely-runner", title: "Lovely Runner", koreanTitle: "선재 업고 튀어", year: 2024, episodes: 16, rating: 8.9, genres: ["Romance", "Fantasy", "School"], summary: "A devoted fan is transported back in time and seizes the chance to change the fate of the star who once gave her hope.", cast: ["byeon-woo-seok", "kim-hye-yoon"], ...art("lovely-runner") },
  { id: 12, slug: "the-trauma-code", title: "The Trauma Code: Heroes on Call", koreanTitle: "중증외상센터", year: 2025, episodes: 8, rating: 8.7, genres: ["Medical", "Comedy"], summary: "A bold trauma surgeon assembles a new emergency team and pushes a struggling hospital to put patients first.", cast: ["ju-ji-hoon", "choo-young-woo"], ...art("the-trauma-code") },
];

export const getDrama = (slug: string) => dramas.find((drama) => drama.slug === slug);
export const genres: Genre[] = ["Romance", "Thriller", "Historical", "Fantasy", "Comedy", "Medical", "School", "Crime"];
export const genreSlug = (genre: Genre) => genre.toLowerCase();
export const getGenre = (slug: string) => genres.find((genre) => genreSlug(genre) === slug);
export const searchDramas = (query: string) => {
  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return [];
  return dramas.filter((drama) => [drama.title, drama.koreanTitle, ...drama.genres, ...drama.cast.flatMap((slug) => {
    const actor = actorsBySlug[slug];
    return actor ? [actor.name, actor.koreanName] : [];
  })].some((value) => value.toLocaleLowerCase().includes(needle)));
};

import { actors } from "./actors";
const actorsBySlug = Object.fromEntries(actors.map((actor) => [actor.slug, actor]));

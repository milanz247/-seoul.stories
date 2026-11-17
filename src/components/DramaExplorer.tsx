"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { dramas, genres, type Genre } from "@/src/data/dramas";
import { AnimatedDramaGrid } from "./AnimatedDramaGrid";
import { EmptyIllustration } from "./illustrations";

export function DramaExplorer() {
  const [genre, setGenre] = useState<Genre | "All">("All");
  const [year, setYear] = useState("All years");
  const [rating, setRating] = useState("Any rating");
  const [sort, setSort] = useState("Highest rated");
  const years = [...new Set(dramas.map((drama) => drama.year))].sort((a,b) => b-a);
  const filtered = useMemo(() => dramas.filter((drama) => (genre === "All" || drama.genres.includes(genre)) && (year === "All years" || drama.year === Number(year)) && (rating === "Any rating" || drama.rating >= Number(rating))).sort((a,b) => sort === "Newest first" ? b.year-a.year : sort === "Title A–Z" ? a.title.localeCompare(b.title) : b.rating-a.rating), [genre, year, rating, sort]);
  return <><div className="filter-panel"><div className="filter-label"><SlidersHorizontal size={17}/> Filter collection</div><div className="filter-controls"><label>Genre<select value={genre} onChange={(e) => setGenre(e.target.value as Genre | "All")}><option>All</option>{genres.map((item) => <option key={item}>{item}</option>)}</select></label><label>Year<select value={year} onChange={(e) => setYear(e.target.value)}><option>All years</option>{years.map((item) => <option key={item}>{item}</option>)}</select></label><label>Rating<select value={rating} onChange={(e) => setRating(e.target.value)}><option>Any rating</option><option value="9">9.0 and above</option><option value="8.8">8.8 and above</option></select></label><label>Sort by<select value={sort} onChange={(e) => setSort(e.target.value)}><option>Highest rated</option><option>Newest first</option><option>Title A–Z</option></select></label></div></div><div className="results-count">Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? "drama" : "dramas"}</div>{filtered.length ? <AnimatedDramaGrid dramas={filtered}/> : <div className="empty-state"><EmptyIllustration/><h2>No dramas found</h2><p>Try another combination of filters.</p><button className="button button-red" onClick={() => { setGenre("All"); setYear("All years"); setRating("Any rating"); }}>Clear filters</button></div>}</>;
}

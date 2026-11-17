"use client";

import { useState } from "react";
import { AnimatedDramaGrid } from "./AnimatedDramaGrid";
import { SearchBar } from "./SearchBar";
import { EmptyIllustration } from "./illustrations";
import { searchDramas } from "@/src/data/dramas";

export function SearchResults({ initialQuery }: { initialQuery: string }) { const [query, setQuery] = useState(initialQuery); const results = searchDramas(query); return <><div className="search-page-box"><SearchBar key={initialQuery} large initialQuery={initialQuery} onQueryChange={(value) => { setQuery(value); window.history.replaceState(null, "", value ? `/search?q=${encodeURIComponent(value)}` : "/search"); }}/></div>{query.trim() ? <><p className="results-count">{results.length} {results.length === 1 ? "result" : "results"} for <strong>“{query}”</strong></p>{results.length ? <AnimatedDramaGrid dramas={results}/> : <div className="empty-state"><EmptyIllustration/><h2>Nothing found just yet</h2><p>Try a drama title, actor, or a genre like “Romance”.</p></div>}</> : <div className="search-inspiration"><p className="eyebrow">A PLACE TO BEGIN</p><h2>What are you in the mood for?</h2><p>Search a title, a familiar face, or a feeling. We’ll find a story for you.</p><div><span>Romance</span><span>Fantasy</span><span>Kim Tae-ri</span><span>Medical</span></div></div>}</> }

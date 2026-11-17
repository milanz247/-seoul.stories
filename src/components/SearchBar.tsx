"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, ArrowUpRight, X } from "lucide-react";
import { searchDramas } from "@/src/data/dramas";
import { EmptyIllustration } from "./illustrations";

export function SearchBar({ large = false, initialQuery = "", onQueryChange }: { large?: boolean; initialQuery?: string; onQueryChange?: (query: string) => void }) {
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const results = searchDramas(query).slice(0, 5);
  useEffect(() => { const close = (event: MouseEvent) => { if (!box.current?.contains(event.target as Node)) setOpen(false); }; document.addEventListener("mousedown", close); return () => document.removeEventListener("mousedown", close); }, []);
  const update = (value: string) => { setQuery(value); onQueryChange?.(value); setOpen(!!value.trim()); };
  return <div ref={box} className={`search-wrap ${large ? "search-large" : ""}`}>
    <form className="search-field" role="search" onSubmit={(event) => { event.preventDefault(); setOpen(false); router.push(`/search?q=${encodeURIComponent(query.trim())}`); }}>
      <Search size={18} aria-hidden="true"/><input value={query} onChange={(event) => update(event.target.value)} onFocus={() => setOpen(!!query.trim())} placeholder={large ? "Search dramas, actors, or genres..." : "Search dramas, actors..."} aria-label="Search dramas, actors, or genres" aria-expanded={open} aria-controls="search-suggestions" autoComplete="off" />
      {query && <button type="button" className="search-clear" onClick={() => update("")} aria-label="Clear search"><X size={16}/></button>}
      {large && <button className="search-submit" type="submit">Search <ArrowUpRight size={16}/></button>}
    </form>
    {open && <div id="search-suggestions" className="search-dropdown" role="region" aria-label="Search suggestions">{results.length ? <><p className="dropdown-label">QUICK RESULTS</p>{results.map((drama) => <Link key={drama.slug} href={`/dramas/${drama.slug}`} className="suggestion" onClick={() => setOpen(false)}><span className="suggestion-thumb" style={{ backgroundImage: `url(${drama.posterUrl})` }}/><span><strong>{drama.title}</strong><small>{drama.year} · {drama.genres.join(" / ")}</small></span><ArrowUpRight size={16}/></Link>)}<Link className="all-results" href={`/search?q=${encodeURIComponent(query)}`} onClick={() => setOpen(false)}>See all results <ArrowUpRight size={15}/></Link></> : <div className="dropdown-empty"><EmptyIllustration/><span>No matches yet. Try another name or genre.</span></div>}</div>}
  </div>;
}

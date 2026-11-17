import { Reveal } from "@/src/components/Reveal";
import type { Metadata } from "next";
import { SearchResults } from "@/src/components/SearchResults";
export const metadata: Metadata = { title: "Search dramas" };
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) { const { q } = await searchParams; return <div className="page-body"><div className="container listing-page"><Reveal><div className="page-heading"><p className="eyebrow">FIND YOUR NEXT WATCH</p><h1>Every story starts somewhere.</h1><p>Search by drama, actor, or the genre you love.</p></div></Reveal><SearchResults initialQuery={typeof q === "string" ? q : ""}/></div></div>; }

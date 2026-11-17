import { Reveal } from "@/src/components/Reveal";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimatedDramaGrid } from "@/src/components/AnimatedDramaGrid";
import { GenreIllustration } from "@/src/components/illustrations";
import { dramas, genres, getGenre } from "@/src/data/dramas";
export function generateStaticParams() { return genres.map((genre) => ({ genre: genre.toLowerCase() })); }
export async function generateMetadata({ params }: { params: Promise<{ genre: string }> }): Promise<Metadata> { const genre = getGenre((await params).genre); return { title: genre ? `${genre} dramas` : "Genre" }; }
export default async function GenrePage({ params }: { params: Promise<{ genre: string }> }) { const genre = getGenre((await params).genre); if (!genre) notFound(); const results = dramas.filter((drama) => drama.genres.includes(genre)); return <div className="page-body"><div className="container listing-page"><Reveal><div className="genre-page-heading"><div><p className="eyebrow">CURATED BY MOOD</p><h1>{genre === "Historical" ? "Historical · Sageuk" : genre}</h1><p>{results.length} stories to discover in this collection.</p></div><GenreIllustration genre={genre}/></div></Reveal><AnimatedDramaGrid dramas={results}/></div></div>; }

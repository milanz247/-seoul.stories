import { Reveal } from "@/src/components/Reveal";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActorCard } from "@/src/components/ActorCard";
import { AnimatedDramaGrid } from "@/src/components/AnimatedDramaGrid";
import { actors, getActor } from "@/src/data/actors";
import { dramas } from "@/src/data/dramas";
export function generateStaticParams() { return actors.map((actor) => ({ slug: actor.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const actor = getActor((await params).slug); return { title: actor?.name ?? "Actor" }; }
export default async function ActorPage({ params }: { params: Promise<{ slug: string }> }) { const actor = getActor((await params).slug); if (!actor) notFound(); const credits = dramas.filter((drama) => drama.cast.includes(actor.slug)); return <div className="page-body"><div className="container listing-page"><Reveal><div className="actor-page-heading"><ActorCard actor={actor}/><div><p className="eyebrow">FEATURED ACTOR</p><h1>{actor.name}</h1><p className="korean-accent">{actor.koreanName}</p><p>Explore {credits.length} {credits.length === 1 ? "story" : "stories"} in our collection featuring {actor.name}.</p></div></div></Reveal><div className="section-divider"><h2>In the collection</h2><span>{credits.length} dramas</span></div><AnimatedDramaGrid dramas={credits}/></div></div>; }

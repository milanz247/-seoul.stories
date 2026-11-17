import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Star, Sparkles, Clapperboard } from "lucide-react";
import { ActorCard } from "@/src/components/ActorCard";
import { DramaCard } from "@/src/components/DramaCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { Reveal } from "@/src/components/Reveal";
import { LatticeBorder } from "@/src/components/illustrations/KoreanOrnaments";
import { GenreIllustration } from "@/src/components/illustrations";
import { getActor } from "@/src/data/actors";
import { dramas, getDrama } from "@/src/data/dramas";
import { dramaNotes } from "@/src/data/dramaNotes";

export function generateStaticParams() { return dramas.map((drama) => ({ slug: drama.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const drama = getDrama((await params).slug);
  return { title: drama?.title ?? "Drama", description: drama?.summary };
}
export default async function DramaPage({ params }: { params: Promise<{ slug: string }> }) {
  const drama = getDrama((await params).slug);
  if (!drama) notFound();
  const cast = drama.cast.map(getActor).filter((actor) => actor !== undefined);
  const similar = dramas.filter((item) => item.slug !== drama.slug && item.genres.some((genre) => drama.genres.includes(genre))).slice(0, 5);
  const notes = dramaNotes[drama.slug];
  return <div className="page-body">
    <section className="detail-hero"><Image src={drama.backdropUrl} alt={`Backdrop for ${drama.title}`} fill priority sizes="100vw"/><div className="detail-hero-shade"/><div className="container detail-hero-content"><Link href="/dramas" className="back-link"><ArrowLeft size={16}/> All dramas</Link><p className="eyebrow">A STORY TO REMEMBER</p><p className="detail-korean" lang="ko">{drama.koreanTitle}</p><h1>{drama.title}</h1></div></section>
    <div className="container detail-content enriched-detail">
      <aside className="detail-sidebar"><div className="detail-poster"><Image src={drama.posterUrl} alt={`Poster for ${drama.title}`} fill sizes="(max-width: 720px) 50vw, 300px"/></div><div className="drama-fact-sheet"><p className="eyebrow">AT A GLANCE</p><dl><div><dt>Original title</dt><dd lang="ko">{drama.koreanTitle}</dd></div><div><dt>Release year</dt><dd>{drama.year}</dd></div><div><dt>Episodes</dt><dd>{drama.episodes} episodes</dd></div><div><dt>Language</dt><dd>Korean</dd></div><div><dt>Sample rating</dt><dd><Star size={12}/> {drama.rating.toFixed(1)} / 10</dd></div></dl><LatticeBorder/></div></aside>
      <div className="detail-info">
        <div className="detail-stats"><span><Star size={17} fill="currentColor"/> {drama.rating.toFixed(1)} <small>sample rating</small></span><span>{drama.year}<small>year</small></span><span>{drama.episodes}<small>episodes</small></span></div>
        <nav className="detail-chapters" aria-label="Drama page sections"><a href="#story">01 · The story</a><a href="#cast">02 · The cast</a><a href="#gallery">03 · A closer look</a></nav>
        <Reveal><section id="story" className="detail-anchor"><div className="genre-chips">{drama.genres.map((genre) => <Link href={`/genres/${genre.toLowerCase()}`} key={genre}>{genre}</Link>)}</div><h2>The story</h2><p className="detail-summary">{drama.summary}</p></section></Reveal>
        {notes && <Reveal><section className="editors-note"><div className="note-label"><Sparkles size={15}/><span>THE SEOUL STORIES EDIT</span></div><h3>Why this story?</h3><p>{notes.hook}</p><div className="mood-tags">{notes.mood.map((mood) => <span key={mood}>{mood}</span>)}</div><div className="watch-occasion"><Clapperboard size={18}/><p>{notes.occasion}</p></div><GenreIllustration genre={drama.genres[0]}/></section></Reveal>}
        <section id="cast" className="detail-anchor cast-section"><div className="detail-rule"/><p className="eyebrow">THE FACES BEHIND THE FEELING</p><h2>Meet the cast</h2><p className="detail-section-caption">Select an actor to explore their stories in our collection.</p><div className="cast-grid">{cast.map((actor, index) => <Reveal key={actor.slug} delay={index * .07}><ActorCard actor={actor}/></Reveal>)}</div></section>
      </div>
    </div>
    <section id="gallery" className="container detail-gallery detail-anchor"><Reveal><SectionHeader eyebrow="A WINDOW INTO THEIR WORLD" title="A closer look"/><figure><div className="gallery-image"><Image src={drama.backdropUrl} alt={`Promotional scene from ${drama.title}`} fill sizes="(max-width: 1200px) 100vw, 1200px"/></div><figcaption><span lang="ko">{drama.koreanTitle}</span><span>{drama.title} · {drama.year} <span className="gallery-credit">/ Image: TMDB</span></span></figcaption></figure></Reveal></section>
    <section className="container section similar-section"><SectionHeader eyebrow="KEEP THE FEELING GOING" title="Your next story" href="/dramas"/><div className="horizontal-scroll">{similar.map((item, index) => <Reveal key={item.slug} delay={index * .05}><DramaCard drama={item} compact/></Reveal>)}</div><Link className="detail-explore-link" href={`/genres/${drama.genres[0].toLowerCase()}`}>Explore more {drama.genres[0].toLowerCase()} stories <ArrowUpRight size={16}/></Link></section>
  </div>;
}

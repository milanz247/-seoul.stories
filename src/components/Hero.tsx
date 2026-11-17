import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Drama } from "@/src/data/dramas";
import { BlossomBranch } from "./illustrations";

export function Hero({ drama }: { drama: Drama }) {
  return <section className="hero"><Image src={drama.backdropUrl} alt="When Life Gives You Tangerines — official drama backdrop" fill priority sizes="100vw" className="hero-backdrop"/><div className="hero-shade"/><BlossomBranch className="hero-blossom"/>
    <div className="container hero-inner"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-line"/>STORIES FROM KOREA, WITH LOVE <span className="kicker-line"/></div><p className="hero-hangul">{drama.koreanTitle}</p><h1>{drama.title}</h1><div className="hero-meta"><span>{drama.year}</span><span className="meta-dot"/><span>{drama.episodes} episodes</span><span className="meta-dot"/><span><Star size={14} fill="currentColor"/>{drama.rating.toFixed(1)}</span></div><p className="hero-summary">{drama.summary}</p><Link href={`/dramas/${drama.slug}`} className="button button-red">View details <ArrowRight size={17}/></Link></div><div className="hero-seal" aria-hidden="true">서울<br/>이야기</div><div className="hero-side-note"><span>01 / 12</span><div/><span>CURATED FOR YOU</span></div></div>
  </section>;
}

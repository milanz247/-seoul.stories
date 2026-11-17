import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Drama } from "@/src/data/dramas";

export function DramaCard({ drama, compact = false }: { drama: Drama; compact?: boolean }) {
  return <Link href={`/dramas/${drama.slug}`} className={`drama-card group ${compact ? "drama-card-compact" : ""}`} aria-label={`View ${drama.title} details`}>
    <div className="poster-frame">
      <Image src={drama.posterUrl} alt={`Poster for ${drama.title}`} fill sizes={compact ? "(max-width: 640px) 165px, 220px" : "(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 24vw"} className="poster-image" />
      <span className="rating-badge"><Star size={12} fill="currentColor" strokeWidth={1.5}/>{drama.rating.toFixed(1)}</span>
      <span className="poster-caption">{drama.koreanTitle}</span>
    </div>
    <div className="card-copy"><h3>{drama.title}</h3><p>{drama.year} <span>·</span> {drama.genres.slice(0, 2).join(" / ")}</p></div>
  </Link>;
}

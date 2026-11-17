import Link from "next/link";
import type { Actor } from "@/src/data/actors";

export function ActorCard({ actor }: { actor: Actor }) {
  return <Link href={`/actors/${actor.slug}`} className="actor-card group" aria-label={`View dramas featuring ${actor.name}`}>
    <div className="actor-portrait" style={{ background: `linear-gradient(145deg, ${actor.color}, #292638)` }}><span className="portrait-halo"/><span className="portrait-head"/><span className="portrait-shoulders"/><span className="portrait-initials">{actor.initials}</span></div>
    <h3>{actor.name}</h3><p>{actor.koreanName}</p>
  </Link>;
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Film } from "lucide-react";
import { dramas, type Genre } from "@/src/data/dramas";
import { GenreIllustration } from "./illustrations";
import styles from "./GenreTile.module.css";

const stories: Record<Genre, { korean: string; subtitle: string; description: string; pick: string }> = {
  Romance: { korean: "로맨스", subtitle: "For the butterflies", description: "First glances, missed chances, and love that finds its way home.", pick: "queen-of-tears" },
  Thriller: { korean: "스릴러", subtitle: "Just one more episode", description: "Unsettling secrets. Impossible choices. A twist you never saw coming.", pick: "the-glory" },
  Historical: { korean: "사극", subtitle: "Once upon a dynasty", description: "Step into another era, where love and loyalty rewrite history.", pick: "mr-sunshine" },
  Fantasy: { korean: "판타지", subtitle: "A little beyond belief", description: "Immortal hearts, borrowed time, and worlds full of possibility.", pick: "goblin" },
  Comedy: { korean: "코미디", subtitle: "Your everyday happiness", description: "Unexpected friendships and the kind of laughter you needed today.", pick: "extraordinary-attorney-woo" },
  Medical: { korean: "메디컬", subtitle: "Hearts that heal", description: "Find courage, friendship, and humanity between hospital hallways.", pick: "hospital-playlist" },
  School: { korean: "학원", subtitle: "Those golden days", description: "Big dreams, small rebellions, and the beautiful mess of growing up.", pick: "twenty-five-twenty-one" },
  Crime: { korean: "범죄", subtitle: "Follow the clues", description: "Every detail matters when the truth is hiding in plain sight.", pick: "the-glory" },
};

export function GenreTile({ genre }: { genre: Genre }) {
  const story = stories[genre];
  const selection = dramas.filter((drama) => drama.genres.includes(genre));
  const featured = selection.find((drama) => drama.slug === story.pick) ?? selection[0];
  return (
    <Link href={`/genres/${genre.toLowerCase()}`} className={`${styles.card} ${styles[genre.toLowerCase()]}`}>
      <div className={styles.frame} aria-hidden="true" />
      <div className={styles.cardTop}><span lang="ko">{story.korean}</span><span className={styles.count}>{String(selection.length).padStart(2, "0")} STORIES</span></div>
      <div className={styles.scene}>
        <Image src={featured.backdropUrl} alt={`${featured.title} scene`} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 280px" />
        <span className={styles.sceneShade}/>
        <span className={styles.sceneLabel}>{story.subtitle}</span>
      </div>
      <div className={styles.illustration}><GenreIllustration genre={genre}/></div>
      <div className={styles.copy}><h3>{genre === "Historical" ? "Historical · Sageuk" : genre}</h3><p>{story.description}</p></div>
      <div className={styles.pick}><Film size={13} aria-hidden="true"/><span>Start with <strong>{featured.title}</strong></span></div>
      <div className={styles.bottom}><span>Explore {genre.toLowerCase()}</span><span className={styles.arrow}><ArrowUpRight size={17} aria-hidden="true"/></span></div>
    </Link>
  );
}

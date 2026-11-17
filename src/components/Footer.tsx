import Link from "next/link";
import { Reveal } from "./Reveal";
import { FooterScene } from "./FooterScene";
import { ArrowUpRight, Heart } from "lucide-react";
import { HanokLandscape, LatticeBorder } from "./illustrations/KoreanOrnaments";

export function Footer() {
  return <footer className="site-footer illustrated-footer">
    <div className="footer-prologue container"><Reveal><span className="eyebrow">UNTIL THE NEXT EPISODE</span><h2>Good stories stay with you.</h2><p lang="ko">이야기는 계속됩니다</p></Reveal><FooterScene><HanokLandscape/></FooterScene></div>
    <Reveal><LatticeBorder/></Reveal>
    <Reveal delay={.08}><div className="container footer-inner">
      <div className="footer-about"><Link href="/" className="brand footer-brand"><span className="brand-mark">花</span><span>seoul<span className="brand-dot">.</span>stories</span></Link><p>A quiet corner for unforgettable Korean stories.<br/>Find a world to get lost in, and a little feeling to take home.</p><span className="footer-love"><Heart size={12} aria-hidden="true"/> Curated for the love of K-drama</span></div>
      <nav className="footer-column" aria-label="Explore the collection"><h3>Find your story</h3><Link href="/dramas">Explore all dramas <ArrowUpRight size={13}/></Link><Link href="/search">Search the collection <ArrowUpRight size={13}/></Link><Link href="/genres/romance">A little romance <ArrowUpRight size={13}/></Link></nav>
      <nav className="footer-column" aria-label="Browse drama moods"><h3>A different world</h3><Link href="/genres/historical">Journeys through time</Link><Link href="/genres/fantasy">Something magical</Link><Link href="/genres/thriller">One more mystery</Link></nav>
      <div className="footer-note"><span lang="ko">설렘</span><p>That little flutter<br/>before a new story begins.</p></div>
    </div></Reveal>
    <div className="container footer-bottom"><span>© 2026 Seoul Stories.</span><span>Images provided by TMDB. This product is not endorsed or certified by TMDB. Ratings are sample editorial values.</span></div>
  </footer>;
}

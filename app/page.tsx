import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { DramaCard } from "@/src/components/DramaCard";
import { GenreTile } from "@/src/components/GenreTile";
import { Hero } from "@/src/components/Hero";
import { Reveal } from "@/src/components/Reveal";
import { SectionHeader } from "@/src/components/SectionHeader";
import { BlossomBranch } from "@/src/components/illustrations";
import { LatticeBorder, HanokLandscape } from "@/src/components/illustrations/KoreanOrnaments";
import { dramas, genres } from "@/src/data/dramas";

export default function Home() {
  const featured = dramas.find((drama) => drama.slug === "when-life-gives-you-tangerines")!;
  const trending = [dramas[0], dramas[1], dramas[10], dramas[6], dramas[2], dramas[5]];
  const newest = [...dramas].sort((a, b) => b.year - a.year).slice(0, 4);
  return <>
    <Hero drama={featured}/>
    <div className="page-body">
      <div className="container story-ribbon"><span lang="ko">한 편의 설렘</span><span>A little wonder. A story to remember.</span><Sparkles size={17} aria-hidden="true"/></div>
      <section className="container section trending-section">
        <Reveal><SectionHeader eyebrow="THE STORIES EVERYONE'S TALKING ABOUT" title="Trending now" href="/dramas"/></Reveal>
        <div className="horizontal-scroll">{trending.map((drama, index) => <Reveal key={drama.slug} delay={index * .05}><DramaCard drama={drama} compact/></Reveal>)}</div>
      </section>
      <section className="genre-section mood-gallery" aria-labelledby="genre-heading">
        <div className="container section">
          <Reveal><div className="mood-heading">
            <div className="mood-heading-copy"><p className="eyebrow"><span/> FOLLOW YOUR FEELING <span/></p><h2 id="genre-heading">A world for <em>every mood.</em></h2><p className="mood-heading-label">Browse by genre</p><p className="mood-description">Some days call for butterflies. Others, a little mystery.<br/>Find the story that feels like you, right now.</p></div>
            <BlossomBranch className="mood-blossoms"/>
            <span className="mood-side-label" lang="ko" aria-hidden="true">오늘의 이야기</span>
          </div></Reveal>
          <div className="genre-carving"><LatticeBorder/><span lang="ko">이야기 모음</span><LatticeBorder/></div><div className="genre-grid">{genres.map((genre, index) => <Reveal key={genre} delay={(index % 4) * .065}><GenreTile genre={genre}/></Reveal>)}</div>
          <Reveal><div className="mood-footnote"><span className="mood-flower" aria-hidden="true">✳</span><p>Not sure where to start? <Link href="/dramas">Let a new story find you <ArrowRight size={14}/></Link></p><span className="mood-footnote-ko" lang="ko">당신의 다음 이야기</span></div></Reveal><HanokLandscape className="genre-village"/>
        </div>
      </section>
      <section className="container section new-section">
        <Reveal><SectionHeader eyebrow="FRESH STORIES TO FALL INTO" title="New releases" href="/dramas" linkText="View collection"/></Reveal>
        <div className="drama-grid">{newest.map((drama, index) => <Reveal key={drama.slug} delay={index * .06}><DramaCard drama={drama}/></Reveal>)}</div>
      </section>
      <Reveal><section className="container editorial"><div className="editorial-icon" aria-hidden="true">花</div><div><p className="eyebrow">A LITTLE NOTE FROM US</p><h2>There’s always another story waiting.</h2><p>From first loves and second chances to secrets that keep you up all night, your next favorite drama is closer than you think.</p></div><Link href="/dramas" className="button button-red">Explore all dramas <ArrowRight size={17}/></Link></section></Reveal>
    </div>
  </>;
}
